import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';
import react from '@vitejs/plugin-react';

const NODE_ENV = import.meta.env.VITE_NODE_ENV;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProdMode = mode === 'production';
  const isLocal = NODE_ENV === 'local';

  const userConfig = { plugins: [react()] };

  if (isProdMode && isLocal) {
    userConfig.server = {
      https: {
        key: fs.readFileSync(
          path.resolve(__dirname, 'certs/localhost-key.pem')
        ),
        cert: fs.readFileSync(
          path.resolve(__dirname, 'certs/localhost-cert.pem')
        ),
      },
      port: 4173,
      host: 'localhost',
    };
  }

  return userConfig;
});
