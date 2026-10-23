
import React, { useState } from "react";
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

const Careers = () => {
  const [openJob, setOpenJob] = useState(null);

  const toggleJob = (jobId) => {
    setOpenJob((currentJob) => (currentJob === jobId ? null : jobId));
  };

  const handleSubmit = (event, jobTitle) => {
    event.preventDefault();

    alert(
      `Your application for "${jobTitle}" has been prepared. Connect this form to your backend to submit it.`
    );
  };

  return (
    <main className="careers-page">
      {/* Hero */}
      <section className="careers-hero">
        <div className="careers-container">
          <div className="careers-hiring-badge">
            <span className="careers-status-dot"></span>
            NOW HIRING
          </div>

          <h1>Build with us.</h1>

          <p>
            We're a small, hands-on engineering team. Below are the roles
            we're currently hiring for — full-time and internships.
          </p>
        </div>
      </section>

      {/* Job listings */}
      <section className="careers-list-section">
        <div className="careers-container">
          <div className="careers-job-list">
            {jobs.map((job) => {
              const isOpen = openJob === job.id;

              return (
                <article
                  className={`careers-job-card ${isOpen ? "is-open" : ""}`}
                  key={job.id}
                  id={`job-${job.id}`}
                >
                  {/* Job heading */}
                  <div className="careers-job-header">
                    <div className="careers-job-summary">
                      <span className="careers-job-meta">
                        [{job.id}] {job.type}
                      </span>

                      <h2>{job.title}</h2>

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
                  {isOpen && (
                    <div
                      className="careers-job-details"
                      id={`details-${job.id}`}
                    >
                      <div className="careers-details-grid">
                        {/* Left: Role details */}
                        <div className="careers-role-information">
                          <div className="careers-detail-block">
                            <h3>ABOUT THE ROLE</h3>
                            <p>{job.overview}</p>
                          </div>

                          <div className="careers-detail-block">
                            <h3>WHAT YOU'LL DO</h3>

                            <ul className="careers-bullet-list">
                              {job.responsibilities.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="careers-detail-block">
                            <h3>WHAT WE'RE LOOKING FOR</h3>

                            <ul className="careers-bullet-list">
                              {job.requirements.map((item, index) => (
                                <li key={index}>{item}</li>
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
                              CV / Resume <span>(PDF preferred)</span> *
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
                              Cover letter{" "}
                              <span>(PDF preferred)</span>
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
                            className="careers-submit-button"
                            type="submit"
                          >
                            Submit application
                            <span aria-hidden="true">→</span>
                          </button>

                          <p className="careers-form-note">
                            Fields marked * are required. Your application
                            will need a connected submission service.
                          </p>
                        </form>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Careers;
