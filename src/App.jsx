
import './App.css'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'
import Hero from './components/Hero'
import Problemcontainer from './home/Problemcontainer'
import Review from './home/Review'
import PPartners from './components/comon/PPartners'
import Faq from './components/Faq'


function App() {
  return (
    <>
      <main className='font-primary bg-[url(hero-bg.svg)] min-h-svh bg-no-repeat bg-top w-full'>
        <Navbar />
        <Hero />
        <Problemcontainer />
        <Review />
        <PPartners />
        <Faq />
        <Footer />


      </main>


    </>
  )
}

export default App
