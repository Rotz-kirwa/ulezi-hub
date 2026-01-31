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
          <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('appointment'); }}>Book Appointment</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('consultation'); }}>Book Consultation</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('insurance'); }}>Insurance</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('emergency'); }}>Emergency Contact</a>
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
          <a href="#">Pregnancy Guide</a>
          <a href="#">Child Health Tips</a>
          <a href="#">Immunization Schedule</a>
          <a href="#">Insurance & Billing</a>
          <a href="#">Patient Rights</a>
          <a href="#">FAQs</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Jifunze Ulezi Hub. All rights reserved. | Privacy Policy | Terms of Service</p>
        <p style={{ marginTop: '10px', fontSize: '13px' }}>
          Specialized Women & Children Healthcare | 24/7 Emergency Services
        </p>
      </div>
    </footer>
  )
}

export default Footer
