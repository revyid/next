import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import BasicInfo from '@/components/BasicInfo'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
      <div className="bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-950 dark:to-gray-900 transition-colors duration-500">
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