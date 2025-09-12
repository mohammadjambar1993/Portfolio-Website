import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss"

const LanguageList = () => {
  const [languages] = useState([
    { name: "Python", progress: 100, className: "python-progress", years: 4 },
    { name: "JavaScript", progress: 75, className: "JavaScript-progress", years: 4 },
    { name: "HTML/CSS/JS", progress: 75, className: "web-progress", years: 3 },
    { name: "C/C++", progress: 37.5, className: "c-progress", years: 2 },
    { name: "SQL", progress: 37.5, className: "sql-progress", years: 1.5 },
    

  ]);

  return (
    <div>
      <h2>Languages</h2>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>
            <span>{language.name}: {`${language.years} years`}</span>
            <ProgressBar progress={language.progress} className={language.className} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageList;
