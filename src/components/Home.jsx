import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

/* Real photographic images are loaded from Unsplash URLs in SERVICES and INDUSTRIES. */

/* =========================================================
   DATA
   ========================================================= */

const ROTATING_WORDS = ["software", "platforms", "AI systems"];

const STACK = [
  "TypeScript", "React", "Node.js", "Python", "AWS", "Azure", "Docker", "Kubernetes",
  "PostgreSQL", "Terraform", "Next.js", "React Native", "Salesforce", "SAP", "LangChain", "Airflow",
];

const STATEMENT =
  "We engineer custom software, cloud platforms and applied AI that plug into how your business already runs — built with modern practices and supported long after launch.";

const PRINCIPLES = [
  { n: "01", title: "Custom-Built", text: "Software modeled around how your team actually works, not a template." },
  { n: "02", title: "Cloud-Native", text: "Infrastructure and pipelines built to scale without duct tape." },
  { n: "03", title: "Secure by Design", text: "Security and compliance considered from architecture, not bolted on later." },
];

const PILLARS = [
  { icon: "✳", label: "Agile Delivery" },
  { icon: "☁", label: "Cloud-Native Architecture" },
  { icon: "⌁", label: "Security-First Engineering" },
  { icon: "↗", label: "Dedicated Support" },
];

const SERVICES = [
  {
    title: "Custom Software Development",
    text: "Tailored web and enterprise applications built around how your business actually runs.",
    tags: ["TypeScript", "React", "Node.js"],
    img: "/images/services/custom-software.jpg",
    fallback: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85",
    alt: "Software team collaborating at a shared workstation",
  },
  {
    title: "Cloud & DevOps Engineering",
    text: "Resilient cloud infrastructure and automated delivery pipelines.",
    tags: ["AWS", "Docker", "Kubernetes"],
    img: "/images/services/cloud-devops.jpg",
    fallback: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85",
    alt: "Data center server racks with network cabling",
  },
  {
    title: "AI & Data Engineering",
    text: "Data pipelines and applied AI that turn information into decisions.",
    tags: ["Python", "PostgreSQL", "Airflow"],
    img: "/images/services/ai-data.jpg",
    fallback: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=85",
    alt: "Abstract visualization of artificial intelligence",
  },
  {
    title: "Mobile App Development",
    text: "Native-feeling apps for iOS and Android from a single codebase.",
    tags: ["React Native", "Swift", "Kotlin"],
    img: "/images/services/mobile-app.jpg",
    fallback: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=85",
    alt: "Person holding a smartphone running a mobile app",
  },
  {
    title: "Enterprise Systems Integration",
    text: "Connect and modernize the systems your business already depends on.",
    tags: ["REST/SOAP APIs", "Salesforce", "SAP"],
    img: "/images/services/enterprise-integration.jpg",
    fallback: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",
    alt: "Close-up of a circuit board representing connected systems",
  },
  {
    title: "UI/UX & Product Design",
    text: "Research-led interface design that makes complex products simple to use and easy to adopt.",
    tags: ["Figma", "Design Systems", "Prototyping"],
    img: "/images/services/ui-ux-design.jpg",
    fallback: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1400&q=85",
    alt: "Designer working on interface wireframes",
  },
];

const INDUSTRIES = [
  {
    key: "bank", label: "Banking", accent: "#3b82f6", title: "Banking & Financial Services",
    img: "/images/industries/banking.jpg",
    fallback: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85",
    alt: "Modern financial district buildings",
    subtitle: "Secure, compliant software for financial institutions.",
    desc: "Digital banking platforms, risk tooling, and compliance-aware systems for banks, lenders, and fintech companies operating under strict regulation.",
    features: [
      ["Core system modernization", "Migrating legacy financial systems to secure, API-driven architectures."],
      ["Compliance-first design", "Built with data security and audit requirements from day one."],
      ["Risk & fraud tooling", "Real-time transaction monitoring and underwriting decision support."],
    ],
    tags: ["PCI-DSS", "SOC 2", "Plaid", "Core Banking APIs"],
    icon: <><path d="M16 43 60 18l44 25H16Z" /><path d="M23 49h74M28 49v39m21-39v39m22-39v39m21-39v39M19 94h82M13 103h94" /></>,
  },
  {
    key: "insurance", label: "Insurance", accent: "#8b5cf6", title: "Insurance & InsurTech",
    img: "/images/industries/insurance.jpg",
    fallback: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=85",
    alt: "Professionals reviewing and signing policy documents",
    subtitle: "Modern platforms for underwriting, policy, and claims.",
    desc: "We help insurers and brokers digitize the policy lifecycle with automated underwriting, self-service portals, and faster claims workflows.",
    features: [
      ["Policy administration", "Quote, bind, and renew policies on a configurable, auditable platform."],
      ["Claims automation", "Intake, triage, and settlement workflows with document intelligence."],
      ["Customer & broker portals", "Self-service experiences that reduce support load."],
    ],
    tags: ["Guidewire", "Duck Creek", "OCR / IDP", "Power BI"],
    icon: <><path d="M60 14 98 28v30c0 24-16 40-38 48C38 98 22 82 22 58V28Z" /><path d="m43 60 12 12 22-24" /></>,
  },
  {
    key: "healthcare", label: "Healthcare", accent: "#14b8a6", title: "Healthcare",
    img: "/images/industries/healthcare.jpg",
    fallback: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=85",
    alt: "Healthcare professional reviewing patient information",
    subtitle: "Reliable software for providers, payers, and health tech companies.",
    desc: "Patient-facing and clinical software designed with the data privacy and interoperability standards healthcare organizations require.",
    features: [
      ["Interoperability", "Integrations with clinical systems and health data standards."],
      ["Patient-facing platforms", "Portals and applications built for accessibility and trust."],
      ["Clinical workflow tools", "Scheduling, charting, and care-coordination that fits real workflows."],
    ],
    tags: ["HL7/FHIR", "HIPAA", "Epic", "Twilio"],
    icon: <><path d="M60 101S17 75 17 43c0-23 29-32 43-10 14-22 43-13 43 10 0 32-43 58-43 58Z" /><path d="M60 43v34M43 60h34" /></>,
  },
  {
    key: "commerce", label: "E-Commerce", accent: "#f59e0b", title: "E-Commerce",
    img: "/images/industries/ecommerce.jpg",
    fallback: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85",
    alt: "Customer paying with a card at a checkout terminal",
    subtitle: "Digital-first storefronts and checkout experiences built to convert.",
    desc: "Headless storefronts, checkout flows, and post-purchase experiences for D2C brands and marketplaces that need to move fast without sacrificing reliability.",
    features: [
      ["Headless storefronts", "Composable commerce that integrates with the tools you already use."],
      ["Checkout & payments", "Fast, reliable checkout with fraud protection and multiple payment methods."],
      ["Post-purchase experience", "Order tracking, returns, and retention flows that bring customers back."],
    ],
    tags: ["Shopify", "Stripe", "Next.js", "Algolia"],
    icon: <><path d="M18 26h12l10 51h48l13-36H35" /><circle cx="49" cy="94" r="6" /><circle cx="82" cy="94" r="6" /><path d="M47 48h34m-17-17v34" /></>,
  },
  {
    key: "logistics", label: "Logistics", accent: "#0ea5e9", title: "Logistics & Transportation",
    img: "/images/industries/logistics.jpg",
    fallback: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85",
    alt: "Warehouse with stacked shipping pallets and shelving",
    subtitle: "Visibility and automation across fleets, warehouses, and shipments.",
    desc: "Tracking, routing, and warehouse tools for carriers, 3PLs, and shippers who need real-time visibility across every mile of the supply chain.",
    features: [
      ["Fleet & shipment tracking", "Live location, ETA, and exception alerts on a single dashboard."],
      ["Route & load optimization", "Planning engines that lower cost per delivery and idle time."],
      ["Warehouse management", "Inventory, picking, and dock-scheduling software that fits your floor."],
    ],
    tags: ["GPS / Telematics", "WMS", "EDI", "Mapbox"],
    icon: <><path d="M10 34h58v42H10z" /><path d="M68 48h20l14 16v12H68z" /><circle cx="32" cy="82" r="8" /><circle cx="88" cy="82" r="8" /></>,
  },
  {
    key: "manufacturing", label: "Manufacturing", accent: "#f97316", title: "Manufacturing",
    img: "/images/industries/manufacturing.jpg",
    fallback: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85",
    alt: "Industrial robotic arms on a manufacturing line",
    subtitle: "Software that connects the floor to the front office.",
    desc: "We help manufacturers digitize operations — from production tracking to supply chain visibility — with software that fits how plants actually operate.",
    features: [
      ["Operations visibility", "Dashboards that surface what's happening across facilities in real time."],
      ["Supply chain tooling", "Systems that keep planning, procurement, and logistics in sync."],
      ["Predictive maintenance", "Sensor-driven insights that flag equipment issues before downtime."],
    ],
    tags: ["IIoT", "MES", "SCADA", "Power BI"],
    icon: <><path d="M18 102V55l25 15V53l25 17V38l16 10V25h18v77H18Z" /><path d="M31 84h9m12 0h9m12 0h9m12 0h6M87 25V14h8v11" /></>,
  },
  {
    key: "education", label: "Education", accent: "#a855f7", title: "Education",
    img: "/images/industries/education.jpg",
    fallback: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85",
    alt: "Teacher and students in a bright classroom",
    subtitle: "Platforms for institutions, learners, and administrators.",
    desc: "Learning platforms and administrative systems for schools, universities, and edtech companies focused on outcomes, not just features.",
    features: [
      ["Learning platforms", "Engaging, accessible experiences for students and instructors."],
      ["Administrative systems", "Tools that reduce manual work for staff and faculty."],
      ["Analytics & outcomes", "Reporting that helps institutions track engagement and performance."],
    ],
    tags: ["LMS", "SIS", "SCORM/xAPI", "Canvas API"],
    icon: <><path d="m12 43 48-25 48 25-48 25-48-25Z" /><path d="M30 54v25c17 15 43 15 60 0V54M108 43v32" /><circle cx="108" cy="81" r="5" /></>,
  },
  {
    key: "government", label: "Public Sector", accent: "#10b981", title: "Government & Public Sector",
    img: "/images/industries/government.jpg",
    fallback: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85",
    alt: "Modern civic office building with glass facade",
    subtitle: "Accessible, secure digital services for public agencies.",
    desc: "Citizen-facing portals and internal case management systems designed for accessibility, security, and long-term maintainability.",
    features: [
      ["Accessible public portals", "Interfaces built to WCAG accessibility standards."],
      ["Secure infrastructure", "Architected around public-sector security requirements."],
      ["Case management", "Internal workflow systems for permits, benefits, and service requests."],
    ],
    tags: ["FedRAMP", "WCAG 2.2", "Section 508", "Salesforce Gov Cloud"],
    icon: <><path d="M15 43 60 18l45 25H15ZM21 50h78M27 50v39m22-39v39m22-39v39m22-39v39M18 96h84M12 105h96" /></>,
  },
  {
    key: "ai", label: "AI Automation", accent: "#ec4899", title: "Custom AI Automation",
    img: "/images/industries/ai-automation.jpg",
    fallback: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=85",
    alt: "Robot head representing applied artificial intelligence",
    subtitle: "Practical AI that removes manual work from your business processes.",
    desc: "Applied AI — from internal copilots to workflow agents — that plugs directly into how your team already operates, not a generic chatbot bolted on top.",
    features: [
      ["Workflow automation", "AI agents that handle repetitive multi-step processes end to end."],
      ["Applied LLM integration", "Retrieval-augmented assistants and copilots grounded in your own data."],
      ["Human-in-the-loop design", "Automation with clear override paths, so people stay in control."],
    ],
    tags: ["OpenAI", "LangChain", "Vector DBs", "Python"],
    icon: <><rect x="27" y="28" width="66" height="64" rx="14" /><path d="M60 13v15m-17 16h34M45 60h.1M75 60h.1M45 75c8 8 22 8 30 0M14 47h13m66 0h13M14 75h13m66 0h13M43 92v14m34-14v14" /></>,
  },
];

const PROCESS = [
  { title: "Discovery & Strategy", text: "We start by understanding your goals, constraints, and existing systems before writing a single line of code." },
  { title: "Design & Architecture", text: "Technical architecture and interface design happen together, so the product is both usable and built to last." },
  { title: "Agile Development & QA", text: "Iterative sprints with continuous testing keep the project visible and on track from the first milestone." },
  { title: "Launch & Ongoing Support", text: "We handle deployment and stay on for monitoring, iteration, and support after launch." },
];

const CLIENTS = [
  { name: "Infynixtek", url: "https://infynixtek.com/", category: "Talent placement & staffing solutions", text: "Website design and a candidate portal for talent placement." },
  { name: "CodeBridge Technologies", url: "https://codebridgetec.com/", category: "Talent placement & staffing solutions", text: "Website design and internal staffing management tools." },
];

const NEXT_STEPS = [
  { title: "We review your details", text: "Usually within a few hours of you reaching out." },
  { title: "A short discovery call", text: "15–20 minutes to understand scope and timeline." },
  { title: "A scoped proposal", text: "Clear plan, estimate, and next steps — no obligation." },
];

/* =========================================================
   SMALL HELPERS
   ========================================================= */

/* One masked word — animates up when its parent is revealed */
const Word = ({ i, children }) => (
  <span className="w"><span style={{ "--i": i }}>{children}</span></span>
);

/* Splits a string into masked words for the text-reveal effect */
const Split = ({ text, start = 0 }) =>
  text.split(" ").map((word, i) => (
    <React.Fragment key={i}>
      <Word i={start + i}>{word}</Word>{" "}
    </React.Fragment>
  ));

/* Real photograph: tries your own file first (/public/images/...), then a topic-matched
   fallback photo. If both fail the card keeps its gradient background. */
const Photo = ({ src, fallback, alt, className }) => {
  const [stage, setStage] = useState(0);
  const list = [...new Set([src, fallback].filter(Boolean))];
  useEffect(() => setStage(0), [src, fallback]);
  if (stage >= list.length) return null;
  return (
    <img
      key={stage}
      className={className}
      src={list[stage]}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setStage((s) => s + 1)}
    />
  );
};

const clamp = (n, min = 0, max = 1) => Math.min(max, Math.max(min, n));

/* =========================================================
   COMPONENT
   ========================================================= */

export default function Home() {
  const rootRef = useRef(null);
  const heroVideoRef = useRef(null);
  const [rot, setRot] = useState({ i: 0, p: -1 });
  const [svc, setSvc] = useState(0);

  /* Rotating hero keyword */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(
      () => setRot((s) => ({ i: (s.i + 1) % ROTATING_WORDS.length, p: s.i })),
      2800
    );
    return () => window.clearInterval(id);
  }, []);

  /* Keep hero video playing */
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
          window.clearTimeout(retryTimer);
          retryTimer = window.setTimeout(() => {
            if (document.visibilityState === "visible") keepVideoPlaying();
          }, 1200);
        });
      }
    };
    const restartVideo = () => { video.currentTime = 0; keepVideoPlaying(); };
    const onVisibility = () => { if (document.visibilityState === "visible") keepVideoPlaying(); };

    video.addEventListener("pause", keepVideoPlaying);
    video.addEventListener("ended", restartVideo);
    document.addEventListener("visibilitychange", onVisibility);
    keepVideoPlaying();

    return () => {
      window.clearTimeout(retryTimer);
      video.removeEventListener("pause", keepVideoPlaying);
      video.removeEventListener("ended", restartVideo);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  /* Scroll reveals, scroll-linked effects, pointer effects */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    /* ---- 1. reveal on scroll (IntersectionObserver) ---- */
    const targets = root.querySelectorAll("[data-reveal]");
    let io;
    if (reduced || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
    } else {
      targets.forEach((el) => {
        const type = el.dataset.reveal;
        el.classList.add(type === "split" ? "split-reveal" : type === "stack" ? "stack-reveal" : "scroll-reveal");
      });
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
      );
      targets.forEach((el) => io.observe(el));
    }

    /* ---- 2. scroll-linked effects ---- */
    const bar = root.querySelector(".scroll-progress");
    const hero = root.querySelector(".home-hero");
    const statement = root.querySelector(".statement");
    const words = statement ? statement.querySelectorAll(".sw") : [];
    const processGrid = root.querySelector(".process-grid");
    const cards = Array.from(root.querySelectorAll(".industry-card"));

    let ticking = false;
    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const vh = window.innerHeight;

      if (bar) {
        const h = document.documentElement.scrollHeight - vh;
        bar.style.transform = `scaleX(${h > 0 ? clamp(y / h) : 0})`;
      }

      if (hero && !reduced && y < vh * 1.3) {
        hero.style.setProperty("--py", `${y * 0.28}px`);
        hero.style.setProperty("--fade", String(clamp(1 - y / (vh * 0.85))));
      }

      if (statement && words.length) {
        const r = statement.getBoundingClientRect();
        const p = reduced ? 1 : clamp((vh * 0.85 - r.top) / (vh * 0.5 + r.height * 0.4));
        const lit = Math.round(p * words.length * 1.05);
        words.forEach((w, i) => w.classList.toggle("lit", i < lit));
      }

      if (processGrid) {
        const r = processGrid.getBoundingClientRect();
        const p = reduced ? 1 : clamp((vh * 0.78 - r.top) / (r.height * 0.85 + vh * 0.12));
        processGrid.style.setProperty("--p", p.toFixed(3));
      }

      /* stacking industry cards: shrink & dim cards being covered */
      if (window.innerWidth > 760 && !reduced) {
        cards.forEach((card, i) => {
          const next = cards[i + 1];
          if (!next) return;
          const a = card.getBoundingClientRect();
          const b = next.getBoundingClientRect();
          const gap0 = a.height + 36;
          const d = clamp((gap0 - (b.top - a.top)) / gap0);
          card.style.setProperty("--scale", (1 - d * 0.05).toFixed(3));
          card.style.setProperty("--dim", (d * 0.55).toFixed(3));
        });
      } else {
        cards.forEach((c) => { c.style.removeProperty("--scale"); c.style.removeProperty("--dim"); });
      }
    };
    const onScroll = () => {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    /* ---- 3. pointer effects: spotlight, tilt, magnetic, cursor glow ---- */
    let lastTilt = null;
    let lastMag = null;
    const glow = root.querySelector(".cursor-glow");

    const resetTilt = (el) => { el.style.setProperty("--rx", "0deg"); el.style.setProperty("--ry", "0deg"); };
    const resetMag = (el) => { el.style.setProperty("--tx", "0px"); el.style.setProperty("--ty", "0px"); };

    const onMove = (e) => {
      if (glow) {
        glow.style.opacity = "1";
        glow.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      const t = e.target;
      if (!(t instanceof Element)) return;

      const spot = t.closest("[data-spotlight]");
      if (spot) {
        const r = spot.getBoundingClientRect();
        spot.style.setProperty("--mx", `${e.clientX - r.left}px`);
        spot.style.setProperty("--my", `${e.clientY - r.top}px`);
      }

      const tilt = t.closest("[data-tilt]");
      if (lastTilt && lastTilt !== tilt) resetTilt(lastTilt);
      if (tilt) {
        const r = tilt.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        tilt.style.setProperty("--rx", `${(-y * 7).toFixed(2)}deg`);
        tilt.style.setProperty("--ry", `${(x * 9).toFixed(2)}deg`);
        lastTilt = tilt;
      } else lastTilt = null;

      const mag = t.closest("[data-magnetic]");
      if (lastMag && lastMag !== mag) resetMag(lastMag);
      if (mag) {
        const r = mag.getBoundingClientRect();
        mag.style.setProperty("--tx", `${((e.clientX - (r.left + r.width / 2)) * 0.25).toFixed(1)}px`);
        mag.style.setProperty("--ty", `${((e.clientY - (r.top + r.height / 2)) * 0.35).toFixed(1)}px`);
        lastMag = mag;
      } else lastMag = null;
    };
    const onLeave = () => {
      if (glow) glow.style.opacity = "0";
      if (lastTilt) resetTilt(lastTilt);
      if (lastMag) resetMag(lastMag);
    };
    if (finePointer && !reduced) {
      root.addEventListener("pointermove", onMove);
      root.addEventListener("pointerleave", onLeave);
    }

    return () => {
      if (io) io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  const statementWords = STATEMENT.split(" ");

  useEffect(() => {
    const nodes = document.querySelectorAll(".ocas-home .nx-reveal, .ocas-home .nx-service-card, .ocas-home .nx-industry-card");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("nx-visible"));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("nx-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="ocas-home ocas-home-v5 ocas-home-v6 ocas-home-v7" ref={rootRef}>
      <div className="scroll-progress" aria-hidden="true"></div>
      <div className="cursor-glow" aria-hidden="true"></div>
      {/* FIRST SECTION PRESERVED */}
      <section className="home-hero" id="home">
        <video
          ref={heroVideoRef}
          className="hero-background-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80"
          disablePictureInPicture
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/videos/ocas-team-work.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="hero-grid" aria-hidden="true"></div>
        <span className="hero-orb hero-orb-a" aria-hidden="true"></span>
        <span className="hero-orb hero-orb-b" aria-hidden="true"></span>

        <svg className="hero-art" viewBox="0 0 750 260" fill="none" aria-hidden="true">
          <path d="M5 245C65 218 70 177 111 144S146 60 174 34 195 78 225 48 251 23 258 75 276 140 301 95 329 49 356 64" />
          <path d="M90 254C173 218 240 208 311 198S421 184 443 149 476 125 500 155 525 209 549 174 586 120 613 146 653 185 692 165" />
          <path d="M200 180C226 132 251 117 258 89S266 39 286 54 293 108 310 132 328 89 345 77" />
        </svg>

        <div className="hero-float hero-float-a" aria-hidden="true"><i></i> Cloud-native</div>
        <div className="hero-float hero-float-b" aria-hidden="true"><i></i> Secure by design</div>
        <div className="hero-float hero-float-c" aria-hidden="true"><i></i> Applied AI</div>

        <div className="hero-content">
          <span className="hero-badge"><i></i> Software · Cloud · Applied AI</span>
          <h1 className="hero-title">
            <Word i={0}>Build</Word>{" "}
            <Word i={1}>
              <span className="rotator">
                {ROTATING_WORDS.map((w, i) => (
                  <span key={w} className={i === rot.i ? "on" : i === rot.p ? "off" : ""}>{w}</span>
                ))}
              </span>
            </Word>{" "}
            <Word i={2}>that</Word>{" "}
            <Word i={3}>lasts.</Word>
          </h1>
          <p className="hero-lead">
            Custom software, cloud infrastructure, and applied AI — engineered
            for teams that need it built right, from first sketch to production.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="home-primary-button" data-magnetic>
              Start a Project <span>→</span>
            </Link>
            <a href="#services" className="home-ghost-button" data-magnetic>Explore services</a>
          </div>
        </div>

        <a href="#about" className="hero-scroll" aria-label="Scroll to content"><span></span></a>
      </section>
      {/* NEW LAYOUT: editorial overview */}
      <section className="nx-intro" id="about">
        <div className="nx-wrap nx-intro-grid">
          <div className="nx-intro-copy nx-reveal">
            <span className="nx-kicker"><i /> INDEPENDENT DIGITAL ENGINEERING</span>
            <h2>Good technology should make business feel <em>simpler.</em></h2>
          </div>
          <div className="nx-intro-side nx-reveal">
            <p>OCAS partners with ambitious teams to turn complex challenges into dependable digital products — from the first product decision to launch and beyond.</p>
            <a className="nx-arrow-link" href="#services">Explore what we do <span>↗</span></a>
          </div>
        </div>
        <div className="nx-wrap nx-proof-row">
          <div><b>01</b><span>Thoughtful strategy</span></div><div><b>02</b><span>Engineering with purpose</span></div><div><b>03</b><span>Partnership beyond launch</span></div>
        </div>
      </section>

      {/* Services: image-led editorial cards */}
      <section className="nx-services" id="services">
        <div className="nx-wrap">
          <div className="nx-section-top nx-reveal"><div><span className="nx-kicker"><i /> WHAT WE DO</span><h2>From complex idea<br/>to <em>working product.</em></h2></div><p>One connected team across product design, software engineering, cloud, and applied AI.</p></div>
          <div className="nx-service-grid nx-service-grid-v5">
            {SERVICES.map((s, i) => (
              <article className="nx-service-card nx-reveal" key={s.title} style={{"--delay": `${(i % 3) * 75}ms`}}>
                <div className="nx-service-image">
                  <img
                    src={s.fallback}
                    alt={s.alt}
                    loading="lazy"
                    decoding="async"
                    onError={(event) => { event.currentTarget.style.opacity = "0"; }}
                  />
                  <span className="nx-service-index">{String(i+1).padStart(2,"0")}</span>
                </div>
                <div className="nx-service-info">
                  <div className="nx-service-meta">{s.tags.slice(0,2).join('  /  ')}</div>
                  <h3>{s.title}</h3><p>{s.text}</p>
                  <a href="/services" className="nx-arrow-link">Explore service <span>↗</span></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering principles + technology ecosystem */}
      <section className="nx-engineering" id="engineering">
        <div className="nx-wrap">
          <div className="nx-engineering-heading nx-reveal">
            <div>
              <span className="nx-kicker"><i /> THE OCAS DIFFERENCE</span>
              <h2>Thoughtful engineering.<br /><em>Real-world outcomes.</em></h2>
            </div>
            <p>Good delivery is about more than writing code. We connect business priorities, thoughtful design, and dependable engineering to create technology people can rely on.</p>
          </div>

          <div className="nx-principle-grid">
            {PRINCIPLES.map((principle, i) => (
              <article className="nx-principle-card nx-reveal" key={principle.n} style={{"--delay": `${i * 100}ms`}}>
                <div className="nx-principle-top">
                  <span className="nx-principle-number">{principle.n}</span>
                  <span className="nx-principle-icon" aria-hidden="true">{["↗", "◈", "✳"][i]}</span>
                </div>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
                <span className="nx-principle-line" aria-hidden="true" />
              </article>
            ))}
          </div>

          <div className="nx-tech-panel nx-reveal">
            <div className="nx-tech-panel-copy">
              <span className="nx-kicker nx-kicker-light"><i /> BUILT WITH THE RIGHT TOOLS</span>
              <h3>Modern technology.<br /><em>Chosen for the job.</em></h3>
              <p>We select the stack around your product, your team, and your long-term goals — not the latest trend.</p>
            </div>
            <div className="nx-tech-marquee" aria-label="Technology expertise">
              <div className="nx-tech-marquee-track">
                <div className="nx-tech-cloud">
                  {STACK.map((tech, i) => (
                    <span className="nx-tech-chip" key={tech} style={{"--delay": `${(i % 8) * 55}ms`}}>{tech}</span>
                  ))}
                </div>
                <div className="nx-tech-cloud" aria-hidden="true">
                  {STACK.map((tech) => (
                    <span className="nx-tech-chip" key={`duplicate-${tech}`}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
            <span className="nx-tech-glow nx-tech-glow-one" aria-hidden="true" />
            <span className="nx-tech-glow nx-tech-glow-two" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Industries: asymmetrical image mosaic */}
      <section className="nx-industries" id="industries">
        <div className="nx-wrap">
          <div className="nx-industry-heading nx-reveal"><div><span className="nx-kicker nx-kicker-light"><i /> INDUSTRIES WE SUPPORT</span><h2>Built for the world<br/>your business <em>works in.</em></h2></div><p>Deeply practical digital solutions shaped around the realities of your sector.</p></div>
          <div className="nx-industry-grid nx-industry-grid-v5">
            {INDUSTRIES.map((ind,i)=>(
              <article className="nx-industry-card nx-reveal" key={ind.key} style={{"--delay": `${(i % 3) * 80}ms`}}>
                <div className="nx-industry-photo">
                  <img
                    src={ind.fallback}
                    alt={ind.alt}
                    loading="lazy"
                    decoding="async"
                    onError={(event) => { event.currentTarget.style.opacity = "0"; }}
                  />
                  <span className="nx-industry-num">{String(i+1).padStart(2,'0')}</span>
                  <span className="nx-industry-photo-arrow" aria-hidden="true">↗</span>
                </div>
                <div className="nx-industry-copy"><span>{ind.label}</span><h3>{ind.title}</h3><p>{ind.subtitle}</p></div>
              </article>
            ))}
          </div>
          <div className="nx-industry-footer nx-reveal"><p>Working in a different industry?</p><Link to="/contact" className="nx-light-button">Tell us about your challenge <span>↗</span></Link></div>
        </div>
      </section>

      {/* New approach section */}
      <section className="nx-approach" id="process">
        <div className="nx-wrap nx-approach-grid">
          <div className="nx-approach-sticky nx-reveal"><span className="nx-kicker"><i /> HOW WE WORK</span><h2>Clarity first.<br/><em>Momentum always.</em></h2><p>Great delivery is not magic. It is a transparent process, honest conversations, and the right decisions made at the right time.</p><Link to="/contact" className="nx-dark-button">Start a conversation <span>↗</span></Link></div>
          <div className="nx-steps">
            {PROCESS.map((p,i)=>(<article className="nx-step nx-reveal" key={p.title}><span className="nx-step-no">0{i+1}</span><div><h3>{p.title}</h3><p>{p.text}</p></div><span className="nx-step-symbol">↗</span></article>))}
          </div>
        </div>
      </section>

      {/* Visual statement band */}
      <section className="nx-image-band" aria-label="Technology built around people">
        <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2200&q=90" alt="A team working together around a table" loading="lazy" />
        <div className="nx-image-band-overlay" />
        <div className="nx-wrap nx-image-band-content nx-reveal"><span className="nx-kicker nx-kicker-light"><i /> PEOPLE, PRODUCT, PROGRESS</span><h2>Technology is only powerful when it works for <em>people.</em></h2><p>We keep the work collaborative, the communication clear, and the outcomes tied to what matters.</p></div>
      </section>

      {/* Client proof */}
      <section className="nx-clients" id="clients">
        <div className="nx-wrap"><div className="nx-section-top nx-reveal"><div><span className="nx-kicker"><i /> SELECTED PARTNERSHIPS</span><h2>Built together.<br/><em>Made to matter.</em></h2></div><p>We value long-term relationships and practical outcomes over unnecessary complexity.</p></div>
          <div className="nx-client-grid">{CLIENTS.map((c,i)=>(<a className="nx-client-card nx-reveal" href={c.url} target="_blank" rel="noopener noreferrer" key={c.name}><span className="nx-client-count">0{i+1} / PARTNERSHIP</span><h3>{c.name}</h3><p>{c.text}</p><span className="nx-client-bottom">{c.category}<b>↗</b></span></a>))}</div>
        </div>
      </section>

      {/* New CTA layout */}
      <section className="nx-cta">
        <div className="nx-cta-orbit nx-cta-orbit-one"/><div className="nx-cta-orbit nx-cta-orbit-two"/>
        <div className="nx-wrap nx-cta-inner nx-reveal"><span className="nx-kicker nx-kicker-light"><i /> HAVE A CHALLENGE?</span><h2>Let's make your<br/><em>next move count.</em></h2><p>Tell us what you are trying to build, fix, or improve. We will help you find a clear way forward.</p><Link to="/contact" className="nx-cta-button">Talk to our team <span>↗</span></Link></div>
      </section>

      {/* Contact panel */}
      <section className="nx-contact" id="contact">
        <div className="nx-wrap nx-contact-grid"><div className="nx-contact-copy nx-reveal"><span className="nx-kicker"><i /> GET IN TOUCH</span><h2>Tell us what<br/><em>you have in mind.</em></h2><p>Share a little about your project and we will get back to you to discuss the next steps.</p><a href="mailto:hello@ocassoftware.com" className="nx-contact-email">hello@ocassoftware.com <span>↗</span></a></div>
          <form className="nx-contact-form nx-reveal" action="mailto:hello@ocassoftware.com" method="post" encType="text/plain"><div className="nx-form-row"><label>Your name<input name="Name" placeholder="Full name" required /></label><label>Work email<input type="email" name="Email" placeholder="you@company.com" required /></label></div><div className="nx-form-row"><label>Company<input name="Company" placeholder="Company name" /></label><label>What do you need?<select name="Interested in" defaultValue=""><option value="" disabled>Select a service</option>{SERVICES.map(s=><option key={s.title}>{s.title}</option>)}<option>Other</option></select></label></div><label>Project overview<textarea name="Message" rows="4" placeholder="A few details about your goals..." required /></label><button type="submit" className="nx-submit">Send enquiry <span>↗</span></button><small>By submitting this form, you agree to be contacted about your enquiry.</small></form>
        </div>
      </section>
    </main>
  );
}
