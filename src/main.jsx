import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';

// DIQQƏT: burada MƏNBƏ (index.css) yox, KOMPILYASIYA olunmuş fayl idxal olunur.
// index.css -> (Tailwind CLI, `npm run css`) -> output.css
import './output.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
