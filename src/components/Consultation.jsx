import { useState } from 'react'

function Consultation() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceCategory: '',
    date: '',
    time: '',
    paymentMethod: '',
    mpesaPhone: '',
    notes: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const serviceCategories = [
    { name: "Women's Care", fee: 'KSh 2,000' },
    { name: 'Pregnancy & Maternity', fee: 'KSh 3,000' },
    { name: 'Reproductive Health', fee: 'KSh 2,500' },
    { name: 'Baby & Child Care', fee: 'KSh 1,500' },
    { name: 'Preventive & Wellness', fee: 'KSh 1,800' },
    { name: 'Immunization Services', fee: 'KSh 500' }
  ]

  const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM']

  const handleSubmit = (e) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
    } else {
      // For M-Pesa: Trigger STK Push
      if (formData.paymentMethod === 'mpesa') {
        // Here you would integrate with M-Pesa API for STK Push
        // For now, we'll simulate the process
        alert(`M-Pesa STK Push sent to ${formData.mpesaPhone}. Please enter your PIN to complete payment.`)
      }
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <section className="booking-success">
        <div className="success-wrapper">
          <div className="success-animation">
            <div className="checkmark">✓</div>
          </div>
          <h2>Consultation Booked Successfully! 🎉</h2>
          <p className="success-subtitle">
            {formData.paymentMethod === 'mpesa' 
              ? 'Payment successful! M-Pesa confirmation sent to your phone' 
              : 'Booking confirmed! Please pay on arrival'}
          </p>
          
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
            <div className="detail-row">
              <span className="label">Payment:</span>
              <span className="value">{formData.paymentMethod === 'mpesa' ? 'M-Pesa' : 'Cash on Arrival'}</span>
            </div>
          </div>

          <button className="btn-primary" onClick={() => { setSubmitted(false); setStep(1); setFormData({name: '', phone: '', email: '', serviceCategory: '', date: '', time: '', paymentMethod: '', mpesaPhone: '', notes: ''}) }}>
            Book Another Consultation
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="booking-page">
      <div className="booking-hero">
        <h1>Weka Ushauri | Book Consultation</h1>
        <p>Professional healthcare consultation with payment options 💳</p>
      </div>

      <div className="emergency-banner">
        <span>🚨 Need urgent care?</span>
        <a href="tel:+254737633532" className="emergency-call">Call Now: 0737 633 532</a>
      </div>

      <div className="booking-container">
        <div className="step-indicator" style={{marginBottom: '40px'}}>
          <div className={`indicator-dot ${step >= 1 ? 'active' : ''}`}>1</div>
          <div className="indicator-line"></div>
          <div className={`indicator-dot ${step >= 2 ? 'active' : ''}`}>2</div>
        </div>

        <div className="booking-form-wrapper">
          <h2>{step === 1 ? 'Consultation Details' : 'Payment Method'}</h2>
          
          <form onSubmit={handleSubmit} className="classic-form">
            {step === 1 && (
              <>
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
                        <option key={index} value={category.name}>{category.name} - {category.fee}</option>
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
                    rows="3"
                  />
                </div>

                <button type="submit" className="btn-primary btn-large" style={{background: 'linear-gradient(135deg, #4A90E2, #357ABD)', border: 'none'}}>
                  Continue to Payment
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <div className="payment-summary" style={{background: '#F0F8FF', padding: '20px', borderRadius: '12px', marginBottom: '30px'}}>
                  <h3 style={{marginBottom: '15px', color: '#2C3E50'}}>Consultation Summary</h3>
                  <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                    <span>Service:</span>
                    <strong>{formData.serviceCategory}</strong>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                    <span>Date:</span>
                    <strong>{new Date(formData.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} at {formData.time}</strong>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', paddingTop: '15px', borderTop: '2px solid #ddd', fontSize: '18px'}}>
                    <span>Consultation Fee:</span>
                    <strong style={{color: '#27AE60'}}>{serviceCategories.find(s => s.name === formData.serviceCategory)?.fee}</strong>
                  </div>
                </div>

                <div className="input-group">
                  <label>Select Payment Method *</label>
                  <div className="payment-options">
                    <div 
                      className={`payment-card ${formData.paymentMethod === 'mpesa' ? 'selected' : ''}`}
                      onClick={() => setFormData({...formData, paymentMethod: 'mpesa'})}
                    >
                      <div className="payment-icon" style={{fontSize: '40px'}}>📱</div>
                      <h4>M-Pesa</h4>
                      <p>Pay via M-Pesa mobile money</p>
                    </div>
                    <div 
                      className={`payment-card ${formData.paymentMethod === 'cash' ? 'selected' : ''}`}
                      onClick={() => setFormData({...formData, paymentMethod: 'cash'})}
                    >
                      <div className="payment-icon" style={{fontSize: '40px'}}>💵</div>
                      <h4>Cash on Arrival</h4>
                      <p>Pay when you arrive at the facility</p>
                    </div>
                  </div>
                </div>

                {formData.paymentMethod === 'mpesa' && (
                  <>
                    <div className="input-group">
                      <label>M-Pesa Phone Number *</label>
                      <input 
                        type="tel" 
                        placeholder="0711 355 485"
                        value={formData.mpesaPhone} 
                        onChange={(e) => setFormData({...formData, mpesaPhone: e.target.value})}
                        required
                      />
                      <small style={{color: '#5A6C7D', fontSize: '13px', marginTop: '5px'}}>
                        You'll receive an M-Pesa prompt on this number
                      </small>
                    </div>
                    <div style={{background: '#E8F4F8', padding: '20px', borderRadius: '12px', marginTop: '20px'}}>
                      <h4 style={{color: '#2C3E50', marginBottom: '15px', fontSize: '16px'}}>📱 M-Pesa Payment Instructions:</h4>
                      <ol style={{color: '#5A6C7D', fontSize: '14px', lineHeight: '1.8', paddingLeft: '20px'}}>
                        <li>Click "Confirm Booking" below</li>
                        <li>You'll receive an STK push notification on your phone</li>
                        <li>Enter your M-Pesa PIN to complete payment</li>
                        <li>You'll receive a confirmation SMS from M-Pesa</li>
                        <li>Your appointment will be confirmed immediately</li>
                      </ol>
                      <p style={{marginTop: '15px', fontSize: '13px', color: '#856404', background: '#FFF3CD', padding: '10px', borderRadius: '8px'}}>
                        <strong>Note:</strong> Payment must be completed within 60 seconds of receiving the prompt
                      </p>
                    </div>
                  </>
                )}

                {formData.paymentMethod === 'cash' && (
                  <div style={{background: '#FFF5F7', padding: '20px', borderRadius: '12px', marginTop: '20px'}}>
                    <h4 style={{color: '#2C3E50', marginBottom: '15px', fontSize: '16px'}}>💵 Cash Payment Instructions:</h4>
                    <ul style={{color: '#5A6C7D', fontSize: '14px', lineHeight: '1.8', paddingLeft: '20px'}}>
                      <li>Your appointment will be reserved upon booking</li>
                      <li>Please arrive 15 minutes before your scheduled time</li>
                      <li>Payment is due at the reception desk before consultation</li>
                      <li>We accept cash payments in Kenyan Shillings (KSh)</li>
                      <li>A receipt will be provided upon payment</li>
                    </ul>
                    <p style={{marginTop: '15px', fontSize: '13px', color: '#856404', background: '#FFF3CD', padding: '10px', borderRadius: '8px'}}>
                      <strong>Important:</strong> Failure to pay before consultation may result in appointment cancellation
                    </p>
                  </div>
                )}

                <div style={{display: 'flex', gap: '15px'}}>
                  <button type="button" onClick={() => setStep(1)} className="btn-secondary" style={{flex: 1, padding: '16px', borderRadius: '12px', border: '2px solid #ddd', background: 'white', cursor: 'pointer', fontSize: '16px', fontWeight: '600'}}>
                    Back
                  </button>
                  <button type="submit" className="btn-primary btn-large" style={{flex: 2, background: 'linear-gradient(135deg, #27AE60, #229954)', border: 'none'}} disabled={!formData.paymentMethod}>
                    Confirm Booking
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Consultation
