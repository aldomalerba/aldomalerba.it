import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Services />
        <Process />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
