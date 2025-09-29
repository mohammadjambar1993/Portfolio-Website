import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";

const Resume = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container resume-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Resume".split("")}
            idx={15}
          />
        </h1>

        <div className="resume-container">
          {/* JPG Full-width */}
          <div className="resume-card">
            <img src="/Resume.JPG" alt="Resume Preview" className="resume-image" />
          </div>

          {/* Download Button */}
          <div className="resume-card resume-buttons">
            <a href="/Mohammad_Jambar_Resume.pdf" download>
              <button className="btn">Download Resume</button>
            </a>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Resume;











