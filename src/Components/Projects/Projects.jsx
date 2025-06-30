import React from 'react';

const projects = [
  {
    name: 'E-Micro Credits Integrated Software (EMIS)',
    image: 'https://via.placeholder.com/400x200?text=EMIS',
    live: 'https://emis-live-site.com',
    code: 'https://github.com/AlIfran64/emis-client',
    tech: 'Tailwind CSS, React, Node, Express, MongoDB',
    description:
      'Contributed to the end-to-end development of a microcredit management platform for NGOs, focusing on functional architecture, efficient data handling, and a responsive, user-centric interface.',
  },
  {
    name: 'Plant Care Tracker',
    image: 'https://via.placeholder.com/400x200?text=Plant+Care+Tracker',
    live: 'https://plantcare-live-site.com',
    code: 'https://github.com/AlIfran64/plantcare-client',
    tech: 'React.js, Tailwind CSS, Firebase Auth, Node.js, Express.js, MongoDB',
    description:
      'A full-stack app to manage watering schedules and plant health. Features secure login, responsive UI, and real-time data handling.',
  },
  {
    name: 'Coffee Store',
    image: 'https://via.placeholder.com/400x200?text=Coffee+Store',
    live: 'https://coffeestore-live.com',
    code: 'https://github.com/AlIfran64/coffeestore-client',
    tech: 'React.js, Tailwind CSS, Node.js, Express.js, MongoDB',
    description:
      'A CRUD-based inventory app to manage coffee entries. Allows users to view, add, edit, and delete items with clean UI and client-server integration.',
  },
];

const Projects = () => {
  return (
    <div id="projects" className="min-h-screen bg-[#0f0f0f] px-4 py-20 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-[#333] rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.03]"
            >
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="text-sm text-neutral-400">{project.tech}</p>
                <p className="text-sm text-neutral-300">{project.description}</p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#00C6FF] hover:underline"
                  >
                    Live Site
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#00C6FF] hover:underline"
                  >
                    Code Repository
                  </a>
                </div>
                <button className="mt-4 w-full py-2 bg-gradient-to-r from-[#0071BD] to-[#00C6FF] rounded-lg text-white font-medium hover:opacity-90 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
