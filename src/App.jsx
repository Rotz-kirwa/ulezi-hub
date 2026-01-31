import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Appointment from './components/Appointment'
import Consultation from './components/Consultation'
import Testimonials from './components/Testimonials'
import Emergency from './components/Emergency'
import Insurance from './components/Insurance'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="app">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {activeSection === 'home' && (
          <>
            <Hero setActiveSection={setActiveSection} />
            <Services setActiveSection={setActiveSection} />
            <WhyChooseUs />
            <Testimonials />
          </>
        )}
        {activeSection === 'services' && <Services detailed setActiveSection={setActiveSection} />}
        {activeSection === 'appointment' && <Appointment />}
        {activeSection === 'consultation' && <Consultation />}
        {activeSection === 'insurance' && <Insurance />}
        {activeSection === 'emergency' && <Emergency />}
      </main>
      <Footer setActiveSection={setActiveSection} />
      <div className="mobile-actions">
        <a href="tel:+254711355485" className="mobile-btn emergency-btn">📞 Emergency</a>
        <button onClick={() => setActiveSection('appointment')} className="mobile-btn appointment-btn">
          📅 Book Now
        </button>
      </div>
    </div>
  )
}

export default App
