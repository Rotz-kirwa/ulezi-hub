function Footer({ setActiveSection }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3>Jifunze Ulezi Hub</h3>
          <p style={{ lineHeight: '1.8', opacity: '0.9' }}>
            Specialized healthcare for women and children. 
            Compassionate, professional, and trusted by families since 2005.
          </p>
          <p style={{ marginTop: '15px', fontSize: '14px' }}>
            🏆 Accredited by Joint Commission<br/>
            ⭐ Top-rated Women & Children Hospital
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('home'); }}>Home</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('services'); }}>Our Services</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('about'); }}>About Us</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('appointment'); }}>Book Appointment</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('consultation'); }}>Book Consultation</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('insurance'); }}>Insurance</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('contact'); }}>Contact Us</a>
        </div>

        <div>
          <h3>Services</h3>
          <a href="#">Maternity Care</a>
          <a href="#">Gynecology</a>
          <a href="#">Pediatrics</a>
          <a href="#">Neonatal ICU</a>
          <a href="#">Immunization</a>
          <a href="#">Family Planning</a>
        </div>

        <div>
          <h3>Patient Resources</h3>
          <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('resources'); }}>Pregnancy Guide</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('resources'); }}>Child Health Tips</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('resources'); }}>Immunization Schedule</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('resources'); }}>Insurance & Billing</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('resources'); }}>Patient Rights</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('resources'); }}>FAQs</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>🌱 Tujifunze Ulezi: Nurture HUB</p>
        <p style={{ marginTop: '10px', fontSize: '13px' }}>
          © 2026 All rights reserved. Supporting mothers with love and care.
        </p>
      </div>
    </footer>
  )
}

export default Footer
