import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Careers from './components/Careers'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Careers />
        <FAQ />
        <Contact />
      </main>
    </>
  )
}

export default App