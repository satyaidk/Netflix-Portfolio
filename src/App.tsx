import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Play, Info } from 'lucide-react';
import Navbar from './components/Navbar';
import ProjectRow from './components/ProjectRow';
import Hero from './components/Hero';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = {
    featured: [
      {
        title: "E-Commerce Platform",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1280",
        category: "Full Stack",
        tech: "React, Node.js, MongoDB"
      },
      {
        title: "AI Image Generator",
        image: "https://images.unsplash.com/photo-1684163761883-8d092c6e01cc?auto=format&fit=crop&q=80&w=1280",
        category: "Machine Learning",
        tech: "Python, TensorFlow, React"
      },
      {
        title: "Crypto Dashboard",
        image: "https://images.unsplash.com/photo-1645726290460-a89dfcc9bf4f?auto=format&fit=crop&q=80&w=1280",
        category: "Web3",
        tech: "Next.js, Ethers.js"
      }
    ],
    web: [
      {
        title: "Portfolio CMS",
        image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=1280",
        category: "Backend",
        tech: "Django, PostgreSQL"
      },
      {
        title: "Social Media App",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1280",
        category: "Full Stack",
        tech: "React Native, Firebase"
      }
    ],
    mobile: [
      {
        title: "Fitness Tracker",
        image: "https://images.unsplash.com/photo-1676321685222-0b527e69e1cd?auto=format&fit=crop&q=80&w=1280",
        category: "Mobile",
        tech: "Flutter, Firebase"
      },
      {
        title: "AR Navigation",
        image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80&w=1280",
        category: "AR/VR",
        tech: "Unity, ARKit"
      }
    ]
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      
      <main className="-mt-32 relative z-10 pb-20">
        <ProjectRow title="Featured Projects" projects={projects.featured} />
        <ProjectRow title="Web Applications" projects={projects.web} />
        <ProjectRow title="Mobile & AR" projects={projects.mobile} />
        
        <footer className="mt-20 px-8 py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex gap-6">
              <a href="https://github.com" className="hover:text-red-600 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" className="hover:text-red-600 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:contact@example.com" className="hover:text-red-600 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 Your Portfolio. Built with React & Tailwind.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;