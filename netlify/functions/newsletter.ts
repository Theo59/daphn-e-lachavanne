/**
 * Inscription newsletter → API Brevo (côté serveur : la clé API n'est jamais exposée).
 * Reçoit { prenom, nom, email }, crée/maj le contact et l'ajoute à la liste configurée.
 *
 * Variables d'env Netlify requises :
 *   BREVO_API_KEY  — clé API v3 (Brevo → SMTP & API → API Keys). SECRET.
 *   BREVO_LIST_ID  — id numérique de la liste d'abonnés (Brevo → Contacts → Listes).
 *
 * Appelée par le front sur /.netlify/functions/newsletter (POST JSON).
 */
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json' } });

export default async (req: Request): Promise<Response> => {
  if (req.method !== 'POST') return json({ error: 'method_not_allowed' }, 405);

  const apiKey = process.env.BREVO_API_KEY;
  const listId = process.env.BREVO_LIST_ID;
  if (!apiKey || !listId) {
    console.error('[newsletter] Brevo non configuré (BREVO_API_KEY / BREVO_LIST_ID manquants).');
    return json({ error: 'not_configured' }, 500);
  }

  let body: any;
  try {
    body = await req.json();
  } catch {
    return json({ error: 'bad_request' }, 400);
  }

  const email = String(body?.email ?? '').trim().toLowerCase();
  const prenom = String(body?.prenom ?? '').trim();
  const nom = String(body?.nom ?? '').trim();
  if (!email || !EMAIL_RE.test(email)) return json({ error: 'invalid_email' }, 422);

  try {
    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: { 'api-key': apiKey, 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify({
        email,
        attributes: { PRENOM: prenom, NOM: nom },
        listIds: [Number(listId)],
        updateEnabled: true, // met à jour si le contact existe déjà (pas d'erreur "duplicate")
      }),
    });

    if (res.ok || res.status === 204) return json({ ok: true });

    const data = await res.json().catch(() => ({}));
    // Sécurité : un contact déjà présent est traité comme un succès.
    if (data?.code === 'duplicate_parameter') return json({ ok: true, already: true });

    console.error('[newsletter] Erreur Brevo', res.status, data);
    return json({ error: 'brevo_error' }, 502);
  } catch (err) {
    console.error('[newsletter] Échec appel Brevo', err);
    return json({ error: 'upstream_error' }, 502);
  }
};
