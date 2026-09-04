import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import ScrollToTop from './components/utils/ScrollToTop.jsx';
import { navLinks } from './data/navigation.js';
import Home from './pages/Home.jsx';
import Placeholder from './pages/Placeholder.jsx';

export default function App() {
  return (
    <Layout>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Menyudaki səhifələr — hazırlandıqca real komponentlərlə əvəz olunacaq */}
        {navLinks.map((link) => (
          <Route key={link.key} path={link.path} element={<Placeholder titleKey={link.key} />} />
        ))}

        {/* Model detalı — növbəti mərhələdə real komponentlə əvəz olunacaq */}
        <Route path="/modeller/:id" element={<Placeholder titleKey="models" />} />

        <Route path="/elaqe" element={<Placeholder />} />
        <Route path="*" element={<Placeholder />} />
      </Routes>
    </Layout>
  );
}
