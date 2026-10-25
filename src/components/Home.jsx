
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";


export default function Home() {
  const heroVideoRef = useRef(null);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    let retryTimer;
    const keepVideoPlaying = () => {
      if (document.visibilityState !== "visible") return;
      video.muted = true;
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          // Retry after a short delay if the browser temporarily blocks playback.
          window.clearTimeout(retryTimer);
          retryTimer = window.setTimeout(() => {
            if (document.visibilityState === "visible") keepVideoPlaying();
          }, 1200);
        });
      }
    };

    const restartVideo = () => {
      video.currentTime = 0;
      keepVideoPlaying();
    };
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") keepVideoPlaying();
    };

    video.addEventListener("pause", keepVideoPlaying);
    video.addEventListener("ended", restartVideo);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    keepVideoPlaying();

    return () => {
      window.clearTimeout(retryTimer);
      video.removeEventListener("pause", keepVideoPlaying);
      video.removeEventListener("ended", restartVideo);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".ocas-home .home-intro, .ocas-home .delivery-item, .ocas-home .principle-card, " +
      ".ocas-home .home-services, .ocas-home .service-card, .ocas-home .industry-card, " +
      ".ocas-home .home-process, .ocas-home .process-card, .ocas-home .client-card, " +
      ".ocas-home .home-cta, .ocas-home .home-contact"
    );

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    elements.forEach((element) => element.classList.add("scroll-reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isScrollToggleCard =
            entry.target.classList.contains("industry-card") ||
            entry.target.classList.contains("process-card");

          if (isScrollToggleCard) {
            entry.target.classList.toggle("is-visible", entry.isIntersecting);
          } else if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -12% 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="ocas-home">

      {/* HERO */}
      <section className="home-hero" id="home">
        <video
          ref={heroVideoRef}
          className="hero-background-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=85"
          disablePictureInPicture
          aria-hidden="true"
          tabIndex={-1}
        >
          <source
            src="/videos/ocas-team-work.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-dots"></div>

        <svg className="hero-art" viewBox="0 0 750 260" fill="none" aria-hidden="true">
          <path d="M5 245C65 218 70 177 111 144S146 60 174 34 195 78 225 48 251 23 258 75 276 140 301 95 329 49 356 64" />
          <path d="M90 254C173 218 240 208 311 198S421 184 443 149 476 125 500 155 525 209 549 174 586 120 613 146 653 185 692 165" />
          <path d="M200 180C226 132 251 117 258 89S266 39 286 54 293 108 310 132 328 89 345 77" />
        </svg>

        <div className="hero-content">
          <h1><span>Build</span> software that lasts.</h1>
          <p>
            Custom software, cloud infrastructure, and applied AI —
            engineered for teams that need it built right, from first
            sketch to production.
          </p>
          <Link to="/contact" className="home-primary-button">
            Start a Project <span>→</span>
          </Link>

        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="home-intro" id="about">
        <div className="intro-top">
          <div className="intro-heading">
            <div className="home-eyebrow"><span></span> WHAT DO WE DO?</div>
            <h2>Software that builds momentum</h2>
          </div>

          <p className="intro-description">
            Custom software built for teams that need it done right.
            We architect systems that plug into how you already run your
            business, ship them with modern engineering practices, and
            stay on to support what we build.
          </p>
        </div>

        <div className="principles-grid">
          <div className="principle-card">
            <h3>01 / Custom-Built</h3>
            <p>Software modeled around how your team actually works, not a template.</p>
          </div>

          <div className="principle-card">
            <h3>02 / Cloud-Native</h3>
            <p>Infrastructure and pipelines built to scale without duct tape.</p>
          </div>

          <div className="principle-card">
            <h3>03 / Secure by Design</h3>
            <p>Security and compliance considered from architecture, not bolted on later.</p>
          </div>
        </div>
      </section>

      {/* DELIVERY PILLARS */}
      <section className="delivery-band">
        <div className="delivery-grid">
          <div className="delivery-item">
            <span className="delivery-icon" aria-hidden="true">✳</span>
            <h3>Agile Delivery</h3>
          </div>

          <div className="delivery-item">
            <span className="delivery-icon" aria-hidden="true">☁</span>
            <h3>Cloud-Native Architecture</h3>
          </div>

          <div className="delivery-item">
            <span className="delivery-icon" aria-hidden="true">⌁</span>
            <h3>Security-First Engineering</h3>
          </div>

          <div className="delivery-item">
            <span className="delivery-icon" aria-hidden="true">↗</span>
            <h3>Dedicated Support</h3>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="home-services section-shell" id="services">
        <div className="home-eyebrow"><span></span> SERVICES</div>
        <h2>Engineering services built for real product work.</h2>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-card-image"><img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=82" alt="Developer writing custom software" loading="lazy" /></div>
            <div className="service-card-content">
            <h3>Custom Software Development</h3>
            <p>Tailored web and enterprise applications built around how your business actually runs.</p>
            <div className="tech-tags">
              <span>TypeScript</span><span>React</span><span>Node.js</span>
            </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card-image"><img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=85" alt="Cloud infrastructure server racks" loading="lazy" /></div>
            <div className="service-card-content">
            <h3>Cloud &amp; DevOps Engineering</h3>
            <p>Resilient cloud infrastructure and automated delivery pipelines.</p>
            <div className="tech-tags">
              <span>AWS</span><span>Docker</span><span>Kubernetes</span>
            </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card-image"><img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85" alt="Artificial intelligence and data technology" loading="lazy" /></div>
            <div className="service-card-content">
            <h3>AI &amp; Data Engineering</h3>
            <p>Data pipelines and applied AI that turn information into decisions.</p>
            <div className="tech-tags">
              <span>Python</span><span>PostgreSQL</span><span>Airflow</span>
            </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card-image"><img src="https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1400&q=85" alt="Smartphone for mobile app development" loading="lazy" /></div>
            <div className="service-card-content">
            <h3>Mobile App Development</h3>
            <p>Native-feeling apps for iOS and Android from a single codebase.</p>
            <div className="tech-tags">
              <span>React Native</span><span>Swift</span><span>Kotlin</span>
            </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card-image"><img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85" alt="Connected digital systems and cybersecurity" loading="lazy" /></div>
            <div className="service-card-content">
            <h3>Enterprise Systems Integration</h3>
            <p>Connect and modernize the systems your business already depends on.</p>
            <div className="tech-tags">
              <span>REST/SOAP APIs</span><span>Salesforce</span><span>SAP</span>
            </div>
            </div>
          </div>
        </div>

        <Link to="/services" className="home-text-link">View all services →</Link>
      </section>

      {/* INDUSTRIES — 7 STICKY SCROLL CARDS */}
      <section className="home-industries" id="industries">
        <header className="industries-heading">
          <div className="home-eyebrow"><span></span> INDUSTRIES</div>
          <h2>Where we build</h2>
          <p>Purpose-built digital experiences for complex, real-world industries.</p>
        </header>

        {/* 1. BANKING */}
        <article className="industry-card" id="industry-1">
          <div className="industry-image industry-icon-panel industry-icon-panel--bank" aria-hidden="true">
            <div className="industry-icon-glow"></div>
            <svg viewBox="0 0 120 120" role="img" aria-label="Banking icon"><path d="M16 43 60 18l44 25H16Z"/><path d="M23 49h74M28 49v39m21-39v39m22-39v39m21-39v39M19 94h82M13 103h94"/></svg>
            <span className="industry-icon-label">Bank</span>
          </div>

          <div className="industry-content">
            <div className="home-eyebrow"><span></span> INDUSTRIES · 1/7</div>
            <h2>Banking &amp; Financial Services</h2>
            <p className="industry-subtitle">Secure, compliant software for financial institutions.</p>
            <p className="industry-description">
              We build digital banking platforms, risk tooling, and compliance-aware
              systems for banks, lenders, and fintech companies operating under strict
              regulatory requirements.
            </p>

            <ul className="industry-features">
              <li><span>✓</span><div><strong>Core system modernization</strong><p>Migrating legacy financial systems to secure, API-driven architectures.</p></div></li>
              <li><span>✓</span><div><strong>Compliance-first design</strong><p>Built with data security and audit requirements in mind from day one.</p></div></li>
              <li><span>✓</span><div><strong>Risk &amp; fraud tooling</strong><p>Real-time transaction monitoring and underwriting decision support.</p></div></li>
            </ul>

            <div className="tech-tags industry-tags">
              <span>PCI-DSS</span><span>SOC 2</span><span>Plaid</span><span>Core Banking APIs</span>
            </div>
            <Link to="/contact" className="industry-cta">Discuss your project →</Link>
          </div>

          <nav className="industry-progress" aria-label="Industry navigation">
            <a className="active" href="#industry-1" aria-label="Banking"></a>
            <a href="#industry-2" aria-label="Healthcare"></a>
            <a href="#industry-3" aria-label="E-Commerce"></a>
            <a href="#industry-4" aria-label="Manufacturing"></a>
            <a href="#industry-5" aria-label="Education"></a>
            <a href="#industry-6" aria-label="Government"></a>
            <a href="#industry-7" aria-label="AI Automation"></a>
          </nav>
        </article>

        {/* 2. HEALTHCARE */}
        <article className="industry-card" id="industry-2">
          <div className="industry-image industry-icon-panel industry-icon-panel--healthcare" aria-hidden="true">
            <div className="industry-icon-glow"></div>
            <svg viewBox="0 0 120 120" role="img" aria-label="Healthcare icon"><path d="M60 101S17 75 17 43c0-23 29-32 43-10 14-22 43-13 43 10 0 32-43 58-43 58Z"/><path d="M60 43v34M43 60h34"/></svg>
            <span className="industry-icon-label">Healthcare</span>
          </div>

          <div className="industry-content">
            <div className="home-eyebrow"><span></span> INDUSTRIES · 2/7</div>
            <h2>Healthcare</h2>
            <p className="industry-subtitle">Reliable software for providers, payers, and health tech companies.</p>
            <p className="industry-description">
              We design patient-facing and clinical software with the data privacy
              and interoperability standards healthcare organizations require.
            </p>

            <ul className="industry-features">
              <li><span>✓</span><div><strong>Interoperability</strong><p>Integrations with clinical systems and health data standards.</p></div></li>
              <li><span>✓</span><div><strong>Patient-facing platforms</strong><p>Portals and applications built for accessibility and trust.</p></div></li>
              <li><span>✓</span><div><strong>Clinical workflow tools</strong><p>Scheduling, charting, and care-coordination software that fits real workflows.</p></div></li>
            </ul>

            <div className="tech-tags industry-tags">
              <span>HL7/FHIR</span><span>HIPAA</span><span>Epic</span><span>Twilio</span>
            </div>
            <Link to="/contact" className="industry-cta">Discuss your project →</Link>
          </div>

          <nav className="industry-progress" aria-label="Industry navigation">
            <a href="#industry-1" aria-label="Banking"></a>
            <a className="active" href="#industry-2" aria-label="Healthcare"></a>
            <a href="#industry-3" aria-label="E-Commerce"></a>
            <a href="#industry-4" aria-label="Manufacturing"></a>
            <a href="#industry-5" aria-label="Education"></a>
            <a href="#industry-6" aria-label="Government"></a>
            <a href="#industry-7" aria-label="AI Automation"></a>
          </nav>
        </article>

        {/* 3. E-COMMERCE */}
        <article className="industry-card" id="industry-3">
          <div className="industry-image industry-icon-panel industry-icon-panel--commerce" aria-hidden="true">
            <div className="industry-icon-glow"></div>
            <svg viewBox="0 0 120 120" role="img" aria-label="E-commerce icon"><path d="M18 26h12l10 51h48l13-36H35"/><circle cx="49" cy="94" r="6"/><circle cx="82" cy="94" r="6"/><path d="M47 48h34m-17-17v34"/></svg>
            <span className="industry-icon-label">E-Commerce</span>
          </div>

          <div className="industry-content">
            <div className="home-eyebrow"><span></span> INDUSTRIES · 3/7</div>
            <h2>E-Commerce</h2>
            <p className="industry-subtitle">Digital-first storefronts and checkout experiences built to convert.</p>
            <p className="industry-description">
              We build headless storefronts, checkout flows, and post-purchase experiences
              for direct-to-consumer brands and marketplaces that need to move fast
              without sacrificing reliability.
            </p>

            <ul className="industry-features">
              <li><span>✓</span><div><strong>Headless storefronts</strong><p>Composable commerce architecture that integrates with the tools you already use.</p></div></li>
              <li><span>✓</span><div><strong>Checkout &amp; payments</strong><p>Fast, reliable checkout flows with fraud protection and multiple payment methods.</p></div></li>
              <li><span>✓</span><div><strong>Post-purchase experience</strong><p>Order tracking, returns, and retention flows that keep customers coming back.</p></div></li>
            </ul>

            <div className="tech-tags industry-tags">
              <span>Shopify</span><span>Stripe</span><span>Next.js</span><span>Algolia</span>
            </div>
            <Link to="/contact" className="industry-cta">Discuss your project →</Link>
          </div>

          <nav className="industry-progress" aria-label="Industry navigation">
            <a href="#industry-1" aria-label="Banking"></a>
            <a href="#industry-2" aria-label="Healthcare"></a>
            <a className="active" href="#industry-3" aria-label="E-Commerce"></a>
            <a href="#industry-4" aria-label="Manufacturing"></a>
            <a href="#industry-5" aria-label="Education"></a>
            <a href="#industry-6" aria-label="Government"></a>
            <a href="#industry-7" aria-label="AI Automation"></a>
          </nav>
        </article>

        {/* 4. MANUFACTURING */}
        <article className="industry-card" id="industry-4">
          <div className="industry-image industry-icon-panel industry-icon-panel--manufacturing" aria-hidden="true">
            <div className="industry-icon-glow"></div>
            <svg viewBox="0 0 120 120" role="img" aria-label="Manufacturing icon"><path d="M18 102V55l25 15V53l25 17V38l16 10V25h18v77H18Z"/><path d="M31 84h9m12 0h9m12 0h9m12 0h6M87 25V14h8v11"/></svg>
            <span className="industry-icon-label">Manufacturing</span>
          </div>

          <div className="industry-content">
            <div className="home-eyebrow"><span></span> INDUSTRIES · 4/7</div>
            <h2>Manufacturing</h2>
            <p className="industry-subtitle">Software that connects the floor to the front office.</p>
            <p className="industry-description">
              We help manufacturers digitize operations — from production tracking to
              supply chain visibility — with software that fits how plants actually operate.
            </p>

            <ul className="industry-features">
              <li><span>✓</span><div><strong>Operations visibility</strong><p>Dashboards that surface what's happening across facilities in real time.</p></div></li>
              <li><span>✓</span><div><strong>Supply chain tooling</strong><p>Systems that keep planning, procurement, and logistics in sync.</p></div></li>
              <li><span>✓</span><div><strong>Predictive maintenance</strong><p>Sensor-driven insights that flag equipment issues before they cause downtime.</p></div></li>
            </ul>

            <div className="tech-tags industry-tags">
              <span>IIoT</span><span>MES</span><span>SCADA</span><span>Power BI</span>
            </div>
            <Link to="/contact" className="industry-cta">Discuss your project →</Link>
          </div>

          <nav className="industry-progress" aria-label="Industry navigation">
            <a href="#industry-1" aria-label="Banking"></a>
            <a href="#industry-2" aria-label="Healthcare"></a>
            <a href="#industry-3" aria-label="E-Commerce"></a>
            <a className="active" href="#industry-4" aria-label="Manufacturing"></a>
            <a href="#industry-5" aria-label="Education"></a>
            <a href="#industry-6" aria-label="Government"></a>
            <a href="#industry-7" aria-label="AI Automation"></a>
          </nav>
        </article>

        {/* 5. EDUCATION */}
        <article className="industry-card" id="industry-5">
          <div className="industry-image industry-icon-panel industry-icon-panel--education" aria-hidden="true">
            <div className="industry-icon-glow"></div>
            <svg viewBox="0 0 120 120" role="img" aria-label="Education icon"><path d="m12 43 48-25 48 25-48 25-48-25Z"/><path d="M30 54v25c17 15 43 15 60 0V54M108 43v32"/><circle cx="108" cy="81" r="5"/></svg>
            <span className="industry-icon-label">Education</span>
          </div>

          <div className="industry-content">
            <div className="home-eyebrow"><span></span> INDUSTRIES · 5/7</div>
            <h2>Education</h2>
            <p className="industry-subtitle">Platforms for institutions, learners, and administrators.</p>
            <p className="industry-description">
              We build learning platforms and administrative systems for schools,
              universities, and edtech companies focused on outcomes, not just features.
            </p>

            <ul className="industry-features">
              <li><span>✓</span><div><strong>Learning platforms</strong><p>Engaging, accessible experiences for students and instructors.</p></div></li>
              <li><span>✓</span><div><strong>Administrative systems</strong><p>Tools that reduce manual work for staff and faculty.</p></div></li>
              <li><span>✓</span><div><strong>Analytics &amp; outcomes</strong><p>Reporting that helps institutions track engagement and performance.</p></div></li>
            </ul>

            <div className="tech-tags industry-tags">
              <span>LMS</span><span>SIS</span><span>SCORM/xAPI</span><span>Canvas API</span>
            </div>
            <Link to="/contact" className="industry-cta">Discuss your project →</Link>
          </div>

          <nav className="industry-progress" aria-label="Industry navigation">
            <a href="#industry-1" aria-label="Banking"></a>
            <a href="#industry-2" aria-label="Healthcare"></a>
            <a href="#industry-3" aria-label="E-Commerce"></a>
            <a href="#industry-4" aria-label="Manufacturing"></a>
            <a className="active" href="#industry-5" aria-label="Education"></a>
            <a href="#industry-6" aria-label="Government"></a>
            <a href="#industry-7" aria-label="AI Automation"></a>
          </nav>
        </article>

        {/* 6. GOVERNMENT */}
        <article className="industry-card" id="industry-6">
          <div className="industry-image industry-icon-panel industry-icon-panel--government" aria-hidden="true">
            <div className="industry-icon-glow"></div>
            <svg viewBox="0 0 120 120" role="img" aria-label="Government icon"><path d="M15 43 60 18l45 25H15ZM21 50h78M27 50v39m22-39v39m22-39v39m22-39v39M18 96h84M12 105h96"/></svg>
            <span className="industry-icon-label">Government</span>
          </div>

          <div className="industry-content">
            <div className="home-eyebrow"><span></span> INDUSTRIES · 6/7</div>
            <h2>Government &amp; Public Sector</h2>
            <p className="industry-subtitle">Accessible, secure digital services for public agencies.</p>
            <p className="industry-description">
              We build citizen-facing portals and internal case management systems
              designed for accessibility, security, and long-term maintainability.
            </p>

            <ul className="industry-features">
              <li><span>✓</span><div><strong>Accessible public portals</strong><p>Interfaces built to WCAG accessibility standards.</p></div></li>
              <li><span>✓</span><div><strong>Secure infrastructure</strong><p>Architected around public-sector security requirements.</p></div></li>
              <li><span>✓</span><div><strong>Case management</strong><p>Internal workflow systems for permits, benefits, and service requests.</p></div></li>
            </ul>

            <div className="tech-tags industry-tags">
              <span>FedRAMP</span><span>WCAG 2.2</span><span>Section 508</span><span>Salesforce Gov Cloud</span>
            </div>
            <Link to="/contact" className="industry-cta">Discuss your project →</Link>
          </div>

          <nav className="industry-progress" aria-label="Industry navigation">
            <a href="#industry-1" aria-label="Banking"></a>
            <a href="#industry-2" aria-label="Healthcare"></a>
            <a href="#industry-3" aria-label="E-Commerce"></a>
            <a href="#industry-4" aria-label="Manufacturing"></a>
            <a href="#industry-5" aria-label="Education"></a>
            <a className="active" href="#industry-6" aria-label="Government"></a>
            <a href="#industry-7" aria-label="AI Automation"></a>
          </nav>
        </article>

        {/* 7. AI AUTOMATION */}
        <article className="industry-card" id="industry-7">
          <div className="industry-image industry-icon-panel industry-icon-panel--ai" aria-hidden="true">
            <div className="industry-icon-glow"></div>
            <svg viewBox="0 0 120 120" role="img" aria-label="AI automation icon"><rect x="27" y="28" width="66" height="64" rx="14"/><path d="M60 13v15m-17 16h34M45 60h.1M75 60h.1M45 75c8 8 22 8 30 0M14 47h13m66 0h13M14 75h13m66 0h13M43 92v14m34-14v14"/></svg>
            <span className="industry-icon-label">AI Automation</span>
          </div>

          <div className="industry-content">
            <div className="home-eyebrow"><span></span> INDUSTRIES · 7/7</div>
            <h2>Custom AI Automation</h2>
            <p className="industry-subtitle">Practical AI that removes manual work from your business processes.</p>
            <p className="industry-description">
              We design and ship applied AI — from internal copilots to workflow agents
              — that plug directly into how your team already operates, not a generic
              chatbot bolted on top.
            </p>

            <ul className="industry-features">
              <li><span>✓</span><div><strong>Workflow automation</strong><p>AI agents that handle repetitive multi-step processes end to end.</p></div></li>
              <li><span>✓</span><div><strong>Applied LLM integration</strong><p>Retrieval-augmented assistants and copilots grounded in your own data.</p></div></li>
              <li><span>✓</span><div><strong>Human-in-the-loop design</strong><p>Automation with clear override paths, so people stay in control.</p></div></li>
            </ul>

            <div className="tech-tags industry-tags">
              <span>OpenAI</span><span>LangChain</span><span>Vector DBs</span><span>Python</span>
            </div>
            <Link to="/contact" className="industry-cta">Discuss your project →</Link>
          </div>

          <nav className="industry-progress" aria-label="Industry navigation">
            <a href="#industry-1" aria-label="Banking"></a>
            <a href="#industry-2" aria-label="Healthcare"></a>
            <a href="#industry-3" aria-label="E-Commerce"></a>
            <a href="#industry-4" aria-label="Manufacturing"></a>
            <a href="#industry-5" aria-label="Education"></a>
            <a href="#industry-6" aria-label="Government"></a>
            <a className="active" href="#industry-7" aria-label="AI Automation"></a>
          </nav>
        </article>
      </section>

      {/* OUR PROCESS */}
      <section className="home-process section-shell" id="process">
        <div className="home-eyebrow"><span></span> OUR PROCESS</div>
        <h2>A process built for visibility, not surprises.</h2>

        <div className="process-grid">
          <div className="process-card">
            <span className="process-number">1</span>
            <h3>Discovery &amp; Strategy</h3>
            <p>We start by understanding your goals, constraints, and existing systems before writing a single line of code.</p>
          </div>

          <div className="process-card">
            <span className="process-number">2</span>
            <h3>Design &amp; Architecture</h3>
            <p>Technical architecture and interface design happen together, so the product is both usable and built to last.</p>
          </div>

          <div className="process-card">
            <span className="process-number">3</span>
            <h3>Agile Development &amp; QA</h3>
            <p>Iterative sprints with continuous testing keep the project visible and on track from the first milestone.</p>
          </div>

          <div className="process-card">
            <span className="process-number">4</span>
            <h3>Launch &amp; Ongoing Support</h3>
            <p>We handle deployment and stay on for monitoring, iteration, and support after launch.</p>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="home-clients section-shell" id="clients">
        <div className="home-eyebrow"><span></span> CLIENTS</div>
        <h2>Software we've shipped for real businesses.</h2>

        <div className="clients-grid">
          <a href="https://infynixtek.com/" className="client-card">
            <span className="client-card-arrow">↗</span>
            <h3>Infynixtek</h3>
            <span className="client-category">Talent placement &amp; staffing solutions</span>
            <p>Website design and a candidate portal for talent placement.</p>
          </a>

          <a href="https://codebridgetec.com/" className="client-card">
            <span className="client-card-arrow">↗</span>
            <h3>CodeBridge Technologies</h3>
            <span className="client-category">Talent placement &amp; staffing solutions</span>
            <p>Website design and internal staffing management tools.</p>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div className="home-cta-content">
          <h2>Ready to build something great?</h2>
          <p>
            Tell us about your project and we'll walk you through how OCAS
            can help you build it.
          </p>
          <Link to="/contact" className="home-cta-button">Start a Project →</Link>
        </div>
      </section>

      {/* CONTACT */}
      <section className="home-contact" id="contact">
        <div className="contact-intro">
          <p className="contact-breadcrumb">OCAS <span>·</span> Contact us</p>
          <h2>Contact us</h2>
          <p className="contact-subtitle">
            Get in touch and ask us anything — scoping a new build, untangling
            a legacy system, or just figuring out where to start. We answer it all.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-decoration contact-decoration-left">
            <span className="decoration-orbit"></span>
            <span className="decoration-dot"></span>
            <span className="decoration-line"></span>
          </div>

          <form className="contact-form" action="mailto:hello@ocassoftware.com" method="post" encType="text/plain">
            <div className="contact-form-grid">
              <input type="text" name="Name" placeholder="Your name" aria-label="Your name" required />
              <input type="email" name="Email" placeholder="Email address" aria-label="Email address" required />
              <input type="text" name="Country" placeholder="Country" aria-label="Country" />
              <input type="tel" name="Phone" placeholder="Phone number" aria-label="Phone number" />

              <select name="Interested in" aria-label="Interested in" required defaultValue="">
                <option value="" disabled>Interested in</option>
                <option>Custom Software Development</option>
                <option>Cloud &amp; DevOps</option>
                <option>AI &amp; Data Engineering</option>
                <option>Mobile App Development</option>
                <option>Enterprise Integration</option>
                <option>Custom AI Automation</option>
                <option>Other</option>
              </select>

              <input type="text" name="Company" placeholder="Company (optional)" aria-label="Company (optional)" />
              <textarea className="contact-message" name="Message" placeholder="How can we help?" aria-label="How can we help?" rows="5" required></textarea>
            </div>

            <button type="submit" className="contact-submit">Send your message →</button>
          </form>

          <div className="contact-decoration contact-decoration-right">
            <span className="decoration-orbit"></span>
            <span className="decoration-dot"></span>
            <span className="decoration-line"></span>
          </div>
        </div>

        <div className="contact-next-steps">
          <div>
            <span>1</span>
            <h3>We review your details</h3>
            <p>Usually within a few hours of you reaching out.</p>
          </div>

          <div>
            <span>2</span>
            <h3>A short discovery call</h3>
            <p>15–20 minutes to understand scope and timeline.</p>
          </div>

          <div>
            <span>3</span>
            <h3>A scoped proposal</h3>
            <p>Clear plan, estimate, and next steps — no obligation.</p>
          </div>
        </div>

        <a className="contact-email" href="mailto:hello@ocassoftware.com">
          ✉ hello@ocassoftware.com <span>·</span> Reply within 1 business day
        </a>
      </section>

    </main>
  );
}
