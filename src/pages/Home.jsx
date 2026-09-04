import Hero from '../components/home/Hero.jsx';
import ModelShowcase from '../components/home/ModelShowcase.jsx';
import Spotlight from '../components/home/Spotlight.jsx';
import MaybachBanner from '../components/home/MaybachBanner.jsx';
import ShoppingTools from '../components/home/ShoppingTools.jsx';
import Services from '../components/home/Services.jsx';
import PromoBanner from '../components/home/PromoBanner.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <ModelShowcase />
      <Spotlight />
      <MaybachBanner />
      <ShoppingTools />
      <Services />
      <PromoBanner />
    </>
  );
}
