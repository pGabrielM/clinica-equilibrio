import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Services from '@/components/services'
import Team from '@/components/team'
import Blog from '@/components/blog'
import Testimonials from '@/components/testimonials'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home(): React.ReactElement {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Team />
      <Blog />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
