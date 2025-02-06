import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/tic-tac-tow/",  // Set the base path to your repo name
});
