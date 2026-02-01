function Contact() {
  return (
    <>
      <div className="contact-hero" style={{padding: '40px 20px', minHeight: 'auto'}}>
        <h1 style={{fontSize: '32px', marginBottom: '10px'}}>Get In Touch</h1>
        <p style={{fontSize: '16px'}}>We're here to help you and your family 24/7</p>
      </div>

      <section className="section">
        <div className="contact-container">
          <div className="contact-form-section">
            <h2>Send Us a Message</h2>
            <p>We'll get back to you within 24 hours</p>
            <form className="contact-form">
              <div className="form-row">
                <div className="input-group">
                  <label>Your Name *</label>
                  <input type="text" placeholder="Enter your name" required />
                </div>
                <div className="input-group">
                  <label>Phone Number *</label>
                  <input type="tel" placeholder="0711 355 485" required />
                </div>
              </div>
              <div className="input-group">
                <label>Email Address *</label>
                <input type="email" placeholder="your@email.com" required />
              </div>
              <div className="input-group">
                <label>Subject *</label>
                <select required>
                  <option value="">Select a subject</option>
                  <option value="appointment">Appointment Inquiry</option>
                  <option value="services">Services Information</option>
                  <option value="billing">Billing Question</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="input-group">
                <label>Message *</label>
                <textarea rows="5" placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="btn-primary">
                Send Message ✉️
              </button>
            </form>
          </div>

          <div className="contact-info-grid">
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Call Us</h3>
              <p className="contact-detail">24/7 Emergency Line</p>
              <a href="tel:+254711355485" className="contact-link">0711 355 485</a>
              <p className="contact-detail" style={{marginTop: '15px'}}>Appointments</p>
              <a href="tel:+254711355485" className="contact-link">0711 355 485</a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>Email Us</h3>
              <p className="contact-detail">General Inquiries</p>
              <a href="mailto:info@jifunzeulezi.co.ke" className="contact-link">info@jifunzeulezi.co.ke</a>
              <p className="contact-detail" style={{marginTop: '15px'}}>Appointments</p>
              <a href="mailto:appointments@jifunzeulezi.co.ke" className="contact-link">appointments@jifunzeulezi.co.ke</a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">💬</div>
              <h3>WhatsApp</h3>
              <p className="contact-detail">Quick Response</p>
              <a href="https://wa.me/254711355485" target="_blank" rel="noopener noreferrer" className="contact-link">Chat with us</a>
              <p className="contact-detail" style={{marginTop: '15px'}}>Available 24/7</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>Visit Us</h3>
              <p className="contact-detail">123 Care Street</p>
              <p className="contact-detail">Medical District</p>
              <p className="contact-detail">Nairobi, Kenya</p>
              <a href="#" className="contact-link" style={{marginTop: '10px'}}>Get Directions</a>
            </div>
          </div>

          <div className="operating-hours-section">
            <h2>Operating Hours</h2>
            <div className="hours-grid">
              <div className="hours-card">
                <div className="hours-icon">🚨</div>
                <h4>Emergency Services</h4>
                <p className="hours-time">24/7</p>
                <p className="hours-desc">Always available for urgent care</p>
              </div>
              <div className="hours-card">
                <div className="hours-icon">🏥</div>
                <h4>Outpatient Services</h4>
                <p className="hours-time">Mon - Fri: 8:00 AM - 6:00 PM</p>
                <p className="hours-time">Saturday: 9:00 AM - 2:00 PM</p>
                <p className="hours-desc">Sunday: Emergency Only</p>
              </div>
              <div className="hours-card">
                <div className="hours-icon">💉</div>
                <h4>Immunization Clinic</h4>
                <p className="hours-time">Mon - Fri: 9:00 AM - 4:00 PM</p>
                <p className="hours-time">Saturday: 9:00 AM - 1:00 PM</p>
                <p className="hours-desc">Walk-ins welcome</p>
              </div>
            </div>
          </div>

          <div className="map-section">
            <h2>Find Us on the Map</h2>
            <div className="map-placeholder">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8177449634447!2d36.8219!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMzEuNiJTIDM2wrA0OScxOC44IkU!5e0!3m2!1sen!2ske!4v1234567890"
                width="100%"
                height="400"
                style={{border: 0, borderRadius: '12px'}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="location-features">
              <span>🅿️ Free Parking Available</span>
              <span>♿ Wheelchair Accessible</span>
              <span>🚌 Public Transport Nearby</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
