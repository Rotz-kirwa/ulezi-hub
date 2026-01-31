function Immunization({ setActiveSection }) {
  const immunizationSchedule = [
    {
      age: 'At Birth',
      vaccines: [
        { name: 'BCG', protects: 'Tuberculosis' },
        { name: 'OPV 0', protects: 'Polio' }
      ]
    },
    {
      age: '6 Weeks',
      vaccines: [
        { name: 'OPV 1', protects: 'Polio' },
        { name: 'Pentavalent 1', protects: 'Diphtheria, Tetanus, Pertussis, Hepatitis B, Hib' },
        { name: 'PCV 1', protects: 'Pneumococcal disease' },
        { name: 'Rota 1', protects: 'Rotavirus' }
      ]
    },
    {
      age: '10 Weeks',
      vaccines: [
        { name: 'OPV 2', protects: 'Polio' },
        { name: 'Pentavalent 2', protects: 'Diphtheria, Tetanus, Pertussis, Hepatitis B, Hib' },
        { name: 'PCV 2', protects: 'Pneumococcal disease' },
        { name: 'Rota 2', protects: 'Rotavirus' }
      ]
    },
    {
      age: '14 Weeks',
      vaccines: [
        { name: 'OPV 3', protects: 'Polio' },
        { name: 'Pentavalent 3', protects: 'Diphtheria, Tetanus, Pertussis, Hepatitis B, Hib' },
        { name: 'PCV 3', protects: 'Pneumococcal disease' },
        { name: 'IPV', protects: 'Polio (Injectable)' }
      ]
    },
    {
      age: '6 Months',
      vaccines: [
        { name: 'Vitamin A', protects: 'Vitamin A deficiency' }
      ]
    },
    {
      age: '9 Months',
      vaccines: [
        { name: 'Measles-Rubella 1', protects: 'Measles & Rubella' },
        { name: 'Yellow Fever', protects: 'Yellow Fever' }
      ]
    },
    {
      age: '12 Months',
      vaccines: [
        { name: 'Vitamin A', protects: 'Vitamin A deficiency (booster)' }
      ]
    },
    {
      age: '18 Months',
      vaccines: [
        { name: 'Measles-Rubella 2', protects: 'Measles & Rubella (booster)' },
        { name: 'Vitamin A', protects: 'Vitamin A deficiency (booster)' }
      ]
    }
  ]

  return (
    <section className="section">
      <h2 className="section-title">💉 Baby Immunization Schedule</h2>
      <p className="section-subtitle">Complete vaccination program following Kenya's national immunization schedule</p>
      
      <div style={{ background: '#FFF3CD', padding: '20px', borderRadius: '12px', marginBottom: '40px', textAlign: 'center' }}>
        <p style={{ color: '#856404', fontSize: '16px', margin: 0 }}>
          📅 <strong>Free Immunizations Available</strong> | Keep your child's health on track with timely vaccinations
        </p>
      </div>

      <div className="immunization-timeline">
        {immunizationSchedule.map((schedule, index) => (
          <div key={index} className="immunization-card">
            <div className="immunization-age">
              <span className="age-badge">{schedule.age}</span>
            </div>
            <div className="vaccines-list">
              {schedule.vaccines.map((vaccine, idx) => (
                <div key={idx} className="vaccine-item">
                  <div className="vaccine-icon">💉</div>
                  <div className="vaccine-info">
                    <h4>{vaccine.name}</h4>
                    <p>{vaccine.protects}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '50px', background: 'linear-gradient(135deg, #E8F4F8, #FFF5F7)', padding: '40px', borderRadius: '16px' }}>
        <h3 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '20px', color: '#2C3E50' }}>
          ✨ Why Choose Us for Immunization?
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>📋</div>
            <h4 style={{ marginBottom: '8px' }}>Digital Records</h4>
            <p style={{ color: '#5A6C7D', fontSize: '14px' }}>Track all vaccinations digitally</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>🔔</div>
            <h4 style={{ marginBottom: '8px' }}>SMS Reminders</h4>
            <p style={{ color: '#5A6C7D', fontSize: '14px' }}>Never miss a vaccination date</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>👩⚕️</div>
            <h4 style={{ marginBottom: '8px' }}>Expert Care</h4>
            <p style={{ color: '#5A6C7D', fontSize: '14px' }}>Trained pediatric nurses</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>❄️</div>
            <h4 style={{ marginBottom: '8px' }}>Safe Storage</h4>
            <p style={{ color: '#5A6C7D', fontSize: '14px' }}>WHO-standard cold chain</p>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <button className="btn btn-primary" onClick={() => setActiveSection('appointment')} style={{ padding: '16px 40px', fontSize: '18px', background: '#2ECC71', border: 'none' }}>
          Book Immunization Appointment
        </button>
      </div>
    </section>
  )
}

export default Immunization
