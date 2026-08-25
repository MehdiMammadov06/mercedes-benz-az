import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ContactWidget from '../ui/ContactWidget.jsx';

// Bütün səhifələr üçün ümumi çərçivə: Header + məzmun + Footer + üzən widget
export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ContactWidget />
    </div>
  );
}
