import React from "react";
import "./Industries.css";


const industries = [
  {
    number: "01",
    title: "Banking & Financial Services",
    subtitle: "Secure, compliant software for financial institutions.",
    description:
      "We build digital banking platforms, risk tooling, and compliance-aware systems for banks, lenders, and fintech companies operating under strict regulatory requirements.",
    features: [
      ["Core system modernization", "Migrating legacy financial systems to secure, API-driven architectures."],
      ["Compliance-first design", "Built with data security and audit requirements in mind from day one."],
      ["Risk & fraud tooling", "Real-time transaction monitoring and underwriting decision support."],
    ],
    technologies: ["PCI-DSS", "SOC 2", "Plaid", "Core Banking APIs"],
    icon: "◈",
    theme: "banking",
  },
  {
    number: "02",
    title: "Healthcare",
    subtitle: "Reliable software for providers, payers, and health tech companies.",
    description:
      "We design patient-facing and clinical software with the data privacy and interoperability standards healthcare organizations require.",
    features: [
      ["Interoperability", "Integrations with clinical systems and health data standards."],
      ["Patient-facing platforms", "Portals and applications built for accessibility and trust."],
      ["Clinical workflow tools", "Scheduling, charting, and care-coordination software that fits real workflows."],
    ],
    technologies: ["HL7/FHIR", "HIPAA", "Epic", "Twilio"],
    icon: "✚",
    theme: "healthcare",
  },
  {
    number: "03",
    title: "E-Commerce",
    subtitle: "Digital-first storefronts and checkout experiences built to convert.",
    description:
      "We build headless storefronts, checkout flows, and post-purchase experiences for direct-to-consumer brands and marketplaces that need to move fast without sacrificing reliability.",
    features: [
      ["Headless storefronts", "Composable commerce architecture that integrates with the tools you already use."],
      ["Checkout & payments", "Fast, reliable checkout flows with fraud protection and multiple payment methods."],
      ["Post-purchase experience", "Order tracking, returns, and retention flows that keep customers coming back."],
    ],
    technologies: ["Shopify", "Stripe", "Next.js", "Algolia"],
    icon: "↗",
    theme: "commerce",
  },
  {
    number: "04",
    title: "Manufacturing",
    subtitle: "Software that connects the floor to the front office.",
    description:
      "We help manufacturers digitize operations — from production tracking to supply chain visibility — with software that fits how plants actually operate.",
    features: [
      ["Operations visibility", "Dashboards that surface what's happening across facilities in real time."],
      ["Supply chain tooling", "Systems that keep planning, procurement, and logistics in sync."],
      ["Predictive maintenance", "Sensor-driven insights that flag equipment issues before they cause downtime."],
    ],
    technologies: ["IIoT", "MES", "SCADA", "Power BI"],
    icon: "⌘",
    theme: "manufacturing",
  },
  {
    number: "05",
    title: "Education",
    subtitle: "Platforms for institutions, learners, and administrators.",
    description:
      "We build learning platforms and administrative systems for schools, universities, and edtech companies focused on outcomes, not just features.",
    features: [
      ["Learning platforms", "Engaging, accessible experiences for students and instructors."],
      ["Administrative systems", "Tools that reduce manual work for staff and faculty."],
      ["Analytics & outcomes", "Reporting that helps institutions track engagement and performance."],
    ],
    technologies: ["LMS", "SIS", "SCORM/xAPI", "Canvas API"],
    icon: "▤",
    theme: "education",
  },
  {
    number: "06",
    title: "Government & Public Sector",
    subtitle: "Accessible, secure digital services for public agencies.",
    description:
      "We build citizen-facing portals and internal case management systems designed for accessibility, security, and long-term maintainability.",
    features: [
      ["Accessible public portals", "Interfaces built to WCAG accessibility standards."],
      ["Secure infrastructure", "Architected around public-sector security requirements."],
      ["Case management", "Internal workflow systems for permits, benefits, and service requests."],
    ],
    technologies: ["FedRAMP", "WCAG 2.2", "Section 508", "Salesforce"],
    icon: "⌂",
    theme: "government",
  },
  {
    number: "07",
    title: "Custom AI Automation",
    subtitle: "Practical AI that removes manual work from your business processes.",
    description:
      "We design and ship applied AI — from internal copilots to workflow agents — that plug directly into how your team already operates, not a generic chatbot bolted on top.",
    features: [
      ["Workflow automation", "AI agents that handle repetitive multi-step processes end to end."],
      ["Applied LLM integration", "Retrieval-augmented assistants and copilots grounded in your own data."],
      ["Human-in-the-loop design", "Automation with clear override paths, so people stay in control."],
    ],
    technologies: ["OpenAI", "LangChain", "Vector DBs", "Python"],
    icon: "✳",
    theme: "ai",
  },
];

export default function Industries() {
  return (
    <main className="industries-page">
      <section className="industries-hero">
        <div className="industries-hero-orb industries-hero-orb-one" aria-hidden="true" />
        <div className="industries-hero-orb industries-hero-orb-two" aria-hidden="true" />
        <div className="industries-hero-grid" aria-hidden="true" />
        <div className="industries-hero-inner">
          <span className="industries-eyebrow">INDUSTRIES WE TRANSFORM</span>
          <h1>
            Technology built for <span>your industry.</span>
          </h1>
          <p>
            Every industry has its own challenges. We combine thoughtful engineering,
            secure architecture, and modern technology to build software that moves
            your business forward.
          </p>
          
        </div>
        <div className="industries-hero-stats" aria-label="Our approach">
          <div><strong>01</strong><span>Understand</span></div>
          <div><strong>02</strong><span>Engineer</span></div>
          <div><strong>03</strong><span>Transform</span></div>
        </div>
      </section>

      <section className="industries-section" aria-label="Industries we serve">
        <div className="industries-section-heading">
          <span className="industries-eyebrow">INDUSTRY EXPERTISE</span>
          <h2>Solutions shaped around <span>your world.</span></h2>
          <p>Purpose-built digital products for the challenges that matter most.</p>
        </div>
        <div className="industries-grid">
          {industries.map((industry) => (
            <article className={`industry-card industry-card--${industry.theme}`} key={industry.number}>
              <div className="industry-card-content">
                <div className="industry-card-topline">
                  <span className="industry-number">{industry.number}</span>
                  <span className="industry-icon" aria-hidden="true">{industry.icon}</span>
                </div>
                <h2>{industry.title}</h2>
                <p className="industry-subtitle">{industry.subtitle}</p>
                <p className="industry-description">{industry.description}</p>
                <div className="industry-features">
                  {industry.features.map(([title, description]) => (
                    <div className="industry-feature" key={title}>
                      <span className="industry-check" aria-hidden="true">✓</span>
                      <div><h3>{title}</h3><p>{description}</p></div>
                    </div>
                  ))}
                </div>
                <div className="industry-technologies">
                  {industry.technologies.map((technology) => (
                    <span className="industry-tag" key={technology}>{technology}</span>
                  ))}
                </div>
                <a className="industry-card-link" href="/contact" aria-label={`Discuss ${industry.title} software`}>
                  Explore solutions <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="industries-cta">
        <div className="industries-cta-decoration industries-cta-decoration-one" aria-hidden="true" />
        <div className="industries-cta-decoration industries-cta-decoration-two" aria-hidden="true" />
        <div className="industries-cta-inner">
          <span className="industries-eyebrow">HAVE A CHALLENGE?</span>
          <h2>Let’s build something <span>that moves you forward.</span></h2>
          <p>
            Tell us where you want to go. We’ll help you find the right engineering
            approach and turn your next big idea into a practical digital solution.
          </p>
          <a href="/contact" className="industries-cta-button">
            Start a Project <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
