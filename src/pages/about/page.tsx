import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./about.css";

function About() {
  return (
    <div className="about-container">
      {/* Left Column */}
      <div className="about-left-column">
        <div className="profile-section">
          <div className="profile-image">
            {/* Replace with your actual image */}
            <img src="/jas.jpg" alt="Damjan Stojanovski" />
          </div>
          <h2 className="profile-name">Damjan Stojanovski</h2>
          <p className="profile-title">Software Developer</p>
        </div>

        <div className="contact-section">
          <h3 className="section-title">Contact</h3>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>damjan.stojanovski123</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Skopje, Macedonia</span>
          </div>
          <div className="social-links">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icon" />
            </a>
          </div>
        </div>

        <div className="skills-section">
          <h3 className="section-title">Skills</h3>
          <div className="skill-category">
            <h4>Frontend</h4>
            <div className="skill-pills">
              <span className="skill-pill skill-primary">React</span>
              <span className="skill-pill skill-secondary">Next.js</span>
              <span className="skill-pill skill-accent">TypeScript</span>
              <span className="skill-pill skill-primary">HTML5</span>
              <span className="skill-pill skill-secondary">CSS3</span>
              <span className="skill-pill skill-secondary">Tailwind</span>
              <span className="skill-pill skill-accent">JavaScript</span>
              <span className="skill-pill skill-accent">Three.js</span>
              <span className="skill-pill skill-accent">WebGL</span>
            </div>
          </div>

          <div className="skill-category">
            <h4>Backend</h4>
            <div className="skill-pills">
              <span className="skill-pill skill-accent">Node.js</span>
              <span className="skill-pill skill-primary">Nest.js</span>
              <span className="skill-pill skill-accent">PostgreSQL</span>
              <span className="skill-pill skill-primary">REST APIs</span>
            </div>
          </div>

          <div className="skill-category">
            <h4>Other</h4>
            <div className="skill-pills">
              <span className="skill-pill skill-secondary">Git</span>
              <span className="skill-pill skill-primary">AWS</span>
              <span className="skill-pill skill-primary">Blender</span>
              <span className="skill-pill skill-primary">Illustrator</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="about-right-column">
        <div className="about-section">
          <h1 className="about-heading">About Me</h1>
          <p className="about-text">
            A software developer passionate about building seamless and
            intuitive user experiences. I am driven by a commitment to
            continuous learning and growth, both personally and as a dedicated
            professional in my field.
          </p>
          <p className="about-text">
            I highly value strong problem-solving abilities and algorithmic
            thinking. While familiarity with specific tools and features is
            beneficial, I believe that a solid understanding of core principles,
            combined with an adaptive and proactive mindset, is essential for
            effectively tackling new challenges and mastering any technology.
          </p>
        </div>

        <div className="featured-projects-section">
          <h2 className="section-heading">Featured Projects</h2>
          <div className="cv-projects">
            <div className="cv-project">
              <div className="project-header">
                <h3>Promovere</h3>
                <span>Type - contract</span>
              </div>
              <p className="project-tech">
                Nextjs • GraphQL • THREE.js • PostgreSQL • Keycloak
              </p>
              <p className="project-description">
                Application for managing garment suppliers and dealers with
                integrated 3D garment customization tool with THREEjs that
                enables users to interact and configure the garments.
              </p>
              <p className="project-links-text">
                <span className="project-link-label">Website:</span> Requires
                invite
                <span className="project-link-label ml">GitHub:</span> Private
              </p>
            </div>

            <div className="cv-project">
              <div className="project-header">
                <h3>TransPass</h3>
                <span>Type - contract</span>
              </div>
              <p className="project-tech">Next.js • TypeScript • Firebase</p>
              <p className="project-description">
                Digital product passport for tracking and managing products
                through their lifecycle.
              </p>
              <p className="project-links-text">
                <span className="project-link-label">Website:</span>{" "}
                https://transpass.io/
                <span className="project-link-label ml">GitHub:</span> Private
              </p>
            </div>

            <div className="cv-project">
              <div className="project-header">
                <h3>Doctors App</h3>
                <span>Type - personal</span>
              </div>
              <p className="project-tech">NextJs • NestJs • Supabase</p>
              <p className="project-description">
                A personal project designed to streamline healthcare access by
                enabling users to easily find and connect with doctors, while
                also empowering doctors and private clinics to efficiently
                manage their complete patient lifecycle.
              </p>
              <p className="project-links-text">
                <span className="project-link-label">Demo:</span> Locally
                <span className="project-link-label ml">GitHub:</span> Private
              </p>
            </div>
          </div>

          <p className="github-link">Check out my github for more projects!</p>
        </div>

        <div className="tab-content">
          <h3 className="section-heading">Experience</h3>
          <div className="experience-content">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">Contractor - B2C</div>
              <div className="timeline-content">
                <h3>Full Stack Engineer</h3>
                <p className="company">Sols - Digital Solutions</p>
                <p className="description">
                  Building full-stack applications using Next.js and Strapi,
                  with PostgreSQL as the primary database. I also work with
                  Three.js to create immersive 3D experiences, including
                  interactive clothing configurators. One of the most rewarding
                  aspects of this role has been managing my own workflow and
                  collaborating with a small team of two. We handle task
                  delegation, coordination, and reporting directly to the firm.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">Jan 2024 - Apr 2025</div>
              <div className="timeline-content">
                <h3>Software Engineering Mentor</h3>
                <p className="company">Brainster</p>
                <p className="description">
                  Guiding and mentoring students in learning HTML, CSS,
                  JavaScript, React, and Next.js — with a strong focus on
                  developing algorithmic thinking, which is essential for
                  solving problems across any programming language or
                  environment. An incredible chapter of my life, filled with the
                  opportunity to meet many driven and inspiring individuals, all
                  ready to transform their careers for the better.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">Jan 2023 - Apr 2025</div>
              <div className="timeline-content">
                <h3>Software Engineer</h3>
                <p className="company">Omnevue</p>
                <p className="description">
                  Developing and maintaining applications using Vue.js for the
                  frontend, Node.js and AWS for the backend and infrastructure
                  management. Ensuring robust application quality with Vitest
                  for unit testing and Playwright for end-to-end testing.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">Aug 2021 - Nov 2022</div>
              <div className="timeline-content">
                <h3>Research & Development Engineer</h3>
                <p className="company">Vanhool</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
