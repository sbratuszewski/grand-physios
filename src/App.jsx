import { React, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Routes from './routes/Routes'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
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
