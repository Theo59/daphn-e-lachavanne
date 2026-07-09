/**
 * Formulaire de contact → e-mail transactionnel via Brevo (remplace Netlify Forms,
 * qui n'a pas d'équivalent hors Netlify — migration Coolify).
 * Reçoit le POST natif du <form> de ContactView.astro (application/x-www-form-urlencoded),
 * envoie le message à l'adresse du cabinet, puis redirige vers la page d'origine (?ok=1).
 *
 * Expéditeur Brevo (FROM_EMAIL) : doit être un expéditeur validé dans Brevo
 * (Brevo → Expéditeurs & IP → Expéditeurs) sous peine de rejet silencieux de l'envoi.
 */
import type { APIRoute } from 'astro';
import { isAllowedOrigin } from '../../lib/checkOrigin';

export const prerender = false;

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const TO_EMAIL = 'hello@daphnelachavanne.com';
const FROM_EMAIL = 'hello@daphnelachavanne.com';
// Seules ces deux valeurs sont acceptées comme cible de redirection (évite un open redirect
// via le champ caché "redirect", modifiable côté client).
const ALLOWED_REDIRECTS = new Set(['/contact?ok=1', '/en/contact?ok=1']);

export const POST: APIRoute = async ({ request, redirect }) => {
  if (!isAllowedOrigin(request)) {
    return new Response('Origine non autorisée.', { status: 403 });
  }

  const form = await request.formData();
  const target = ALLOWED_REDIRECTS.has(String(form.get('redirect') ?? ''))
    ? String(form.get('redirect'))
    : '/contact?ok=1';

  // Honeypot : rempli uniquement par les bots → on "réussit" silencieusement, sans envoyer.
  if (String(form.get('bot-field') ?? '').trim()) {
    return redirect(target, 303);
  }

  const prenom = String(form.get('prenom') ?? '').trim();
  const nom = String(form.get('nom') ?? '').trim();
  const email = String(form.get('email') ?? '').trim();
  const pratique = String(form.get('pratique') ?? '').trim();
  const message = String(form.get('message') ?? '').trim();

  if (!prenom || !email || !EMAIL_RE.test(email)) {
    return new Response('Requête invalide : prénom et e-mail valide requis.', { status: 422 });
  }

  // process.env (pas import.meta.env) : ce secret doit rester une variable
  // d'exécution, lue au moment de la requête — pas figée dans le build Docker.
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error('[contact] BREVO_API_KEY manquant — message non transmis :', { prenom, nom, email, pratique });
    return redirect(target, 303);
  }

  try {
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': apiKey, 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify({
        sender: { name: 'Site Daphné Lachavanne', email: FROM_EMAIL },
        to: [{ email: TO_EMAIL }],
        replyTo: { email, name: `${prenom} ${nom}`.trim() },
        subject: `Nouveau message du site — ${prenom} ${nom}`.trim(),
        textContent: [
          `Prénom : ${prenom}`,
          `Nom : ${nom || '—'}`,
          `Email : ${email}`,
          `Soin souhaité : ${pratique || '—'}`,
          '',
          message || '(pas de message)',
        ].join('\n'),
      }),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      console.error('[contact] Erreur Brevo', res.status, data);
    }
  } catch (err) {
    console.error('[contact] Échec envoi Brevo', err);
  }

  // On ne bloque jamais l'utilisateur sur un échec d'envoi d'e-mail : le message
  // reste dans les logs serveur pour diagnostic.
  return redirect(target, 303);
};
