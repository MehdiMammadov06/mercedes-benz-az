import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Tailwind v4 artıq Vite plagini kimi işləyir — postcss.config.js lazım deyil
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    open: true,
  },
});
