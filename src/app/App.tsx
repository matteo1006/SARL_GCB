import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Trust } from './components/Trust';
import { Zone } from './components/Zone';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Trust />
      <Zone />
      <Contact />
      <Footer />
    </div>
  );
}
