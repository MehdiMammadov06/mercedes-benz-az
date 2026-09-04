import Hero from '../components/home/Hero.jsx';
import ModelShowcase from '../components/home/ModelShowcase.jsx';
import Services from '../components/home/Services.jsx';
import PromoBanner from '../components/home/PromoBanner.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <ModelShowcase />
      <Services />
      <PromoBanner />
    </>
  );
}
