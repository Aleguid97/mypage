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
          My name is Alessio Guida, and I am a Junior Full Stack Developer. I'm looking for my first experience working
          in the world of technology, with the aim of applying the skills acquired and continuing to grow in a
          stimulating environment. My passion for learning drives me to keep up with the latest technological
          innovations and to face new challenges with determination. Outside of work, I'm a passionate about video
          games, cinema and TV series, but I don't disdain a nice and long session at Dungeons & Dragons with friends.
          Furthermore, I love reading especially fantasy like Tolkien and Lovecraft. Actually my goal is join a dynamic
          team, where I can contribute to innovative project and contine to develop my technical and professional
          skills.
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
