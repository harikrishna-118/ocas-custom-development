
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./About.css";

const services = [
  {
    n: "01",
    title: "Custom Software Development",
    text: "Web applications and business systems designed around your workflows, users, and business goals.",
    tags: "WEB APPLICATIONS · ENTERPRISE SOFTWARE",
  },
  {
    n: "02",
    title: "Cloud & DevOps",
    text: "Cloud infrastructure, automated delivery pipelines, and reliable environments built to support growth.",
    tags: "CLOUD · CI/CD · INFRASTRUCTURE",
  },
  {
    n: "03",
    title: "AI & Data Engineering",
    text: "Data pipelines, analytics, and practical AI solutions that help teams turn information into useful insight.",
    tags: "DATA PLATFORMS · AI · ANALYTICS",
  },
  {
    n: "04",
    title: "Digital Product Engineering",
    text: "Connected digital experiences built with usability, maintainability, and long-term business needs in mind.",
    tags: "PRODUCT THINKING · ENGINEERING",
  },
];

const values = [
  [
    "01",
    "Understand before building",
    "We begin with the business challenge, the people affected, and the outcome the solution should support.",
  ],
  [
    "02",
    "Choose technology with purpose",
    "We focus on the right fit for the problem—not technology for its own sake.",
  ],
  [
    "03",
    "Make collaboration clear",
    "Open communication, visible progress, and considered decisions are part of good delivery.",
  ],
  [
    "04",
    "Build for the long term",
    "We care about maintainability, security, and solutions that can evolve as needs change.",
  ],
];

const steps = [
  ["01", "Discover", "Understand goals, users, constraints, and priorities."],
  ["02", "Plan", "Agree on scope, technical direction, and a practical roadmap."],
  ["03", "Build", "Develop in focused stages and share progress throughout."],
  ["04", "Improve", "Test, refine, launch, and support what comes next."],
];

export default function About() {
  useEffect(() => {
    // Reveal animations
    const items = document.querySelectorAll(
      ".ocas-about-page .about-reveal"
    );

    // Show everything if IntersectionObserver is unsupported.
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    items.forEach((item) => observer.observe(item));

    // Cleanup when the component unmounts.
    return () => observer.disconnect();
  }, []);

  return (
    <main className="ocas-about-page">
      {/* HERO */}
      <section className="about-hero" id="about-top">
        <div className="about-container">
          <div className="about-eyebrow">
            <i />
            ABOUT OCAS
            <span />
            TECHNOLOGY WITH A PURPOSE
          </div>

          <div className="about-hero-grid">
            <div className="about-hero-copy about-reveal about-reveal-left">
              <p className="about-kicker">WHO WE ARE</p>

              <h1>
                Technology should move{" "}
                <em>your business forward.</em>
              </h1>

              <p className="about-lead">
                We bring software engineering, cloud, and data capabilities
                together to help solve real business challenges—with clarity
                from the first conversation to delivery.
              </p>

              <div className="about-actions">
                <Link
                  to="/contact"
                  className="about-btn about-btn-primary"
                >
                  Discuss your project <b>↗</b>
                </Link>

                <a
                  href="#our-approach"
                  className="about-btn about-btn-outline"
                >
                  Our approach <b>↓</b>
                </a>
              </div>

              <p className="about-hero-note">
                <span />
                A practical, collaborative approach to building digital
                solutions.
              </p>
            </div>

            <div className="about-hero-visual about-reveal about-reveal-right">
              <div className="about-photo">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
                  alt="Colleagues collaborating around a table"
                  fetchPriority="high"
                />
              </div>

              <div className="about-photo-label">
                <strong>
                  OCAS<span>®</span>
                </strong>

                <div>
                  <b>People first. Technology with purpose.</b>
                  <small>
                    COLLABORATION · ENGINEERING · IMPACT
                  </small>
                </div>
              </div>

              <div className="about-photo-corner">
                01 <span>/</span> 04
              </div>
            </div>
          </div>

          <div className="about-hero-footer">
            <span>SOFTWARE ENGINEERING</span>
            <span>CLOUD & DEVOPS</span>
            <span>AI & DATA SOLUTIONS</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="about-story" id="our-story">
        <div className="about-container about-story-grid">
          <div className="about-label about-reveal about-reveal-left">
            <b>01</b>
            <i />
            WHO WE ARE
          </div>

          <div className="about-story-copy about-reveal about-reveal-right">
            <h2>
              We connect business needs with{" "}
              <em>thoughtful engineering.</em>
            </h2>

            <div className="about-two-col">
              <p>
                At OCAS, our focus is on making technology useful. That starts
                with understanding the challenge before proposing a solution,
                choosing an approach that fits, and building digital systems
                people can rely on.
              </p>

              <p>
                From custom software to cloud platforms and AI-enabled data
                solutions, we consider the full picture: the people using the
                technology, the teams maintaining it, and the outcomes the
                business needs to achieve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="about-purpose">
        <div className="about-container about-purpose-grid">
          <article className="about-purpose-card about-reveal about-reveal-left">
            <span>OUR MISSION</span>
            <i>↗</i>

            <h3>Make technology genuinely useful.</h3>

            <p>
              Help organisations solve meaningful problems through dependable
              software, clear collaboration, and practical digital solutions.
            </p>
          </article>

          <article className="about-purpose-card about-purpose-dark about-reveal about-reveal-right">
            <span>OUR VISION</span>
            <i>◎</i>

            <h3>Build for lasting progress.</h3>

            <p>
              Contribute to a future where well-designed technology makes work
              simpler, decisions smarter, and businesses more adaptable.
            </p>
          </article>
        </div>
      </section>

      {/* SERVICES */}
      <section className="about-services" id="what-we-do">
        <div className="about-container">
          <div className="about-section-head">
            <div className="about-reveal about-reveal-left">
              <div className="about-label about-label-light">
                <b>02</b>
                <i />
                WHAT WE DO
              </div>

              <h2>
                Capabilities built around{" "}
                <em>real business needs.</em>
              </h2>
            </div>

            <p className="about-reveal about-reveal-right">
              We bring the right technical disciplines together so your
              solution works as a whole—not as a collection of disconnected
              parts.
            </p>
          </div>

          <div className="about-service-list">
            {services.map((service) => (
              <article
                className="about-service about-reveal about-reveal-left"
                key={service.n}
              >
                <span className="about-service-no">{service.n}</span>

                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <small>{service.tags}</small>
                </div>

                <Link
                  to="/services"
                  aria-label={`Explore ${service.title}`}
                >
                  ↗
                </Link>
              </article>
            ))}
          </div>

          <div className="about-service-bottom">
            <span>ONE PARTNER. CONNECTED CAPABILITIES.</span>

            <Link to="/services">
              Explore all services <b>→</b>
            </Link>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values">
        <div className="about-container about-values-grid">
          <div className="about-values-intro about-reveal about-reveal-left">
            <div className="about-label">
              <b>03</b>
              <i />
              WHAT GUIDES US
            </div>

            <h2>
              Good outcomes start with{" "}
              <em>good principles.</em>
            </h2>

            <p>
              How we approach the work matters as much as what we deliver.
            </p>

            <div className="about-team-photo">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=85"
                alt="Team members working together on a project"
                loading="lazy"
              />

              <span>BETTER WORK, BUILT TOGETHER.</span>
            </div>
          </div>

          <div className="about-value-list">
            {values.map(([number, title, text]) => (
              <article
                className="about-value about-reveal about-reveal-right"
                key={number}
              >
                <b>{number}</b>

                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>

                <span>↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="about-approach" id="our-approach">
        <div className="about-container">
          <div className="about-section-head">
            <div className="about-reveal about-reveal-left">
              <div className="about-label about-label-light">
                <b>04</b>
                <i />
                OUR APPROACH
              </div>

              <h2>
                From first conversation to{" "}
                <em>real-world results.</em>
              </h2>
            </div>

            <p className="about-reveal about-reveal-right">
              A straightforward process keeps the work focused, collaborative,
              and moving in the right direction.
            </p>
          </div>

          <div className="about-steps">
            {steps.map(([number, title, text]) => (
              <article
                className="about-step about-reveal about-reveal-up"
                key={number}
              >
                <div>
                  <span>{number}</span>
                  <i />
                </div>

                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="about-cta">
        <div className="about-container about-cta-inner">
          <div className="about-cta-copy about-reveal about-reveal-left">
            <span className="about-cta-kicker">
              <i />
              LET’S TALK ABOUT WHAT YOU NEED
            </span>

            <h2>
              Have a challenge you’re ready to{" "}
              <em>solve?</em>
            </h2>

            <p>
              Tell us what you’re working toward. We’ll start with the problem,
              talk through the possibilities, and identify a practical next
              step.
            </p>
          </div>

          <div className="about-cta-actions about-reveal about-reveal-right">
            <Link
              to="/contact"
              className="about-btn about-btn-primary"
            >
              Start a conversation <b>↗</b>
            </Link>

            <Link to="/services" className="about-cta-link">
              Discover our services <b>→</b>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
