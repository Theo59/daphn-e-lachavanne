/**
 * /en/llms.txt — même fiche que /llms.txt, en anglais.
 * Contenu construit dans src/lib/llmsTxt.ts, depuis la source de vérité du site.
 */
import type { APIRoute } from 'astro';
import { buildLlmsTxt } from '../../lib/llmsTxt';

export const GET: APIRoute = async () =>
  new Response(await buildLlmsTxt('en'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
