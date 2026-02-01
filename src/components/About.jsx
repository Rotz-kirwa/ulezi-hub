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
            <h2 className="section-title">Our Story & Impact</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', color: 'var(--text-gray)', marginBottom: '20px'}}>
              Jifunze Ulezi Hub was born from a deep commitment to transform maternal and child healthcare in Kenya. 
              We recognized that many women and children lacked access to quality, compassionate healthcare that respects 
              their dignity and addresses their unique needs.
            </p>
            <p style={{fontSize: '18px', lineHeight: '1.8', color: 'var(--text-gray)', marginBottom: '20px'}}>
              Since our establishment, we have delivered over 5,000 babies safely, vaccinated more than 15,000 children, 
              and served 10,000+ women with comprehensive healthcare services. Every mother who walks through our doors 
              receives not just medical care, but emotional support, education, and empowerment.
            </p>
            <p style={{fontSize: '18px', lineHeight: '1.8', color: 'var(--text-gray)', marginBottom: '20px'}}>
              Our impact extends beyond hospital walls. We provide community health education, support HIV-positive mothers 
              through pregnancy and lactation, offer mental health services for maternal depression and anxiety, and ensure 
              that no woman is turned away due to financial constraints through our SHA accreditation and flexible payment options.
            </p>
            <p style={{fontSize: '18px', lineHeight: '1.8', color: 'var(--text-gray)'}}>
              We exist because we believe every mother deserves expert care, every child deserves a healthy start, and every 
              family deserves support during life's most precious moments. Our 24/7 emergency services, home visit programs, 
              and personalized care plans ensure that we're not just treating patients—we're nurturing families and building 
              healthier communities across Kenya.
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
        </div>
      </div>
    </section>
  )
}

export default About
