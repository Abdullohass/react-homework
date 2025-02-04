import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './assets/img/logo (2).png'
import logo1 from './assets/img/logo (3).png'

function App() {


  return (
    <>
      <header>
        <div className="container">
          <img src={logo} alt="dsf" />
          <nav>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">Features</a></li>
              <li><a href="">Community</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">Pricing</a></li>
              <button className='btn'>Register Now</button>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className='hero'>
          <div className="container">
            <div className="ota">
              <div className="bola1">
                <h1>Lessons and insights <br /> <span>from 8 years</span></h1>
                <p>Where to grow your business as a photographer: site or social media?</p>
                <button className='btn'>Register</button>
              </div>
              <div className="bola2">
                <img src="https://faheemonhub.github.io/Nexcent-Figma/assets/Illustration.svg" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className='hero2'>
          <div className="container">
            <h2>Our Clients</h2>
            <p>We have been working with some Fortune 500+ clients</p>
            <div className="ota2">
              <img src={logo1} alt="dsf" />
              <img src={logo1} alt="dsf" />
              <img src={logo1} alt="dsf" />
              <img src={logo1} alt="dsf" />
              <img src={logo1} alt="dsf" />
              <img src={logo1} alt="dsf" />
              <img src={logo1} alt="dsf" />
            </div>
          </div>
        </section>
        <section className='hero3'>
          <div className="container">
            <h2>Manage your entire community <br /> in a single system</h2>
            <div className="ota3">
              <div className="bolaa1">
                <img src="https://www.cdc.gov/niosh/media/images/2024/08/ImpactWellbeing_Icons_RGB_ProtectStaff.png" alt="" />
                <h3>Membership <br /> Organisations</h3>
                <p>Our membership management <br /> software provides full automation of <br /> membership renewals and payments</p>
              </div>
              <div className="bolaa1">
                <img src="https://www.cdc.gov/niosh/media/images/2024/08/ImpactWellbeing_Icons_RGB_ProtectStaff.png" alt="" />
                <h3>Membership <br /> Organisations</h3>
                <p>Our membership management <br /> software provides full automation of <br /> membership renewals and payments</p>
              </div>
              <div className="bolaa1">
                <img src="https://www.cdc.gov/niosh/media/images/2024/08/ImpactWellbeing_Icons_RGB_ProtectStaff.png" alt="" />
                <h3>Membership <br /> Organisations</h3>
                <p>Our membership management <br /> software provides full automation of <br /> membership renewals and payments</p>
              </div>
            </div>
          </div>
        </section>
        <section className='hero'>
          <div className="container">
            <div className="ota">
              <div className="bola2">
                <img src="https://faheemonhub.github.io/Nexcent-Figma/assets/Illustration.svg" alt="" />
              </div>
              <div className="bola1">
                <h1>The unseen of spending three <br /> years at Pixelgrade</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed <br /> sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed <br /> porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam <br /> quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <button className='btn'>Register</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
