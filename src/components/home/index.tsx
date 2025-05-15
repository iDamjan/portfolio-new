import "./index.css";
import { FaReact, FaNodeJs, FaAws, FaVuejs } from "react-icons/fa";
import { SiNextdotjs, SiPostgresql, SiMongodb, SiSvelte } from "react-icons/si";
import Experience from "../Experience";
import { TbBrain } from "react-icons/tb";
import { useState } from "react";

export default function Home() {
  const [response, setResponse] = useState("");
  const [showResponse, setShowResponse] = useState(false);
  const [inputMessage, setInputMessage] = useState("");

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  async function askChat() {
    setResponse("This feature is not available yet. Stay tuned!");
    setShowResponse(true);
    setInputMessage("");
    // try {
    //   if (!inputMessage.trim()) return; // Prevent empty submissions
    //   setShowResponse(!showResponse);
    //   const res = await api.post("/ask-damjan", {
    //     messages: [{ role: "user", content: inputMessage }],
    //   });
    //   setResponse(res.data.content);
    // } catch (error) {
    //   console.error(error);
    //   setResponse("Error generating response, please try again later.");
    //   setTimeout(() => {
    //     setResponse("");
    //     setShowResponse(false);
    //   }, 3000);
    // } finally {
    //   setInputMessage("");
    // }
  }

  // Add a key press handler for accessibility
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputMessage.trim()) {
      askChat();
    }
  };

  function back() {
    setResponse("");
    setShowResponse(false);
  }

  // Handle contact form changes
  const handleContactChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle contact form submission
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setFormError("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactForm.email)) {
      setFormError("Please enter a valid email address");
      return;
    }

    // Clear any previous errors
    setFormError("");

    // Here you would typically send the form data to your backend
    console.log("Form submitted:", contactForm);

    // Show success message
    setFormSubmitted(true);

    // Reset form after a delay
    setTimeout(() => {
      setContactForm({
        name: "",
        email: "",
        message: "",
      });
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="container">
      <div className="cardsContainer">
        <div className="card modelCharacter">
          <Experience />
          {!showResponse && (
            <div className="askDamjan">
              <TbBrain className="brainIcon" />
              <input
                type="text"
                placeholder="Ask Ai Damjan"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                aria-label="Ask Damjan a question"
              />
              <button onClick={askChat} aria-label="Submit question">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="m18.707 12.707-3 3a1 1 0 0 1-1.414-1.414L15.586 13H6a1 1 0 0 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414z"
                    data-name="Right"
                  />
                </svg>
              </button>
            </div>
          )}
          {showResponse && (
            <div className="response">
              {response || "Generating response..."}
              <button onClick={back}>Back</button>
            </div>
          )}
        </div>
        <div className="card headingText">
          <span className="greeting">Hey there! 👋</span>
          <span className="name">Software developer</span>
          <span className="title">Damjan Stojanovski</span>
        </div>
        <div className="card aboutMe">
          <span className="aboutMeTitle">About Me (CV)</span>
          <p className="aboutMeText">
            A software developer passionate about building seamless and
            intuitive user experiences.
          </p>
          <a href="/about" className="readMoreBtn">
            Read More →
          </a>
        </div>
        <div className="card projects">
          <span className="projectsTitle">Projects</span>
          <div className="projectsPreview">
            <div className="projectItem">
              <div className="projectIcon">🚀</div>
              <div className="projectInfo">
                <span className="projectName">Promovere</span>
                <span className="projectTech">
                  Next.js • ThreeJS • PostgreSQL
                </span>
              </div>
            </div>
            <div className="projectItem">
              <div className="projectIcon">💡</div>
              <div className="projectInfo">
                <span className="projectName">Transpass</span>
                <span className="projectTech">
                  Next.js • Tailwind • Firebase
                </span>
              </div>
            </div>
          </div>
          <a href="/projects" className="viewMoreBtn">
            View All Projects →
          </a>
        </div>
        <div className="card techStack">
          <span className="techStackTitle">Tech Stack</span>
          <div className="slider">
            <div className="slide-track">
              {/* First set */}
              <div className="slide">
                <FaReact className="tech-icon" />
                <span>React</span>
              </div>
              <div className="slide">
                <SiNextdotjs className="tech-icon" />
                <span>Next.js</span>
              </div>
              <div className="slide">
                <FaVuejs className="tech-icon" />
                <span>Vue</span>
              </div>
              <div className="slide">
                <SiSvelte className="tech-icon" />
                <span>Svelte</span>
              </div>
              <div className="slide">
                <FaNodeJs className="tech-icon" />
                <span>Node.js</span>
              </div>
              <div className="slide">
                <FaAws className="tech-icon" />
                <span>AWS</span>
              </div>
              <div className="slide">
                <SiPostgresql className="tech-icon" />
                <span>PostgreSQL</span>
              </div>
              <div className="slide">
                <SiMongodb className="tech-icon" />
                <span>MongoDB</span>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="slide">
                <FaReact className="tech-icon" />
                <span>React</span>
              </div>
              <div className="slide">
                <SiNextdotjs className="tech-icon" />
                <span>Next.js</span>
              </div>
              <div className="slide">
                <FaVuejs className="tech-icon" />
                <span>Vue</span>
              </div>
              <div className="slide">
                <SiSvelte className="tech-icon" />
                <span>Svelte</span>
              </div>
              <div className="slide">
                <FaNodeJs className="tech-icon" />
                <span>Node.js</span>
              </div>
              <div className="slide">
                <FaAws className="tech-icon" />
                <span>AWS</span>
              </div>
              <div className="slide">
                <SiPostgresql className="tech-icon" />
                <span>PostgreSQL</span>
              </div>
              <div className="slide">
                <SiMongodb className="tech-icon" />
                <span>MongoDB</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card contact">
          <h2 className="contactTitle">Get in Touch</h2>

          {formSubmitted ? (
            <div className="formSuccess">
              <p>Thank you for your message!</p>
              <p>I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form className="contactForm" onSubmit={handleContactSubmit}>
              {formError && <div className="formError">{formError}</div>}

              <div className="formGroup">
                <input
                  type="text"
                  name="name"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  placeholder="Name"
                  aria-label="Name"
                  required
                />
              </div>

              <div className="formGroup">
                <input
                  type="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  placeholder="Email"
                  aria-label="Email"
                  required
                />
              </div>

              <div className="formGroup">
                <textarea
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  placeholder="Your message"
                  aria-label="Message"
                  rows={4}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submitBtn" disabled={true}>
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
