import { useState } from 'react'

function Header({ activeSection, setActiveSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (section) => {
    setActiveSection(section)
    setMobileMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-top">
        <div className="header-top-content">
          <span>📞 24/7 Emergency: 0711 355 485</span>
        </div>
      </div>
      <div className="header-main">
        <div className="logo">
          <span style={{color: '#FF1493'}}>Jifunze</span>
          <span style={{color: '#4A90E2'}}>Ulezi</span>
          <span style={{color: '#27AE60'}}> Hub</span>
        </div>
        
        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <button 
            className={activeSection === 'home' ? 'active' : ''} 
            onClick={() => handleNavClick('home')}
          >
            Home
          </button>
          <button 
            className={activeSection === 'services' ? 'active' : ''} 
            onClick={() => handleNavClick('services')}
          >
            Services
          </button>
          <button 
            className={activeSection === 'about' ? 'active' : ''} 
            onClick={() => handleNavClick('about')}
          >
            About
          </button>
          <button 
            className={activeSection === 'appointment' ? 'active' : ''} 
            onClick={() => handleNavClick('appointment')}
          >
            Book Appointment
          </button>
          <button 
            className={activeSection === 'consultation' ? 'active' : ''} 
            onClick={() => handleNavClick('consultation')}
          >
            Book Consultation
          </button>
          <button 
            className={activeSection === 'insurance' ? 'active' : ''} 
            onClick={() => handleNavClick('insurance')}
          >
            Insurance
          </button>
          <button 
            className={activeSection === 'blog' ? 'active' : ''} 
            onClick={() => handleNavClick('blog')}
          >
            Blog
          </button>
          <button 
            className={activeSection === 'contact' ? 'active' : ''} 
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
