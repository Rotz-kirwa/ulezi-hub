import { useState } from 'react'

function Resources() {
  const [activeResource, setActiveResource] = useState('pregnancy')

  const resources = {
    pregnancy: {
      title: '🤰 Pregnancy Guide',
      content: [
        {
          section: 'First Trimester (Weeks 1-12)',
          items: [
            'Schedule your first prenatal visit',
            'Start taking prenatal vitamins with folic acid',
            'Avoid alcohol, smoking, and certain medications',
            'Eat a balanced diet with plenty of fruits and vegetables',
            'Stay hydrated - drink 8-10 glasses of water daily',
            'Get adequate rest and manage morning sickness'
          ]
        },
        {
          section: 'Second Trimester (Weeks 13-26)',
          items: [
            'Continue regular prenatal checkups',
            'Schedule anomaly scan (18-20 weeks)',
            'Feel baby movements (quickening)',
            'Maintain healthy weight gain',
            'Exercise regularly with doctor approval',
            'Attend antenatal classes'
          ]
        },
        {
          section: 'Third Trimester (Weeks 27-40)',
          items: [
            'Increase prenatal visit frequency',
            'Prepare hospital bag',
            'Learn about labor signs',
            'Practice breathing exercises',
            'Finalize birth plan',
            'Rest and prepare for delivery'
          ]
        }
      ]
    },
    childHealth: {
      title: '👶 Child Health Tips',
      content: [
        {
          section: 'Newborn Care (0-3 months)',
          items: [
            'Breastfeed exclusively for first 6 months',
            'Keep umbilical cord clean and dry',
            'Ensure baby sleeps on back',
            'Monitor for jaundice',
            'Schedule regular checkups',
            'Keep baby warm but not overheated'
          ]
        },
        {
          section: 'Infant Care (3-12 months)',
          items: [
            'Introduce solid foods at 6 months',
            'Continue breastfeeding alongside solids',
            'Ensure adequate sleep (12-16 hours)',
            'Encourage tummy time',
            'Baby-proof your home',
            'Monitor developmental milestones'
          ]
        },
        {
          section: 'Toddler Care (1-3 years)',
          items: [
            'Provide balanced meals and healthy snacks',
            'Establish bedtime routine',
            'Encourage physical activity',
            'Limit screen time',
            'Practice good hygiene habits',
            'Support language development'
          ]
        }
      ]
    },
    immunization: {
      title: '💉 Immunization Schedule',
      content: [
        {
          section: 'Birth',
          items: ['BCG (Tuberculosis)', 'OPV 0 (Polio)']
        },
        {
          section: '6 Weeks',
          items: ['OPV 1', 'Pentavalent 1 (DPT-HepB-Hib)', 'PCV 1 (Pneumococcal)', 'Rota 1']
        },
        {
          section: '10 Weeks',
          items: ['OPV 2', 'Pentavalent 2', 'PCV 2', 'Rota 2']
        },
        {
          section: '14 Weeks',
          items: ['OPV 3', 'Pentavalent 3', 'PCV 3', 'IPV (Injectable Polio)']
        },
        {
          section: '6 Months',
          items: ['Vitamin A']
        },
        {
          section: '9 Months',
          items: ['Measles-Rubella 1', 'Yellow Fever']
        },
        {
          section: '18 Months',
          items: ['Measles-Rubella 2', 'Vitamin A']
        }
      ]
    },
    insurance: {
      title: '💳 Insurance & Billing',
      content: [
        {
          section: 'Accepted Insurance',
          items: [
            'NHIF (National Hospital Insurance Fund)',
            'AAR Insurance',
            'Jubilee Insurance',
            'CIC Insurance',
            'Madison Insurance',
            'Britam Insurance'
          ]
        },
        {
          section: 'Payment Options',
          items: [
            'M-Pesa mobile payments',
            'Cash payments',
            'Bank transfers',
            'Credit/Debit cards',
            'Insurance direct billing',
            'Installment plans available'
          ]
        },
        {
          section: 'Billing Information',
          items: [
            'Request itemized bills at reception',
            'Insurance claims processed within 48 hours',
            'Payment required before discharge',
            'Receipts provided for all payments',
            'Contact billing department for queries: 0711 355 485'
          ]
        }
      ]
    },
    rights: {
      title: '⚖️ Patient Rights',
      content: [
        {
          section: 'Your Rights as a Patient',
          items: [
            'Right to quality healthcare services',
            'Right to informed consent before treatment',
            'Right to privacy and confidentiality',
            'Right to access your medical records',
            'Right to respectful and dignified care',
            'Right to refuse treatment',
            'Right to second medical opinion',
            'Right to file complaints and grievances',
            'Right to know costs before treatment',
            'Right to emergency care regardless of ability to pay'
          ]
        },
        {
          section: 'Your Responsibilities',
          items: [
            'Provide accurate medical history',
            'Follow prescribed treatment plans',
            'Respect healthcare workers',
            'Pay for services rendered',
            'Keep scheduled appointments',
            'Inform staff of any concerns promptly'
          ]
        }
      ]
    },
    faqs: {
      title: '❓ Frequently Asked Questions',
      content: [
        {
          section: 'General Questions',
          items: [
            'Q: What are your operating hours?\nA: Emergency services 24/7. Outpatient: Mon-Fri 8AM-6PM, Sat 9AM-2PM',
            'Q: Do you accept walk-in patients?\nA: Yes, but appointments are recommended for shorter wait times',
            'Q: Where are you located?\nA: 123 Care Street, Medical District',
            'Q: Do you offer home visits?\nA: Yes, for postnatal care and certain consultations'
          ]
        },
        {
          section: 'Maternity Questions',
          items: [
            'Q: When should I start antenatal care?\nA: As soon as you confirm pregnancy, ideally before 12 weeks',
            'Q: Do you offer delivery services?\nA: Yes, both normal and cesarean deliveries',
            'Q: Can my partner be present during delivery?\nA: Yes, we encourage partner support during labor',
            'Q: What should I bring for delivery?\nA: Hospital bag checklist provided during antenatal visits'
          ]
        },
        {
          section: 'Payment Questions',
          items: [
            'Q: Do you accept NHIF?\nA: Yes, we are NHIF accredited',
            'Q: Can I pay via M-Pesa?\nA: Yes, M-Pesa payments accepted',
            'Q: Do you offer payment plans?\nA: Yes, contact our billing department for arrangements',
            'Q: Are consultations refundable?\nA: Cancellations must be made 24 hours in advance'
          ]
        }
      ]
    }
  }

  return (
    <section className="resources-page">
      <div className="resources-hero">
        <h1>Patient Resources</h1>
        <p>Everything you need to know about your healthcare journey</p>
      </div>

      <div className="section">
        <div className="resources-container">
          <div className="resources-sidebar">
            <button 
              className={activeResource === 'pregnancy' ? 'active' : ''}
              onClick={() => setActiveResource('pregnancy')}
            >
              🤰 Pregnancy Guide
            </button>
            <button 
              className={activeResource === 'childHealth' ? 'active' : ''}
              onClick={() => setActiveResource('childHealth')}
            >
              👶 Child Health Tips
            </button>
            <button 
              className={activeResource === 'immunization' ? 'active' : ''}
              onClick={() => setActiveResource('immunization')}
            >
              💉 Immunization Schedule
            </button>
            <button 
              className={activeResource === 'insurance' ? 'active' : ''}
              onClick={() => setActiveResource('insurance')}
            >
              💳 Insurance & Billing
            </button>
            <button 
              className={activeResource === 'rights' ? 'active' : ''}
              onClick={() => setActiveResource('rights')}
            >
              ⚖️ Patient Rights
            </button>
            <button 
              className={activeResource === 'faqs' ? 'active' : ''}
              onClick={() => setActiveResource('faqs')}
            >
              ❓ FAQs
            </button>
          </div>

          <div className="resources-content">
            <h2>{resources[activeResource].title}</h2>
            {resources[activeResource].content.map((section, index) => (
              <div key={index} className="resource-section">
                <h3>{section.section}</h3>
                <ul>
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resources
