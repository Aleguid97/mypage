import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTelegram, FaWhatsapp } from "react-icons/fa";
import AOS from "aos";
import { Link, useNavigate } from "react-router-dom";
import "aos/dist/aos.css";

function Cards() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []); // Aggiunta la dipendenza vuota per eseguire l'init solo una volta

  const handleProjectsClick = () => {
    navigate("/projects");
    // const tech = document.querySelector(".technologies-container");
    // tech.style.visibility = "hidden";
  };

  return (
    <div className="wrapper">
      <div className="container text-center">
        <img
          src="Propic.jpg"
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
          <a href="https://github.com/aleguid97" target="_blank" rel="noopener noreferrer">
            <FaGithub size={40} />
          </a>
          <a href="https://www.linkedin.com/in/aleguid97dev/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} className="mx-3" />
          </a>
          <a href="mailto:aleguid97dev@gmail.com">
            <FaEnvelope size={40} className="me-3" />
          </a>
          <a href="https://t.me/Kshatriya1488" target="_blank" rel="noopener noreferrer">
            <FaTelegram size={40} />
          </a>
          <a href="https://wa.me/+393882547822" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={40} className="ms-3" />
          </a>
        </span>
        <div className="text-center buttons mt-5">
          <a href="\Docs\Curriculum.pdf" download="Alessio_Guida_CV.pdf">
            <button className="btn-download rounded-pill btn w-100">Download CV</button>
          </a>
          <button className="btn-projects rounded-pill btn" onClick={handleProjectsClick}>
            Projects
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
