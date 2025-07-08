<<<<<<< HEAD
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
=======
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft, User, Briefcase, Code, Phone } from "lucide-react"
import myPhoto from './assets/nomanrehan.jpeg';

function App() {
  const [activeSection, setActiveSection] = useState("about")
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      
      {/* Left Sidebar */}
      {/* <motion.div
        className={`fixed left-0 top-0 h-full bg-gray-800 shadow-lg z-20 transition-all duration-300 ${sidebarOpen ? "w-72" : "w-20"
          }`}
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <button
<<<<<<< HEAD
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
        className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? "md:ml-72" : "md:ml-20"
        }`}
      >
        {/* Navbar */}
        <motion.nav
          className="bg-gray-800/50 backdrop-blur-sm sticky top-0 z-10 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between"
=======
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute -right-3 top-10 bg-purple-600 text-white rounded-full p-1 shadow-lg hover:bg-purple-700 transition-colors"
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
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-purple-600 mb-4">
  <img
    src={myPhoto}
    alt="Profile"
    className="w-full h-full object-contain bg-black"
  />
</div>

            {sidebarOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <h2 className="text-xl font-bold">Muhammad Noman</h2>
                <p className="text-purple-400">MERN Stact developer</p>
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
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div> */}



      <motion.div
  className={`fixed left-0 top-0 h-full bg-gray-800 shadow-lg z-20 transition-all duration-300 ${
    sidebarOpen ? "w-72" : "w-20"
  }`}
  initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  <button
    onClick={() => setSidebarOpen(!sidebarOpen)}
    className="absolute -right-3 top-10 bg-purple-600 text-white rounded-full p-1 shadow-lg hover:bg-purple-700 transition-colors"
  >
    {sidebarOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
  </button>

  <div className="p-4">
    <motion.div
      className="flex flex-col items-center mb-6"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-purple-600 mb-4">
  <img
    src={myPhoto}
    alt="Profile"
    className="w-full h-full object-contain bg-black"
  />
</div>

      {sidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <h2 className="text-xl font-bold">Muhammad Noman</h2>
          <p className="text-purple-400">MERN Stack Developer</p>
        </motion.div>
      )}
    </motion.div>

    {sidebarOpen && (
      <motion.div
        className="space-y-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div>
          <h3 className="text-sm uppercase text-gray-400 mb-1">Location</h3>
          <p className="text-white">Sham Nager, Lahore</p>
        </div>

        <div>
          <h3 className="text-sm uppercase text-gray-400 mb-1">Email</h3>
          <p className="text-white">nomanrehann112233@gmail.com</p>
        </div>

        <div>
          <h3 className="text-sm uppercase text-gray-400 mb-1">Experience</h3>
          <p className="text-white">0 to 6 months</p>
        </div>

        <div>
          <h3 className="text-sm uppercase text-gray-400 mb-1">Social</h3>
          <div className="flex space-x-3">
            <a href="#" className="hover:text-purple-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              {/* GitHub Icon */}
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              {/* YouTube Icon */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                        clipRule="evenodd"
                      />
                    </svg>
            </a>
          </div>
        </div>

        {/* Optional Download CV Button */}
        <div className="pt-2">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700 transition-colors text-sm"
          >
            Download CV
          </a>
        </div>
      </motion.div>
    )}
  </div>
</motion.div>


      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? "ml-72" : "ml-20"}`}>
        {/* Navbar */}
        <motion.nav
          className="bg-gray-800/50 backdrop-blur-sm sticky top-0 z-10 px-6 py-4 flex justify-end"
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
<<<<<<< HEAD
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
=======
          <ul className="flex space-x-1 md:space-x-4">
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
            <NavItem
              icon={<User size={18} />}
              label="About"
              isActive={activeSection === "about"}
<<<<<<< HEAD
              onClick={() => handleNavClick("about")}
=======
              onClick={() => setActiveSection("about")}
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
            />
            <NavItem
              icon={<Code size={18} />}
              label="Skills"
              isActive={activeSection === "skills"}
<<<<<<< HEAD
              onClick={() => handleNavClick("skills")}
=======
              onClick={() => setActiveSection("skills")}
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
            />
            <NavItem
              icon={<Briefcase size={18} />}
              label="Portfolio"
              isActive={activeSection === "portfolio"}
<<<<<<< HEAD
              onClick={() => handleNavClick("portfolio")}
=======
              onClick={() => setActiveSection("portfolio")}
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
            />
            <NavItem
              icon={<Phone size={18} />}
              label="Contact"
              isActive={activeSection === "contact"}
<<<<<<< HEAD
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
=======
              onClick={() => setActiveSection("contact")}
            />
          </ul>
        </motion.nav>

        {/* Content Area */}
        <main className="p-6 md:p-10">
          <AnimatePresence mode="wait">
            {activeSection === "about" && <AboutSection key="about" />}
            {activeSection === "skills" && <SkillsSection key="skills" />}
            {activeSection === "portfolio" && <PortfolioSection key="portfolio" />}
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
            {activeSection === "contact" && <ContactSection key="contact" />}
          </AnimatePresence>
        </main>
      </div>
    </div>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
}

function NavItem({ icon, label, isActive, onClick }) {
  return (
    <li>
      <button
        onClick={onClick}
<<<<<<< HEAD
        className={`flex items-center px-3 py-2 rounded-md transition-all duration-300 ${
          isActive
            ? "bg-purple-600 text-white shadow-lg"
            : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
        }`}
=======
        className={`flex items-center px-3 py-2 rounded-md transition-all duration-300 ${isActive ? "bg-purple-600 text-white shadow-lg" : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
          }`}
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
      >
        <span className="mr-2">{icon}</span>
        <span className="hidden md:block">{label}</span>
      </button>
    </li>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
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

<<<<<<< HEAD
      {/* Responsive image + text block */}
=======
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
      <motion.div
        className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
<<<<<<< HEAD
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Profile Image */}
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <img
              src={myPhoto}
              alt="Muhammad Noman"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-purple-500 shadow-lg mx-auto"
            />
          </div>
          {/* About Text */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">
              Hello, I am Muhammad Noman
            </h2>
            <p className="text-gray-300 mb-4">
              I am an 8th-semester BSIT student with a strong passion for web
              development. I have successfully completed a frontend development
              internship, where I gained hands-on experience building responsive and
              user-friendly web applications.
            </p>
            <p className="text-gray-300 mb-4">
              My core expertise lies in frontend technologies, particularly
              React.js, JavaScript, and modern CSS frameworks like Tailwind CSS. I
              am also actively learning backend development to become a full-stack
              developer.
            </p>
            <p className="text-gray-300">
              I am eager to work on challenging projects, enhance my skills, and
              contribute to meaningful solutions. When I’m not coding, I enjoy
              exploring new technologies and playing cricket.
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
=======
        <h2 className="text-2xl font-bold mb-4 text-purple-400">Hello, I am Muhammad Noman</h2>
        <p className="text-gray-300 mb-4">
          I am an 8th-semester BSIT student with a strong passion for web development. I have successfully completed a frontend development internship, where I gained hands-on experience building responsive and user-friendly web applications.
        </p>

        <p className="text-gray-300 mb-4">
          My core expertise lies in frontend technologies, particularly React.js, JavaScript, and modern CSS frameworks like Tailwind CSS. I am also actively learning backend development to become a full-stack developer.
        </p>

        <p className="text-gray-300">
          I am eager to work on challenging projects, enhance my skills, and contribute to meaningful solutions. When I’m not coding, I enjoy exploring new technologies and playing cricket.
        </p>


>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
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
<<<<<<< HEAD
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
=======
              <div className="text-lg font-medium">Bachelor in Information Technology</div>
              <div className="text-purple-400">University of Punjab</div>
              <div className="text-sm text-gray-400">2021-2025</div>
            </li>
           <li>
  <div className="text-lg font-semibold">F.Sc (Pre-Engineering)</div>
  <div className="text-purple-400">Government College of Science</div>
  <div className="text-sm text-gray-400">2019 - 2021</div>
</li>

          </ul>
        </div>

      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
  <h3 className="text-xl font-bold mb-3 text-purple-400">Experience</h3>
  <ul className="space-y-4">
    <li>
      <div className="text-lg font-semibold">Frontend Developer Intern</div>
      <div className="text-purple-400">Codace Solutions</div>
      <div className="text-sm text-gray-400">2025 - Present</div>
      <p className="text-gray-400 text-sm mt-1">
        Working on building responsive web interfaces using React.js and Tailwind CSS.
        Contributing to real-world projects, improving frontend performance, and learning backend fundamentals.
      </p>
    </li>
  </ul>
</div>

      </motion.div>
    </motion.div>
  )
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
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
<<<<<<< HEAD
  ];
=======
  ]
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205

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
<<<<<<< HEAD
        <h2 className="text-2xl font-bold mb-6 text-purple-400">
          Technical Skills
        </h2>
=======
        <h2 className="text-2xl font-bold mb-6 text-purple-400">Technical Skills</h2>
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205

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
<<<<<<< HEAD
          <h3 className="text-xl font-bold mb-4 text-purple-400">
            Soft Skills
          </h3>
=======
          <h3 className="text-xl font-bold mb-4 text-purple-400">Soft Skills</h3>
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
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
<<<<<<< HEAD
                <div
                  className="bg-purple-600 h-2 rounded-full"
                  style={{ width: "100%" }}
                ></div>
=======
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: "100%" }}></div>
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
              </div>
            </li>
            <li>
              <div className="flex justify-between mb-1">
                <span>English</span>
                <span>Fluent</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
<<<<<<< HEAD
                <div
                  className="bg-purple-600 h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
=======
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: "85%" }}></div>
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
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
<<<<<<< HEAD
  );
=======
  )
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
}

function PortfolioSection() {
  const projects = [
    {
      title: "CRUD Application",
      category: "Web Application",
<<<<<<< HEAD
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      description:
        "A React-based CRUD web application with Axios integration. Features include creating, reading, updating, and deleting data, along with responsive design and clean UI.",
      link: "https://axioscrud-noman.netlify.app/",
=======
     image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      description: "A React-based CRUD web application with Axios integration. Features include creating, reading, updating, and deleting data, along with responsive design and clean UI.",
      link: "https://axioscrud-noman.netlify.app/"
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
    },

    {
      title: "Restaurant Website",
      category: "Business Website",
<<<<<<< HEAD
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

=======
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop",
      description: "Modern restaurant website with online ordering system and table reservation.",
      link: "https://organicstorebynoman.netlify.app/"
    }
    ,
    {
      title: "AI-Driven HRMS",
      category: "Final Year Project",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
      description: "AI-powered HR management system with features like leave substitute assignment, sentiment analysis on feedback, and HR chatbot.",
      link: "https://metrohrms.netlify.app/"
    }
    ,
    // {
    //   title: "Task Management App",
    //   category: "Web Application",
      
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
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
<<<<<<< HEAD
  ];
=======
  ]
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205

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
<<<<<<< HEAD
          Here are some of my recent projects. Each project reflects my
          dedication to building high-quality, user-friendly, and visually
          appealing web applications.
        </p>
=======
          Here are some of my recent projects. Each project reflects my dedication to building high-quality, user-friendly, and visually appealing web applications.
        </p>

>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
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
<<<<<<< HEAD
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
=======

              </div>
            </div>
            <div className="p-4">
              <span className="text-xs text-purple-400 font-medium">{project.category}</span>
              <h3 className="text-lg font-bold mt-1">{project.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{project.description}</p>
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
<<<<<<< HEAD
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
=======
  )
}

function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Message sent successfully! (Demo)")
  }
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205

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
<<<<<<< HEAD
          <h2 className="text-2xl font-bold mb-4 text-purple-400">
            Get In Touch
          </h2>
          <p className="text-gray-300 mb-6">
            Feel free to contact me for any project, collaboration, or
            suggestions.
          </p>

=======
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Get In Touch</h2>
          <p className="text-gray-300 mb-6">
            Feel free to contact me for any project, collaboration, or suggestions.
          </p>


>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
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
<<<<<<< HEAD
                <svg
                  className="h-5 w-5 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
=======
                <svg className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
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
<<<<<<< HEAD
                <svg
                  className="h-5 w-5 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
=======
                <svg className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
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
<<<<<<< HEAD
          <h2 className="text-2xl font-bold mb-4 text-purple-400">
            Send Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
=======
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Send Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
                Name
              </label>
              <input
                type="text"
                id="name"
<<<<<<< HEAD
                name="name"
                required
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
                placeholder="Your Name"
                value={contactForm.name}
                onChange={handleChange}
=======
                required
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
                placeholder="Your Name"
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
              />
            </div>

            <div>
<<<<<<< HEAD
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
=======
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
                Email
              </label>
              <input
                type="email"
                id="email"
<<<<<<< HEAD
                name="email"
                required
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
                placeholder="Your Email"
                value={contactForm.email}
                onChange={handleChange}
=======
                required
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
                placeholder="Your Email"
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
              />
            </div>

            <div>
<<<<<<< HEAD
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
=======
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
                Message
              </label>
              <textarea
                id="message"
                rows={4}
<<<<<<< HEAD
                name="description"
                required
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
                placeholder="Your Message"
                value={contactForm.description}
                onChange={handleChange}
=======
                required
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
                placeholder="Your Message"
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
              ></textarea>
            </div>

            <button
              type="submit"
<<<<<<< HEAD
              disabled={loading}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
            >
              {loading ? "loading..." : "Send Message"}
=======
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
            >
              Send Message
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
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
<<<<<<< HEAD
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
=======
        <h2 className="text-2xl font-bold mb-6 text-purple-400 text-center">Find Me On</h2>
        <div className="flex justify-center space-x-6">
          <a href="#" className="bg-gray-700 hover:bg-purple-600 p-4 rounded-full transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href="#" className="bg-gray-700 hover:bg-purple-600 p-4 rounded-full transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a href="#" className="bg-gray-700 hover:bg-purple-600 p-4 rounded-full transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href="#" className="bg-gray-700 hover:bg-purple-600 p-4 rounded-full transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default App
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
