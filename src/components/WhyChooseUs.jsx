function WhyChooseUs() {
  const features = [
    { icon: '👩⚕️', title: 'Women-Focused Care', description: 'Specialized expertise in women\'s health', image: 'https://i.pinimg.com/736x/3a/b8/18/3ab81852393b1cd44fde9d26d9789d9b.jpg' },
    { icon: '🧸', title: 'Child-Friendly Environment', description: 'Safe, welcoming spaces for children', image: 'https://i.pinimg.com/736x/35/03/0b/35030b0b6a0bd57bd8d1d83cce2006c7.jpg' },
    { icon: '⭐', title: 'Specialist Doctors', description: 'Board-certified experts in their fields', image: 'https://i.pinimg.com/736x/55/9f/ca/559fcad416941076731b3a6b2024fe11.jpg' },
    { icon: '🚑', title: '24/7 Emergency', description: 'Round-the-clock emergency services', image: 'https://i.pinimg.com/1200x/bd/81/b6/bd81b6069051c1404137bedaf5f8ef74.jpg' },
    { icon: '🔬', title: 'Advanced Diagnostics Systems', description: 'Latest medical technology & facilities', image: 'https://i.pinimg.com/736x/da/64/5a/da645aa0b9a3287c43c2c8af7f4e7d7c.jpg' },
    { icon: '❤️', title: 'Compassionate Care', description: 'Patient-centered approach always', image: 'https://i.pinimg.com/1200x/1d/84/42/1d84423df505352c4a25802e071f1690.jpg' }
  ]

  return (
    <section className="section" style={{ background: 'var(--light-gray)' }}>
      <h2 className="section-title">Why Choose Jifunze Ulezi Hub</h2>
      <p className="section-subtitle">Trusted by thousands of families for exceptional care</p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            {feature.image ? (
              <div className="feature-image">
                <img src={feature.image} alt={feature.title} />
              </div>
            ) : (
              <div className="feature-icon">{feature.icon}</div>
            )}
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseUs
