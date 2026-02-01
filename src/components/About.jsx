function About() {
  return (
    <section className="about-page">
      <div className="about-hero">
        <h1>Kuhusu Sisi | About Jifunze Ulezi Hub</h1>
        <p>Your trusted partner in women and children healthcare</p>
      </div>

      <div className="section">
        <div className="about-content">
          <div className="about-story">
            <h2 className="section-title">Our Story</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', color: 'var(--text-gray)', marginBottom: '20px'}}>
              Jifunze Ulezi Hub was founded with a singular mission: to provide exceptional, compassionate healthcare 
              for women and children. We understand that the health of mothers and children is the foundation of strong 
              families and communities.
            </p>
            <p style={{fontSize: '18px', lineHeight: '1.8', color: 'var(--text-gray)'}}>
              Our state-of-the-art facility combines modern medical technology with a warm, welcoming environment 
              designed specifically for the comfort of mothers, babies, and children.
            </p>
          </div>

          <div className="mission-vision">
            <div className="mv-card">
              <div style={{fontSize: '48px', marginBottom: '15px'}}>🎯</div>
              <h3>Our Mission</h3>
              <p>To deliver world-class healthcare services for women and children through compassionate care, 
              advanced medical expertise, and a patient-centered approach.</p>
            </div>
            <div className="mv-card">
              <div style={{fontSize: '48px', marginBottom: '15px'}}>👁️</div>
              <h3>Our Vision</h3>
              <p>To be the leading healthcare provider for women and children in Kenya, recognized for excellence 
              in maternal and pediatric care.</p>
            </div>
          </div>

          <div className="values-section">
            <h2 className="section-title">Our Core Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">💗</div>
                <h4>Compassion</h4>
                <p>We treat every patient with empathy, kindness, and respect</p>
              </div>
              <div className="value-item">
                <div className="value-icon">⭐</div>
                <h4>Excellence</h4>
                <p>We maintain the highest standards in medical care and service</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <h4>Integrity</h4>
                <p>We uphold honesty and ethical practices in all we do</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🌟</div>
                <h4>Innovation</h4>
                <p>We embrace modern technology and best practices</p>
              </div>
            </div>
          </div>

          <div className="stats-section">
            <h2 className="section-title">Our Impact</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">5000+</div>
                <div className="stat-label">Babies Delivered</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">15000+</div>
                <div className="stat-label">Children Vaccinated</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">10000+</div>
                <div className="stat-label">Women Served</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Emergency Care</div>
              </div>
            </div>
          </div>

          <div className="facilities-section">
            <h2 className="section-title">Our Facilities</h2>
            <div className="facilities-grid">
              <div className="facility-item">
                <span className="facility-icon">🏥</span>
                <h4>Modern Maternity Ward</h4>
                <p>Comfortable private rooms with 24/7 nursing care</p>
              </div>
              <div className="facility-item">
                <span className="facility-icon">👶</span>
                <h4>Neonatal ICU</h4>
                <p>Advanced care for premature and critically ill newborns</p>
              </div>
              <div className="facility-item">
                <span className="facility-icon">🔬</span>
                <h4>Diagnostic Lab</h4>
                <p>In-house laboratory with rapid test results</p>
              </div>
              <div className="facility-item">
                <span className="facility-icon">📱</span>
                <h4>Ultrasound Suite</h4>
                <p>3D/4D imaging and advanced fetal monitoring</p>
              </div>
              <div className="facility-item">
                <span className="facility-icon">💉</span>
                <h4>Immunization Center</h4>
                <p>WHO-standard vaccine storage and administration</p>
              </div>
              <div className="facility-item">
                <span className="facility-icon">🚑</span>
                <h4>Emergency Services</h4>
                <p>24/7 emergency care and ambulance services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
