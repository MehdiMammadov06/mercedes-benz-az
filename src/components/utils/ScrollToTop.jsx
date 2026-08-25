import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Səhifə dəyişdikdə pəncərəni yuxarı qaldırır
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
