import Banner from './components/Banner/banner';
import Aboutus from './components/Aboutus/aboutus';
import Dedicated from './components/Dedicated/dedicated';
import SmokeyCars from './components/SmokeyCars/smokey';
import Brands from './components/Brands/brands';
import Gallery from './components/Gallery/gallery';
import Tuning from './components/Tuning/tuning';
import Engines from './components/Engines/engines';
import FAQ from './components/FAQ/faq';
import Joinus from './components/Joinus/joinus';
import Cars from './components/Cars/cars';


export default function Home() {
  return (
    <main>
      <Banner />
      <Aboutus />
      <Dedicated />
      <SmokeyCars />
      <Brands />
      <Gallery />
      <Tuning />
      <Engines />
      <FAQ />
      <Joinus />
      <Cars />
    </main>
  )
}
