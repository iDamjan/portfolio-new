import { forwardRef } from "react";
import "./cv.css";

const CVTemplate = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="cv-root" ref={ref}>
      {/* Header */}
      <header className="cv-header">
        <div className="cv-header-left">
          <h1 className="cv-name">Damjan Stojanovski</h1>
          <p className="cv-title">Software Engineer</p>
        </div>
        <div className="cv-header-right">
          <span>damjan.stojanovski123@gmail.com</span>
          <span>Skopje, Macedonia</span>
          <span>linkedin.com/in/damjan-stojanovski-4b772520a</span>
          <span>github.com/iDamjan</span>
        </div>
      </header>

      <div className="cv-body">
        {/* Left column */}
        <aside className="cv-sidebar">
          <section className="cv-section">
            <h2 className="cv-section-title">Skills</h2>
            <div className="cv-skill-group">
              <h3 className="cv-skill-group-title">Frontend</h3>
              <ul className="cv-skill-list">
                <li>React / Next.js</li>
                <li>Vue.js</li>
                <li>TypeScript / JavaScript</li>
                <li>HTML5 / CSS3 / Tailwind</li>
                <li>Three.js / WebGL</li>
                <li>Playwright / Vitest</li>
              </ul>
            </div>
            <div className="cv-skill-group">
              <h3 className="cv-skill-group-title">Backend</h3>
              <ul className="cv-skill-list">
                <li>Go</li>
                <li>Node.js / Nest.js</li>
                <li>PostgreSQL / BigQuery</li>
                <li>REST APIs</li>
              </ul>
            </div>
            <div className="cv-skill-group">
              <h3 className="cv-skill-group-title">Infrastructure & Data</h3>
              <ul className="cv-skill-list">
                <li>GCP / Terraform</li>
                <li>AWS</li>
                <li>Google BigQuery</li>
                <li>Hex Analytics</li>
                <li>Git</li>
              </ul>
            </div>
            <div className="cv-skill-group">
              <h3 className="cv-skill-group-title">Design</h3>
              <ul className="cv-skill-list">
                <li>Blender</li>
                <li>Adobe Illustrator</li>
              </ul>
            </div>
          </section>
        </aside>

        {/* Right column */}
        <main className="cv-main">
          <section className="cv-section">
            <h2 className="cv-section-title">Profile</h2>
            <p className="cv-profile-text">
              A software engineer passionate about building seamless and
              intuitive user experiences. Driven by a commitment to continuous
              learning and growth, with strong problem-solving abilities and
              algorithmic thinking. Believes that a solid understanding of core
              principles, combined with an adaptive and proactive mindset, is
              essential for effectively tackling new challenges and mastering any
              technology.
            </p>
          </section>

          <section className="cv-section">
            <h2 className="cv-section-title">Experience</h2>

            <div className="cv-experience-item">
              <div className="cv-exp-header">
                <div>
                  <h3 className="cv-exp-role">Software Engineer</h3>
                  <p className="cv-exp-company">Surfe</p>
                </div>
                <span className="cv-exp-date">Jul 2025 – Present</span>
              </div>
              <p className="cv-exp-desc">
                Technical backbone for Go-To-Market teams on the RevOps team,
                delivering agile data, full-stack, and infrastructure solutions.
                Manages data workflows in Google BigQuery and builds interactive
                analytics workspaces in Hex. Builds custom internal tools with
                high-performance Go backends and Vue/React frontends. Manages
                GCP cloud infrastructure with Terraform, directly translating
                technical execution into revenue growth.
              </p>
            </div>

            <div className="cv-experience-item">
              <div className="cv-exp-header">
                <div>
                  <h3 className="cv-exp-role">Full Stack Engineer</h3>
                  <p className="cv-exp-company">Sols – Digital Solutions</p>
                </div>
                <span className="cv-exp-date">Contractor – B2C</span>
              </div>
              <p className="cv-exp-desc">
                Built full-stack applications using Next.js, Strapi and
                PostgreSQL. Created immersive 3D experiences with Three.js,
                including interactive clothing configurators. Managed own
                workflow and coordinated with a small team, handling task
                delegation and reporting directly to the firm.
              </p>
            </div>

            <div className="cv-experience-item">
              <div className="cv-exp-header">
                <div>
                  <h3 className="cv-exp-role">Software Engineering Mentor</h3>
                  <p className="cv-exp-company">Brainster</p>
                </div>
                <span className="cv-exp-date">Jan 2024 – Apr 2025</span>
              </div>
              <p className="cv-exp-desc">
                Guided and mentored students in HTML, CSS, JavaScript, React,
                and Next.js with a strong focus on developing algorithmic
                thinking essential for solving problems across any programming
                language or environment.
              </p>
            </div>

            <div className="cv-experience-item">
              <div className="cv-exp-header">
                <div>
                  <h3 className="cv-exp-role">Software Engineer</h3>
                  <p className="cv-exp-company">Omnevue</p>
                </div>
                <span className="cv-exp-date">Jan 2023 – Apr 2025</span>
              </div>
              <p className="cv-exp-desc">
                Developed and maintained applications using Vue.js, Node.js, and
                AWS. Ensured robust application quality with Vitest for unit
                testing and Playwright for end-to-end testing.
              </p>
            </div>

            <div className="cv-experience-item">
              <div className="cv-exp-header">
                <div>
                  <h3 className="cv-exp-role">Research & Development Engineer</h3>
                  <p className="cv-exp-company">Vanhool</p>
                </div>
                <span className="cv-exp-date">Aug 2021 – Nov 2022</span>
              </div>
            </div>
          </section>

          <section className="cv-section">
            <h2 className="cv-section-title">Featured Projects</h2>

            <div className="cv-project-item">
              <div className="cv-exp-header">
                <h3 className="cv-exp-role">Wizz Learning</h3>
                <span className="cv-exp-date">Personal</span>
              </div>
              <p className="cv-project-tech">React · Node.js · AI Agents · Voice AI</p>
              <p className="cv-exp-desc">
                An AI-powered tutoring platform for creating intelligent,
                subject-specific tutor agents with custom personas and teaching
                styles. Supports voice and text interactions for a natural
                conversational learning experience. Educators can assign AI
                tutors to individual students, enabling personalised learning
                paths at scale.
              </p>
            </div>

            <div className="cv-project-item">
              <div className="cv-exp-header">
                <h3 className="cv-exp-role">Promovere</h3>
                <span className="cv-exp-date">Contract</span>
              </div>
              <p className="cv-project-tech">Next.js · GraphQL · Three.js · PostgreSQL · Keycloak</p>
              <p className="cv-exp-desc">
                Application for managing garment suppliers and dealers with an
                integrated 3D garment customization tool built in Three.js,
                enabling users to interact with and configure garments in
                real-time.
              </p>
            </div>

            <div className="cv-project-item">
              <div className="cv-exp-header">
                <h3 className="cv-exp-role">TransPass</h3>
                <span className="cv-exp-date">Contract · transpass.io</span>
              </div>
              <p className="cv-project-tech">Next.js · TypeScript · Firebase</p>
              <p className="cv-exp-desc">
                Digital product passport for tracking and managing products
                through their lifecycle.
              </p>
            </div>

            <div className="cv-project-item">
              <div className="cv-exp-header">
                <h3 className="cv-exp-role">Doctors App</h3>
                <span className="cv-exp-date">Personal</span>
              </div>
              <p className="cv-project-tech">Next.js · Nest.js · Supabase</p>
              <p className="cv-exp-desc">
                Platform to streamline healthcare access — users can find and
                connect with doctors while clinics manage their complete patient
                lifecycle.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
});

CVTemplate.displayName = "CVTemplate";

export default CVTemplate;
