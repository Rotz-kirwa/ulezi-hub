function Doctors() {
  const doctors = [
    {
      name: 'Dr. Sarah Mitchell',
      specialty: 'Obstetrician & Gynecologist',
      experience: '15 years experience',
      certifications: 'MD, FACOG',
      icon: '👩⚕️'
    },
    {
      name: 'Dr. Emily Chen',
      specialty: 'Pediatrician',
      experience: '12 years experience',
      certifications: 'MD, FAAP',
      icon: '👩⚕️'
    },
    {
      name: 'Dr. Michael Roberts',
      specialty: 'Neonatologist',
      experience: '18 years experience',
      certifications: 'MD, FAAP, Neonatal-Perinatal Medicine',
      icon: '👨⚕️'
    },
    {
      name: 'Dr. Jennifer Adams',
      specialty: 'Maternal-Fetal Medicine',
      experience: '14 years experience',
      certifications: 'MD, FACOG, MFM Subspecialty',
      icon: '👩⚕️'
    },
    {
      name: 'Dr. David Thompson',
      specialty: 'Pediatric Surgeon',
      experience: '16 years experience',
      certifications: 'MD, FACS, Pediatric Surgery',
      icon: '👨⚕️'
    },
    {
      name: 'Dr. Lisa Martinez',
      specialty: 'Gynecologist & Fertility Specialist',
      experience: '11 years experience',
      certifications: 'MD, FACOG, REI',
      icon: '👩⚕️'
    }
  ]

  return (
    <section className="section">
      <h2 className="section-title">Our Expert Medical Team</h2>
      <p className="section-subtitle">Board-certified specialists dedicated to your family's health</p>
      <div className="doctors-grid">
        {doctors.map((doctor, index) => (
          <div key={index} className="doctor-card">
            <div className="doctor-image">{doctor.icon}</div>
            <div className="doctor-info">
              <h3>{doctor.name}</h3>
              <div className="doctor-specialty">{doctor.specialty}</div>
              <div className="doctor-experience">{doctor.experience}</div>
              <p style={{ fontSize: '14px', color: 'var(--text-gray)', marginBottom: '15px' }}>
                {doctor.certifications}
              </p>
              <button className="btn">Book with Dr. {doctor.name.split(' ')[1]}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Doctors
