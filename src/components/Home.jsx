import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

import "./Home.css";

const P = (file, id, w = 1400) => [

  `/images/${file}`,

  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`,

];

// Topic-matched photographs. If a remote image fails, Photo tries the project's

// existing local JPG and then the bundled lightweight SVG fallback.

const U = (file, photoId, w = 1400) => [

  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${w}&q=84`,

  `/images/${file}`,

  `/images/${file.replace(/\.[^/.]+$/, ".svg")}`,

];

const IMG = {

  hero: U("hero-professional.jpg", "photo-1522071820081-009f0129c71c", 1800),

  about1: P("about-1.jpg", "3183150", 1000),

  about2: P("about-2.jpg", "1181244", 800),

  cta: P("cta.jpg", "3184436", 2200),

};

/* =========================================================

   DATA

   ========================================================= */



const STACK = [

  // Frontend

  { name: "HTML5", slug: "html5", color: "E34F26" },

  { name: "CSS3", slug: "css3", color: "1572B6" },

  { name: "JavaScript", slug: "javascript", color: "F7DF1E" },

  { name: "TypeScript", slug: "typescript", color: "3178C6" },

  { name: "React", slug: "react", color: "61DAFB" },

  { name: "Next.js", slug: "nextdotjs", color: "111111" },

  { name: "Angular", slug: "angular", color: "DD0031" },

  { name: "Vue.js", slug: "vuedotjs", color: "4FC08D" },

  { name: "Vite", slug: "vite", color: "646CFF" },

  { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },

  { name: "Bootstrap", slug: "bootstrap", color: "7952B3" },

  { name: "Figma", slug: "figma", color: "F24E1E" },

  // Backend and languages

  { name: "Node.js", slug: "nodedotjs", color: "5FA04E" },

  { name: "Express", slug: "express", color: "111111" },

  { name: "Python", slug: "python", color: "3776AB" },

  { name: "Django", slug: "django", color: "092E20" },

  { name: "FastAPI", slug: "fastapi", color: "009688" },

  { name: "Java", slug: "openjdk", color: "437291" },

  { name: "Spring Boot", slug: "springboot", color: "6DB33F" },

  { name: "C#", slug: "csharp", color: "512BD4" },

  { name: ".NET", slug: "dotnet", color: "512BD4" },

  { name: "PHP", slug: "php", color: "777BB4" },

  { name: "REST APIs", slug: "swagger", color: "85EA2D" },

  // Mobile

  { name: "React Native", slug: "react", color: "61DAFB" },

  { name: "Flutter", slug: "flutter", color: "02569B" },

  // Data, AI and analytics

  { name: "Pandas", slug: "pandas", color: "150458" },

  { name: "NumPy", slug: "numpy", color: "013243" },

  { name: "scikit-learn", slug: "scikitlearn", color: "F7931E" },

  { name: "TensorFlow", slug: "tensorflow", color: "FF6F00" },

  { name: "PyTorch", slug: "pytorch", color: "EE4C2C" },

  { name: "OpenAI", slug: "openai", color: "412991" },

  // Databases and search

  { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },

  { name: "MySQL", slug: "mysql", color: "4479A1" },

  { name: "MongoDB", slug: "mongodb", color: "47A248" },

  // Cloud, DevOps and observability

  { name: "AWS", slug: "amazonaws", color: "232F3E" },

  { name: "Microsoft Azure", slug: "microsoftazure", color: "0078D4" },

  { name: "Google Cloud", slug: "googlecloud", color: "4285F4" },

  { name: "Docker", slug: "docker", color: "2496ED" },

  { name: "Git", slug: "git", color: "F05032" },

  { name: "GitHub", slug: "github", color: "181717" },

  { name: "GitLab", slug: "gitlab", color: "FC6D26" },

  { name: "Linux", slug: "linux", color: "FCC624" },

];

// Reliable logo sources. Simple Icons uses the official brand symbol and brand colour.

// A few technologies are concepts or have alternate slugs, so they use a sensible

// branded fallback rather than leaving an empty space in the marquee.

const TECH_LOGO_ALIASES = {

  "REST APIs": ["swagger", "postman"],

  "React Native": ["reactnative", "react"],

  "Java": ["openjdk", "java"],

  "Microsoft Azure": ["microsoftazure", "azure"]

};

const getTechLogoSources = (tech) => {

  const slugs = [...new Set([...(TECH_LOGO_ALIASES[tech.name] || []), tech.slug])];

  return slugs.flatMap((slug) => [

    `https://cdn.simpleicons.org/${slug}?viewbox=auto`,

    `https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/${slug}.svg`

  ]);

};

const PRINCIPLES = [

  { title: "Custom-Built", text: "Software modeled around how your team actually works, not a template." },

  { title: "Cloud-Native", text: "Infrastructure and pipelines built to scale without duct tape." },

  { title: "Secure by Design", text: "Security and compliance considered from architecture, not bolted on later." },

];

const SERVICES = [

  {

    title: "Custom Software Development",

    text: "Tailored web and enterprise applications built around how your business actually runs.",

    tags: ["TypeScript", "React", "Node.js"],

    img: U("service-software.jpg", "photo-1498050108023-c5249f4df085", 1400),

    alt: "Software development workspace with computer screens and code",

  },

  {

    title: "Cloud & DevOps Engineering",

    text: "Resilient cloud infrastructure and automated delivery pipelines that scale with you.",

    tags: ["AWS", "Docker", "Kubernetes"],

    img: U("service-cloud-devops.jpg", "photo-1558494949-ef010cbdcc31", 1400),

    alt: "Professional server infrastructure and cloud computing equipment",

  },

  {

    title: "AI & Data Engineering",

    text: "Data pipelines and applied AI that turn information into better decisions.",

    tags: ["Python", "PostgreSQL", "Airflow"],

    img: U("service-ai-data.jpg", "photo-1551288049-bebda4e38f71", 1400),

    alt: "Data analytics and technology dashboards on computer displays",

  },

  {

    title: "Mobile App Development",

    text: "Native-feeling apps for iOS and Android from a single codebase.",

    tags: ["React Native", "Swift", "Kotlin"],

    img: U("service-mobile.jpg", "photo-1512941937669-90a1b58e7e9c", 1400),

    alt: "Smartphone displaying a mobile application",

  },

  {

    title: "Enterprise Systems Integration",

    text: "Connect and modernize the systems your business already depends on.",

    tags: ["REST/SOAP APIs", "Salesforce", "SAP"],

    img: U("service-integration.jpg", "photo-1451187580459-43490279c0fa", 1400),

    alt: "Digital network connections and global technology infrastructure",

  },

  {

    title: "UI/UX & Product Design",

    text: "Research-led interface design that makes complex products simple to use and adopt.",

    tags: ["Figma", "Design Systems", "Prototyping"],

    img: U("service-ui-ux.jpg", "photo-1586717791821-3f44a563fa4c", 1400),

    alt: "Professional interface design and creative digital product workspace",

  },

];

const INDUSTRIES = [

  {

    label: "Banking",

    title: "Banking & Financial Services",

    desc: "Digital banking platforms, risk tooling, and compliance-aware systems for banks, lenders, and fintech companies operating under strict regulation.",

    points: [

      "Core system modernization",

      "Compliance-first design",

      "Risk & fraud tooling",

    ],

    tags: ["PCI-DSS", "SOC 2", "Plaid", "Core Banking APIs"],

    img: U("industry-banking.jpg", "photo-1563013544-824ae1b704d3", 1400),

    alt: "Modern financial services and digital banking",

  },

  {

    label: "Insurance",

    title: "Insurance & InsurTech",

    desc: "We help insurers and brokers digitize the policy lifecycle with automated underwriting, self-service portals, and faster claims workflows.",

    points: [

      "Policy administration",

      "Claims automation",

      "Customer & broker portals",

    ],

    tags: ["Guidewire", "Duck Creek", "OCR / IDP", "Power BI"],

    img: U("industry-insurance.jpg", "photo-1450101499163-c8848c66ca85", 1400),

    alt: "Insurance professional reviewing documents and business information",

  },

  {

    label: "Healthcare",

    title: "Healthcare",

    desc: "Patient-facing and clinical software designed with the data privacy and interoperability standards healthcare organizations require.",

    points: [

      "Interoperability",

      "Patient-facing platforms",

      "Clinical workflow tools",

    ],

    tags: ["HL7/FHIR", "HIPAA", "Epic", "Twilio"],

    img: U("industry-healthcare.jpg", "photo-1576091160399-112ba8d25d1d", 1400),

    alt: "Healthcare technology and digital medical equipment",

  },

  {

    label: "E-Commerce",

    title: "E-Commerce",

    desc: "Headless storefronts, checkout flows, and post-purchase experiences for D2C brands and marketplaces that need to move fast without sacrificing reliability.",

    points: [

      "Headless storefronts",

      "Checkout & payments",

      "Post-purchase experience",

    ],

    tags: ["Shopify", "Stripe", "Next.js", "Algolia"],

    img: U("industry-ecommerce.jpg", "photo-1556742049-0cfed4f6a45d", 1400),

    alt: "Customer using a payment card for a digital retail purchase",

  },

  {

    label: "Logistics",

    title: "Logistics & Transportation",

    desc: "Tracking, routing, and warehouse tools for carriers, 3PLs, and shippers who need real-time visibility across every mile of the supply chain.",

    points: [

      "Fleet & shipment tracking",

      "Route & load optimization",

      "Warehouse management",

    ],

    tags: ["GPS / Telematics", "WMS", "EDI", "Mapbox"],

    img: U("industry-logistics.jpg", "photo-1494412651409-8963a9c86f9a", 1400),

    alt: "Cargo shipping containers and international logistics operations",

  },

  {

    label: "Manufacturing",

    title: "Manufacturing",

    desc: "We help manufacturers digitize operations, from production tracking to supply chain visibility, with software that fits how plants actually operate.",

    points: [

      "Operations visibility",

      "Supply chain tooling",

      "Predictive maintenance",

    ],

    tags: ["IIoT", "MES", "SCADA", "Power BI"],

    img: U("industry-manufacturing.jpg", "photo-1581091226825-a6a2a5aee158", 1400),

    alt: "Industrial manufacturing equipment and production technology",

  },

  {

    label: "Education",

    title: "Education",

    desc: "Learning platforms and administrative systems for schools, universities, and edtech companies focused on outcomes, not just features.",

    points: [

      "Learning platforms",

      "Administrative systems",

      "Analytics & outcomes",

    ],

    tags: ["LMS", "SIS", "SCORM/xAPI", "Canvas API"],

    img: U("industry-education.jpg", "photo-1523050854058-8df90110c9f1", 1400),

    alt: "University campus and modern education environment",

  },

  {

    label: "AI Automation",

    title: "Custom AI Automation",

    desc: "Applied AI, from internal copilots to workflow agents, that plugs directly into how your team already operates, not a generic chatbot bolted on top.",

    points: [

      "Workflow automation",

      "Applied LLM integration",

      "Human-in-the-loop design",

    ],

    tags: ["OpenAI", "LangChain", "Vector DBs", "Python"],

    img: U("industry-ai.jpg", "photo-1677442136019-21780ecad995", 1400),

    alt: "Artificial intelligence technology and neural network visualization",

  },

  {

    label: "Government & Public Sector",

    title: "Government & Public Sector",

    desc: "Secure, accessible digital services that help public institutions modernize citizen experiences, improve service delivery, and manage information responsibly.",

    points: [

      "Citizen service portals",

      "Case and document management",

      "Data dashboards & reporting",

    ],

    tags: [

      "Digital Services",

      "Accessibility",

      "Cloud Security",

      "Data Analytics",

    ],

    img: U("industry-government.jpg", "photo-1486406146926-c627a92ad1ab", 1400),

    alt: "Modern city infrastructure representing public-sector digital transformation",

  },

];

const PROCESS = [

  { title: "Discovery & Strategy", text: "We start by understanding your goals, constraints, and existing systems before writing a single line of code." },

  { title: "Design & Architecture", text: "Technical architecture and interface design happen together, so the product is both usable and built to last." },

  { title: "Agile Development & QA", text: "Iterative sprints with continuous testing keep the project visible and on track from the first milestone." },

  { title: "Launch & Ongoing Support", text: "We handle deployment and stay on for monitoring, iteration, and support after launch." },

];

const CLIENTS = [

  { name: "Infynixtek", url: "https://infynixtek.com/", video: "/videos/infynixtek.mp4", category: "Talent placement & staffing solutions", text: "Website design and a candidate portal for talent placement." },

  { name: "CodeBridge Technologies", url: "https://codebridgetec.com/", video: "/videos/CodeBridge%20Technologies.mp4", category: "Talent placement & staffing solutions", text: "Website design and internal staffing management tools." },

];

const NEXT_STEPS = [

  "We review your details, usually within a few hours.",

  "A short 15–20 minute discovery call.",

  "A scoped proposal with a clear plan and estimate.",

];

/* =========================================================

   HELPERS

   ========================================================= */

/* Tries each source in order; renders nothing if all fail so the

   gradient behind it stays visible. */

const Photo = ({ src, alt, className, eager = false }) => {

  const list = (Array.isArray(src) ? src : [src]).filter(Boolean);

  const sig = list.join("|");

  const [stage, setStage] = useState(0);

  useEffect(() => setStage(0), [sig]);

  if (stage >= list.length) return null;

  return (

    <img

      key={`${sig}-${stage}`}

      className={className}

      src={list[stage]}

      alt={alt}

      loading={eager ? "eager" : "lazy"}

      decoding="async"

      onError={() => setStage((s) => s + 1)}

    />

  );

};

const Arrow = () => <span className="oc-arrow" aria-hidden="true">→</span>;

/* =========================================================

   COMPONENT

   ========================================================= */

export default function Home() {

  const rootRef = useRef(null);



  const [ind, setInd] = useState(0);

  const industryPanelRefs = useRef([]);

  // Keep the left-side industry navigation in sync with the panel

  // currently passing through the centre of the viewport.

  useEffect(() => {

    const panels = industryPanelRefs.current.filter(Boolean);

    if (!panels.length) return undefined;

    const observer = new IntersectionObserver(

      (entries) => {

        const visible = entries

          .filter((entry) => entry.isIntersecting)

          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {

          const index = Number(visible.target.dataset.industryIndex);

          if (Number.isFinite(index)) setInd(index);

        }

      },

      {

        root: null,

        rootMargin: "-32% 0px -48% 0px",

        threshold: [0, 0.15, 0.35, 0.55, 0.75],

      }

    );

    panels.forEach((panel) => observer.observe(panel));

    return () => observer.disconnect();

  }, []);

  const goToIndustry = (index) => {

    setInd(index);

    industryPanelRefs.current[index]?.scrollIntoView({

      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",

      block: "center",

    });

  };

  useEffect(() => {

    const root = rootRef.current;

    if (!root) return undefined;

    const nodes = root.querySelectorAll("[data-reveal]:not(.oc-process .oc-step)");

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || !("IntersectionObserver" in window)) {

      nodes.forEach((n) => n.classList.add("is-in"));

      return undefined;

    }

    const io = new IntersectionObserver(

      (entries) => {

        entries.forEach((e) => {

          if (e.isIntersecting) {

            e.target.classList.add("is-in");

            io.unobserve(e.target);

          }

        });

      },

      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }

    );

    nodes.forEach((n) => io.observe(n));

    return () => io.disconnect();

  }, []);

  // Reveal one How We Work card per downward scroll gesture.

  useEffect(() => {

    const section = rootRef.current?.querySelector(".oc-process");

    const cards = section ? Array.from(section.querySelectorAll(".oc-step")) : [];

    if (!section || !cards.length) return undefined;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {

      cards.forEach((card) => card.classList.add("is-in"));

      return undefined;

    }

    let shown = 0;

    let locked = false;

    let touchStartY = null;

    const lockMs = 720;

    // Do not intercept page scrolling while the visitor is approaching the section.

    // Activate only when the next card is fully inside the viewport; this keeps

    // the page moving naturally until the visitor can actually see the card.

    const sectionIsActive = () => {

      if (shown >= cards.length) return false;

      const cardRect = cards[shown].getBoundingClientRect();

      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      const fullyVisible = cardRect.top >= 0 && cardRect.bottom <= viewportHeight;

      const reasonablySized = cardRect.height <= viewportHeight;

      return fullyVisible && reasonablySized;

    };

    const revealNext = () => {

      if (locked || shown >= cards.length) return false;

      cards[shown].classList.add("is-in");

      shown += 1;

      locked = true;

      window.setTimeout(() => { locked = false; }, lockMs);

      return true;

    };

    const onWheel = (event) => {

      if (event.deltaY <= 0 || !sectionIsActive() || shown >= cards.length) return;

      event.preventDefault();

      revealNext();

    };

    const onTouchStart = (event) => {

      touchStartY = event.touches?.[0]?.clientY ?? null;

    };

    const onTouchMove = (event) => {

      if (touchStartY === null || !sectionIsActive() || shown >= cards.length) return;

      const currentY = event.touches?.[0]?.clientY;

      if (typeof currentY === "number" && touchStartY - currentY > 10) event.preventDefault();

    };

    const onTouchEnd = (event) => {

      const endY = event.changedTouches?.[0]?.clientY;

      if (touchStartY !== null && typeof endY === "number" && touchStartY - endY > 30 && sectionIsActive() && shown < cards.length) {

        revealNext();

      }

      touchStartY = null;

    };

    window.addEventListener("wheel", onWheel, { passive: false });

    window.addEventListener("touchstart", onTouchStart, { passive: true });

    window.addEventListener("touchmove", onTouchMove, { passive: false });

    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {

      window.removeEventListener("wheel", onWheel);

      window.removeEventListener("touchstart", onTouchStart);

      window.removeEventListener("touchmove", onTouchMove);

      window.removeEventListener("touchend", onTouchEnd);

    };

  }, []);

  const active = INDUSTRIES[ind];

  return (

    <main className="oc-home" ref={rootRef}>

      {/* ================= HERO ================= */}

          <section className="oc-hero-video" id="home" aria-labelledby="oc-hero-title">
      <video className="oc-hero-video-bg" autoPlay muted loop playsInline preload="metadata" poster="/images/hero-professional.jpg" aria-hidden="true">
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>
      <div className="oc-hero-video-shade" aria-hidden="true" />
      <div className="oc-hero-video-glow" aria-hidden="true" />
      <div className="oc-hero-video-content oc-wrap">
        <div className="oc-hero-video-eyebrow"><span className="oc-hero-video-signal" /> SOFTWARE ENGINEERING · CLOUD · AI</div>
        <h1 id="oc-hero-title">Building <span>smarter</span> digital solutions.</h1>
        <p>We design and build custom software, scalable cloud platforms, and intelligent AI solutions that move your business forward.</p>
        <div className="oc-hero-video-actions">
          <Link to="/contact" className="oc-hero-video-btn oc-hero-video-primary">Start a Project <span aria-hidden="true">↗</span></Link>
          <a href="#services" className="oc-hero-video-btn oc-hero-video-secondary">Explore Our Services <span aria-hidden="true">→</span></a>
        </div>
        <div className="oc-hero-video-footer"><span>01 / INNOVATE</span><span className="oc-hero-video-line" /><span>BUILD WITH CONFIDENCE</span></div>
      </div>
      <a className="oc-hero-video-scroll" href="#services" aria-label="Scroll to services"><span>SCROLL TO EXPLORE</span><span aria-hidden="true">↓</span></a>
    </section>

      {/* ================= TECH STRIP ================= */}

      <section className="oc-strip" aria-label="Technology expertise">

        <p>Technologies we work with</p>

        <div className="oc-marquee">

          <div className="oc-marquee-track">

            {[...STACK, ...STACK].map((tech, i) => (

              <span

                className="oc-chip oc-tech-logo"

                style={{ "--tech-color": `#${tech.color}` }}

                key={`${tech.name}-${i}`}

                aria-hidden={i >= STACK.length}

                title={tech.name}

              >

                <img

                  className="oc-tech-logo-img"

                  src={getTechLogoSources(tech)[0]}

                  data-logo-sources={JSON.stringify(getTechLogoSources(tech))}

                  data-logo-index="0"

                  alt={i >= STACK.length ? "" : `${tech.name} brand logo`}

                  loading={i < 12 ? "eager" : "lazy"}

                  decoding="async"

                  onError={(event) => {

                    const img = event.currentTarget;

                    const sources = JSON.parse(img.dataset.logoSources || "[]");

                    const nextIndex = Number(img.dataset.logoIndex || 0) + 1;

                    if (nextIndex < sources.length) {

                      img.dataset.logoIndex = String(nextIndex);

                      img.src = sources[nextIndex];

                    } else {

                      // Keep the technology label visible if a provider has no icon for it.

                      img.style.display = "none";

                    }

                  }}

                />

                <span>{tech.name}</span>

              </span>

            ))}

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section className="oc-section oc-about" id="about">

        <div className="oc-wrap oc-about-redesign">

          <div className="oc-about-topline" data-reveal>

            <span className="oc-about-eyebrow"><i /> WHO WE ARE</span>

            <span className="oc-about-index">ABOUT OCAS <b>— 01</b></span>

          </div>

          <div className="oc-about-intro">

            <div className="oc-about-heading" data-reveal>

              <h2>We turn complex technology into <em>clear business value.</em></h2>

            </div>

            <div className="oc-about-summary" data-reveal>

              <p>OCAS partners with ambitious teams to turn complex challenges into dependable digital products, from the first product decision to launch and beyond.</p>

              <a className="oc-about-discover" href="#services">Explore our capabilities <span aria-hidden="true">↗</span></a>

            </div>

          </div>

          <div className="oc-about-showcase">

            <div className="oc-about-visual" data-reveal>

              <div className="oc-about-visual-main">

                <Photo src={IMG.about1} alt="OCAS team collaborating on a digital product" />

                <div className="oc-about-visual-overlay" />

                <div className="oc-about-visual-caption"><span>IDEAS INTO IMPACT</span><b>Built around your business.</b></div>

              </div>

              <div className="oc-about-visual-inset"><Photo src={IMG.about2} alt="Software engineering and development work" /></div>

              <div className="oc-about-orbit" aria-hidden="true"><span>O</span></div>

              <div className="oc-about-proof"><span className="oc-about-proof-icon">✳</span><div><b>People-first engineering</b><span>Thoughtful by design. Reliable by default.</span></div></div>

            </div>

            <div className="oc-about-details" data-reveal>

              <span className="oc-about-small-label">THE OCAS APPROACH</span>

              <h3>Good work starts with understanding <em>what matters.</em></h3>

              <p className="oc-about-details-copy">We bring product thinking, engineering discipline, and a collaborative mindset to every stage of the journey.</p>

              <div className="oc-about-principles">

                {PRINCIPLES.map((p, i) => (

                  <article className="oc-about-principle" key={p.title}>

                    <span className="oc-about-principle-no">0{i + 1}</span>

                    <div><h4>{p.title}</h4><p>{p.text}</p></div>

                    <span className="oc-about-principle-arrow" aria-hidden="true">↗</span>

                  </article>

                ))}

              </div>

              <a className="oc-about-bottom-link" href="#services">See how we can help <span aria-hidden="true">→</span></a>

            </div>

          </div>

        </div>

      </section>

      {/* ================= SERVICES ================= */}

      <section className="oc-section oc-alt oc-services-premium" id="services">

        <div className="oc-wrap">

          <div className="oc-services-topline" data-reveal>

            <span><i /> WHAT WE DO</span>

            <span className="oc-services-edition">OCAS / CAPABILITIES <b>01—06</b></span>

          </div>

          <header className="oc-services-heading" data-reveal>

            <div className="oc-services-title">

              <h2>Technology that moves<br /><em>your business forward.</em></h2>

            </div>

            <div className="oc-services-intro">

              <p>From the first product decision to long-term scale, we bring strategy, design and engineering together to solve the right problems.</p>

              <Link to="/services" className="oc-services-all">Explore all capabilities <span aria-hidden="true">↗</span></Link>

            </div>

          </header>

          <div className="oc-service-grid oc-services-grid-premium oc-services-list-layout">

            {SERVICES.map((s, i) => (

              <article className={`oc-service oc-service-premium oc-service-row ${i % 2 ? "oc-service-row-reverse" : ""}`} key={s.title} data-reveal style={{ "--d": `${i * 70}ms` }}>

                <div className="oc-service-img oc-service-img-premium">

                  <Photo src={s.img} alt={s.alt} />

                  <span className="oc-index">{String(i + 1).padStart(2, "0")}</span>

                  <span className="oc-service-image-mark" aria-hidden="true">↗</span>

                </div>

                <div className="oc-service-body oc-service-body-premium">

                  <div className="oc-service-meta"><span>CAPABILITY {String(i + 1).padStart(2, "0")}</span><span className="oc-service-meta-dot" /></div>

                  <h3>{s.title}</h3>

                  <p>{s.text}</p>

                  <div className="oc-tags">

                    {s.tags.map((t) => <span key={t}>{t}</span>)}

                  </div>

                  <Link to="/services" className="oc-service-cta">Discover service <span aria-hidden="true">→</span></Link>

                </div>

              </article>

            ))}

          </div>

          <div className="oc-services-foot" data-reveal>

            <span>One team. Connected expertise. Practical outcomes.</span>

            <Link to="/contact">Have a project in mind? <b>Let’s talk <span aria-hidden="true">↗</span></b></Link>

          </div>

        </div>

      </section>

      {/* ================= INDUSTRIES (tabs) ================= */}

      <section className="oc-section" id="industries">

        <div className="oc-wrap">

          <header className="oc-head" data-reveal>

            <div>

              <span className="oc-kicker">Industries we support</span>

              <h2>Built for the world your business <em>works in.</em></h2>

            </div>

            <p>Deeply practical digital solutions shaped around the realities of your sector.</p>

          </header>

          <div className="oc-ind oc-ind-scroll-layout">

            <nav className="oc-ind-tabs oc-ind-sticky-nav" role="tablist" aria-label="Industries">

              {INDUSTRIES.map((x, i) => (

                <button

                  key={x.label}

                  type="button"

                  role="tab"

                  aria-selected={i === ind}

                  aria-controls={`oc-ind-panel-${i}`}

                  className={i === ind ? "on" : ""}

                  onClick={() => goToIndustry(i)}

                >

                  <span className="oc-ind-no">{String(i + 1).padStart(2, "0")}</span>

                  <span className="oc-ind-tab-label">{x.label}</span>

                  <span className="oc-ind-tab-arrow" aria-hidden="true">↗</span>

                </button>

              ))}

            </nav>

            <div className="oc-ind-panels">

              {INDUSTRIES.map((industry, i) => (

                <article

                  className={`oc-ind-panel oc-ind-scroll-panel${i === ind ? " is-active" : ""}`}

                  id={`oc-ind-panel-${i}`}

                  role="tabpanel"

                  aria-label={industry.title}

                  aria-current={i === ind ? "true" : undefined}

                  data-industry-index={i}

                  ref={(node) => { industryPanelRefs.current[i] = node; }}

                  key={industry.label}

                >

                  <div className="oc-ind-photo">

                    <Photo src={industry.img} alt={industry.alt} eager={i === 0} />

                    <span className="oc-ind-photo-count">{String(i + 1).padStart(2, "0")} <i>/</i> 09</span>

                  </div>

                  <div className="oc-ind-info">

                    <span className="oc-kicker">{industry.label}</span>

                    <h3>{industry.title}</h3>

                    <p>{industry.desc}</p>

                    <ul>

                      {industry.points.map((point) => <li key={point}>{point}</li>)}

                    </ul>

                    <div className="oc-tags">

                      {industry.tags.map((tag) => <span key={tag}>{tag}</span>)}

                    </div>

                    <Link to="/contact" className="oc-link">Discuss your project <Arrow /></Link>

                  </div>

                </article>

              ))}

            </div>

          </div>

          <div className="oc-ind-foot" data-reveal>

            <p>Working in a different industry?</p>

            <Link to="/contact" className="oc-btn oc-btn-ghost">Tell us about your challenge <Arrow /></Link>

          </div>

        </div>

      </section>

      {/* ================= PROCESS ================= */}

      <section className="oc-section oc-process" id="process">

        <div className="oc-wrap">

          <header className="oc-head oc-head-light" data-reveal>

            <div>

              <span className="oc-kicker oc-kicker-light">How we work</span>

              <h2>Clarity first. <em>Momentum always.</em></h2>

            </div>

            <p>Great delivery is not magic. It is a transparent process, honest conversations, and the right decisions made at the right time.</p>

          </header>

          <ol className="oc-steps">

            {PROCESS.map((p, i) => (

              <li className="oc-step" key={p.title} data-reveal style={{ "--d": `${i * 90}ms` }}>

                <span className="oc-step-no">0{i + 1}</span>

                <h3>{p.title}</h3>

                <p>{p.text}</p>

              </li>

            ))}

          </ol>

        </div>

      </section>

      {/* ================= SELECTED PARTNERSHIPS ================= */}

      <section className="oc-section oc-alt oc-partnerships" id="clients">

        <div className="oc-wrap">

          <div className="oc-partners-topline" data-reveal>

            <span><i /> SELECTED PARTNERSHIPS</span>

            <span className="oc-partners-edition">COLLABORATION <b>01—02</b></span>

          </div>

          <header className="oc-partners-heading" data-reveal>

            <div>

              <span className="oc-kicker">Good work is built together</span>

              <h2>Partnerships with <em>purpose.</em></h2>

            </div>

            <p>We work alongside teams to create useful digital experiences and practical tools that support the way they operate.</p>

          </header>

          <div className="oc-partners-list">

            {CLIENTS.map((c, i) => (

              <div className={`oc-partner-row ${i % 2 === 1 ? "oc-partner-row-reverse" : ""}`} key={c.name}>

                <a className="oc-client oc-partner-card oc-partner-copy" href={c.url} target="_blank" rel="noopener noreferrer" data-reveal data-reveal-side={i % 2 === 0 ? "left" : "right"} style={{ "--d": `${i * 100}ms` }}>

                  <div className="oc-partner-card-top">

                    <span className="oc-partner-number">0{i + 1}<i> / 02</i></span>

                    <span className="oc-partner-mark" aria-hidden="true">{c.name.charAt(0)}</span>

                  </div>

                  <div className="oc-partner-card-content">

                    <span className="oc-partner-type">{c.category}</span>

                    <h3>{c.name}</h3>

                    <p>{c.text}</p>

                  </div>

                  <span className="oc-partner-card-foot"><span>Visit company website</span><b aria-hidden="true">↗</b></span>

                </a>

                <a className="oc-partner-preview" href={c.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${c.name} website`} data-reveal data-reveal-side={i % 2 === 0 ? "right" : "left"} style={{ "--d": `${i * 100 + 120}ms` }}>

                  <div className="oc-partner-browser-bar" aria-hidden="true"><span /><span /><span /><small>{c.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}</small><b>↗</b></div>

                  <div className="oc-partner-screen">

                    <video

                      className="oc-partner-video"

                      src={c.video}

                      autoPlay

                      muted

                      loop

                      playsInline

                      preload="metadata"

                      aria-label={`${c.name} website homepage video preview`}

                    />

                    <span className="oc-partner-preview-caption">WEBSITE PREVIEW</span>

                  </div>

                </a>

              </div>

            ))}

          </div>

          <div className="oc-partners-bottom" data-reveal>

            <span>Have a shared goal in mind?</span>

            <Link to="/contact">Let’s build something useful <span aria-hidden="true">→</span></Link>

          </div>

        </div>

      </section>

      {/* ================= CTA (image) ================= */}

      <section className="oc-cta">

        <Photo src={IMG.cta} alt="A team working together around a table" className="oc-cta-img" />

        <div className="oc-cta-shade" aria-hidden="true" />

        <div className="oc-wrap oc-cta-inner" data-reveal>

          <span className="oc-kicker oc-kicker-light">Have a challenge?</span>

          <h2>Let&apos;s make your <em>next move count.</em></h2>

          <p>Tell us what you are trying to build, fix, or improve. We will help you find a clear way forward.</p>

          <Link to="/contact" className="oc-btn oc-btn-light">Talk to our team <Arrow /></Link>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section className="oc-section" id="contact">

        <div className="oc-wrap oc-contact">

          <div className="oc-contact-side" data-reveal>

            <span className="oc-kicker oc-kicker-light">Get in touch</span>

            <h2>Tell us what <em>you have in mind.</em></h2>

            <p>Share a little about your project and we will get back to you to discuss the next steps.</p>

            <a href="mailto:hello@ocassoftware.com" className="oc-email">hello@ocassoftware.com <Arrow /></a>

            <ol className="oc-next">

              {NEXT_STEPS.map((s, i) => (

                <li key={s}><span>{i + 1}</span>{s}</li>

              ))}

            </ol>

          </div>

          <form

            className="oc-form"

            data-reveal

            action="mailto:hello@ocassoftware.com"

            method="post"

            encType="text/plain"

          >

            <div className="oc-row">

              <label>Your name

                <input name="Name" placeholder="Full name" required />

              </label>

              <label>Work email

                <input type="email" name="Email" placeholder="you@company.com" required />

              </label>

            </div>

            <div className="oc-row">

              <label>Company

                <input name="Company" placeholder="Company name" />

              </label>

              <label>What do you need?

                <select name="Interested in" defaultValue="">

                  <option value="" disabled>Select a service</option>

                  {SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}

                  <option>Other</option>

                </select>

              </label>

            </div>

            <label>Project overview

              <textarea name="Message" rows="4" placeholder="A few details about your goals..." required />

            </label>

            <button type="submit" className="oc-btn oc-btn-primary">Send enquiry <Arrow /></button>

            <small>By submitting this form, you agree to be contacted about your enquiry.</small>

          </form>

        </div>

      </section>

    </main>

  );

}