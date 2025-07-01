import React, { useState } from 'react';
import sharebite from '../../../src/assets/sharebite.png';
import plantify from '../../../src/assets/plantify.png';
import espresso from '../../../src/assets/espresso.png';

const projectsData = [
  {
    id: 1,
    name: 'Food Share Site - ShareBite',
    image: sharebite,
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Jwt', 'Firebase-auth', 'Tailwind CSS', 'CSS3', 'HTML5'],
    description:
      'ShareBite is a community-driven food sharing platform that enables individuals and organizations to share excess food with those in need. The goal is to reduce food waste, promote sustainability, and build a bridge between donors and receivers through a user-friendly web interface.',
    liveLink: 'https://sharebite-40455.web.app/',
    githubClient: 'https://github.com/AlIfran64/Food-Share-Site-Client',
    challenges:
      'One of the main challenges was implementing real-time food listing updates while ensuring smooth user experience. Managing secure authentication for both donors and receivers, optimizing image uploads, and maintaining a clean, accessible UI across different devices also required careful attention.',
    improvements:
      'Future plans include adding location-based filtering, mobile app support, and automated expiry reminders. Integrating a review system and an admin analytics dashboard would further enhance usability, trust, and impact measurement.',
  },
  {
    id: 2,
    name: 'Plant Care Tracker - Plantify',
    image: plantify,
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase-auth', 'Tailwind CSS', 'CSS3', 'HTML5'],
    description:
      'Plantify is a full-stack plant care tracker that helps users manage their plant collection with ease. Built with React.js, Tailwind CSS, Firebase Authentication, Node.js, Express.js, and MongoDB, it offers a secure and intuitive platform to monitor watering schedules and plant health.',
    liveLink: 'https://plantify-7ddd6.web.app/',
    githubClient: 'https://github.com/AlIfran64/Plant-Care-Tracker-Client',
    challenges:
      'Developing Plantify involved handling real-time state updates for multiple plant entries while ensuring responsive performance. Implementing dynamic scheduling features and managing authentication for personalized user experiences were particularly challenging.',
    improvements:
      'Future enhancements include adding calendar-based care reminders, integrating AI to suggest plant care tips, and building a mobile version with push notifications for daily plant tasks.',
  },
  {
    id: 3,
    name: 'Coffee Store - Espresso Emporium',
    image: espresso,
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase-auth', 'Tailwind CSS', 'HTML5'],
    description:
      'A full-stack coffee management web application where users can view, add, edit, and delete coffee items. This project showcases the integration of a modern React frontend with a Node.js + Express backend, connected via MongoDB.',
    liveLink: 'https://coffee-store-b3952.web.app/',
    githubClient: 'https://github.com/AlIfran64/Coffee-Store-Client',
    challenges:
      'While building Coffee Store, ensuring consistent CRUD operations with smooth UI updates was a key challenge. Managing state across components, handling form validations, and syncing changes between client and server without delays required careful logic.',
    improvements:
      'Future plans include adding user authentication, role-based admin access, sales analytics, and a bulk upload feature to make inventory management faster and more scalable.',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div data-aos="zoom-in" className="my-10 md:my-20 lg:my-32 bg-[#0f0f0f] p-8 lg:p-24">
      <h1 className="text-4xl text-center font-bold text-white mb-2">Projects</h1>
      <p className="text-center text-neutral-400 text-xl mb-10">
        Showcasing innovative solutions and impactful applications I've built from front to back.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg hover:shadow-[#0071BD]/50 transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-fit"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white">{project.name}</h3>
              <button
                onClick={() => setSelectedProject(project)}
                className="mt-4 w-full bg-gradient-to-r from-[#0071BD] to-[#00C6FF] text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for project details */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex justify-center items-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#1a1a1a] max-w-3xl w-full rounded-lg p-8 relative overflow-auto max-h-[90vh] shadow-xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing on inner click
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-[#00C6FF]"
            >
              &times;
            </button>

            <h2 className="text-3xl font-bold mb-6 text-white">{selectedProject.name}</h2>

            <p className="mb-4 text-neutral-300">
              <strong>Tech Stack:</strong>{' '}
              {selectedProject.techStack.join(', ')}
            </p>

            <p className="mb-4 text-neutral-300">
              <strong>Description:</strong> {selectedProject.description}
            </p>

            <p className="mb-4 text-neutral-300">
              <strong>Live Site:</strong>{' '}
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00C6FF] underline"
              >
                {selectedProject.liveLink}
              </a>
            </p>

            <p className="mb-4 text-neutral-300">
              <strong>GitHub Repository:</strong>{' '}
              <a
                href={selectedProject.githubClient}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00C6FF] underline"
              >
                {selectedProject.githubClient}
              </a>
            </p>

            <p className="mb-4 text-neutral-300">
              <strong>Challenges Faced:</strong> {selectedProject.challenges}
            </p>

            <p className="text-neutral-300">
              <strong>Improvements & Future Plans:</strong> {selectedProject.improvements}
            </p>
          </div>
        </div>
      )}


    </div>
  );
};

export default Projects;
