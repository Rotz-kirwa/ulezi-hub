function Header({ activeSection, setActiveSection }) {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-top-content">
          <span>📞 24/7 Emergency: 0711 355 485</span>
          <span>📍 123 Care Street, Medical District</span>
        </div>
      </div>
      <div className="header-main">
        <div className="logo">
          <span style={{color: '#FF1493'}}>Jifunze</span>
          <span style={{color: '#4A90E2'}}>Ulezi</span>
          <span style={{color: '#27AE60'}}> Hub</span>
        </div>
        <nav className="nav">
          <button 
            className={activeSection === 'home' ? 'active' : ''} 
            onClick={() => setActiveSection('home')}
          >
            Home
          </button>
          <button 
            className={activeSection === 'services' ? 'active' : ''} 
            onClick={() => setActiveSection('services')}
          >
            Services
          </button>
          <button 
            className={activeSection === 'appointment' ? 'active' : ''} 
            onClick={() => setActiveSection('appointment')}
          >
            Book Appointment
          </button>
          <button 
            className={activeSection === 'consultation' ? 'active' : ''} 
            onClick={() => setActiveSection('consultation')}
          >
            Book Consultation
          </button>
          <button 
            className={activeSection === 'insurance' ? 'active' : ''} 
            onClick={() => setActiveSection('insurance')}
          >
            Insurance
          </button>
          <button 
            className={activeSection === 'emergency' ? 'active' : ''} 
            onClick={() => setActiveSection('emergency')}
          >
            Emergency
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
