function Testimonials() {
  const testimonials = [
    {
      text: "The care I received during my pregnancy was exceptional. The team made me feel safe and supported every step of the way. My delivery was smooth and the staff was incredibly compassionate.",
      author: "Wanjiku Mwangi",
      role: "New Mother"
    },
    {
      text: "Our premature twins spent 6 weeks in the NICU. The neonatology team was outstanding - professional, caring, and always kept us informed. We're forever grateful for saving our babies.",
      author: "James & Grace Ochieng",
      role: "Parents of NICU Graduates"
    },
    {
      text: "Our pediatrician has been caring for our children for 5 years. She's patient, thorough, and genuinely cares about our children's wellbeing. We trust her completely with our kids' health.",
      author: "Akinyi Otieno",
      role: "Mother of Three"
    },
    {
      text: "After struggling with fertility issues, the doctors helped us understand our options with compassion and expertise. We're now expecting our first child. Thank you for making our dream come true.",
      author: "Peter & Faith Kamau",
      role: "Expecting Parents"
    },
    {
      text: "The child-friendly environment made such a difference. My daughter was nervous about her checkup, but the staff made her feel comfortable and safe. The expertise gave us peace of mind.",
      author: "Njeri Kariuki",
      role: "Mother"
    },
    {
      text: "From my first prenatal visit to postpartum care, every interaction was professional yet warm. The facilities are modern and clean. I recommend Jifunze Ulezi Hub to all my friends.",
      author: "Mercy Wambui",
      role: "Mother of Two"
    }
  ]

  return (
    <section className="section">
      <h2 className="section-title">What Our Families Say</h2>
      <p className="section-subtitle">Real experiences from mothers and families we've cared for</p>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-text">"{testimonial.text}"</p>
            <div className="testimonial-author">
              — {testimonial.author}
              <div style={{ fontSize: '14px', fontWeight: 'normal', color: 'var(--text-gray)', marginTop: '5px' }}>
                {testimonial.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
