import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const initialFormState = {
    interest: "General Inquiry",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    company: "",
    project: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Backend submission simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData(initialFormState);
  };

  return (
    <main className="contact-page">
      <div className="contact-bg-glow" />
      <section className="contact-page-container">
        
        {/* Left Side: Brand & Info */}
        <div className="contact-page-info">
          <div className="badge">
            <span className="badge-dot" />
            LET'S BUILD SOMETHING
          </div>

          <h1>
            Start a project <br />
            with <span className="brand-highlight">OCAS</span>
          </h1>

          <p className="contact-description">
            Tell us what you're building and what's not working today, and we'll
            follow up with a tailored action plan.
          </p>

          <div className="contact-page-response">
            <div className="response-icon">⚡</div>
            <div>
              <strong>We typically respond —</strong>
              <span>Within 1 business day</span>
            </div>
          </div>

          <div className="contact-features">
            <div className="feature-item">
              <span className="feature-check">✓</span> Enterprise Security
            </div>
            <div className="feature-item">
              <span className="feature-check">✓</span> Dedicated Team Setup
            </div>
            <div className="feature-item">
              <span className="feature-check">✓</span> Flexible Engagement
            </div>
          </div>
        </div>

        {/* Right Side: Form / Success State */}
        <div className="contact-page-form-section">
          {submitted ? (
            <div className="contact-page-success">
              <div className="contact-page-success-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>

              <h2>Thank you for reaching out!</h2>

              <p>
                Your form has been submitted successfully. Connect a backend or email service to deliver your enquiry to the OCAS team.
              </p>

              <button
                type="button"
                className="btn-secondary"
                onClick={handleReset}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-page-form" onSubmit={handleSubmit}>
              <div className="contact-page-field">
                <label htmlFor="interest">I'm interested in...</label>
                <div className="select-wrapper">
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Custom Software Development">
                      Custom Software Development
                    </option>
                    <option value="Cloud & DevOps Engineering">
                      Cloud & DevOps Engineering
                    </option>
                    <option value="AI & Data Engineering">
                      AI & Data Engineering
                    </option>
                    <option value="Mobile App Development">
                      Mobile App Development
                    </option>
                    <option value="Enterprise Systems Integration">
                      Enterprise Systems Integration
                    </option>
                    <option value="Project Consultation">
                      Project Consultation
                    </option>
                    <option value="Partnership">Partnership</option>
                  </select>
                </div>
              </div>

              <div className="contact-page-name-row">
                <div className="contact-page-field">
                  <label htmlFor="firstName">
                    First Name <span className="required">*</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-page-field">
                  <label htmlFor="lastName">
                    Last Name <span className="required">*</span>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-page-name-row">
                <div className="contact-page-field">
                  <label htmlFor="email">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-page-field">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="contact-page-field">
                <label htmlFor="company">Company Name</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Acme Inc."
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-page-field">
                <label htmlFor="project">Tell us about your project</label>
                <textarea
                  id="project"
                  name="project"
                  rows="4"
                  placeholder="What are you building, and what's your target timeline?"
                  value={formData.project}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="contact-page-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <span className="arrow">→</span>
              </button>

              <p className="contact-page-note">
                Fields marked <span className="required">*</span> are required.
              </p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default Contact;