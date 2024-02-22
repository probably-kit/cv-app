import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from '@svgr/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin()],
});