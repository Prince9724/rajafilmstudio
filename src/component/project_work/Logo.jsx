import React from 'react'
import "../project_work/Logo.css"
import logo1 from './image/logo1.png'
import logo2 from './image/logo2.png'
import logo3 from './image/logo3.png'
import logo4 from './image/logo4.png'
// import logo5 from './image/logo5.jpeg'
import logo6 from './image/logo6.png'
const Logo = () => {
  return (
    <div className='logo-page container mt-5'>
      <h1 className='logo-title text-center mb-5'>My Logo Designs</h1>

      <div className='logo-gallery'>

        <div className='logo-card'>
          <img src={logo1} alt="logo1" />
          <div className='overlay'>Logo Design</div>
        </div>

        <div className='logo-card'>
          <img src={logo2} alt="logo2" />
          <div className='overlay'>Logo Design</div>
        </div>

        <div className='logo-card'>
          <img src={logo3} alt="logo3" />
          <div className='overlay'>Logo Design</div>
        </div>

        <div className='logo-card'>
          <img src={logo4} alt="logo4" />
          <div className='overlay'>Logo Design</div>
        </div>

        <div className='logo-card'>
          <img src={logo6} alt="logo6" />
          <div className='overlay'>Logo Design</div>
        </div>

      </div>
    </div>
  )
}

export default Logo