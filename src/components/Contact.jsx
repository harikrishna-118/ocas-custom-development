
import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    interest: "General Inquiry",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    company: "",
    project: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="contact-page">
      <section className="contact-page-container">

        <div className="contact-page-info">
          <span className="contact-page-eyebrow">
            LET'S BUILD SOMETHING
          </span>

          <h1>
            Start a project
            <br />
            with OCAS
          </h1>

          <p>
            Tell us what you're building and what's not
            working today, and we'll follow up with how
            we can help.
          </p>

          <div className="contact-page-response">
            <strong>We typically respond —</strong>
            <span>Within 1 business day</span>
          </div>

          <div className="contact-page-decoration" />
        </div>

        <div className="contact-page-form-section">
          {submitted ? (
            <div className="contact-page-success">
              <div className="contact-page-success-icon">✓</div>

              <h2>Thank you for reaching out!</h2>

              <p>
                Your form has been submitted in the frontend.
                Connect a backend or email service to deliver
                your enquiry to the OCAS team.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    interest: "General Inquiry",
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    company: "",
                    project: "",
                  });
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form
              className="contact-page-form"
              onSubmit={handleSubmit}
            >
              <div className="contact-page-field">
                <label htmlFor="interest">
                  I'm interested in...
                </label>

                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                >
                  <option>General Inquiry</option>
                  <option>Custom Software Development</option>
                  <option>Cloud & DevOps Engineering</option>
                  <option>AI & Data Engineering</option>
                  <option>Mobile App Development</option>
                  <option>Enterprise Systems Integration</option>
                  <option>Project Consultation</option>
                  <option>Partnership</option>
                </select>
              </div>

              <div className="contact-page-name-row">
                <div className="contact-page-field">
                  <label htmlFor="firstName">
                    First Name <span>*</span>
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-page-field">
                  <label htmlFor="lastName">
                    Last Name <span>*</span>
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
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

              <div className="contact-page-field">
                <label htmlFor="email">
                  Email <span>*</span>
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-page-field">
                <label htmlFor="company">Company Name</label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-page-field">
                <label htmlFor="project">
                  Tell us about your project
                </label>

                <textarea
                  id="project"
                  name="project"
                  rows="4"
                  placeholder="What are you building, and what's the timeline?"
                  value={formData.project}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="contact-page-submit"
              >
                Send Message <span>→</span>
              </button>

              <p className="contact-page-note">
                Fields marked <span>*</span> are required.
              </p>
            </form>
          )}
        </div>

      </section>
    </main>
  );
};

export default Contact;
