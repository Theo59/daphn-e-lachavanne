import { defineCliConfig } from 'sanity/cli';

// Config CLI Sanity (cors, deploy, dataset…). Le projectId est public (présent dans le bundle).
export default defineCliConfig({
  api: {
    projectId: 'q5o5we3n',
    dataset: 'production',
  },
});
