function Services({ setActiveSection }) {
  const customizedServices = [
    {
      icon: '🤰',
      title: 'Preconception Counseling',
      description: 'Prepare your body and mind for a healthy pregnancy journey',
      color: '#FFE5EC',
      borderColor: '#FF1493'
    },
    {
      icon: '📅',
      title: 'Pregnancy Journey & What to Expect',
      description: 'Month-by-month guidance through your pregnancy',
      color: '#E8F4F8',
      borderColor: '#4A90E2'
    },
    {
      icon: '👶',
      title: 'Education at Childbirth & What to Expect',
      description: 'Understanding labor, delivery, and postpartum care',
      color: '#F0E6FF',
      borderColor: '#9370DB'
    },
    {
      icon: '🍼',
      title: 'Infant Feeding 1st 2 Weeks & Up to 6 Months',
      description: 'Breastfeeding support and infant nutrition guidance',
      color: '#FFF5E6',
      borderColor: '#FF9800'
    },
    {
      icon: '❤️',
      title: 'HIV Context in Pregnancy and Lactation',
      description: 'Specialized support for HIV-positive mothers',
      color: '#FFE6E6',
      borderColor: '#E74C3C'
    },
    {
      icon: '🧠',
      title: 'Maternal Mental & Emotional Support',
      description: 'Addressing anxiety, depression, and emotional wellness',
      color: '#E6F7F0',
      borderColor: '#27AE60'
    },
    {
      icon: '👥',
      title: 'Community Individualized Expert Support',
      description: 'Personalized support from our team of experts',
      color: '#F5E6FF',
      borderColor: '#9C27B0'
    }
  ]

  return (
    <section className="section">
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 className="section-title">🌱 Nurture HUB Customized Services</h2>
          <p className="section-subtitle">Comprehensive maternal health support tailored to your unique journey</p>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {customizedServices.map((service, index) => (
            <div key={index}>
              <div 
                style={{ 
                  padding: '35px 30px', 
                  background: service.color,
                  borderLeft: `5px solid ${service.borderColor}`,
                  cursor: 'pointer', 
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '25px',
                  position: 'relative'
                }} 
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(10px)'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'
                }} 
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
                onClick={() => setActiveSection('appointment')}
              >
                <div style={{ 
                  fontSize: '50px', 
                  flexShrink: 0,
                  width: '70px',
                  height: '70px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'white',
                  borderRadius: '50%',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}>
                  {service.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ 
                    fontSize: '20px', 
                    marginBottom: '8px', 
                    color: 'var(--text-dark)', 
                    fontWeight: '700'
                  }}>
                    {service.title}
                  </h4>
                  <p style={{ 
                    fontSize: '15px', 
                    color: 'var(--text-gray)', 
                    margin: 0,
                    lineHeight: '1.6'
                  }}>
                    {service.description}
                  </p>
                </div>
                <div style={{ 
                  fontSize: '28px', 
                  color: service.borderColor,
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>
                  →
                </div>
              </div>
              
              {index < customizedServices.length - 1 && (
                <div style={{ 
                  height: '2px', 
                  background: `linear-gradient(to right, ${service.borderColor}, ${customizedServices[index + 1].borderColor})`
                }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
