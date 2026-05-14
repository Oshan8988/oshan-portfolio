import {
  Mail,
  Phone,
  ExternalLink,
  Download,
  MessageCircle,
  Code2,
  Database,
  Smartphone,
  GraduationCap,
  ArrowRight,
  Server,
  Brain,
  Gamepad2,
  Building2,
  Bike,
  ShoppingBag,
  Hotel
} from "lucide-react";

const projects = [
  {
    icon: Brain,
    title: "A/L StudyMate",
    category: "AI Powered Learning System",
    desc: "AI-powered learning platform for Sri Lankan A/L students with MCQ exams, model papers, performance analytics and subject-based learning.",
    tech: ["React", "Node.js", "MongoDB", "Python", "Chart.js"]
  },
  {
    icon: Gamepad2,
    title: "Hidden Count Game",
    category: "Full Stack Web Game",
    desc: "Memory-based counting game with AI-generated scenes, JWT authentication, leaderboard, score tracking and progressive levels.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Gemini AI"]
  },
  {
    icon: Building2,
    title: "Care Compass Hospitals",
    category: "Hospital Management Website",
    desc: "Hospital management website with patient, staff and admin dashboards, appointment booking, doctor management and online services.",
    tech: ["Java", "HTML", "CSS", "JavaScript", "MySQL"]
  },
  {
    icon: Bike,
    title: "CityCycle Rentals",
    category: "Android Mobile Application",
    desc: "Android bike rental application with authentication, rental tracking, reservations, payments and role-based access control.",
    tech: ["Android", "Java", "SQLite"]
  },
  {
    icon: ShoppingBag,
    title: "Bag Shop Automation",
    category: "Java OOP System",
    desc: "Java-based automation system with manager and cashier roles to manage products, prices, transactions and reports.",
    tech: ["Java", "OOP", "CRUD"]
  },
  {
    icon: Hotel,
    title: "Hotel Automation System",
    category: "C++ Booking System",
    desc: "C++ room booking system that handles room reservations, room types, stay duration and total charge calculation.",
    tech: ["C++", "Console App"]
  }
];

function App() {
  return (
    <div className="portfolio">
      <header className="topbar">
        <div className="brand">Oshan Devinda</div>

        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="resumeBtn" href="/Oshan_Updated_Professional_CV.pdf" download>
          Download CV <Download size={16} />
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="heroContent">
            <span className="pill">Software Engineering Undergraduate</span>

            <h1>
              Oshan Devinda <br />
              <strong>Ravinath</strong>
            </h1>

            <p>
              Full-stack and mobile application developer creating professional
              web applications, Android solutions, database-driven systems and
              AI-powered learning platforms.
            </p>

            <div className="actionRow">
              <a className="mainBtn" href="#projects">
                Explore Projects <ArrowRight size={18} />
              </a>

              <a
                className="whatsappBtn"
                href="https://wa.me/94742201898"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>

            <div className="contactMini">
              <a href="mailto:oshanravinath@gmail.com">
                <Mail size={17} />
                oshanravinath@gmail.com
              </a>

              <a href="tel:+94742201898">
                <Phone size={17} />
                074 220 1898
              </a>
            </div>
          </div>

          <div className="photoArea">
            <div className="photoBackShape"></div>

            <div className="photoFrame">
              <img src="/profile.jpg" alt="Oshan Devinda Ravinath" />
            </div>
          </div>
        </section>

        <section id="about" className="section aboutGrid">
          <div>
            <span className="sectionLabel">About</span>
            <h2>Professional Profile</h2>
          </div>

          <p>
            I am a Software Engineering undergraduate with practical experience
            in full-stack web development, Android application development and
            database-driven systems. I have worked on real-world academic and
            professional projects including AI-powered learning systems, hospital
            platforms, rental applications and interactive web games.
          </p>
        </section>

        <section id="skills" className="section">
          <span className="sectionLabel">Skills</span>
          <h2>Technical Capabilities</h2>

          <div className="skillLayout">
            <div className="skillBox">
              <Code2 />
              <h3>Frontend Development</h3>
              <p>React.js, HTML5, CSS3, JavaScript</p>
            </div>

            <div className="skillBox">
              <Server />
              <h3>Backend Development</h3>
              <p>Node.js, Express.js, REST APIs, JWT Authentication</p>
            </div>

            <div className="skillBox">
              <Database />
              <h3>Databases</h3>
              <p>MongoDB, MySQL, SQLite</p>
            </div>

            <div className="skillBox">
              <Smartphone />
              <h3>Mobile & Tools</h3>
              <p>Android Studio, Java, GitHub, VS Code, Postman, Figma</p>
            </div>
          </div>
        </section>

        <section id="projects" className="section projectsSection">
          <div className="projectHeader">
            <div>
              <span className="sectionLabel">Projects</span>
              <h2>All Development Work</h2>
            </div>

            <p>
              A collection of academic and practical software projects covering
              AI, full-stack development, mobile apps, database systems and OOP.
            </p>
          </div>

          <div className="projectShowcase">
            {projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <article className="projectCard" key={project.title}>
                  <div className="projectTop">
                    <div className="projectIcon">
                      <Icon size={24} />
                    </div>

                    <span className="projectNo">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="projectCategory">{project.category}</p>

                  <h3>{project.title}</h3>

                  <p className="projectDesc">{project.desc}</p>

                  <div className="techTags">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="education" className="section education">
          <span className="sectionLabel">Education</span>
          <h2>Academic Background</h2>

          <div className="timeline">
            <div>
              <h3>SLIIT City University</h3>
              <p>BSc (Hons) Software Engineering - Present</p>
            </div>

            <div>
              <h3>ICBT Campus Colombo</h3>
              <p>
                Higher Diploma in Software Engineering under Cardiff Metropolitan
                University
              </p>
            </div>

            <div>
              <h3>S. Thomas College Bandarawela</h3>
              <p>G.C.E Advanced Level - 2022</p>
            </div>
          </div>
        </section>

        <section id="contact" className="contactPanel">
          <div>
            <span className="sectionLabel">Contact</span>
            <h2>Let’s Work Together</h2>
            <p>
              Available for internship opportunities, freelance projects,
              software development work and professional collaborations.
            </p>
          </div>

          <div className="contactLinks">
            <a href="mailto:oshanravinath@gmail.com">
              <Mail size={20} />
              <span>
                <small>Email</small>
                oshanravinath@gmail.com
              </span>
            </a>

            <a href="tel:+94742201898">
              <Phone size={20} />
              <span>
                <small>Call</small>
                074 220 1898
              </span>
            </a>

            <a href="https://wa.me/94742201898" target="_blank" rel="noreferrer">
              <MessageCircle size={20} />
              <span>
                <small>WhatsApp</small>
                074 220 1898
              </span>
            </a>

            <a href="https://github.com/Oshan8988" target="_blank" rel="noreferrer">
              <ExternalLink size={20} />
              <span>
                <small>GitHub</small>
                github.com/Oshan8988
              </span>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Oshan Devinda Ravinath</p>
        <p>React Portfolio • Built for job applications</p>
      </footer>
    </div>
  );
}

export default App;