function WhyChooseUs() {
  const features = [
    { icon: '👩⚕️', title: 'Women-Focused Care', description: 'Specialized expertise in women\'s health' },
    { icon: '🧸', title: 'Child-Friendly Environment', description: 'Safe, welcoming spaces for children' },
    { icon: '⭐', title: 'Specialist Doctors', description: 'Board-certified experts in their fields' },
    { icon: '🚑', title: '24/7 Emergency', description: 'Round-the-clock emergency services' },
    { icon: '🔬', title: 'Modern Equipment', description: 'Latest medical technology & facilities' },
    { icon: '❤️', title: 'Compassionate Care', description: 'Patient-centered approach always' }
  ]

  return (
    <section className="section" style={{ background: 'var(--light-gray)' }}>
      <h2 className="section-title">Why Choose Jifunze Ulezi Hub</h2>
      <p className="section-subtitle">Trusted by thousands of families for exceptional care</p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseUs
