import { defineCliConfig } from 'sanity/cli';

// Config CLI Sanity (cors, deploy, dataset…). Le projectId est public (présent dans le bundle).
export default defineCliConfig({
  api: {
    projectId: 'q5o5we3n',
    dataset: 'production',
  },
  // Génère les types TS depuis le schéma + les requêtes GROQ (defineQuery).
  // Lancer : npm run typegen → schema.json + sanity.types.ts.
  typegen: {
    enabled: true,
  },
});
