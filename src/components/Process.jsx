import React, { useEffect } from "react";
import "./Process.css";

const processSteps = [
  {
    number: "01",
    phase: "ALIGN",
    title: "Discovery & Strategy",
    description:
      "We begin by understanding your business, users, priorities, and constraints. This gives the project a clear direction before development starts.",
    details: [
      "Business goals and requirements",
      "Stakeholder and user needs",
      "Technical feasibility assessment",
      "Project scope and delivery roadmap",
    ],
    outcome: "A shared definition of success",
    accent: "blue",
  },
  {
    number: "02",
    phase: "DESIGN",
    title: "Design & Architecture",
    description:
      "We turn requirements into a practical product blueprint, pairing thoughtful user experience with a technical foundation that can grow.",
    details: [
      "Information architecture and user flows",
      "Wireframes and interface direction",
      "System architecture planning",
      "Technology stack selection",
    ],
    outcome: "A clear plan for what we will build",
    accent: "violet",
  },
  {
    number: "03",
    phase: "BUILD",
    title: "Agile Development & QA",
    description:
      "We build in focused iterations, share progress regularly, and test continuously so quality and visibility are part of the process—not an afterthought.",
    details: [
      "Sprint-based implementation",
      "Code reviews and integration",
      "Functional, usability, and regression testing",
      "Regular demos and feedback cycles",
    ],
    outcome: "Tested features you can review",
    accent: "mint",
  },
  {
    number: "04",
    phase: "DELIVER",
    title: "Launch & Ongoing Support",
    description:
      "We prepare the product for release, support a smooth deployment, and help you keep improving after it reaches real users.",
    details: [
      "Release planning and deployment",
      "Performance and security checks",
      "Monitoring and issue resolution",
      "Iteration based on real-world feedback",
    ],
    outcome: "A supported product ready to evolve",
    accent: "amber",
  },
];

const principles = [
  {
    number: "01",
    title: "No hidden surprises",
    text: "Clear milestones, realistic expectations, and open conversations help everyone understand what is happening and what comes next.",
    accent: "blue",
  },
  {
    number: "02",
    title: "Feedback built in",
    text: "Frequent reviews give your team meaningful opportunities to validate decisions before they become expensive changes.",
    accent: "violet",
  },
  {
    number: "03",
    title: "Quality at every step",
    text: "Testing, maintainability, accessibility, and performance are considered throughout delivery—not only at the finish line.",
    accent: "mint",
  },
];

const engagementItems = [
  "A clear project scope and priorities",
  "Regular progress updates and demonstrations",
  "Documented decisions and next steps",
  "A practical handover and support plan",
];

export default function Process() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".process-page .process-reveal, .process-page .process-reveal-left, .process-page .process-reveal-right"
    );

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
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
        threshold: 0.12,
        rootMargin: "0px 0px -55px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="process-page">
      {/* Hero */}
      <section className="process-hero">
        <div className="process-hero-orbit process-hero-orbit-one" aria-hidden="true" />
        <div className="process-hero-orbit process-hero-orbit-two" aria-hidden="true" />
        <div className="process-hero-grid-pattern" aria-hidden="true" />

        <div className="process-hero-inner">
          <div className="process-hero-copy process-reveal-left">
            <span className="process-eyebrow">
              <span className="process-eyebrow-dot" />
              HOW WE WORK
            </span>
            <h1>
              Great outcomes start with a <span>clear process.</span>
            </h1>
            <p>
              From the first conversation to launch and beyond, we keep the work
              structured, collaborative, and transparent—so you can move forward
              with confidence.
            </p>

            <div className="process-hero-actions">
              <a href="/contact" className="process-primary-button">
                Discuss your project <span aria-hidden="true">↗</span>
              </a>
              <a href="#process-steps" className="process-text-link">
                Explore our process <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div className="process-hero-trust">
              <span className="process-trust-mark" aria-hidden="true">✓</span>
              <span>Clear milestones</span>
              <i aria-hidden="true" />
              <span>Collaborative delivery</span>
            </div>
          </div>

          <div className="process-hero-visual process-reveal-right">
            <div className="process-visual-topline">
              <span className="process-live-dot" />
              DELIVERY FRAMEWORK
              <span className="process-visual-version">01 — 04</span>
            </div>

            <div className="process-visual-flow">
              {processSteps.map((step, index) => (
                <div
                  className={`process-flow-item process-accent-${step.accent}`}
                  key={step.number}
                  style={{ "--flow-delay": `${index * 100}ms` }}
                >
                  <span className="process-flow-number">{step.number}</span>
                  <span className="process-flow-copy">
                    <strong>{step.title}</strong>
                    <small>{step.phase}</small>
                  </span>
                  <span className="process-flow-check" aria-hidden="true">
                    {index === 3 ? "↗" : "✓"}
                  </span>
                </div>
              ))}
            </div>

            <div className="process-visual-footer">
              <span className="process-footer-icon" aria-hidden="true">✳</span>
              <span>
                <strong>One connected journey</strong>
                <small>Plan clearly. Build thoughtfully. Improve continuously.</small>
              </span>
            </div>
            <div className="process-visual-glow" aria-hidden="true" />
          </div>
        </div>

        <a href="#process-steps" className="process-scroll-cue" aria-label="Scroll to our process">
          <span />
        </a>
      </section>

      {/* Process overview */}
      <section className="process-section" id="process-steps">
        <div className="process-section-inner">
          <div className="process-section-heading process-reveal">
            <span className="process-kicker"><span /> THE FOUR PHASES</span>
            <h2>A reliable path from <em>idea</em> to impact.</h2>
            <p>
              Each phase has a purpose, clear activities, and an outcome you can
              understand. We adapt the details to your project while keeping
              communication consistent.
            </p>
          </div>

          <div className="process-steps-list">
            {processSteps.map((step, index) => (
              <article
                className={`process-step-card process-accent-${step.accent} ${
                  index % 2 === 0 ? "process-reveal-left" : "process-reveal-right"
                }`}
                key={step.number}
                style={{ "--step-delay": `${(index % 2) * 120}ms` }}
              >
                <div className="process-step-rail">
                  <span className="process-step-index">{step.number}</span>
                  {index < processSteps.length - 1 && (
                    <span className="process-step-connector" aria-hidden="true" />
                  )}
                </div>

                <div className="process-step-main">
                  <div className="process-step-meta">
                    <span className="process-phase">{step.phase}</span>
                    <span className="process-step-count">PHASE {step.number} / 04</span>
                  </div>
                  <h3>{step.title}</h3>
                  <p className="process-step-description">{step.description}</p>
                  <ul className="process-step-details">
                    {step.details.map((detail) => (
                      <li key={detail}>
                        <span aria-hidden="true">✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="process-step-outcome">
                    <span className="process-outcome-icon" aria-hidden="true">↗</span>
                    <span><small>PHASE OUTCOME</small><strong>{step.outcome}</strong></span>
                  </div>
                </div>

                <div className="process-step-art" aria-hidden="true">
                  <div className="process-art-ring process-art-ring-one" />
                  <div className="process-art-ring process-art-ring-two" />
                  <span className="process-art-number">{step.number}</span>
                  <span className="process-art-label">{step.phase}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="process-timeline-note process-reveal">
            <span className="process-timeline-note-icon" aria-hidden="true">✦</span>
            <p>
              <strong>Built around your needs.</strong> Project size, complexity,
              and team structure can vary. We tailor the level of planning and
              collaboration to fit the work.
            </p>
          </div>
        </div>
      </section>

      {/* Collaboration principles */}
      <section className="process-principles">
        <div className="process-principles-inner">
          <div className="process-principles-intro process-reveal-left">
            <span className="process-kicker process-kicker-light"><span /> WHAT YOU CAN EXPECT</span>
            <h2>Good process means better collaboration.</h2>
            <p>
              The way we work matters as much as what we deliver. We keep
              decisions visible, invite feedback early, and make quality a
              shared responsibility.
            </p>
            <a href="/contact" className="process-inline-link">
              Let's work together <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="process-principle-cards">
            {principles.map((item, index) => (
              <article
                className={`process-principle-card process-accent-${item.accent} process-reveal`}
                key={item.number}
                style={{ "--principle-delay": `${index * 110}ms` }}
              >
                <div className="process-principle-top">
                  <span>{item.number}</span>
                  <span className="process-principle-arrow" aria-hidden="true">↗</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="process-principle-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables / visibility */}
      <section className="process-engagement">
        <div className="process-engagement-inner">
          <div className="process-engagement-visual process-reveal-left">
            <div className="process-engagement-window">
              <div className="process-window-bar">
                <span /><span /><span />
                <small>PROJECT CHECKPOINT</small>
              </div>
              <div className="process-window-body">
                <span className="process-window-label">DELIVERY STATUS</span>
                <h3>Clear at every stage.</h3>
                <div className="process-progress-track">
                  <span />
                </div>
                <div className="process-progress-caption">
                  <span>Progress you can follow</span>
                  <strong>Continuous</strong>
                </div>
                <div className="process-checkpoint-row">
                  <span className="process-checkpoint-icon">✓</span>
                  <span><strong>Milestones</strong><small>Know what comes next</small></span>
                </div>
                <div className="process-checkpoint-row">
                  <span className="process-checkpoint-icon">✓</span>
                  <span><strong>Feedback</strong><small>Review work as it evolves</small></span>
                </div>
                <div className="process-checkpoint-row">
                  <span className="process-checkpoint-icon">✓</span>
                  <span><strong>Handover</strong><small>Understand what is delivered</small></span>
                </div>
              </div>
            </div>
            <div className="process-floating-badge">
              <span aria-hidden="true">✦</span>
              Visibility by design
            </div>
          </div>

          <div className="process-engagement-copy process-reveal-right">
            <span className="process-kicker"><span /> WORKING TOGETHER</span>
            <h2>Always know where your project stands.</h2>
            <p>
              You should not have to chase updates or guess what happens next.
              Our delivery approach is designed to keep priorities, progress,
              and decisions easy to follow.
            </p>
            <ul className="process-engagement-list">
              {engagementItems.map((item) => (
                <li key={item}><span aria-hidden="true">✓</span>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="process-cta">
        <div className="process-cta-orb process-cta-orb-one" aria-hidden="true" />
        <div className="process-cta-orb process-cta-orb-two" aria-hidden="true" />
        <div className="process-cta-inner process-reveal">
          <span className="process-cta-eyebrow"><span /> YOUR NEXT STEP</span>
          <h2>Have an idea? Let's make a plan.</h2>
          <p>
            Tell us what you want to achieve. We'll discuss your goals, explore
            the right approach, and identify practical next steps together.
          </p>
          <div className="process-cta-actions">
            <a href="/contact" className="process-primary-button process-primary-button-light">
              Start a conversation <span aria-hidden="true">↗</span>
            </a>
            <a href="/services" className="process-cta-secondary">
              Explore our services <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="process-cta-footnote">
            <span aria-hidden="true">✓</span> Thoughtful planning. Transparent delivery. Long-term partnership.
          </div>
        </div>
      </section>
    </main>
  );
}
