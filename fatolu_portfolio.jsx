import { useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
          <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">Fatolu-peter</h1>
            <ul className="hidden md:flex space-x-6">
              {['Home','About','Projects','Services','Blog','Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-blue-500 transition">{link}</a>
                </li>
              ))}
            </ul>
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
              {darkMode ? <Sun size={20}/> : <Moon size={20}/>}
            </button>
          </nav>
        </header>

        {/* Hero Section */}
        <section id="home" className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">👋 Hi, I'm Fatolu Peter Oluwadamilare</h2>
          <p className="text-lg md:text-xl mb-6">Data Analyst | Python Programmer | Graphic Designer | App Developer | Author</p>
          <div className="space-x-4">
            <a href="https://github.com/Fatolu-peter" target="_blank" className="px-6 py-2 bg-blue-500 text-white rounded-2xl shadow hover:bg-blue-600">View My GitHub</a>
            <a href="#contact" className="px-6 py-2 bg-gray-200 dark:bg-gray-700 rounded-2xl shadow hover:bg-gray-300 dark:hover:bg-gray-600">Contact Me</a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="max-w-5xl mx-auto py-20 px-4">
          <h3 className="text-3xl font-semibold mb-6">About Me</h3>
          <p className="mb-4">I’m passionate about using data and design to solve problems and build useful software. I create tools that simplify analysis for everyone—from beginners to experts.</p>
          <p className="mb-2">📍 Lagos, Nigeria</p>
          <p className="mb-2">📧 oblissman@gmail.com</p>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/fatolu-peter" target="_blank" className="hover:text-blue-500">LinkedIn</a>
            <a href="https://github.com/Fatolu-peter" target="_blank" className="hover:text-blue-500">GitHub</a>
            <a href="https://youtube.com/Fatolu-peter" target="_blank" className="hover:text-blue-500">YouTube</a>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-gray-50 dark:bg-gray-800 py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-semibold mb-10 text-center">Featured Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {["Telco Churn Analysis","House Price Analysis","Card Fraud Detection","Kivy Calculator App","Dashboard Gallery"].map(project => (
                <div key={project} className="p-6 bg-white dark:bg-gray-700 rounded-2xl shadow hover:shadow-lg transition">
                  <h4 className="text-xl font-bold mb-2">{project}</h4>
                  <p className="mb-4">A featured project showcasing my skills.</p>
                  <a href="#" className="text-blue-500 hover:underline">View Project</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="max-w-6xl mx-auto py-20 px-4">
          <h3 className="text-3xl font-semibold mb-10 text-center">Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Data Analysis & Visualization","Python Programming & App Development","Graphic Design","Content Creation & Writing"].map(service => (
              <div key={service} className="p-6 bg-white dark:bg-gray-700 rounded-2xl shadow hover:shadow-lg transition text-center">
                <p>{service}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-gray-50 dark:bg-gray-800 py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-10">Skills & Tools</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Python","Pandas","Jupyter","Streamlit","Kivy","SQL","Excel","SPSS"].map(skill => (
                <span key={skill} className="px-4 py-2 bg-white dark:bg-gray-700 rounded-2xl shadow">{skill}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="max-w-6xl mx-auto py-20 px-4">
          <h3 className="text-3xl font-semibold mb-6">Blog</h3>
          <p className="text-gray-600 dark:text-gray-400">Coming soon...</p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gray-50 dark:bg-gray-800 py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-semibold mb-6 text-center">Contact Me</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"/>
              <input type="email" placeholder="Email" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"/>
              <textarea placeholder="Message" rows="5" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"></textarea>
              <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">Send</button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 border-t border-gray-200 dark:border-gray-700">
          <p>© 2025 Fatolu Peter Oluwadamilare – All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
}
