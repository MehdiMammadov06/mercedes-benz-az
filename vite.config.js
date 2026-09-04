import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Tailwind artıq Vite plagini kimi DEYIL, ayrıca CLI ilə işləyir.
// CSS belə kompilyasiya olunur (ABB layihələrindəki üsul):
//   npm run css   ->  src/index.css  ->  src/output.css  (--watch ilə izləyir)
// React isə hazır src/output.css faylını idxal edir (bax: src/main.jsx).
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
});
