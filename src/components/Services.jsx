import React, { useEffect, useRef, useState } from "react";
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
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=85",
    alt: "Developer working at a desk on a keyboard in a bright office",
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
    image: "https://images.unsplash.com/photo-1584169417032-d34e8d805e8b?auto=format&fit=crop&w=1200&q=85",
    alt: "Aisle of server racks inside a data centre",
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
    image: "https://images.unsplash.com/photo-1763038311036-6d18805537e5?auto=format&fit=crop&w=1200&q=85",
    alt: "Person reviewing charts and graphs on a laptop",
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
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=85",
    alt: "Smartphone showing an app interface next to a laptop keyboard",
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
    image: "https://images.unsplash.com/photo-1758873268998-2f77c2d38862?auto=format&fit=crop&w=1200&q=85",
    alt: "Team collaborating around a whiteboard during a planning meeting",
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
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=85",
    alt: "Monitor showing a design system interface on a desk with plants",
    theme: "lime"
  }
];

/* Image with a graceful blue fallback if a photo ever fails to load */
function Photo({ src, alt, className = "", eager = false }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <div className={`photo-fallback ${className}`} role="img" aria-label={alt} />;
  }
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      onError={() => setFailed(true)}
    />
  );
}

/* Adds .is-visible when element enters viewport */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({ delay = 0, className = "", children }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ "--d": `${delay}ms` }}>
      {children}
    </div>
  );
}

function ServiceCard({ service }) {
  const ref = useReveal();
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <article
      ref={ref}
      id={`service-${service.number}`}
      onMouseMove={onMove}
      className={`reveal service-detail-card service-theme-${service.theme}`}
    >
      <span className="service-spotlight" aria-hidden="true" />
      <div className="service-card-image-wrap">
        <Photo src={service.image} alt={service.alt} />
        <span className="service-image-shade" aria-hidden="true" />
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
              <div>
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="service-tech-tags">
          {service.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <a className="service-card-link" href="/#contact">
          <span>Discuss this service</span>
          <b>↗</b>
        </a>
      </div>
    </article>
  );
}

export default function Services() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="ocas-services-page">
      <div className="services-progress" style={{ width: `${progress}%` }} aria-hidden="true" />

      {/* HERO — professional software engineering photography */}
      <section className="services-hero" aria-labelledby="services-hero-title">
        <div className="services-hero-background" aria-hidden="true" />

        <div className="services-hero-inner">
          <div className="hero-copy">
            <div className="services-eyebrow hero-in" style={{ "--d": "0ms" }}>
              <span /> SERVICES
            </div>

            <h1 id="services-hero-title" className="hero-in" style={{ "--d": "120ms" }}>
              Engineering services for <em>real product work</em>
            </h1>

            <p className="hero-in" style={{ "--d": "240ms" }}>
              From first architecture sketch to production support, we cover
              the engineering disciplines that turn an idea into working
              software. Scalable, secure, and built for real-world impact.
            </p>

            <div className="hero-actions hero-in" style={{ "--d": "360ms" }}>
              <a className="services-hero-button" href="/#contact">
                Discuss your project <span aria-hidden="true">↗</span>
              </a>
              <a className="services-hero-secondary" href="#services-list">
                Explore services
              </a>
            </div>
</div>
        </div>
      </section>

      {/* INTRO */}
      <section className="services-intro">
        <div className="services-shell services-intro-grid">
          <Reveal>
            <span className="services-kicker">WHAT WE DO</span>
            <h2>Technology that moves<br /><em>your business forward.</em></h2>
          </Reveal>
          <Reveal delay={150}>
            <p>
              From the first idea to the systems that keep you moving, our teams build dependable digital products around your real-world needs. Explore our capabilities and find the right fit for your next project.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-details" id="services-list">
        <div className="services-shell">
          <Reveal className="services-section-heading">
            <div>
              <span className="services-kicker">OUR CAPABILITIES</span>
              <h2>Six ways to make progress.</h2>
            </div>
            <span className="services-heading-count">01 / 06 <i /></span>
          </Reveal>

          <nav className="services-quicknav" aria-label="Jump to a service">
            {services.map((s) => (
              <a href={`#service-${s.number}`} key={s.number}>
                <b>{s.number}</b> {s.title}
              </a>
            ))}
          </nav>

          <div className="services-card-grid">
            {services.map((service) => (
              <ServiceCard service={service} key={service.number} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="services-cta-pattern" aria-hidden="true" />
        <span className="cta-ring ring-a" aria-hidden="true" />
        <span className="cta-ring ring-b" aria-hidden="true" />
        <Reveal className="services-cta-inner">
          <span className="services-kicker">HAVE A PROJECT IN MIND?</span>
          <h2>Ready to build<br /><em>something great?</em></h2>
          <p>Tell us about your project and we'll walk you through how OCAS can help you build it.</p>
          <a href="/#contact" className="services-cta-button">Start a Project <span>↗</span></a>
        </Reveal>
      </section>
    </main>
  );
}