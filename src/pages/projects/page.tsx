import "./projects.css";
import { useState } from "react";

// Define project interface
interface Project {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  images: string[];
  description: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  isPrivate: boolean;
}

// Project data with your actual project images
const projectsData: Project[] = [
  {
    id: 1,
    title: "Promovere",
    category: "Web Development",
    thumbnail: "/projects/promovere/4.png",
    images: [
      "/projects/promovere/1.png",
      "/projects/promovere/2.png",
      "/projects/promovere/3.png",
      "/projects/promovere/4.png",
      "/projects/promovere/5.png",
    ],
    description:
      "Application for managing garment suppliers and dealers with integrated 3D garment customization tool with THREEjs that enables users to interact and configure the garments.",
    technologies: ["Next.js", "GraphQL", "THREE.js", "PostgreSQL", "Keycloak"],
    demoUrl: "#",
    githubUrl: "#",
    isPrivate: true,
  },
  {
    id: 2,
    title: "TransPass",
    category: "Web Application",
    thumbnail: "/projects/transpass/1.png",
    images: [
      "/projects/transpass/1.png",
      "/projects/transpass/2.png",
      "/projects/transpass/3.png",
      "/projects/transpass/4.png",
      "/projects/transpass/5.png",
      "/projects/transpass/6.png",
    ],
    description:
      "Digital product passport for tracking and managing products through their lifecycle.",
    technologies: ["Next.js", "TypeScript", "Firebase"],
    demoUrl: "https://transpass.io/",
    githubUrl: "#",
    isPrivate: true,
  },
  {
    id: 3,
    title: "Doctors App",
    category: "Healthcare",
    thumbnail: "/projects/doctors/1.png",
    images: [
      "/projects/doctors/1.png",
      "/projects/doctors/2.png",
      "/projects/doctors/3.png",
    ],
    description:
      "A personal project designed to streamline healthcare access by enabling users to easily find and connect with doctors, while also empowering doctors and private clinics to efficiently manage their complete patient lifecycle.",
    technologies: ["Next.js", "NestJS", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
    isPrivate: true,
  },
  {
    id: 4,
    title: "Downhill Bike Club",
    category: "Landing Page",
    thumbnail: "/projects/bikeclub/Screenshot 2025-05-14 at 16.43.06.png",
    images: [
      "/projects/bikeclub/Screenshot 2025-05-14 at 16.43.06.png",
      "/projects/bikeclub/Screenshot 2025-05-14 at 16.43.15.png",
      "/projects/bikeclub/Screenshot 2025-05-14 at 16.43.24.png",
      "/projects/bikeclub/Screenshot 2025-05-14 at 16.43.37.png",
    ],
    description:
      "A modern landing page for a downhill biking club showcasing their services, events, and team members. The site features a responsive design, smooth animations, and interactive elements to engage visitors.",
    technologies: ["HTML", "CSS", "JavaScript", "GSAP Animation"],
    demoUrl: "#",
    githubUrl: "https://github.com/iDamjan/BDBC-Website",
    isPrivate: false,
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openProjectDetail = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div className="projects-page">
      <div className="projects-container">
        <h1 className="projects-heading">Projects</h1>
        <p className="projects-subtitle">
          A selection of my recent work and personal projects
        </p>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => openProjectDetail(project)}
            >
              <div className="project-thumbnail">
                <img src={project.thumbnail} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="project-detail-overlay" onClick={closeProjectDetail}>
          <div
            className="project-detail-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button" onClick={closeProjectDetail}>
              &times;
            </button>

            <div className="project-detail-gallery">
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} screenshot ${
                  currentImageIndex + 1
                }`}
              />

              {selectedProject.images.length > 1 && (
                <div className="gallery-controls">
                  <button className="gallery-nav prev" onClick={prevImage}>
                    &#8592;
                  </button>
                  <span className="gallery-indicator">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </span>
                  <button className="gallery-nav next" onClick={nextImage}>
                    &#8594;
                  </button>
                </div>
              )}
            </div>

            <div className="project-detail-info">
              <h2>{selectedProject.title}</h2>
              <p className="project-detail-description">
                {selectedProject.description}
              </p>

              <div className="project-technologies">
                <h3>Technologies</h3>
                <div className="tech-tags">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                {!selectedProject.isPrivate && selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub Repository
                  </a>
                )}
                {selectedProject.isPrivate && (
                  <span className="private-project-notice">
                    This is a private project with restricted access
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
