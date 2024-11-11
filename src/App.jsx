/**
 * @copyright 2024 yashparmar
 * @license Apache-2.0
 */
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Work from './components/Work';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
    </>
  )
}

export default App;