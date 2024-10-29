import React from 'react';
import { Play, Plus } from 'lucide-react';

interface Project {
  title: string;
  image: string;
  category: string;
  tech: string;
}

interface ProjectRowProps {
  title: string;
  projects: Project[];
}

const ProjectRow: React.FC<ProjectRowProps> = ({ title, projects }) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 p-4 w-full">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-2">{project.category}</p>
                <p className="text-xs text-gray-400 mb-4">{project.tech}</p>
                <div className="flex space-x-2">
                  <button className="flex items-center px-4 py-1 bg-white text-black rounded-sm text-sm hover:bg-gray-200 transition-colors">
                    <Play className="w-4 h-4 mr-1" />
                    Demo
                  </button>
                  <button className="flex items-center px-4 py-1 bg-gray-600/70 text-white rounded-sm text-sm hover:bg-gray-600 transition-colors">
                    <Plus className="w-4 h-4 mr-1" />
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectRow;