"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft, User, Briefcase, Code, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
<<<<<<< HEAD
    <div className={cn(
      "flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white"
    )}>
      {/* Left Sidebar */}
      <motion.div
        className={cn(
          "fixed md:static left-0 top-0 h-full md:h-auto bg-gray-800 shadow-lg z-30 md:z-20 transition-all duration-300",
          sidebarOpen ? "w-64 md:w-72" : "w-16 md:w-20",
          "md:relative"
        )}
        style={{
          ...(sidebarOpen ? {} : { overflow: "visible" }),
        }}
=======
    <div className="flex min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Left Sidebar */}
      <motion.div
        className={cn(
          "fixed left-0 top-0 h-full bg-gray-800 shadow-lg z-20 transition-all duration-300",
          sidebarOpen ? "w-72" : "w-20",
        )}
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
<<<<<<< HEAD
          className="absolute -right-3 top-10 bg-primary text-white rounded-full p-1 shadow-lg md:hidden"
          aria-label="Toggle Sidebar"
=======
          className="absolute -right-3 top-10 bg-primary text-white rounded-full p-1 shadow-lg"
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
        >
          {sidebarOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </button>

        <div className="p-6">
          <motion.div
            className="flex flex-col items-center mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary mb-4">
              <img src="/placeholder.svg?height=96&width=96" alt="Profile" className="w-full h-full object-cover" />
            </div>
            {sidebarOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <h2 className="text-xl font-bold">Muhammad Noman</h2>
                <p className="text-primary">Frontend Developer</p>
              </motion.div>
            )}
          </motion.div>

          {sidebarOpen && (
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div>
                <h3 className="text-sm uppercase text-gray-400 mb-2">Location</h3>
                <p>Sham Nager,Lahore</p>
              </div>

              <div>
                <h3 className="text-sm uppercase text-gray-400 mb-2">Email</h3>
                <p>nomanrehann112233@gmail.com</p>
              </div>

              <div>
                <h3 className="text-sm uppercase text-gray-400 mb-2">Experience</h3>
                <p>0 to 6 months</p>
              </div>

              <div className="pt-4">
                <h3 className="text-sm uppercase text-gray-400 mb-2">Social</h3>
                <div className="flex space-x-3">
                  <a href="#" className="hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" className="hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>

<<<<<<< HEAD
      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close Sidebar Overlay"
        />
      )}

      {/* Main Content */}
      <div className={cn(
        "flex-1 transition-all duration-300 min-w-0",
        sidebarOpen ? "md:ml-72 ml-0" : "md:ml-20 ml-0"
      )}>
        {/* Navbar */}
        <motion.nav
          className="bg-gray-800/50 backdrop-blur-sm sticky top-0 z-10 px-4 sm:px-6 py-3 sm:py-4 flex justify-end"
=======
      {/* Main Content */}
      <div className={cn("flex-1 transition-all duration-300", sidebarOpen ? "ml-72" : "ml-20")}>
        {/* Navbar */}
        <motion.nav
          className="bg-gray-800/50 backdrop-blur-sm sticky top-0 z-10 px-6 py-4 flex justify-end"
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
<<<<<<< HEAD
          <ul className="flex space-x-1 sm:space-x-2 md:space-x-4">
=======
          <ul className="flex space-x-1 md:space-x-4">
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
            <NavItem
              icon={<User size={18} />}
              label="About"
              isActive={activeSection === "about"}
              onClick={() => setActiveSection("about")}
            />
            <NavItem
              icon={<Code size={18} />}
              label="Skills"
              isActive={activeSection === "skills"}
              onClick={() => setActiveSection("skills")}
            />
            <NavItem
              icon={<Briefcase size={18} />}
              label="Portfolio"
              isActive={activeSection === "portfolio"}
              onClick={() => setActiveSection("portfolio")}
            />
            <NavItem
              icon={<Phone size={18} />}
              label="Contact"
              isActive={activeSection === "contact"}
              onClick={() => setActiveSection("contact")}
            />
          </ul>
        </motion.nav>
<<<<<<< HEAD
        {/* Content Area */}
        <main className="p-3 sm:p-4 md:p-8 lg:p-10 max-w-full">
=======

        {/* Content Area */}
        <main className="p-6 md:p-10">
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
          <AnimatePresence mode="wait">
            {activeSection === "about" && <AboutSection key="about" />}
            {activeSection === "skills" && <SkillsSection key="skills" />}
            {activeSection === "portfolio" && <PortfolioSection key="portfolio" />}
            {activeSection === "contact" && <ContactSection key="contact" />}
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}

function NavItem({ icon, label, isActive, onClick }) {
  return (
    <li>
      <button
        onClick={onClick}
        className={cn(
          "flex items-center px-3 py-2 rounded-md transition-all duration-300",
          isActive ? "bg-primary text-white" : "text-gray-300 hover:bg-gray-700/50 hover:text-white",
        )}
      >
        <span className="mr-2">{icon}</span>
        <span className="hidden md:block">{label}</span>
      </button>
    </li>
  )
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

      <motion.div
        className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-primary">Hello, I'm John Doe</h2>
        <p className="text-gray-300 mb-4">
          I'm a passionate Frontend Developer with 5+ years of experience creating responsive and user-friendly web
          applications. I specialize in React.js, Next.js, and modern CSS frameworks like Tailwind CSS.
        </p>
        <p className="text-gray-300 mb-4">
          My journey in web development started when I was in college, and since then, I've worked with various startups
          and established companies to deliver high-quality web solutions that meet business objectives while providing
          excellent user experiences.
        </p>
        <p className="text-gray-300">
          When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
          hiking in the mountains.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-3 text-primary">Education</h3>
          <ul className="space-y-4">
            <li>
              <div className="text-lg font-medium">Master in Computer Science</div>
              <div className="text-primary">Stanford University</div>
              <div className="text-sm text-gray-400">2015 - 2017</div>
            </li>
            <li>
              <div className="text-lg font-medium">Bachelor in Computer Engineering</div>
              <div className="text-primary">MIT</div>
              <div className="text-sm text-gray-400">2011 - 2015</div>
            </li>
          </ul>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-3 text-primary">Experience</h3>
          <ul className="space-y-4">
            <li>
              <div className="text-lg font-medium">Senior Frontend Developer</div>
              <div className="text-primary">Tech Innovations Inc.</div>
              <div className="text-sm text-gray-400">2020 - Present</div>
            </li>
            <li>
              <div className="text-lg font-medium">Frontend Developer</div>
              <div className="text-primary">Digital Solutions LLC</div>
              <div className="text-sm text-gray-400">2017 - 2020</div>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  )
}

function SkillsSection() {
  const skills = [
    { name: "React.js", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "HTML/CSS", level: 95 },
    { name: "Next.js", level: 80 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Bootstrap", level: 85 },
    { name: "jQuery", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "Git", level: 85 },
    { name: "UI/UX Design", level: 75 },
  ]

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
        <h2 className="text-2xl font-bold mb-6 text-primary">Technical Skills</h2>

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
                <span className="text-primary">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div
                  className="bg-primary h-2.5 rounded-full"
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
          <h3 className="text-xl font-bold mb-4 text-primary">Soft Skills</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Team Collaboration
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Problem Solving
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Communication
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Time Management
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Adaptability
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-4 text-primary">Languages</h3>
          <ul className="space-y-3">
            <li>
              <div className="flex justify-between mb-1">
                <span>English</span>
                <span>Native</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "100%" }}></div>
              </div>
            </li>
            <li>
              <div className="flex justify-between mb-1">
                <span>Urdu</span>
                <span>Fluent</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
              </div>
            </li>
            <li>
              <div className="flex justify-between mb-1">
                <span>Hindi</span>
                <span>Basic</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "40%" }}></div>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  )
}

function PortfolioSection() {
  const projects = [
    {
      title: "E-commerce Dashboard",
      category: "Web Application",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "A comprehensive dashboard for e-commerce businesses with analytics, inventory management, and order processing.",
    },
    {
      title: "Travel Booking Platform",
      category: "Web Application",
      image: "/placeholder.svg?height=200&width=300",
      description: "A modern travel booking platform with real-time availability, secure payments, and user reviews.",
    },
    {
      title: "Health & Fitness App",
      category: "Mobile Application",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "A mobile app for tracking workouts, nutrition, and health metrics with personalized recommendations.",
    },
    {
      title: "Corporate Website",
      category: "Website",
      image: "/placeholder.svg?height=200&width=300",
      description: "A responsive corporate website with modern design, animations, and content management system.",
    },
    {
      title: "Social Media Dashboard",
      category: "Web Application",
      image: "/placeholder.svg?height=200&width=300",
      description: "A dashboard for managing multiple social media accounts with analytics and scheduling features.",
    },
    {
      title: "Educational Platform",
      category: "Web Application",
      image: "/placeholder.svg?height=200&width=300",
      description: "An interactive learning platform with courses, quizzes, and progress tracking for students.",
    },
  ]

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
          Here are some of my recent projects. Each project represents my dedication to creating high-quality,
          user-friendly, and visually appealing web applications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg group"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="px-4 py-2 bg-white text-primary font-medium rounded-md">View Project</button>
              </div>
            </div>
            <div className="p-4">
              <span className="text-xs text-primary font-medium">{project.category}</span>
              <h3 className="text-lg font-bold mt-1">{project.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function ContactSection() {
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
          <h2 className="text-2xl font-bold mb-4 text-primary">Get In Touch</h2>
          <p className="text-gray-300 mb-6">Feel free to contact me for any work or suggestions below.</p>

          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-primary/20 p-3 rounded-full mr-4">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm text-gray-400">Phone</h3>
                <p>+92 (300) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-primary/20 p-3 rounded-full mr-4">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                <p>john.doe@example.com</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-primary/20 p-3 rounded-full mr-4">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                <p>Karachi, Pakistan</p>
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
          <h2 className="text-2xl font-bold mb-4 text-primary">Send Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
            >
              Send Message
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
        <h2 className="text-2xl font-bold mb-6 text-primary text-center">Find Me On</h2>
        <div className="flex justify-center space-x-6">
          <a href="#" className="bg-gray-700 hover:bg-primary p-4 rounded-full transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href="#" className="bg-gray-700 hover:bg-primary p-4 rounded-full transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a href="#" className="bg-gray-700 hover:bg-primary p-4 rounded-full transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href="#" className="bg-gray-700 hover:bg-primary p-4 rounded-full transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href="#" className="bg-gray-700 hover:bg-primary p-4 rounded-full transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}
