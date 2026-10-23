
import React from "react";
import "./About.css";

export default function About() {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <span className="about-eyebrow">ABOUT US</span>

          <h1>Engineering, treated as a craft</h1>

          <p>
            OCAS is a software engineering partner for teams that need custom
            applications, cloud infrastructure, and modern engineering
            practices done right.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="about-content-inner">
          <p className="about-paragraph">
            Too many software projects fail not because of bad ideas, but
            because of rushed architecture, unclear ownership, and engineering
            teams treated as an assembly line instead of a craft. OCAS exists
            to do it differently — pairing senior engineers with a disciplined
            process, so every project stays visible from kickoff to launch and
            beyond.
          </p>

          <p className="about-paragraph">
            We work across custom software development, cloud and DevOps
            engineering, AI and data engineering, mobile app development, and
            enterprise systems integration — bringing the same standard of
            care to a two-week integration as we do to a year-long platform
            build.
          </p>

          <p className="about-paragraph about-closing">
            The result is software that's built to be maintained, not just
            shipped.
          </p>

          {/* Project CTA */}
          <div className="about-cta">
            <h2>Let's talk about your project</h2>

            <p>
              Tell us what you're building and we'll follow up with next steps.
            </p>

            <div className="about-cta-actions">
              <a href="/contact" className="about-button about-button-primary">
                Start a Project
                <span aria-hidden="true">→</span>
              </a>

              <a href="/services" className="about-button about-button-secondary">
                View services
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
