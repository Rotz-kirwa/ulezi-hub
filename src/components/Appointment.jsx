import { useState } from 'react'

function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceCategory: '',
    date: '',
    time: '',
    notes: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const serviceCategories = [
    "Women's Care",
    'Pregnancy & Maternity',
    'Reproductive Health',
    'Baby & Child Care',
    'Preventive & Wellness',
    'Emergency & Support Services'
  ]

  const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM']

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const dateFormatted = new Date(formData.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
    
    const message = `*New Appointment Booking*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Service:* ${formData.serviceCategory}%0A*Date:* ${dateFormatted}%0A*Time:* ${formData.time}${formData.notes ? `%0A*Notes:* ${formData.notes}` : ''}`
    
    window.open(`https://wa.me/254737633532?text=${message}`, '_blank')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="booking-success">
        <div className="success-wrapper">
          <div className="success-animation">
            <div className="checkmark">✓</div>
          </div>
          <h2>Appointment Request Sent! 🎉</h2>
          <p className="success-subtitle">We'll confirm your appointment via WhatsApp shortly</p>
          
          <div className="appointment-card">
            <div className="detail-row">
              <span className="label">Name:</span>
              <span className="value">{formData.name}</span>
            </div>
            <div className="detail-row">
              <span className="label">Service:</span>
              <span className="value">{formData.serviceCategory}</span>
            </div>
            <div className="detail-row">
              <span className="label">Date & Time:</span>
              <span className="value">{new Date(formData.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at {formData.time}</span>
            </div>
          </div>

          <button className="btn-primary" onClick={() => { setSubmitted(false); setFormData({name: '', phone: '', email: '', serviceCategory: '', date: '', time: '', notes: ''}) }}>
            Book Another Appointment
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="booking-page">
      <div className="booking-hero">
        <h1>Book Your Appointment</h1>
        <p>Compassionate care for mothers, babies, and children 💗</p>
      </div>

      <div className="emergency-banner">
        <span>🚨 Need urgent care?</span>
        <a href="tel:+254737633532" className="emergency-call">Call Now: 0737 633 532</a>
      </div>

      <div className="booking-container">
        <div className="booking-form-wrapper">
          <h2>Appointment Details</h2>
          <form onSubmit={handleSubmit} className="classic-form">
            <div className="form-row">
              <div className="input-group">
                <label>Full Name *</label>
                <input 
                  type="text" 
                  placeholder="Enter your full name"
                  value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>

              <div className="input-group">
                <label>Phone Number *</label>
                <input 
                  type="tel" 
                  placeholder="0711 355 485"
                  value={formData.phone} 
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <label>Email Address *</label>
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  value={formData.email} 
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>

              <div className="input-group">
                <label>Service Category *</label>
                <select 
                  value={formData.serviceCategory} 
                  onChange={(e) => setFormData({...formData, serviceCategory: e.target.value})}
                  required
                >
                  <option value="">Select a service</option>
                  {serviceCategories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <label>Preferred Date *</label>
                <input 
                  type="date" 
                  value={formData.date} 
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>

              <div className="input-group">
                <label>Preferred Time *</label>
                <select 
                  value={formData.time} 
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  required
                >
                  <option value="">Select time</option>
                  {timeSlots.map((time, index) => (
                    <option key={index} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="input-group">
              <label>Additional Notes (Optional)</label>
              <textarea 
                placeholder="Any specific concerns or questions..."
                value={formData.notes} 
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                rows="4"
              />
            </div>

            <button type="submit" className="btn-primary btn-large" style={{background: 'linear-gradient(135deg, #FF1493, #FF69B4)', border: 'none'}}>
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Appointment
