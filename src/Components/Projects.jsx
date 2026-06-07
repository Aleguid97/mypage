import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Fruitfy Market",
    video: "/Presentazione_FruitfyMarket.mp4",
    description: "Un'app marketplace per la frutta a km 0.",
  },
  {
    title: "Project 2",
    video: "/Presentazione_DnDcompanion.mp4",
    description: "App per creare e gestire PG di Dungeons & Dragons.",
  },
  {
    title: "Project 3",
    image: "https://via.placeholder.com/800x400",
    description: "Terzo progetto di esempio.",
  },
];

function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const navigate = useNavigate();

  const openModal = (videoSrc) => {
    setActiveVideo(videoSrc);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setActiveVideo(null);
  };

  const handleComeBack = () => {
    navigate("/");
  };

  return (
    <div className="container my-5">
      <div className="d-flex align-items-center mb-4">
  <button
    onClick={handleComeBack}
    className="btn btn-link p-0 me-3"
    style={{ border: "none", background: "none" }}
    aria-label="Torna alla home"
  >
    <FaArrowLeft size={32} className="arrow"/>
  </button>
  <h2 className="mb-0">Projects</h2>
</div>


      <div className="row g-4">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4">
            <div className="cell card h-100 shadow-sm">
              {project.video ? (
                <>
                  <video
                    className="card-img-top h-100"
                    controls
                    style={{ maxHeight: "250px", objectFit: "cover" }}
                    onError={(e) => {
                      console.error(`Failed to load video: ${project.video}`);
                      e.target.style.display = "none";
                    }}
                  >
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <button
                    className="btn btn-ingrandisci m-2"
                    onClick={() => openModal(project.video)}
                  >
                    Ingrandisci
                  </button>
                </>
              ) : (
                <img
                  src={project.image}
                  className="card-img-top "
                  alt={project.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.alt = `${project.title} — image unavailable`;
                    e.target.style.background = "#e0e0e0";
                  }}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal per video ingrandito */}
      <Modal show={showModal} onHide={closeModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Anteprima</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {activeVideo && (
            <video controls autoPlay style={{ width: "100%" }}>
              <source src={activeVideo} type="video/mp4" />
            </video>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Projects;
