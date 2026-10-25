import React from "react";
import "./About.css";

export default function About() {
  return (
    <main className="about-page">
      {/* Cinematic video hero */}
      <section className="about-hero">
        <video
          className="about-hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2200&q=85"
        >
          <source
            src="https://videos.pexels.com/video-files/3141208/3141208-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>

        <div className="about-hero-overlay" aria-hidden="true" />
        <div className="about-hero-grid" aria-hidden="true" />
        <div className="about-hero-orb about-hero-orb-one" aria-hidden="true" />
        <div className="about-hero-orb about-hero-orb-two" aria-hidden="true" />

        <div className="about-hero-inner">
          <span className="about-eyebrow">ABOUT OCAS</span>
          <h1>Engineering, treated as a craft.</h1>
          <p>
            OCAS is a software engineering partner for teams that need custom
            applications, cloud infrastructure, and modern engineering
            practices done right.
          </p>

          <div className="about-hero-meta">
            <span className="about-live-dot" />
            Thoughtful engineering. Built for what comes next.
          </div>
        </div>

        <div className="about-hero-scroll" aria-hidden="true">
          <span />
          <small>SCROLL TO EXPLORE</small>
        </div>
      </section>

      {/* Story section */}
      <section className="about-content">
        <div className="about-content-inner">
          <div className="about-section-heading">
            <span className="about-section-kicker">WHO WE ARE</span>
            <h2>Good software starts with <span>good thinking.</span></h2>
            <p>
              We bring clarity to complex engineering challenges, from the first
              conversation to long after launch.
            </p>
          </div>

          <div className="about-story-grid">
            <article className="about-story-card about-story-card-main">
              <span className="about-card-index">01 / OUR APPROACH</span>
              <div className="about-card-symbol" aria-hidden="true">✳</div>
              <p className="about-paragraph">
                Too many software projects fail not because of bad ideas, but
                because of rushed architecture, unclear ownership, and engineering
                teams treated as an assembly line instead of a craft. OCAS exists
                to do it differently — pairing senior engineers with a disciplined
                process, so every project stays visible from kickoff to launch and
                beyond.
              </p>
              <span className="about-card-glow" aria-hidden="true" />
            </article>

            <article className="about-story-card about-story-card-secondary">
              <span className="about-card-index">02 / OUR EXPERTISE</span>
              <div className="about-card-symbol" aria-hidden="true">⌘</div>
              <p className="about-paragraph">
                We work across custom software development, cloud and DevOps
                engineering, AI and data engineering, mobile app development, and
                enterprise systems integration — bringing the same standard of
                care to a two-week integration as we do to a year-long platform
                build.
              </p>
              <span className="about-card-glow" aria-hidden="true" />
            </article>
          </div>

          <div className="about-principle">
            <div className="about-principle-mark" aria-hidden="true">“</div>
            <div>
              <span className="about-section-kicker">OUR PRINCIPLE</span>
              <p className="about-paragraph about-closing">
                The result is software that's built to be maintained, not just
                shipped.
              </p>
            </div>
            <div className="about-principle-line" aria-hidden="true" />
          </div>

          {/* Project CTA */}
          <div className="about-cta">
            <div className="about-cta-orbit about-cta-orbit-one" aria-hidden="true" />
            <div className="about-cta-orbit about-cta-orbit-two" aria-hidden="true" />
            <div className="about-cta-content">
              <span className="about-section-kicker">HAVE A CHALLENGE IN MIND?</span>
              <h2>Let's build something <span>meaningful.</span></h2>
              <p>
                Tell us what you're building and we'll follow up with clear,
                practical next steps.
              </p>
              <div className="about-cta-actions">
                <a href="/contact" className="about-button about-button-primary">
                  Start a Project <span aria-hidden="true">↗</span>
                </a>
                <a href="/services" className="about-button about-button-secondary">
                  Explore Services <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="about-cta-foot">
              <span><i /> Clear communication</span>
              <span><i /> Thoughtful delivery</span>
              <span><i /> Long-term thinking</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
