function Services({ detailed, setActiveSection }) {
  const serviceCategories = [
    {
      category: "Women's Care",
      icon: '🌸',
      image: 'https://i.pinimg.com/736x/ba/94/e2/ba94e258bf29d27acfab71efb2b0ab61.jpg',
      color: '#FF69B4',
      services: [
        'General gynecological consultations',
        'Menstrual disorders management',
        'Pelvic pain treatment',
        'Endometriosis & fibroid management',
        'Cervical cancer screening (Pap smear, HPV)',
        'Breast health screening',
        'Urogynecology (urinary incontinence)',
        'STI screening & management',
        'Gynecological surgery & minimally invasive procedures',
        'Menopause care',
        'Sexual & reproductive health counseling'
      ]
    },
    {
      category: 'Pregnancy & Maternity',
      icon: '🤰',
      image: 'https://i.pinimg.com/1200x/e5/eb/fb/e5ebfbef7c0cadcfea218cbf74341031.jpg',
      color: '#FF1493',
      services: [
        'Antenatal care & routine checkups',
        'Ultrasounds (dating, anomaly, growth scans)',
        '3D/4D ultrasound scans',
        'High-risk pregnancy & maternal-fetal medicine',
        'Fetal anomaly screening & advanced monitoring',
        'Recurrent miscarriage evaluation',
        'Normal vaginal delivery',
        'Cesarean section (C-section)',
        'Antenatal & childbirth education classes',
        'Postnatal care & breastfeeding support',
        'Postnatal pelvic floor physiotherapy',
        'Postpartum depression screening'
      ]
    },
    {
      category: 'Reproductive Health',
      icon: '🤝',
      image: 'https://i.pinimg.com/736x/e2/4c/1d/e24c1dc5feb85476ce92638ce7b30f62.jpg',
      color: '#9370DB',
      services: [
        'Infertility evaluation & counseling',
        'Infertility treatment options',
        'Pre-conception care & counseling',
        'Family planning & contraceptive counseling',
        'Fertility evaluation & support',
        'Long-term family planning (implants, IUCD)'
      ]
    },
    {
      category: 'Baby & Child Care',
      icon: '👶',
      image: 'https://i.pinimg.com/736x/e5/55/6d/e5556df7c33b808ef16cb31fac6bd1e7.jpg',
      color: '#4A90E2',
      services: [
        'Newborn & child consultations',
        'Well-baby & child wellness clinics',
        'Growth and developmental monitoring',
        'Developmental delay & autism screening',
        'Childhood illness treatment',
        'Neonatal intensive care',
        'Routine childhood vaccinations',
        'Child nutrition & obesity management',
        'Pediatric emergency care'
      ]
    },
    {
      category: 'Immunization Services',
      icon: '💉',
      image: 'https://plus.unsplash.com/premium_photo-1663054282494-74a914d0ff89?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color: '#27AE60',
      services: [
        'BCG & OPV at birth',
        'Pentavalent vaccines (6, 10, 14 weeks)',
        'Pneumococcal (PCV) vaccines',
        'Rotavirus vaccines',
        'Measles-Rubella vaccines',
        'Yellow Fever vaccine',
        'Digital immunization records',
        'SMS vaccination reminders',
        'WHO-standard cold chain storage'
      ]
    },
    {
      category: 'Preventive & Wellness',
      icon: '💚',
      image: 'https://i.pinimg.com/736x/6c/d0/cc/6cd0cc9a226d62c3a88f473f9246dba6.jpg',
      color: '#2ECC71',
      services: [
        'Immunization tracking & reminders',
        'Maternal mental health support',
        'Perinatal anxiety screening',
        'Adolescent & teen reproductive health counseling',
        'Puberty counseling & education',
        'Nutrition counseling (pregnancy, postnatal, child)',
        'Breastfeeding workshops',
        'Parenting support programs'
      ]
    },
    {
      category: 'Diet & Nutrition Guidance',
      icon: '🥗',
      image: 'https://i.pinimg.com/736x/7a/b6/cc/7ab6cce10471bbbad389729eca54621b.jpg',
      color: '#FF9800',
      services: [
        'Pregnancy nutrition planning',
        'Postnatal diet guidance',
        'Breastfeeding nutrition support',
        'Baby weaning & solid food introduction',
        'Child nutrition & meal planning',
        'Maternal weight management',
        'Nutritional supplements guidance',
        'Special dietary needs consultation'
      ]
    },
    {
      category: 'Home Services',
      icon: '🏠',
      image: 'https://i.pinimg.com/736x/8a/c9/2d/8ac92dbabc9522b9b802cc3493d2ed0f.jpg',
      color: '#9C27B0',
      services: [
        'Postnatal home visits',
        'Newborn care at home',
        'Home vaccination services',
        'Lactation support at home',
        'Home health monitoring',
        'Elderly care services',
        'Home nursing care',
        'Medical equipment rental'
      ]
    },
    {
      category: 'Emergency & Support Services',
      icon: '🚨',
      image: 'https://i.pinimg.com/1200x/34/14/03/341403d15bcffea3bb9c9ab1424e8420.jpg',
      color: '#E74C3C',
      services: [
        '24/7 maternity emergency line',
        'Laboratory & diagnostic services',
        'Ultrasound & imaging',
        'Advanced fetal monitoring (CTG/non-stress tests)',
        'In-house specialized lab tests',
        'Pharmacy services',
        'NHIF & insurance services',
        'Digital appointment booking',
        'WhatsApp follow-ups & reminders'
      ]
    }
  ]

  if (!detailed) {
    return (
      <section className="section">
        <h2 className="section-title">Our Specialized Services</h2>
        <p className="section-subtitle">Huduma bora kwa mama na watoto | Expert care tailored for mothers and children</p>
        <div className="services-grid">
          {serviceCategories.map((cat, index) => (
            <div key={index} className="service-card">
              {cat.image ? (
                <>
                  <div className="service-image-full">
                    <img src={cat.image} alt={cat.category} />
                  </div>
                  <div className="service-content">
                    <h3>{cat.category}</h3>
                    <p>{cat.services.slice(0, 3).join(' • ')}</p>
                    <button className="btn btn-primary" onClick={() => setActiveSection('appointment')} style={{width: '100%', background: cat.color, border: 'none'}}>Book Now</button>
                  </div>
                </>
              ) : (
                <>
                  <div className="service-icon">{cat.icon}</div>
                  <h3>{cat.category}</h3>
                  <p>{cat.services.slice(0, 3).join(' • ')}</p>
                  <button className="btn btn-primary" onClick={() => setActiveSection('appointment')} style={{marginTop: '15px', width: '100%', background: cat.color, border: 'none'}}>Book Now</button>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="section">
      <h2 className="section-title">Huduma Zetu | Our Specialized Services</h2>
      <p className="section-subtitle">Utunzaji wa kipekee kwa mama na watoto | Expert care tailored for mothers and children</p>
      <div className="services-detailed">
        {serviceCategories.map((cat, index) => (
          <div key={index} className="service-category">
            <div className="category-header">
              {cat.image ? (
                <span className="category-icon" style={{width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <img src={cat.image} alt={cat.category} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </span>
              ) : (
                <span className="category-icon">{cat.icon}</span>
              )}
              <h3>{cat.category}</h3>
            </div>
            <ul className="service-list">
              {cat.services.map((service, idx) => (
                <li key={idx}>{service}</li>
              ))}
            </ul>
            <button className="btn btn-primary" onClick={() => setActiveSection('appointment')} style={{marginTop: '20px', width: '100%', background: cat.color, border: 'none'}}>Book Appointment</button>
          </div>
        ))}
      </div>
      <div className="value-added">
        <h3>✨ What Makes Us Different</h3>
        <div className="features-grid">
          <span>👨‍⚕️ Experienced specialist doctors</span>
          <span>🏥 Child-friendly environment</span>
          <span>📱 Digital booking & reminders</span>
          <span>🏠 Home follow-ups available</span>
        </div>
      </div>
    </section>
  )
}

export default Services
