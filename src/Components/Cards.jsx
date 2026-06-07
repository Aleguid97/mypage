import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTelegram, FaWhatsapp } from "react-icons/fa";
import AOS from "aos";
import { useNavigate } from "react-router-dom";
import SocialLink from "./SocialLink";
import "aos/dist/aos.css";

const socialLinks = [
  { href: "https://github.com/aleguid97", icon: FaGithub },
  { href: "https://www.linkedin.com/in/aleguid97dev/", icon: FaLinkedin, className: "mx-3" },
  { href: "mailto:aleguid97dev@gmail.com", icon: FaEnvelope, className: "me-3", external: false },
  { href: "https://t.me/Kshatriya1488", icon: FaTelegram },
  { href: "https://wa.me/+393882547822", icon: FaWhatsapp, className: "ms-3" },
];

function Cards() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const handleProjectsClick = () => {
    navigate("/projects");
  };

  return (
    <div className="wrapper">
      <div className="container text-center">
        <img
          src="ProPic.jpg"
          alt="Alessio Guida"
          className="rounded-circle profile-img shadow"
          width={200}
          height={200}
        />
        <h1 className="m-0">Alessio Guida</h1>
        <p className="lead mb-4">Junior Fullstack Developer</p>
        <figure className="m-0">
          <blockquote className="blockquote">
            <p style={{ fontFamily: "Vivaldi", fontStyle: "italic", fontSize: "24px" }}>
              "Elen Sila Lumenn Omentielvo"
            </p>
          </blockquote>
          <figcaption className="blockquote-footer">
            J.R.R. Tolkien - <cite title="Source Title">Lord of the Rings</cite>
          </figcaption>
        </figure>

        <span className="container social">
          {socialLinks.map((link) => (
            <SocialLink
              key={link.href}
              href={link.href}
              icon={link.icon}
              className={link.className}
              external={link.external}
            />
          ))}
        </span>

        <div className="text-center buttons mt-5">
          <a href="\Docs\Curriculum.pdf" download="Alessio_Guida_CV.pdf">
            <button className="btn-download btn-common rounded-pill btn w-100">Download CV</button>
          </a>
          <button className="btn-projects btn-common rounded-pill btn" onClick={handleProjectsClick}>
            Projects
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
