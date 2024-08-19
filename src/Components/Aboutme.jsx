import React from "react";
import "aos/dist/aos.css";

const AboutMeAndLanguages = () => {
  const languages = [
    { name: "Italiano", level: 100 },
    { name: "English", level: 80 },
    { name: "Français", level: 60 },
    { name: "Español", level: 40 },
    { name: "日本語", level: 20 },
  ];

  const technologies = [
    { name: "HTML5", src: "https://img.icons8.com/color/48/html-5.png" },
    { name: "CSS3", src: "https://img.icons8.com/color/48/css3.png" },
    { name: "Sass", src: "https://img.icons8.com/color/48/sass.png" },
    { name: "Bootstrap", src: "https://img.icons8.com/color/48/bootstrap.png" },
    { name: "React", src: "https://img.icons8.com/color/48/react-native.png" },
    { name: "JavaScript", src: "https://img.icons8.com/color/48/javascript.png" },
    {
      name: "C#",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/1024px-C_Sharp_Logo_2023.svg.png",
    },
    { name: "SQL", src: "https://img.icons8.com/color/48/sql.png" },
  ];

  return (
    <div className="container-fluid main mt-5 mb-5">
      <div className="aboutme" data-aos="fade-right">
        {/* <div className="bautmi"> */}
        <h5 className="fs-1">About Me</h5>
        {/* </div> */}
        <p className="description">
          I am Alessio Guida, a neophyte Full Stack Developer recently emerged from the esoteric and intensive training
          at the eldritch Epicode School. Presently, I seek to unravel the mysteries of my first employment within the
          arcane realms of technology. My unquenchable thirst for knowledge propels me to incessantly absorb the latest
          technological novelties and to confront the unknown with unwavering resolve. Beyond the shadowed labyrinths of
          programming, I am an ardent devotee of electronic games, the moving pictures, and the serial tales that
          flicker in the night. My spirit is inexorably drawn to the ancient and arcane rituals of Dungeons & Dragons.
          The tomes of literature and the distant lands, though visited less frequently than I desire, call to me with
          an otherworldly allure. My aspiration is to find myself within a stimulating and dynamic environment, where I
          might wield my burgeoning skills, evolve in my craft, and contribute to projects of an innovative and perhaps
          eldritch nature.
        </p>
        <div className="my-3">
          <h5 className="mt-5 fs-2">Languages</h5>
          {languages.map((language, index) => (
            <div key={index} className="mb-3">
              <div className="d-flex justify-content-between">
                <span>{language.name}</span>
                <span>{language.level}%</span>
              </div>
              <div className="progress">
                <div
                  className={`progress-bar ${true ? "loaded" : ""}`}
                  role="progressbar"
                  style={{
                    "--fill-level": `${language.level}%`,
                    width: `${language.level}%`,
                  }}
                  aria-valuenow={language.level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="technologies-container m-0" data-aos="fade-right">
        <h4 className="fs-2 pt-3">Technologies</h4>
        {/* <div className="container-icon w-100 d-flex nowrap mb-5"> */}
        {technologies.map((tech) => (
          // <div key={tech.name} className="mx-2 my-2">
          <img
            className="technology-icon"
            src={tech.src}
            alt={`${tech.name} icon`}
            style={{ width: "50px", height: "50px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutMeAndLanguages;
