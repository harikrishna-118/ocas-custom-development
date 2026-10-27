import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Industries.css";

/* Line icons (24x24 viewBox, stroke based) */
const ICONS = {
  banking: ["M2 6.5A1.5 1.5 0 013.5 5h17A1.5 1.5 0 0122 6.5v11a1.5 1.5 0 01-1.5 1.5h-17A1.5 1.5 0 012 17.5z", "M2 10h20", "M6 15h4"],
  insurance: ["M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z", "M8.5 12l2.5 2.5 5-5"],
  healthcare: ["M12 21s-8-5-8-11a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 10c0 6-8 11-8 11z", "M6.5 12.5H9l1.5-3 3 6 1.5-3h2.5"],
  commerce: ["M3 4h2l2.4 11h10.2L20 7H6.5", "M7.7 20a1.3 1.3 0 102.6 0 1.3 1.3 0 10-2.6 0", "M15.7 20a1.3 1.3 0 102.6 0 1.3 1.3 0 10-2.6 0"],
  logistics: ["M2 6h11v10H2z", "M13 9h4l3 3v4h-7", "M4 18a2 2 0 104 0 2 2 0 10-4 0", "M15 18a2 2 0 104 0 2 2 0 10-4 0"],
  manufacturing: ["M3 21h18", "M4 21V11l5 3v-3l5 3V7h4v14", "M8 17h1M12 17h1M16 17h1"],
  education: ["M2 9l10-5 10 5-10 5z", "M6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5", "M22 9v6"],
  government: ["M12 3l9 5H3z", "M5 10v8M10 10v8M14 10v8M19 10v8", "M3 21h18"],
  ai: ["M6 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2z", "M10 10h4v4h-4z", "M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"],
};

function Icon({ name, size = 26 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

const industries = [
  {
    number: "01",
    title: "Banking & Financial Services",
    eyebrow: "Financial Technology",
    subtitle: "Trust at every transaction.",
    description:
      "Secure digital banking, fintech platforms, and intelligent financial operations built for reliability and control.",
    features: ["Digital banking platforms", "Payments and financial APIs", "Fraud and risk intelligence"],
    technologies: ["Banking APIs", "Risk Analytics", "Secure Cloud"],
    category: "finance",
    theme: "banking",
  },
  {
    number: "02",
    title: "Insurance & InsurTech",
    eyebrow: "Connected Insurance",
    subtitle: "Simpler journeys. Smarter decisions.",
    description:
      "Modern insurance experiences that help teams streamline policy administration, claims, and customer service.",
    features: ["Policy management systems", "Claims workflow automation", "Customer and agent portals"],
    technologies: ["Workflow APIs", "Data Analytics", "Cloud Platforms"],
    category: "finance",
    theme: "insurance",
  },
  {
    number: "03",
    title: "Healthcare",
    eyebrow: "Digital Health",
    subtitle: "Technology with people at its centre.",
    description:
      "Connected patient experiences and clinical workflows that help care teams work with greater clarity and confidence.",
    features: ["Health data interoperability", "Patient portals and journeys", "Clinical workflow automation"],
    technologies: ["HL7 / FHIR", "EHR Integration", "Health Analytics"],
    category: "public",
    theme: "healthcare",
  },
  {
    number: "04",
    title: "E-Commerce",
    eyebrow: "Digital Commerce",
    subtitle: "Make every interaction count.",
    description:
      "Flexible commerce experiences that connect discovery, checkout, fulfilment, and customer loyalty.",
    features: ["Composable storefronts", "Checkout and payment journeys", "Order and customer experiences"],
    technologies: ["Commerce Platforms", "Payment APIs", "Personalization"],
    category: "operations",
    theme: "commerce",
  },
  {
    number: "05",
    title: "Logistics & Transportation",
    eyebrow: "Connected Operations",
    subtitle: "Keep goods and information moving.",
    description:
      "Connected tools for shipment visibility, fleet coordination, route planning, and resilient logistics operations.",
    features: ["Shipment and order visibility", "Fleet and route coordination", "Warehouse integration"],
    technologies: ["GPS / IoT", "Mapping APIs", "Real-time Data"],
    category: "operations",
    theme: "logistics",
  },
  {
    number: "06",
    title: "Manufacturing",
    eyebrow: "Industry 4.0",
    subtitle: "Turn operational data into direction.",
    description:
      "Connected systems that improve visibility across production, equipment, supply chains, and business operations.",
    features: ["Production visibility", "Supply chain coordination", "Predictive maintenance insights"],
    technologies: ["IIoT", "MES / SCADA", "Operational BI"],
    category: "operations",
    theme: "manufacturing",
  },
  {
    number: "07",
    title: "Education",
    eyebrow: "Learning Technology",
    subtitle: "Create space for better learning.",
    description:
      "Accessible learning platforms and administration tools designed around engagement, progress, and measurable outcomes.",
    features: ["Learning management platforms", "Academic operations systems", "Learning analytics"],
    technologies: ["LMS", "SCORM / xAPI", "Learning APIs"],
    category: "public",
    theme: "education",
  },
  {
    number: "08",
    title: "Government & Public Sector",
    eyebrow: "Civic Technology",
    subtitle: "Public services made more accessible.",
    description:
      "Digital services and case management tools designed to make essential journeys clearer, safer, and easier to maintain.",
    features: ["Accessible public portals", "Secure digital services", "Case and request management"],
    technologies: ["WCAG", "Identity APIs", "Case Management"],
    category: "public",
    theme: "government",
  },
  {
    number: "09",
    title: "Custom AI Automation",
    eyebrow: "Applied AI",
    subtitle: "Make complexity work for you.",
    description:
      "Purpose-built AI assistants and automated workflows connected to your business systems, with human oversight built in.",
    features: ["End-to-end workflow automation", "Knowledge-grounded AI assistants", "Human review and controls"],
    technologies: ["LLMs", "Python", "API Integration"],
    category: "ai",
    theme: "ai",
  },
];

const filters = [
  { key: "all", label: "All industries" },
  { key: "finance", label: "Finance & Insurance" },
  { key: "public", label: "Health, Education & Public" },
  { key: "operations", label: "Commerce & Operations" },
  { key: "ai", label: "Applied AI" },
];

const stats = [
  { value: 9, suffix: "", label: "Industries served" },
  { value: 120, suffix: "+", label: "Integrations delivered" },
  { value: 98, suffix: "%", label: "Client retention" },
  { value: 24, suffix: "/7", label: "Engineering support" },
];

const approach = [
  {
    number: "01",
    title: "Understand the real challenge",
    text: "We start with your people, workflows, constraints, and business priorities, not a one-size-fits-all solution.",
  },
  {
    number: "02",
    title: "Design with intent",
    text: "We connect user experience, architecture, security, and delivery into one clear plan.",
  },
  {
    number: "03",
    title: "Build, measure, improve",
    text: "We deliver in considered steps, learn from real usage, and keep improving what matters.",
  },
];

const rotatingWords = ["Banking", "Healthcare", "Logistics", "Education", "Commerce", "Government", "AI"];

/* ---------- hooks ---------- */

function useReveal(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const nodes = root.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [rootRef]);
}

function useScrollProgress(barRef) {
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? window.scrollY / h : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [barRef]);
}

function CountUp({ end, suffix }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      setVal(end);
      return undefined;
    }
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1600;
        const tick = (now) => {
          const t = Math.min((now - start) / dur, 1);
          setVal(Math.round(end * (1 - Math.pow(1 - t, 4))));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [end]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

/* ---------- components ---------- */

function ArrowIcon() {
  return (
    <span className="ind-arrow" aria-hidden="true">
      ↗
    </span>
  );
}

function IndustryCard({ industry, hidden, index }) {
  const cardRef = useRef(null);

  const onMove = useCallback((e) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
    el.style.setProperty("--rx", `${(0.5 - y) * 5}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * 6}deg`);
  }, []);

  const onLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }, []);

  return (
    <article
      ref={cardRef}
      className={`ind-card ind-card--${industry.theme}${hidden ? " is-filtered" : ""}`}
      style={{ "--delay": `${(index % 3) * 90}ms` }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-reveal
    >
      <div className="ind-card-glow" aria-hidden="true" />
      <div className="ind-card-top">
        <span className="ind-card-icon">
          <Icon name={industry.theme} />
        </span>
        <span className="ind-card-num">{industry.number}</span>
      </div>

      <div className="ind-card-eyebrow">{industry.eyebrow}</div>
      <h3>{industry.title}</h3>
      <p className="ind-card-sub">{industry.subtitle}</p>
      <p className="ind-card-desc">{industry.description}</p>

      <ul className="ind-card-list">
        {industry.features.map((f) => (
          <li key={f}>
            <span aria-hidden="true" />
            {f}
          </li>
        ))}
      </ul>

      <div className="ind-card-tags">
        {industry.technologies.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </article>
  );
}

/* ---------- page ---------- */

export default function Industries() {
  const pageRef = useRef(null);
  const barRef = useRef(null);
  const heroRef = useRef(null);
  const [active, setActive] = useState("all");
  const [wordIndex, setWordIndex] = useState(0);

  useReveal(pageRef);
  useScrollProgress(barRef);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;
    const id = setInterval(() => setWordIndex((i) => (i + 1) % rotatingWords.length), 2300);
    return () => clearInterval(id);
  }, []);

  const onHeroMove = (e) => {
    const el = heroRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--px", ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
    el.style.setProperty("--py", ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
  };

  const marquee = [...industries, ...industries];

  return (
    <main className="ind-page" ref={pageRef}>
      <div className="ind-progress" aria-hidden="true">
        <span ref={barRef} />
      </div>

      {/* HERO */}
      <section className="ind-hero" ref={heroRef} onMouseMove={onHeroMove}>
        <div className="ind-hero-bg" aria-hidden="true">
          <span className="ind-aurora ind-aurora-a" />
          <span className="ind-aurora ind-aurora-b" />
          <span className="ind-grid-lines" />
        </div>

        <div className="ind-hero-inner">
          <div className="ind-hero-copy">
            <div className="ind-pill" data-reveal>
              <span className="ind-pill-dot" /> Industries we serve
            </div>
            <h1 data-reveal>
              Technology built for
              <span className="ind-rotator" aria-live="polite">
                <span key={wordIndex} className="ind-rotator-word">
                  {rotatingWords[wordIndex]}
                </span>
              </span>
            </h1>
            <p data-reveal>
              Every industry has its own challenges. We combine thoughtful engineering, practical
              strategy, and modern technology to solve the problems that matter to your business.
            </p>
            <div className="ind-actions" data-reveal>
              <a href="/contact" className="ind-btn ind-btn-primary">
                Discuss your project <ArrowIcon />
              </a>
              <a href="#industry-expertise" className="ind-btn ind-btn-ghost">
                Explore expertise <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="ind-hero-visual" data-reveal aria-hidden="true">
            <div className="ind-orbit">
              <span className="ind-orbit-ring ind-orbit-ring-1" />
              <span className="ind-orbit-ring ind-orbit-ring-2" />
              <div className="ind-orbit-core">
                <strong>09</strong>
                <span>Industries</span>
              </div>
              <div className="ind-orbit-spin">
                {industries.map((item, i) => (
                  <div className="ind-orbit-node" key={item.number} style={{ "--a": `${i * 40}deg` }}>
                    <span className={`ind-orbit-icon ind-card--${item.theme}`} title={item.title}>
                      <Icon name={item.theme} size={22} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="ind-marquee" aria-hidden="true">
          <div className="ind-marquee-track">
            {marquee.map((item, i) => (
              <span key={`${item.number}-${i}`}>
                {item.title}
                <i />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="ind-stats">
        {stats.map((s, i) => (
          <div className="ind-stat" key={s.label} data-reveal style={{ "--delay": `${i * 90}ms` }}>
            <strong>
              <CountUp end={s.value} suffix={s.suffix} />
            </strong>
            <span>{s.label}</span>
          </div>
        ))}
      </section>

      {/* EXPERTISE */}
      <section className="ind-expertise" id="industry-expertise">
        <header className="ind-head" data-reveal>
          <div>
            <div className="ind-eyebrow">Industry expertise</div>
            <h2>
              Deep context. <em>Better solutions.</em>
            </h2>
          </div>
          <p>Purpose-built digital products and platforms shaped around the realities of your sector.</p>
        </header>

        <div className="ind-filters" role="tablist" aria-label="Filter industries" data-reveal>
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              role="tab"
              aria-selected={active === f.key}
              className={`ind-filter${active === f.key ? " is-active" : ""}`}
              onClick={() => setActive(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="ind-grid">
          {industries.map((industry, i) => (
            <IndustryCard
              key={industry.number}
              industry={industry}
              index={i}
              hidden={active !== "all" && industry.category !== active}
            />
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section className="ind-approach">
        <div className="ind-approach-inner">
          <div className="ind-approach-head" data-reveal>
            <div className="ind-eyebrow">Our approach</div>
            <h2>
              Good technology starts with <em>the right questions.</em>
            </h2>
            <p>
              Our process keeps people, business goals, and technology aligned from the first
              conversation to what comes next.
            </p>
            <a href="/contact" className="ind-link">
              Talk to our team <ArrowIcon />
            </a>
          </div>

          <ol className="ind-steps">
            {approach.map((item, i) => (
              <li className="ind-step" key={item.number} data-reveal style={{ "--delay": `${i * 120}ms` }}>
                <span className="ind-step-num">{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="ind-cta-wrap">
        <div className="ind-cta" data-reveal>
          <span className="ind-aurora ind-aurora-a" aria-hidden="true" />
          <span className="ind-aurora ind-aurora-b" aria-hidden="true" />
          <div className="ind-cta-inner">
            <div className="ind-eyebrow">Have a challenge?</div>
            <h2>
              Let’s make your next move <em>your best one.</em>
            </h2>
            <p>
              Share the challenge you’re working on. We’ll help you explore a practical, well-considered
              way forward.
            </p>
            <a href="/contact" className="ind-btn ind-btn-primary">
              Start a conversation <ArrowIcon />
            </a>
            <small>A thoughtful first conversation. No pressure, just possibilities.</small>
          </div>
        </div>
      </section>
    </main>
  );
}