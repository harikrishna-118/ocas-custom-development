import React from "react";
import "./Services.css";

const services = [
  {
    number: "01",
    title: "Custom Software Development",
    subtitle: "Tailored web and enterprise applications built around how your business actually runs.",
    description: "We design and build custom software from the ground up — internal tools, customer-facing platforms, and everything in between. Every engagement starts with understanding your workflows, not fitting you into a template.",
    features: [
      ["Full-stack engineering", "End-to-end ownership from database schema to production UI."],
      ["API-first architecture", "Clean, documented APIs that make future integrations straightforward."],
      ["Scalable foundations", "Systems built to handle growth without a rewrite six months in."]
    ],
    tags: ["TypeScript", "React", "Node.js", "PostgreSQL", "GraphQL"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
    alt: "Developer workspace with computer and code editor",
    theme: "violet"
  },
  {
    number: "02",
    title: "Cloud & DevOps Engineering",
    subtitle: "Resilient cloud infrastructure and automated delivery pipelines.",
    description: "We architect and manage cloud environments on AWS, Azure, and GCP, and build the CI/CD pipelines that let your team ship confidently and often, without babysitting deployments.",
    features: [
      ["Infrastructure as code", "Reproducible environments defined in Terraform, versioned like everything else."],
      ["Automated CI/CD", "Pipelines that test, build, and deploy on every merge."],
      ["Observability built in", "Logging, metrics, and alerting from day one, not bolted on later."]
    ],
    tags: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
    alt: "Real photograph of server racks in a data centre",
    theme: "teal"
  },
  {
    number: "03",
    title: "AI & Data Engineering",
    subtitle: "Data pipelines and applied AI that turn information into decisions.",
    description: "We build the data infrastructure that powers analytics and machine learning — reliable pipelines, clean warehouses, and applied AI features integrated directly into your product.",
    features: [
      ["Data pipeline design", "ETL/ELT workflows that keep data fresh, accurate, and auditable."],
      ["Applied machine learning", "Models integrated into real product workflows, not left in a notebook."],
      ["Analytics you can trust", "Clean semantic layers so every team reports from the same numbers."]
    ],
    tags: ["Python", "PostgreSQL", "Airflow", "dbt", "PyTorch"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    alt: "Analytics charts displayed on a computer screen",
    theme: "blue"
  },
  {
    number: "04",
    title: "Mobile App Development",
    subtitle: "Native-feeling apps for iOS and Android from a single codebase.",
    description: "We design and build cross-platform mobile applications that feel native, ship faster than separate iOS/Android teams, and stay maintainable as your product grows.",
    features: [
      ["Cross-platform delivery", "One codebase, consistent behavior across iOS and Android."],
      ["Native performance", "Smooth, responsive interfaces that don't feel like a compromise."],
      ["App store readiness", "Submission, review, and release handled end to end."]
    ],
    tags: ["React Native", "Swift", "Kotlin", "Firebase"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=85",
    alt: "Smartphone showing a mobile application in use",
    theme: "gold"
  },
  {
    number: "05",
    title: "Enterprise Systems Integration",
    subtitle: "Connect and modernize the systems your business already depends on.",
    description: "We integrate CRMs, ERPs, and legacy systems so data moves cleanly between them, and modernize the pieces that are holding your operations back.",
    features: [
      ["System integration", "Reliable data sync between CRM, ERP, and internal tools."],
      ["Legacy modernization", "Incremental migration paths that don't require a risky big-bang rewrite."],
      ["Workflow automation", "Removing manual handoffs between systems that should talk to each other."]
    ],
    tags: ["REST/SOAP APIs", "Salesforce", "SAP", "MuleSoft"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85",
    alt: "Photograph of global network connectivity and digital infrastructure",
    theme: "pink"
  },
  {
    number: "06",
    title: "UI/UX & Product Design",
    subtitle: "Research-led interface design that makes complex products simple to use and easy to adopt.",
    description: "We shape intuitive digital experiences through user research, clear information architecture, thoughtful interaction design, and consistent visual systems — helping people understand your product and get value from it.",
    features: [
      ["User research & journeys", "Understand user needs, friction points, and the tasks that matter."],
      ["Wireframes & prototypes", "Test structure and interactions before committing to development."],
      ["Design systems", "Reusable components and accessibility-minded patterns for consistent experiences."]
    ],
    tags: ["Figma", "Design Systems", "Prototyping", "Accessibility"],
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1200&q=85",
    alt: "Designer working on digital interface layouts and prototypes",
    theme: "lime"
  }
];

export default function Services() {
  return (
    <main className="ocas-services-page">
      <section className="services-hero">
        <div className="services-hero-image" aria-hidden="true" />
        <div className="services-hero-shade" aria-hidden="true" />
        <div className="services-hero-inner">
          <div className="services-eyebrow"><span /> SERVICES</div>
          <h1>Engineering services for <em>real product work</em></h1>
          <p>From first architecture sketch to production support, we cover the engineering disciplines that turn an idea into working software.</p>
          <a className="services-hero-button" href="/#contact">Discuss your project <span>↗</span></a>
          <div className="services-hero-note"><i /> Strategy, design, engineering and delivery</div>
        </div>
        <div className="services-hero-index"><span>OCAS / SERVICES</span><span>01 — 06</span></div>
      </section>

      <section className="services-intro">
        <div className="services-shell services-intro-grid">
          <div><span className="services-kicker">WHAT WE DO</span><h2>Technology that moves<br /><em>your business forward.</em></h2></div>
          <p>From the first idea to the systems that keep you moving, our teams build dependable digital products around your real-world needs. Explore our capabilities and find the right fit for your next project.</p>
        </div>
      </section>

      <section className="services-details" id="services-list">
        <div className="services-shell">
          <div className="services-section-heading">
            <div><span className="services-kicker">OUR CAPABILITIES</span><h2>Six ways to make progress.</h2></div>
            <span className="services-heading-count">01 / 06 <i /></span>
          </div>
          <div className="services-card-grid">
            {services.map((service) => (
              <article className={`service-detail-card service-theme-${service.theme}`} key={service.number}>
                <div className="service-card-image-wrap">
                  <img src={service.image} alt={service.alt} loading="lazy" />
                  <span className="service-card-number">{service.number}</span>
                  <span className="service-card-image-label">OCAS DIGITAL SERVICES</span>
                </div>
                <div className="service-card-content">
                  <h3>{service.title}</h3>
                  <p className="service-detail-subtitle">{service.subtitle}</p>
                  <p className="service-detail-description">{service.description}</p>
                  <div className="service-features">
                    {service.features.map(([title, description]) => (
                      <div className="service-feature" key={title}>
                        <span className="feature-check">↗</span>
                        <div><h4>{title}</h4><p>{description}</p></div>
                      </div>
                    ))}
                  </div>
                  <div className="service-tech-tags">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <a className="service-card-link" href="/#contact">Discuss this service <span>↗</span></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="services-cta-pattern" aria-hidden="true" />
        <div className="services-cta-inner">
          <span className="services-kicker">HAVE A PROJECT IN MIND?</span>
          <h2>Ready to build<br /><em>something great?</em></h2>
          <p>Tell us about your project and we'll walk you through how OCAS can help you build it.</p>
          <a href="/#contact" className="services-cta-button">Start a Project <span>↗</span></a>
        </div>
      </section>
    </main>
  );
}
