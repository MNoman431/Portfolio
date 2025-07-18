"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  User,
  Briefcase,
  Code,
  Phone,
} from "lucide-react";
import myPhoto from "./assets/nomanrehan.jpeg";
import axios from "axios";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar closed by default on mobile
  const [activeSection, setActiveSection] = useState("about");
  const [mobileSidebar, setMobileSidebar] = useState(false); // For mobile drawer

  // Helper to handle sidebar for mobile/desktop
  const handleSidebarToggle = () => {
    if (window.innerWidth < 768) {
      setMobileSidebar(!mobileSidebar);
    } else {
      setSidebarOpen(!sidebarOpen);
    }
  };

  // Close mobile sidebar on navigation
  const handleNavClick = (section) => {
    setActiveSection(section);
    if (window.innerWidth < 768) {
      setMobileSidebar(false);
    }
  };

  // Sidebar content as a function to avoid duplication
  const SidebarContent = () => (
    <>
      <div className="flex flex-col items-center mb-6 pt-8 bg-gradient-to-b from-gray-900/90 via-gray-800/90 to-gray-900/80 rounded-b-3xl">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-purple-600 mb-4">
          <img
            src={myPhoto}
            alt="Profile"
            className="w-full h-full object-contain bg-black"
          />
        </div>
        <h2 className="text-xl font-bold mb-1">Muhammad Noman</h2>
        <p className="text-purple-400 mb-4 text-sm">MERN Stack Developer</p>
      </div>
      {/* Divider */}
      <div className="my-4 border-t border-gray-700/60 mx-4"></div>
      {/* Info Section */}
      {(sidebarOpen || mobileSidebar) && (
        <div className="space-y-6 px-4 pb-6">
          <div>
            <h3 className="text-sm uppercase text-gray-400 mb-1">Location</h3>
            <p className="text-white">Sham Nager, Lahore</p>
          </div>
          <div>
            <h3 className="text-sm uppercase text-gray-400 mb-1">Email</h3>
            <p className="text-white break-all text-xs">nomanrehann112233@gmail.com</p>
          </div>
          <div>
            <h3 className="text-sm uppercase text-gray-400 mb-1">Experience</h3>
            <p className="text-white">0 to 6 months</p>
          </div>
          <div>
            <h3 className="text-sm uppercase text-gray-400 mb-1">Social</h3>
            <div className="flex space-x-4 mb-6">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/muhammad-noman-rehan-2156b4232/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
                </svg>
              </a>
              {/* GitHub */}
              <a href="https://github.com/MNoman431" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors" aria-label="GitHub">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            {/* CV Buttons - stacked vertically, full width, below social */}
            <div className="flex flex-col gap-2 w-full mt-2">
              <a
                href="/M.Noman cv.pdf"
                download
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold px-4 py-2 rounded-lg shadow transition-colors text-center text-sm tracking-wide"
              >
                Download CV
              </a>
              <a
                href="/M.Noman cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white hover:bg-gray-100 text-purple-700 font-bold px-4 py-2 rounded-lg shadow transition-colors text-center text-sm border border-purple-600 tracking-wide"
              >
                View CV
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white relative">
      {/* Sidebar for desktop */}
      <motion.div
        className={`hidden md:fixed md:left-0 md:top-0 md:h-full bg-gray-800 shadow-lg z-20 transition-all duration-300 ${sidebarOpen ? "md:w-72" : "md:w-20"}`}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={handleSidebarToggle}
          className="absolute -right-3 top-10 bg-purple-600 text-white rounded-full p-1 shadow-lg hover:bg-purple-700 transition-colors hidden md:block"
        >
          {sidebarOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </button>
        <div className="p-4">
          <SidebarContent />
        </div>
      </motion.div>

      {/* Sidebar Drawer for mobile */}
      {mobileSidebar && (
        <div className="fixed inset-0 z-30 flex">
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-64 bg-gray-800 h-full shadow-lg p-4 relative"
          >
            <button
              onClick={handleSidebarToggle}
              className="absolute -right-3 top-10 bg-purple-600 text-white rounded-full p-1 shadow-lg hover:bg-purple-700 transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <SidebarContent />
          </motion.div>
          {/* Overlay */}
          <div
            className="flex-1 bg-black bg-opacity-40"
            onClick={() => setMobileSidebar(false)}
          ></div>
        </div>
      )}

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${sidebarOpen ? "md:ml-72" : "md:ml-20"
          }`}
      >
        {/* Navbar */}
        <motion.nav
          className="bg-gray-800/50 backdrop-blur-sm sticky top-0 z-10 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hamburger for mobile */}
          <button
            className="md:hidden mr-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
            onClick={handleSidebarToggle}
            aria-label="Open sidebar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <ul className="flex space-x-1 sm:space-x-2 md:space-x-4">
            <NavItem
              icon={<User size={18} />}
              label="About"
              isActive={activeSection === "about"}
              onClick={() => handleNavClick("about")}
            />
            <NavItem
              icon={<Code size={18} />}
              label="Skills"
              isActive={activeSection === "skills"}
              onClick={() => handleNavClick("skills")}
            />
            <NavItem
              icon={<Briefcase size={18} />}
              label="Portfolio"
              isActive={activeSection === "portfolio"}
              onClick={() => handleNavClick("portfolio")}
            />
            <NavItem
              icon={<Phone size={18} />}
              label="Contact"
              isActive={activeSection === "contact"}
              onClick={() => handleNavClick("contact")}
            />
          </ul>
        </motion.nav>
        {/* Content Area */}
        <main className="p-3 sm:p-4 md:p-6 lg:p-10">
          <AnimatePresence mode="wait">
            {activeSection === "about" && <AboutSection key="about" />}
            {activeSection === "skills" && <SkillsSection key="skills" />}
            {activeSection === "portfolio" && (
              <PortfolioSection key="portfolio" />
            )}
            {activeSection === "contact" && <ContactSection key="contact" />}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

function NavItem({ icon, label, isActive, onClick }) {
  return (
    <li>
      <button
        onClick={onClick}
        className={`flex items-center px-3 py-2 rounded-md transition-all duration-300 ${isActive
            ? "bg-purple-600 text-white shadow-lg"
            : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
          }`}
      >
        <span className="mr-2">{icon}</span>
        <span className="hidden md:block">{label}</span>
      </button>
    </li>
  );
}

function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        About Me
      </motion.h1>

      {/* Responsive image + text block */}
      <motion.div
        className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Profile Image */}
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <img
              src={myPhoto}
              alt="Muhammad Noman"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-contain border-4 border-purple-500 shadow-lg mx-auto bg-black"
            />
          </div>
          {/* About Text */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">
              Hello, I am Muhammad Noman
            </h2>
            <p className="text-gray-300 mb-4">
              I am a final-year BSIT student with a strong passion for web development. I have built multiple responsive and user-friendly web applications using modern technologies like React.js, Tailwind CSS, and JavaScript. I am a quick learner, dedicated to writing clean code, and eager to grow as a frontend developer by contributing to impactful digital solutions.
            </p>
            <p className="text-gray-300 mb-4">
              My core expertise lies in frontend technologies, particularly React.js, JavaScript, and modern CSS frameworks like Tailwind CSS. I am also expanding my skills in backend development to become a proficient full-stack developer.
            </p>
            <p className="text-gray-300">
              I am highly motivated to work on challenging projects, continuously improve my skills, and contribute to impactful digital solutions. Outside of coding, I enjoy exploring emerging technologies and playing cricket to stay refreshed and creative.
            </p>

            {/* CV Buttons - always together, side-by-side on desktop, stacked on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <a
                href="/M.Noman cv.pdf"
                download
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded shadow transition-colors text-center"
              >
                Download CV
              </a>
              <a
                href="/M.Noman cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 text-purple-700 font-semibold px-4 py-2 rounded shadow transition-colors text-center border border-purple-600"
              >
                View CV
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-3 text-purple-400">Education</h3>
          <ul className="space-y-4">
            <li>
              <div className="text-lg font-medium">
                Bachelor in Information Technology
              </div>
              <div className="text-purple-400">University of Punjab</div>
              <div className="text-sm text-gray-400">2021-2025</div>
            </li>
            <li>
              <div className="text-lg font-semibold">
                F.Sc (Pre-Engineering)
              </div>
              <div className="text-purple-400">
                Government College of Science
              </div>
              <div className="text-sm text-gray-400">2019 - 2021</div>
            </li>
          </ul>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-3 text-purple-400">Experience</h3>
          <ul className="space-y-4">
            <li>
              <div className="text-lg font-semibold">
                Frontend Developer Intern
              </div>
              <div className="text-purple-400">Codace Solutions</div>
              <div className="text-sm text-gray-400">2025 - Present</div>
              <p className="text-gray-400 text-sm mt-1">
                Working on building responsive web interfaces using React.js and
                Tailwind CSS. Contributing to real-world projects, improving
                frontend performance, and learning backend fundamentals.
              </p>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

function SkillsSection() {
  const skills = [
    { name: "React.js", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "Tailwind CSS", level: 88 },
    { name: "Bootstrap", level: 80 },
    // { name: "jQuery", level: 75 },
    // { name: "Node.js", level: 65 },
    { name: "Git/GitHub", level: 80 },
    { name: "Responsive Design", level: 90 },
    { name: "UI/UX Design", level: 70 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        My Skills
      </motion.h1>

      <motion.div
        className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-purple-400">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className="space-y-2"
            >
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-purple-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div
                  className="bg-purple-600 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 + 0.1 * index }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-bold mb-4 text-purple-400">
            Soft Skills
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
              Team Collaboration
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
              Problem Solving
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
              Communication
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
              Time Management
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
              Quick Learning
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-4 text-purple-400">Languages</h3>
          <ul className="space-y-3">
            <li>
              <div className="flex justify-between mb-1">
                <span>Urdu</span>
                <span>Native</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-purple-600 h-2 rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </li>
            <li>
              <div className="flex justify-between mb-1">
                <span>English</span>
                <span>Fluent</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-purple-600 h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </li>
            <li>
              {/* <div className="flex justify-between mb-1">
                <span>Hindi</span>
                <span>Basic</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: "60%" }}></div>
              </div> */}
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}

function PortfolioSection() {
  const projects = [
    {
      title: "CRUD Application",
      category: "Web Application",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      description:
        "A React-based CRUD web application with Axios integration. Features include creating, reading, updating, and deleting data, along with responsive design and clean UI.",
      link: "https://axioscrud-noman.netlify.app/",
    },

    {
      title: "Static Organic Store Website",
      category: "Business Website",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop",
      description:
        "Modern restaurant website with online ordering system and table reservation.",
      link: "https://organicstorebynoman.netlify.app/",
    },
    {
      title: "AI-Driven HRMS",
      category: "Final Year Project",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
      description:
        "AI-powered HR management system with features like leave substitute assignment, sentiment analysis on feedback, and HR chatbot.",
      link: "https://metrohrms.netlify.app/",
    },
    // {
    //   title: "Task Management App",
    //   category: "Web Application",

    //   description: "Task management application with drag & drop functionality and team collaboration.",
    // },
    // {
    //   title: "Real Estate Website",
    //   category: "Business Website",
    //   image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop",
    //   description: "Property listing website with advanced search filters and virtual tours.",
    // },
    // {
    //   title: "Blog Platform",
    //   category: "Web Application",
    //   image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b7d3?w=400&h=250&fit=crop",
    //   description: "Full-featured blog platform with user authentication and content management.",
    // },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        My Portfolio
      </motion.h1>

      <motion.div
        className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-gray-300">
          Here are some of my recent projects. Each project reflects my
          dedication to building high-quality, user-friendly, and visually
          appealing web applications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-purple-600/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white text-purple-600 font-medium rounded-md hover:bg-gray-100 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
            <div className="p-4">
              <span className="text-xs text-purple-400 font-medium">
                {project.category}
              </span>
              <h3 className="text-lg font-bold mt-1">{project.title}</h3>
              <p className="text-gray-400 text-sm mt-2">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/contact",
        contactForm
      );
      alert(data.message);
      setContactForm({
        name: "",
        email: "",
        description: "",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        Contact Me
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-purple-400">
            Get In Touch
          </h2>
          <p className="text-gray-300 mb-6">
            Feel free to contact me for any project, collaboration, or
            suggestions.
          </p>

          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-purple-600/20 p-3 rounded-full mr-4">
                <Phone className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <h3 className="text-sm text-gray-400">Phone</h3>
                <p>0317-4961945</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-purple-600/20 p-3 rounded-full mr-4">
                <svg
                  className="h-5 w-5 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-sm text-gray-400">Email</h3>
                <p>nomanrehann112233@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-purple-600/20 p-3 rounded-full mr-4">
                <svg
                  className="h-5 w-5 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-sm text-gray-400">Location</h3>
                <p>Sham Nager, Lahore</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-purple-400">
            Send Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
                placeholder="Your Name"
                value={contactForm.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
                placeholder="Your Email"
                value={contactForm.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                name="description"
                required
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
                placeholder="Your Message"
                value={contactForm.description}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
            >
              {loading ? "loading..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>

      <motion.div
        className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-purple-400 text-center">
          Find Me On
        </h2>
        <div className="flex justify-center gap-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/muhammad-noman-rehan-2156b4232/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-purple-600 p-4 rounded-full transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
            </svg>
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/MNoman431"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-purple-600 p-4 rounded-full transition-colors duration-300"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        {/* Email below icons, always wraps and never overflows */}
        <div className="mt-4 text-center break-words text-gray-300 text-sm">
          <span className="font-semibold text-purple-400">Email: </span>
          <span className="break-all">nomanrehann112233@gmail.com</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default App;
