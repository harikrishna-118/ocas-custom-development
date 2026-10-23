
import React from "react";
import "./Process.css";

const processSteps = [
  {
    number: "1",
    title: "Discovery & Strategy",
    description:
      "We start by understanding your goals, constraints, and existing systems before writing a single line of code.",
    details: [
      "Business goals and requirements",
      "Technical feasibility assessment",
      "Project scope and roadmap",
    ],
  },
  {
    number: "2",
    title: "Design & Architecture",
    description:
      "Technical architecture and interface design happen together, so the product is both usable and built to last.",
    details: [
      "System architecture planning",
      "User experience and interface design",
      "Technology stack selection",
    ],
  },
  {
    number: "3",
    title: "Agile Development & QA",
    description:
      "Iterative sprints with continuous testing keep the project visible and on track from the first milestone.",
    details: [
      "Sprint-based development",
      "Continuous integration and testing",
      "Regular progress demonstrations",
    ],
  },
  {
    number: "4",
    title: "Launch & Ongoing Support",
    description:
      "We handle deployment and stay on for monitoring, iteration, and support after launch.",
    details: [
      "Production deployment",
      "Performance and security monitoring",
      "Continuous improvements and support",
    ],
  },
];

export default function Process() {
  return (
    <main className="process-page">
      {/* Hero Section */}
      <section className="process-hero">
        <div className="process-hero-inner">
          <span className="process-eyebrow">OUR PROCESS</span>

          <h1>A process built for visibility, not surprises</h1>

          <p>
            Every engagement follows the same disciplined process, so you
            always know what's happening and why.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="process-section">
        <div className="process-section-inner">
          <div className="process-section-heading">
            <span className="process-label">
              <span className="process-label-line"></span>
              OUR PROCESS
            </span>

            <h2>A process built for visibility, not surprises.</h2>
          </div>

          <div className="process-grid">
            {processSteps.map((step) => (
              <article className="process-card" key={step.number}>
                <div className="process-card-top">
                  <span className="process-number">{step.number}</span>

                  <span className="process-card-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>

                <h3>{step.title}</h3>

                <p className="process-description">{step.description}</p>

                <div className="process-details">
                  {step.details.map((detail) => (
                    <div className="process-detail" key={detail}>
                      <span aria-hidden="true">✓</span>
                      <p>{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Delivery Promise */}
          <div className="process-promise">
            <div className="process-promise-icon" aria-hidden="true">
              ✓
            </div>

            <div className="process-promise-content">
              <h3>Clarity at every stage</h3>
              <p>
                Defined milestones, transparent communication, and regular
                updates keep your team informed throughout the engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="process-cta">
        <div className="process-cta-inner">
          <span className="process-cta-eyebrow">LET'S GET STARTED</span>

          <h2>Ready to build something great?</h2>

          <p>
            Tell us about your project and we'll walk you through how OCAS
            can help you build it.
          </p>

          <a href="/contact" className="process-cta-button">
            Start a Project
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}
