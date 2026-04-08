import React from 'react'
import Hero from '../hero/Hero.jsx'
import About from '../about/About.jsx'
import Service from '../service/Service'
import Project from '../project/Project.jsx'
import Veiw from '../veiw-pro/Veiw.jsx'
import Exe from '../experience/Exe.jsx'
import Footer from '../footer/Footer.jsx'
const Home = () => {
  return (
    <>
       
      <Hero />
      <About />
      <Service />
      <Veiw />
      <Exe />
      <Project />
      <Footer />
    </>
  )
}
export default Home