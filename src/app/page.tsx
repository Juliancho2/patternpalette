import PatternBody from '@/components/atomic/PatternBody';
import About from '@/components/organisms/About';
import Feedback from '@/components/organisms/Feedback';
import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';
import Hero from '@/components/organisms/Hero';
import Patterns from '@/components/organisms/Patterns';
import { PatternProvider } from '@/context/patternsContext';

export default function Home () {
  return (
    <>
      <PatternProvider>
        <Header />
        <main className='relative'>
          <PatternBody/>
          <Hero />
          <Patterns />
          <About />
          <Feedback/>
        </main>
        <Footer />
      </PatternProvider>
    </>
  );
}
