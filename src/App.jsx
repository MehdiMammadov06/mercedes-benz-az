import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import ScrollToTop from './components/utils/ScrollToTop.jsx';
import { navLinks } from './data/navigation.js';
import Home from './pages/Home.jsx';
import ModelDetail from './pages/ModelDetail.jsx';
import Placeholder from './pages/Placeholder.jsx';
import Stock from './pages/Stock.jsx';
import StockDetail from './pages/StockDetail.jsx';
import Offers from './pages/Offers.jsx';

export default function App() {
  return (
    <Layout>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Alış → Mövcud avtomobillər (stock) — real səhifə */}
        <Route path="/alis" element={<Stock />} />
        {/* Tək avtomobilin detal səhifəsi */}
        <Route path="/alis/:id" element={<StockDetail />} />
        {/* Alış → Xüsusi təkliflər */}
        <Route path="/teklifler" element={<Offers />} />

        {/* Digər menyu səhifələri — hazırlandıqca real komponentlərlə əvəz olunacaq */}
        {navLinks
          .filter((link) => link.path !== '/alis')
          .map((link) => (
            <Route key={link.key} path={link.path} element={<Placeholder titleKey={link.key} />} />
          ))}

        {/* Model detalı — universal şablon (A-Class tam, digərləri data əlavə edildikcə) */}
        <Route path="/modeller/:id" element={<ModelDetail />} />

        <Route path="/elaqe" element={<Placeholder />} />
        <Route path="*" element={<Placeholder />} />
      </Routes>
    </Layout>
  );
}
