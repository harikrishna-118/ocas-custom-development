
import { useEffect, useState } from "react";
import "./IntroLoader.css";
import logo from "../assets/logo-full.png";
import softwareBackground from "../assets/ocas-software-bg.png";

export default function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => {
      setExiting(true);
    }, 2650);

    const hideTimer = window.setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`intro-loader${exiting ? " intro-loader--exit" : ""}`}
      style={{
        "--intro-background": `url("${softwareBackground}")`,
      }}
      role="status"
      aria-label="Loading OCAS website"
    >
      <div className="intro-loader__backdrop" />
      <div className="intro-loader__shade" />
      <div className="intro-loader__grid" />

      <div className="intro-loader__glow intro-loader__glow--left" />
      <div className="intro-loader__glow intro-loader__glow--right" />

      <div className="intro-loader__particles">
        {Array.from({ length: 8 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>

      <div className="intro-loader__content">
        <div className="intro-loader__logo-stage">
          <span className="intro-loader__ring intro-loader__ring--outer" />
          <span className="intro-loader__ring intro-loader__ring--inner" />

          <span className="intro-loader__orbit">
            <i />
          </span>

          <div className="intro-loader__logo-frame">
            <img
              src={logo}
              alt="OCAS"
              className="intro-loader__logo"
            />
            <span className="intro-loader__logo-shine" />
          </div>
        </div>

        <p className="intro-loader__tagline">
          Custom Software Development
        </p>

        <span className="intro-loader__rule">
          <i />
        </span>

        <div className="intro-loader__loading">
          <span className="intro-loader__progress">
            <i />
          </span>

          <span className="intro-loader__loading-text">
            Building digital experiences
          </span>
        </div>
      </div>

      <div className="intro-loader__bottom-line" />
    </div>
  );
}
