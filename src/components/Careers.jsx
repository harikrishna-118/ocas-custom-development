import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Careers.css";

const jobs = [
  {
    id: "01",
    type: "FULL-TIME",
    title: "Senior Full-Stack Engineer",
    description:
      "Own delivery of production software across the stack — frontend, backend, and cloud infrastructure for client projects spanning web, mobile, and AI-driven products.",
    overview:
      "Work directly with our engineering team to design, build, and ship reliable software products from architecture through production.",
    responsibilities: [
      "Design and build full-stack features end to end, from database schemas to frontend interfaces.",
      "Work closely with clients to understand requirements and deliver high-quality products.",
      "Set technical direction on projects and review the work of other engineers.",
      "Deploy and operate services on modern cloud infrastructure.",
      "Improve engineering practices, testing standards, and production reliability.",
      "Take ownership of performance, security, and maintainability.",
    ],
    requirements: [
      "Experience building and shipping production software across frontend and backend systems.",
      "Strong JavaScript or TypeScript skills with React and a backend framework.",
      "Experience designing APIs, databases, and scalable application architecture.",
      "Familiarity with cloud platforms, CI/CD, Git, and automated testing.",
      "Ability to communicate clearly and take ownership of technical decisions.",
      "A public portfolio or GitHub history that shows real, working software.",
    ],
  },
  {
    id: "02",
    type: "FULL-TIME",
    title: "Content & Social Media Manager",
    description:
      "Own content strategy and day-to-day posting for one of our products, growing an engaged audience and turning followers into signups.",
    overview:
      "Develop a consistent content strategy that communicates our products clearly and helps build an engaged online community.",
    responsibilities: [
      "Plan and maintain a content calendar across relevant social channels.",
      "Write captions, scripts, and post copy tailored to a job-seeker audience.",
      "Coordinate with designers and video editors, or produce simple assets yourself.",
      "Track what content drives engagement and signups, and improve the plan accordingly.",
      "Maintain consistent brand messaging and publishing schedules.",
    ],
    requirements: [
      "Experience managing a brand or product's social presence, ideally in a career, recruitment, or consumer niche.",
      "Strong writing skills — captions and short-form copy that sound natural.",
      "Comfort with basic content tools for design or short-form video.",
      "A portfolio of past posts, accounts you've grown, or content you've written.",
      "An understanding of audience engagement and social media analytics.",
    ],
  },
  {
    id: "03",
    type: "INTERNSHIP",
    title: "Software Engineering Intern — AI Content Tools",
    description:
      "Help build an AI-powered tool that generates personalized marketing content at scale, working alongside our engineering team.",
    overview:
      "Work on practical AI-assisted content generation features, from prompt design and model integrations to production-ready workflows.",
    responsibilities: [
      "Build features for an internal AI content-generation tool, from prompt design to UI and API integration.",
      "Experiment with LLM APIs and improve the quality and consistency of generated content.",
      "Write clean, tested code and help maintain existing features.",
      "Contribute to prompt engineering, evaluation, and content-generation workflows.",
      "Collaborate with engineers to improve performance and reliability.",
    ],
    requirements: [
      "Comfortable programming in Python or JavaScript.",
      "Familiarity with REST APIs, JSON, and basic application development.",
      "Interest in LLMs, generative AI, prompt engineering, and AI-powered tools.",
      "Willingness to learn, experiment, and write maintainable code.",
      "A GitHub portfolio, personal project, or relevant coursework is a plus.",
    ],
  },
  {
    id: "04",
    type: "INTERNSHIP",
    title: "Software Engineering Intern — UGC Platform",
    description:
      "Help build a platform for collecting, managing, and showcasing user-generated content for marketing use.",
    overview:
      "Contribute to a platform that helps teams collect, organize, review, and publish user-generated content across marketing channels.",
    responsibilities: [
      "Build features for a UGC platform, from upload workflows to content management and display.",
      "Work with the team on both frontend and backend pieces of the product.",
      "Implement content collection, review, and publishing features.",
      "Contribute to UI improvements and API integrations.",
      "Help maintain a reliable development workflow and write basic tests.",
    ],
    requirements: [
      "Comfortable programming in JavaScript or Python.",
      "Familiarity with frontend development, REST APIs, and database basics.",
      "Interest in building practical web applications and user-facing features.",
      "Ability to learn quickly, communicate clearly, and work with feedback.",
      "A GitHub portfolio, personal project, or relevant coursework is a plus.",
    ],
  },
];

const filters = [
  { key: "ALL", label: "All roles" },
  { key: "FULL-TIME", label: "Full-time" },
  { key: "INTERNSHIP", label: "Internships" },
];


const icons = {
  ownership: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  craft: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 7l-5 5 5 5" />
      <path d="M16 7l5 5-5 5" />
      <path d="M14 4l-4 16" />
    </svg>
  ),
  impact: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20l4-4" />
      <path d="M14 4c3.5 0 6 2.5 6 6-3 0-5.5.8-7.5 2.8L9 9.3C10.5 6.5 12 4 14 4z" />
      <path d="M9 15l-3 .5L6.5 18" />
      <circle cx="15.5" cy="8.5" r="1" />
    </svg>
  ),
  growth: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </svg>
  ),
};

const values = [
  {
    icon: "ownership",
    title: "Ownership",
    text: "You own your work from first idea to production, with the trust and support to make real decisions.",
  },
  {
    icon: "craft",
    title: "Craft",
    text: "We care about clean code, clear writing, and the details that make products feel reliable.",
  },
  {
    icon: "impact",
    title: "Small team, real impact",
    text: "No layers of process. Your work ships, and clients and users see it.",
  },
  {
    icon: "growth",
    title: "Room to grow",
    text: "Work across the stack and across products, and learn from engineers who ship every week.",
  },
];

const steps = [
  {
    title: "Apply",
    text: "Submit your CV and links to your work. We read every application.",
  },
  {
    title: "Conversation",
    text: "A relaxed chat about your experience, interests, and what you want to build.",
  },
  {
    title: "Practical task",
    text: "A short, role-relevant exercise so we can see how you work.",
  },
  {
    title: "Decision",
    text: "We aim to give clear feedback and a decision promptly.",
  },
];

const formatType = (type) =>
  type === "FULL-TIME" ? "Full-time" : "Internship";

/* ---------- Small helpers ---------- */

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (!("IntersectionObserver" in window) || prefersReducedMotion()) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`careers-reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const CountUp = ({ to }) => {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (!("IntersectionObserver" in window) || prefersReducedMotion()) {
      setValue(to);
      return undefined;
    }

    let frame;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();

      const start = performance.now();
      const duration = 1200;

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(to * eased));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };

      frame = requestAnimationFrame(tick);
    });

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to]);

  return <span ref={ref}>{value}</span>;
};

const handleSpotlight = (event) => {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
};

/* ---------- Page ---------- */

const Careers = () => {
  const [openJob, setOpenJob] = useState(null);
  const [activeFilter, setActiveFilter] = useState("ALL");
  const progressRef = useRef(null);

  // Scroll progress bar
  useEffect(() => {
    let frame;

    const update = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const progress = scrollable > 0 ? doc.scrollTop / scrollable : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const visibleJobs = useMemo(
    () =>
      activeFilter === "ALL"
        ? jobs
        : jobs.filter((job) => job.type === activeFilter),
    [activeFilter]
  );

  const toggleJob = (jobId) => {
    setOpenJob((currentJob) => (currentJob === jobId ? null : jobId));
  };

  const handleFilter = (key) => {
    setActiveFilter(key);
    setOpenJob(null);
  };

  const scrollToId = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (event, jobTitle) => {
    event.preventDefault();

    alert(
      `Your application for "${jobTitle}" has been prepared. Connect this form to your backend to submit it.`
    );
  };

  return (
    <main className="careers-page">
      <div className="careers-progress" aria-hidden="true">
        <span ref={progressRef} className="careers-progress-bar"></span>
      </div>

      {/* Hero */}
      <section className="careers-hero">
        <div className="careers-hero-bg" aria-hidden="true">
          <span className="careers-blob blob-1"></span>
          <span className="careers-blob blob-2"></span>
          <span className="careers-blob blob-3"></span>
          <span className="careers-grid-pattern"></span>
          <span className="careers-noise"></span>
        </div>

        <div className="careers-container careers-hero-grid">
          <div className="careers-hero-copy">
            <div className="careers-hiring-badge careers-enter" style={{ "--d": "0ms" }}>
              <span className="careers-status-dot"></span>
              We're hiring
            </div>

            <h1 className="careers-enter" style={{ "--d": "100ms" }}>
              Build software that <span className="careers-gradient-text">matters</span>.
            </h1>

            <p className="careers-hero-lead careers-enter" style={{ "--d": "200ms" }}>
              We're a small, hands-on engineering team shipping web, mobile,
              and AI products for clients and our own platforms. Join us and
              own meaningful work from day one.
            </p>

            <div className="careers-hero-actions careers-enter" style={{ "--d": "300ms" }}>
              <button
                type="button"
                className="careers-btn careers-btn-primary"
                onClick={() => scrollToId("open-roles")}
              >
                View open roles
                <span className="careers-btn-arrow" aria-hidden="true">→</span>
              </button>

              <button
                type="button"
                className="careers-btn careers-btn-ghost"
                onClick={() => scrollToId("hiring-process")}
              >
                How we hire
              </button>
            </div>


          </div>



        </div>

        <div className="careers-hero-fade" aria-hidden="true"></div>
      </section>

      {/* Values */}
      <section className="careers-values">
        <div className="careers-container">
          <Reveal>
            <p className="careers-eyebrow">Why join us</p>
            <h2 className="careers-section-title">
              A place to do your best work
            </h2>
            <p className="careers-section-lead">
              Small team, high trust, and real responsibility — the things
              strong engineers and creators tell us they want most.
            </p>
          </Reveal>

          <div className="careers-values-grid">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 90}>
                <div
                  className="careers-value-card careers-spotlight"
                  onMouseMove={handleSpotlight}
                >
                  <span className="careers-value-icon">{icons[value.icon]}</span>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Job listings */}
      <section className="careers-list-section" id="open-roles">
        <div className="careers-list-bg" aria-hidden="true"></div>

        <div className="careers-container">
          <Reveal>
            <div className="careers-list-head">
              <div>
                <p className="careers-eyebrow">Open positions</p>
                <h2 className="careers-section-title">Find your role</h2>
              </div>

              <div
                className="careers-filters"
                role="tablist"
                aria-label="Filter roles by type"
              >
                {filters.map((filter) => (
                  <button
                    key={filter.key}
                    type="button"
                    role="tab"
                    aria-selected={activeFilter === filter.key}
                    className={`careers-filter ${
                      activeFilter === filter.key ? "is-active" : ""
                    }`}
                    onClick={() => handleFilter(filter.key)}
                  >
                    <span className="careers-filter-label">{filter.label}</span>
                    <span className="careers-filter-count" aria-label={`${(
                      filter.key === "ALL"
                        ? jobs.length
                        : jobs.filter((job) => job.type === filter.key).length
                    )} open positions`}>
                      {filter.key === "ALL"
                        ? jobs.length
                        : jobs.filter((job) => job.type === filter.key).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="careers-job-list">
            {visibleJobs.map((job, index) => {
              const isOpen = openJob === job.id;

              return (
                <Reveal key={job.id} delay={index * 90}>
                  <article
                    className={`careers-job-card careers-spotlight ${
                      isOpen ? "is-open" : ""
                    }`}
                    id={`job-${job.id}`}
                    onMouseMove={handleSpotlight}
                  >
                    {/* Job heading */}
                    <div className="careers-job-header">
<div className="careers-job-summary">
                        <span
                          className={`careers-job-tag ${
                            job.type === "INTERNSHIP" ? "is-intern" : ""
                          }`}
                        >
                          {formatType(job.type)}
                        </span>

                        <h3 className="careers-job-title">{job.title}</h3>

                        <p className="careers-job-description">
                          {job.description}
                        </p>
                      </div>

                      <button
                        type="button"
                        className="careers-toggle-button"
                        aria-expanded={isOpen}
                        aria-controls={`details-${job.id}`}
                        onClick={() => toggleJob(job.id)}
                      >
                        {isOpen ? "Close" : "View & apply"}

                        <span
                          className={`careers-chevron ${
                            isOpen ? "rotated" : ""
                          }`}
                          aria-hidden="true"
                        >
                          ⌄
                        </span>
                      </button>
                    </div>

                    {/* Expandable details and application form */}
                    <div
                      className={`careers-collapse ${isOpen ? "is-open" : ""}`}
                      id={`details-${job.id}`}
                      aria-hidden={!isOpen}
                    >
                      <div className="careers-collapse-inner">
                        <div className="careers-job-details">
                          <div className="careers-details-grid">
                            {/* Left: Role details */}
                            <div className="careers-role-information">
                              <div className="careers-detail-block">
                                <h4>About the role</h4>
                                <p>{job.overview}</p>
                              </div>

                              <div className="careers-detail-block">
                                <h4>What you'll do</h4>

                                <ul className="careers-bullet-list">
                                  {job.responsibilities.map((item, i) => (
                                    <li key={i} style={{ "--i": i }}>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="careers-detail-block">
                                <h4>What we're looking for</h4>

                                <ul className="careers-bullet-list">
                                  {job.requirements.map((item, i) => (
                                    <li key={i} style={{ "--i": i }}>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Right: Application form */}
                            <form
                              className="careers-application-form"
                              onSubmit={(event) =>
                                handleSubmit(event, job.title)
                              }
                            >
                              <h4 className="careers-form-title">
                                Apply for this role
                              </h4>
                              <p className="careers-form-sub">
                                Takes about two minutes. We read every
                                application.
                              </p>

                              <div className="careers-form-row">
                                <div className="careers-field">
                                  <label htmlFor={`name-${job.id}`}>
                                    Full name <span>*</span>
                                  </label>

                                  <input
                                    id={`name-${job.id}`}
                                    name="fullName"
                                    type="text"
                                    placeholder="Your full name"
                                    autoComplete="name"
                                    required
                                  />
                                </div>

                                <div className="careers-field">
                                  <label htmlFor={`email-${job.id}`}>
                                    Email <span>*</span>
                                  </label>

                                  <input
                                    id={`email-${job.id}`}
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    autoComplete="email"
                                    required
                                  />
                                </div>
                              </div>

                              <div className="careers-field">
                                <label htmlFor={`phone-${job.id}`}>
                                  Phone number
                                </label>

                                <input
                                  id={`phone-${job.id}`}
                                  name="phone"
                                  type="tel"
                                  placeholder="+91 98765 43210"
                                  autoComplete="tel"
                                />
                              </div>

                              <div className="careers-form-row">
                                <div className="careers-field">
                                  <label htmlFor={`github-${job.id}`}>
                                    GitHub link
                                  </label>

                                  <input
                                    id={`github-${job.id}`}
                                    name="github"
                                    type="url"
                                    placeholder="https://github.com/..."
                                  />
                                </div>

                                <div className="careers-field">
                                  <label htmlFor={`linkedin-${job.id}`}>
                                    LinkedIn or Naukri link
                                  </label>

                                  <input
                                    id={`linkedin-${job.id}`}
                                    name="profile"
                                    type="url"
                                    placeholder="https://linkedin.com/..."
                                  />
                                </div>
                              </div>

                              <div className="careers-field">
                                <label htmlFor={`resume-${job.id}`}>
                                  CV / Resume <span>(PDF preferred) *</span>
                                </label>

                                <input
                                  className="careers-file-input"
                                  id={`resume-${job.id}`}
                                  name="resume"
                                  type="file"
                                  accept=".pdf,.doc,.docx"
                                  required
                                />
                              </div>

                              <div className="careers-field">
                                <label htmlFor={`cover-${job.id}`}>
                                  Cover letter <span>(PDF preferred)</span>
                                </label>

                                <input
                                  className="careers-file-input"
                                  id={`cover-${job.id}`}
                                  name="coverLetter"
                                  type="file"
                                  accept=".pdf,.doc,.docx"
                                />
                              </div>

                              <div className="careers-field">
                                <label htmlFor={`message-${job.id}`}>
                                  Or paste a cover letter instead
                                </label>

                                <textarea
                                  id={`message-${job.id}`}
                                  name="coverLetterText"
                                  rows="4"
                                  placeholder="Optional if you've already attached a cover letter above."
                                ></textarea>
                              </div>

                              <button
                                className="careers-btn careers-btn-primary careers-submit-button"
                                type="submit"
                              >
                                Submit application
                                <span className="careers-btn-arrow" aria-hidden="true">
                                  →
                                </span>
                              </button>

                              <p className="careers-form-note">
                                Fields marked * are required. Your application
                                will need a connected submission service.
                              </p>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hiring process */}
      <section className="careers-process" id="hiring-process">
        <div className="careers-container">
          <Reveal>
            <p className="careers-eyebrow">Hiring process</p>
            <h2 className="careers-section-title">
              What to expect when you apply
            </h2>
            <p className="careers-section-lead">
              A clear, respectful process with no surprises.
            </p>
          </Reveal>

          <Reveal className="careers-steps-wrap">
            <ol className="careers-steps">
              {steps.map((step, index) => (
                <li
                  className="careers-step"
                  key={step.title}
                  style={{ "--i": index }}
                >
                  <span className="careers-step-number">{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="careers-cta">
        <div className="careers-container">
          <Reveal>
            <div className="careers-cta-card">
              <span className="careers-cta-glow" aria-hidden="true"></span>
              <h2>Ready to build something great?</h2>
              <p>
                Pick the role closest to your skills and tell us about your
                best work — your portfolio and GitHub matter more to us than a
                perfect CV.
              </p>
              <button
                type="button"
                className="careers-btn careers-btn-light"
                onClick={() => scrollToId("open-roles")}
              >
                Browse open roles
                <span className="careers-btn-arrow" aria-hidden="true">→</span>
              </button>
            </div>
          </Reveal>

          <p className="careers-equal-note">
            We're an equal opportunity employer. We welcome applications from
            people of all backgrounds and make hiring decisions based on skills
            and potential.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Careers;