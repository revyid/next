import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import BasicInfo from '@/components/BasicInfo'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="bg-gradient-to-b from-black via-gray-950 to-gray-900">
        <Header />
        <Hero />
        <About />
        <BasicInfo />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}