import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Dither from './Dither.jsx'
import ProfileCard from './components/ProfileCard'
import Profile from './assets/Profile.jpg'
import Smooth from './Smooth.jsx'
import logo from "./assets/logo.png"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="relative">

      {/* Dither background fixed for viewport */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>

      {/* Home Section */}
      <section id="Home" className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-16">

          <ProfileCard
            name="Dan Jaspher Delvo"
            title="Web Developer"
            handle="Dan-Delvo"
            status="Online"
            contactText="Contact Me"
            avatarUrl={Profile}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log('Contact clicked')}
            iconUrl={logo}
            grainUrl={logo}
          />

          <div className="text-center lg:text-left relative z-10">
            <div className="bg-black/50 p-6 rounded-md">
              <h1 className="text-5xl font-bold mb-4 text-white flex items-center gap-4">
                Dan Jaspher Delvo
                <img src={logo} alt="Logo" className="w-20 h-20" />
              </h1>
              <p className="py-6 text-lg max-w-md mx-auto lg:mx-0 text-white">
                Web Developer passionate about creating clean and efficient
                solutions. Always learning, always building.
              </p>
              <button className="btn btn-primary">Contact Me</button>
            </div>
          </div>


        </div>
      </section>

      {/* Other sections */}
      <section id="SmoothSection" className="relative z-10">
        <Smooth />
      </section>

      {/* Add more sections below as needed */}

    </div>
  </StrictMode>
)
