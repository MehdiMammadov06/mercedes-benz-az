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
import Showroom from './pages/Showroom.jsx';
import TestDrive from './pages/TestDrive.jsx';
import BookService from './pages/BookService.jsx';
import Accessories from './pages/Accessories.jsx';
import Collection from './pages/Collection.jsx';
import ServicePackages from './pages/ServicePackages.jsx';
import GenuineParts from './pages/GenuineParts.jsx';
import AmgBrand from './pages/AmgBrand.jsx';

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
        {/* Alış → Showroom siyahısı (Dealer Locator) */}
        <Route path="/showroom" element={<Showroom />} />
        {/* Alış → Test drive */}
        <Route path="/test-drive" element={<TestDrive />} />
        {/* Xidmətlər → Servisə yazılmaq (Book A Service formu) */}
        <Route path="/xidmetler/servise-yazilmaq" element={<BookService />} />
        {/* Xidmətlər → Aksesuarlar */}
        <Route path="/xidmetler/aksesuarlar" element={<Accessories />} />
        {/* Xidmətlər → Həyat Tərzi Kolleksiyası */}
        <Route path="/xidmetler/kolleksiya" element={<Collection />} />
        {/* Xidmətlər → Servis paketləri */}
        <Route path="/xidmetler/servis-paketleri" element={<ServicePackages />} />
        {/* Xidmətlər → Orijinal Hissələr */}
        <Route path="/xidmetler/orijinal-hisseler" element={<GenuineParts />} />
        {/* Bizim brendlərimiz → Mercedes-AMG */}
        <Route path="/brendler/mercedes-amg" element={<AmgBrand />} />

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
