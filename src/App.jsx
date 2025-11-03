import { React, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Routes from './routes/Routes'
import Footer from './components/Footer'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      offset: 100,
    })
  }, [])

  return (
    <>
      <Navbar />
      <Routes />
      <Footer />
    </>
  )
}
export default App
