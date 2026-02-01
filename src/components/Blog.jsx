import { useState } from 'react'

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [expandedPost, setExpandedPost] = useState(null)
  
  const blogPosts = [
    {
      id: 1,
      title: "Essential Pregnancy Nutrition Guide",
      category: "Pregnancy",
      image: "https://i.pinimg.com/736x/7a/b6/cc/7ab6cce10471bbbad389729eca54621b.jpg",
      excerpt: "Learn what to eat during pregnancy for optimal health for you and your baby. Discover essential nutrients, meal planning tips, and foods to avoid.",
      content: "Proper nutrition during pregnancy is crucial for both mother and baby's health. Focus on iron-rich foods like lean meat and spinach, calcium from dairy products, folic acid from leafy greens, and omega-3 fatty acids from fish. Eat small frequent meals, stay hydrated, and avoid raw fish, unpasteurized dairy, and excessive caffeine. Include plenty of fruits, vegetables, whole grains, and lean proteins in your daily diet.",
      date: "January 15, 2026",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Complete Immunization Schedule for Your Baby",
      category: "Immunization",
      image: "https://plus.unsplash.com/premium_photo-1663054282494-74a914d0ff89?q=80&w=1470&auto=format&fit=crop",
      excerpt: "A comprehensive guide to your baby's vaccination schedule from birth to 5 years. Know when and why each vaccine is important.",
      content: "Follow the WHO-recommended immunization schedule: BCG and OPV at birth, Pentavalent vaccines at 6, 10, and 14 weeks, Pneumococcal and Rotavirus vaccines, Measles-Rubella at 9 and 18 months, and Yellow Fever at 9 months. Vaccines protect against serious diseases and are safe and effective. Keep your child's immunization card updated and never miss scheduled appointments.",
      date: "January 20, 2026",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Postpartum Care: What Every New Mother Should Know",
      category: "Maternal Health",
      image: "https://i.pinimg.com/1200x/e5/eb/fb/e5ebfbef7c0cadcfea218cbf74341031.jpg",
      excerpt: "Essential postpartum care tips for physical recovery, emotional wellness, and adjusting to life with your newborn.",
      content: "Postpartum recovery takes 6-8 weeks. Rest when baby sleeps, eat nutritious meals, stay hydrated, and accept help from family. Watch for signs of postpartum depression including persistent sadness, anxiety, or difficulty bonding with baby. Attend all postnatal checkups, practice pelvic floor exercises, and don't rush back to strenuous activities. Your body needs time to heal.",
      date: "January 25, 2026",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Breastfeeding Success: Tips for New Mothers",
      category: "Baby Care",
      image: "https://i.pinimg.com/736x/e5/55/6d/e5556df7c33b808ef16cb31fac6bd1e7.jpg",
      excerpt: "Master breastfeeding with our expert tips on positioning, latching, milk supply, and overcoming common challenges.",
      content: "Successful breastfeeding starts with proper positioning and latch. Hold baby close, support their head, and ensure they take the entire areola. Feed on demand, typically 8-12 times daily. Stay hydrated, eat well, and rest. Common challenges include sore nipples, engorgement, and low supply - all manageable with proper support. Seek help from lactation consultants if needed.",
      date: "February 1, 2026",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Managing Pregnancy Discomforts Naturally",
      category: "Pregnancy",
      image: "https://i.pinimg.com/736x/ba/94/e2/ba94e258bf29d27acfab71efb2b0ab61.jpg",
      excerpt: "Safe and natural remedies for common pregnancy discomforts including morning sickness, back pain, and swelling.",
      content: "Manage morning sickness with ginger tea, small frequent meals, and crackers before rising. Relieve back pain with proper posture, prenatal yoga, and warm baths. Reduce swelling by elevating feet, staying hydrated, and avoiding prolonged standing. Use pregnancy pillows for better sleep. Always consult your doctor before trying new remedies.",
      date: "February 5, 2026",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Understanding Maternal Mental Health",
      category: "Maternal Health",
      image: "https://i.pinimg.com/736x/6c/d0/cc/6cd0cc9a226d62c3a88f473f9246dba6.jpg",
      excerpt: "Recognizing signs of postpartum depression and anxiety. Learn when to seek help and available support resources.",
      content: "Postpartum depression affects 1 in 7 mothers. Symptoms include persistent sadness, anxiety, difficulty bonding with baby, changes in appetite or sleep, and thoughts of harming yourself or baby. It's not your fault and it's treatable. Seek help immediately if you experience these symptoms. Treatment includes counseling, support groups, and sometimes medication. You're not alone.",
      date: "February 10, 2026",
      readTime: "6 min read"
    },
    {
      id: 7,
      title: "Baby's First Year: Developmental Milestones",
      category: "Baby Care",
      image: "https://i.pinimg.com/736x/e5/55/6d/e5556df7c33b808ef16cb31fac6bd1e7.jpg",
      excerpt: "Track your baby's growth and development month by month. Know what to expect and when to consult your pediatrician.",
      content: "First year milestones: 2 months - smiling, 4 months - rolling over, 6 months - sitting, 9 months - crawling, 12 months - first steps and words. Every baby develops at their own pace. Regular checkups monitor growth, development, and vaccinations. Consult your pediatrician if you notice delays or concerns. Provide tummy time, read to baby, and engage in age-appropriate play.",
      date: "February 15, 2026",
      readTime: "10 min read"
    },
    {
      id: 8,
      title: "Preparing for Labor and Delivery",
      category: "Pregnancy",
      image: "https://i.pinimg.com/1200x/34/14/03/341403d15bcffea3bb9c9ab1424e8420.jpg",
      excerpt: "Everything you need to know about labor stages, pain management options, and what to pack in your hospital bag.",
      content: "Labor has three stages: early labor (cervix dilates to 3cm), active labor (3-7cm), and transition (7-10cm). Pain management options include breathing techniques, epidural, and natural methods. Pack essentials: ID, insurance cards, comfortable clothes, toiletries, baby clothes, diapers, and phone charger. Create a birth plan but stay flexible. Trust your body and medical team.",
      date: "February 20, 2026",
      readTime: "9 min read"
    },
    {
      id: 9,
      title: "HIV and Pregnancy: What You Need to Know",
      category: "Maternal Health",
      image: "https://i.pinimg.com/736x/e2/4c/1d/e24c1dc5feb85476ce92638ce7b30f62.jpg",
      excerpt: "Comprehensive guide for HIV-positive mothers on safe pregnancy, delivery, and breastfeeding with proper medical care.",
      content: "HIV-positive mothers can have healthy pregnancies and babies with proper care. Take antiretroviral therapy (ART) as prescribed, attend all prenatal visits, and follow your doctor's delivery plan. With treatment, mother-to-child transmission risk drops below 1%. Discuss infant feeding options with your healthcare provider. Regular monitoring ensures both mother and baby stay healthy.",
      date: "February 25, 2026",
      readTime: "7 min read"
    },
    {
      id: 10,
      title: "Introducing Solid Foods to Your Baby",
      category: "Baby Care",
      image: "https://i.pinimg.com/736x/7a/b6/cc/7ab6cce10471bbbad389729eca54621b.jpg",
      excerpt: "When and how to start solid foods. Learn about baby-led weaning, first foods, and avoiding common allergens.",
      content: "Start solids around 6 months when baby can sit up and shows interest in food. Begin with iron-rich foods like pureed meat, fortified cereals, or mashed beans. Introduce one new food at a time, waiting 3 days to check for allergies. Offer variety including fruits, vegetables, proteins, and grains. Continue breastfeeding alongside solids. Avoid honey, whole nuts, and choking hazards.",
      date: "March 1, 2026",
      readTime: "6 min read"
    },
    {
      id: 11,
      title: "Prenatal Checkups: What to Expect",
      category: "Pregnancy",
      image: "https://i.pinimg.com/1200x/97/7f/20/977f2017fa41789d49f02de965f9759c.jpg",
      excerpt: "A complete guide to prenatal visits, ultrasounds, tests, and screenings throughout your pregnancy journey.",
      content: "Prenatal checkups monitor mother and baby's health. First trimester: confirm pregnancy, dating ultrasound, blood tests. Second trimester: anatomy scan at 20 weeks, glucose screening. Third trimester: weekly visits from 36 weeks, Group B Strep test. Each visit includes weight, blood pressure, urine test, and fetal heartbeat check. Don't skip appointments - they're crucial for healthy pregnancy.",
      date: "March 5, 2026",
      readTime: "8 min read"
    },
    {
      id: 12,
      title: "Child Safety and Injury Prevention",
      category: "Baby Care",
      image: "https://i.pinimg.com/736x/8a/c9/2d/8ac92dbabc9522b9b802cc3493d2ed0f.jpg",
      excerpt: "Essential safety tips for babyproofing your home and preventing common childhood injuries at every age.",
      content: "Babyproof before baby becomes mobile. Install safety gates, secure furniture to walls, cover outlets, and lock cabinets with cleaning products. Keep small objects, cords, and plastic bags out of reach. Use rear-facing car seats correctly. Never leave baby unattended on changing tables or in bath. Learn infant CPR. Supervise constantly and update safety measures as baby grows.",
      date: "March 10, 2026",
      readTime: "7 min read"
    }
  ]

  const categories = ["All", "Pregnancy", "Maternal Health", "Baby Care", "Immunization"]

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <section className="blog-page">
      <div className="blog-hero">
        <h1>📚 Ulezi Hub Blog</h1>
        <p>Expert advice on pregnancy, maternal health, and child care</p>
      </div>

      <div className="section">
        <div className="blog-container">
          <div className="blog-categories">
            {categories.map(cat => (
              <button 
                key={cat}
                className={selectedCategory === cat ? 'active' : ''}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="blog-grid">
            {filteredPosts.map(post => (
              <article key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span>📅 {post.date}</span>
                    <span>⏱️ {post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{expandedPost === post.id ? post.content : post.excerpt}</p>
                  <button 
                    className="btn-read-more"
                    onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                  >
                    {expandedPost === post.id ? 'Show Less' : 'Read More'}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
