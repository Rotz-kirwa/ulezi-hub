function Emergency() {
  return (
    <>
      <div className="emergency-section">
        <h2 style={{ fontSize: '42px', marginBottom: '10px' }}>🚨 24/7 Emergency Services</h2>
        <p style={{ fontSize: '20px', marginBottom: '20px' }}>
          We're here for you and your family, day and night
        </p>
        <div className="emergency-number">
          📞 0711 355 485
        </div>
        <p style={{ fontSize: '18px', opacity: '0.95' }}>
          Call immediately for maternity emergencies, pediatric urgent care, or neonatal concerns
        </p>
      </div>

      <section className="section">
        <h2 className="section-title">Contact & Location</h2>
        <div className="emergency-info">
          <div className="emergency-card" style={{ background: 'var(--white)', color: 'var(--text-dark)' }}>
            <h3 style={{ color: 'var(--primary-blue)' }}>📍 Visit Us</h3>
            <p>123 Care Street<br/>Medical District<br/>City, State 12345</p>
            <p style={{ marginTop: '15px', fontSize: '14px', color: 'var(--text-gray)' }}>
              Free parking available<br/>Wheelchair accessible
            </p>
          </div>

          <div className="emergency-card" style={{ background: 'var(--white)', color: 'var(--text-dark)' }}>
            <h3 style={{ color: 'var(--primary-blue)' }}>⏰ Operating Hours</h3>
            <p>
              <strong>Emergency:</strong> 24/7<br/>
              <strong>Outpatient:</strong> Mon-Fri 8AM-6PM<br/>
              <strong>Saturday:</strong> 9AM-2PM<br/>
              <strong>Sunday:</strong> Emergency Only
            </p>
          </div>

          <div className="emergency-card" style={{ background: 'var(--white)', color: 'var(--text-dark)' }}>
            <h3 style={{ color: 'var(--primary-blue)' }}>📞 Contact Numbers</h3>
            <p>
              <strong>Emergency:</strong> 0711 355 485<br/>
              <strong>Appointments:</strong> 0711 355 485<br/>
              <strong>General Inquiry:</strong> 0711 355 485<br/>
              <strong>Email:</strong> jifunzeulezihub@gmail.com
            </p>
          </div>

          <div className="emergency-card" style={{ background: 'var(--white)', color: 'var(--text-dark)' }}>
            <h3 style={{ color: 'var(--primary-blue)' }}>🚑 Ambulance Service</h3>
            <p>
              24/7 ambulance service available<br/>
              Neonatal transport equipped<br/>
              Maternal emergency response<br/>
              <strong>Call:</strong> 0711 355 485
            </p>
          </div>
        </div>

        <div style={{ 
          marginTop: '50px', 
          background: 'var(--light-gray)', 
          padding: '40px', 
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '24px', marginBottom: '15px', color: 'var(--primary-blue)' }}>
            🗺️ Find Us on Google Maps
          </h3>
          <p style={{ color: 'var(--text-gray)', marginBottom: '20px' }}>
            Easily accessible location with ample parking
          </p>
          <div style={{ 
            background: 'var(--white)', 
            height: '300px', 
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-gray)'
          }}>
            [Google Maps Embed - 123 Care Street, Medical District]
          </div>
        </div>
      </section>
    </>
  )
}

export default Emergency
