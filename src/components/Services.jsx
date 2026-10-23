
import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <main className="ocas-services-page">

      {/* SERVICES HERO */}
      <section className="services-hero">
        <div className="services-hero-inner">
          <div className="services-eyebrow">
            <span></span>
            SERVICES
          </div>

          <h1>Engineering services for real product work</h1>

          <p>
            From first architecture sketch to production support, we cover
            the engineering disciplines that turn an idea into working software.
          </p>
        </div>
      </section>

      {/* SERVICE DETAILS */}
      <section className="services-details">

        {/* 1. CUSTOM SOFTWARE */}
        <article className="service-detail-card">
          <h2>Custom Software Development</h2>

          <p className="service-detail-subtitle">
            Tailored web and enterprise applications built around how your business actually runs.
          </p>

          <p className="service-detail-description">
            We design and build custom software from the ground up — internal tools,
            customer-facing platforms, and everything in between. Every engagement
            starts with understanding your workflows, not fitting you into a template.
          </p>

          <div className="service-features">
            <div className="service-feature">
              <span className="feature-check">✓</span>
              <div>
                <h3>Full-stack engineering</h3>
                <p>End-to-end ownership from database schema to production UI.</p>
              </div>
            </div>

            <div className="service-feature">
              <span className="feature-check">✓</span>
              <div>
                <h3>API-first architecture</h3>
                <p>Clean, documented APIs that make future integrations straightforward.</p>
              </div>
            </div>

            <div className="service-feature">
              <span className="feature-check">✓</span>
              <div>
                <h3>Scalable foundations</h3>
                <p>Systems built to handle growth without a rewrite six months in.</p>
              </div>
            </div>
          </div>

          <div className="service-tech-tags">
            <span>TypeScript</span>
            <span>React</span>
            <span>Node.js</span>
            <span>PostgreSQL</span>
            <span>GraphQL</span>
          </div>
        </article>

        {/* 2. CLOUD & DEVOPS */}
        <article className="service-detail-card">
          <h2>Cloud &amp; DevOps Engineering</h2>

          <p className="service-detail-subtitle">
            Resilient cloud infrastructure and automated delivery pipelines.
          </p>

          <p className="service-detail-description">
            We architect and manage cloud environments on AWS, Azure, and GCP,
            and build the CI/CD pipelines that let your team ship confidently
            and often, without babysitting deployments.
          </p>

          <div className="service-features">
            <div className="service-feature">
              <span className="feature-check">✓</span>
              <div>
                <h3>Infrastructure as code</h3>
                <p>Reproducible environments defined in Terraform, versioned like everything else.</p>
              </div>
            </div>

            <div className="service-feature">
              <span className="feature-check">✓</span>
              <div>
                <h3>Automated CI/CD</h3>
                <p>Pipelines that test, build, and deploy on every merge.</p>
              </div>
            </div>

            <div className="service-feature">
              <span className="feature-check">✓</span>
              <div>
                <h3>Observability built in</h3>
                <p>Logging, metrics, and alerting from day one, not bolted on later.</p>
              </div>
            </div>
          </div>

          <div className="service-tech-tags">
            <span>AWS</span>
            <span>Docker</span>
            <span>Kubernetes</span>
            <span>Terraform</span>
            <span>GitHub Actions</span>
          </div>
        </article>

        {/* 3. AI & DATA */}
        <article className="service-detail-card">
          <h2>AI &amp; Data Engineering</h2>

          <p className="service-detail-subtitle">
            Data pipelines and applied AI that turn information into decisions.
          </p>

          <p className="service-detail-description">
            We build the data infrastructure that powers analytics and machine learning —
            reliable pipelines, clean warehouses, and applied AI features integrated
            directly into your product.
          </p>

          <div className="service-features">
            <div className="service-feature">
              <span className="feature-check">✓</span>
              <div>
                <h3>Data pipeline design</h3>
                <p>ETL/ELT workflows that keep data fresh, accurate, and auditable.</p>
              </div>
            </div>

            <div className="service-feature">
              <span className="feature-check">✓</span>
              <div>
                <h3>Applied machine learning</h3>
                <p>Models integrated into real product workflows, not left in a notebook.</p>
              </div>
            </div>

            <div className="service-feature">
              <span className="feature-check">✓</span>
              <div>
                <h3>Analytics you can trust</h3>
                <p>Clean semantic layers so every team reports from the same numbers.</p>
              </div>
            </div>
          </div>

          <div className="service-tech-tags">
            <span>Python</span>
            <span>PostgreSQL</span>
            <span>Airflow</span>
            <span>dbt</span>
            <span>PyTorch</span>
          </div>
        </article>

        {/* 4. MOBILE APPS */}
        <article className="service-detail-card">
          <h2>Mobile App Development</h2>

          <p className="service-detail-subtitle">
            Native-feeling apps for iOS and Android from a single codebase.
          </p>

          <p className="service-detail-description">
            We design and build cross-platform mobile applications that feel native,
            ship faster than separate iOS/Android teams, and stay maintainable
            as your product grows.
          </p>

          <div className="service-features">
            <div className="service-feature">
              <span className="feature-check">✓</span>
              <div>
                <h3>Cross-platform delivery</h3>
                <p>One codebase, consistent behavior across iOS and Android.</p>
              </div>
            </div>

            <div className="service-feature">
              <span className="feature-check">✓</span>
              <div>
                <h3>Native performance</h3>
                <p>Smooth, responsive interfaces that don't feel like a compromise.</p>
              </div>
            </div>

            <div className="service-feature">
              <span className="feature-check">✓</span>
              <div>
                <h3>App store readiness</h3>
                <p>Submission, review, and release handled end to end.</p>
              </div>
            </div>
          </div>

          <div className="service-tech-tags">
            <span>React Native</span>
            <span>Swift</span>
            <span>Kotlin</span>
            <span>Firebase</span>
          </div>
        </article>

        {/* 5. SYSTEMS INTEGRATION */}
        <article className="service-detail-card">
          <h2>Enterprise Systems Integration</h2>

          <p className="service-detail-subtitle">
            Connect and modernize the systems your business already depends on.
          </p>

          <p className="service-detail-description">
            We integrate CRMs, ERPs, and legacy systems so data moves cleanly
            between them, and modernize the pieces that are holding your
            operations back.
          </p>

          <div className="service-features">
            <div className="service-feature">
              <span className="feature-check">✓</span>
              <div>
                <h3>System integration</h3>
                <p>Reliable data sync between CRM, ERP, and internal tools.</p>
              </div>
            </div>

            <div className="service-feature">
              <span className="feature-check">✓</span>
              <div>
                <h3>Legacy modernization</h3>
                <p>Incremental migration paths that don't require a risky big-bang rewrite.</p>
              </div>
            </div>

            <div className="service-feature">
              <span className="feature-check">✓</span>
              <div>
                <h3>Workflow automation</h3>
                <p>Removing manual handoffs between systems that should talk to each other.</p>
              </div>
            </div>
          </div>

          <div className="service-tech-tags">
            <span>REST/SOAP APIs</span>
            <span>Salesforce</span>
            <span>SAP</span>
            <span>MuleSoft</span>
          </div>
        </article>

      </section>

      {/* CALL TO ACTION */}
      <section className="services-cta">
        <div className="services-cta-inner">
          <h2>Ready to build something great?</h2>

          <p>
            Tell us about your project and we'll walk you through how OCAS
            can help you build it.
          </p>

          <a href="/#contact" className="services-cta-button">
            Start a Project <span>→</span>
          </a>
        </div>
      </section>

    </main>
  );
}
