import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTelegram, FaWhatsapp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Cards() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []); // Aggiunta la dipendenza vuota per eseguire l'init solo una volta

  return (
    <div className="wrapper" data-aos="fade-down">
      <div className="container text-center">
        <img
          src="AvatarMaker.png"
          alt="Alessio Guida"
          className="rounded-circle profile-img shadow"
          width={200}
          height={200}
        />
        <h1>Alessio Guida</h1>
        <p className="lead">Junior Fullstack Developer</p>
        <figure>
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
        <div className="text-center m-3">
          <a href="\Docs\Curriculum.pdf" download="Alessio_Guida_CV.pdf">
            <button className="btn-download rounded-pill btn">Download CV</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
