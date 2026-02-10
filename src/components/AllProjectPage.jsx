import React, { useState, useEffect } from 'react';
import Next_Hire1 from "../assets/NextHire-1.png";
import Next_Hire2 from "../assets/NextHire-2.png";
import Next_Hire3 from "../assets/NextHire-3.png";
import Next_Hire4 from "../assets/NextHire-4.png";
import Vila_Restaurant1 from "../assets/VilaRestaurant-1.png";
import Vila_Restaurant2 from "../assets/VilaRestaurant-2.png";
import Vila_Restaurant3 from "../assets/VilaRestaurant-3.png";
import Vila_Restaurant4 from "../assets/VilaRestaurant-4.png";
import WanderLust1 from "../assets/Wanderlust-1.png";
import WanderLust2 from "../assets/Wanderlust-2.png";
import WanderLust3 from "../assets/Wanderlust-3.png";

const AllProjectsPage = () => {
  const projects = [
      {
        id: 1,
        title: "Next-Hire",
        tag: "Full Stack",
        color: "bg-purple-600",
        iconColor: "bg-purple-600",
        description:
          "NextHire is a full-stack platform for DSA practice and mock interviews. Users can host or join sessions with real-time video, chat, and session tracking. Built with React, Tailwind, MongoDB, Clerk, Stream, and Inngest.",
        repo: "https://github.com/Bhairulal-Teli/Next-Hire",
        images: [Next_Hire1, Next_Hire2, Next_Hire3, Next_Hire4],
      },
      {
        id: 2,
        title: "Vila Restaurant",
        tag: "MERN Stack",
        color: "bg-blue-400",
        iconColor: "bg-yellow-400",
        description:
          "ViLa is a full-stack web app for hotel staff to manage bookings and cabins. Staff can create, edit, and track reservations, check-in/out guests, and view dashboard insights. Built with React, Supabase, and styled with Tailwind CSS.",
        repo: "https://github.com/Bhairulal-Teli/VILA_Restaurant",
        images: [Vila_Restaurant1, Vila_Restaurant2, Vila_Restaurant3, Vila_Restaurant4],
      },
      {
        id: 3,
        title: "WanderLust",
        tag: "MERN Stack",
        color: "bg-green-500",
        iconColor: "bg-green-500",
        description:
          "Wanderlust is a full-stack Airbnb-inspired web app allowing users to list, edit, and review properties. Includes secure authentication, role-based access, and image uploads. Built with Node.js, Express, MongoDB, and EJS.",
        repo: "https://github.com/Bhairulal-Teli/WanderLust",
        images: [WanderLust1, WanderLust2, WanderLust3],
      },
    ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 flex items-center justify-between">
          <a 
            href="/" 
            className="group inline-flex items-center gap-2 text-black font-bold hover:gap-3 transition-all bg-white border-4 border-black px-4 py-2 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-1"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="hidden md:inline">Back to Home</span>
          </a>
          
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
            All <span className="bg-red-400 text-white px-3">Projects</span>
          </h1>
          
          <div className="w-32 md:w-40"></div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 md:gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Back to Top Button */}
          <div className="flex justify-center mt-10 md:mt-12">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group border-4 border-black px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 bg-white hover:bg-black hover:text-white transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-1"
            >
              Back to Top
              <svg
                className="w-5 h-5 rotate-270 group-hover:-translate-y-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % project.images?.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [project.images?.length]);

  return (
    <div className="bg-white rounded-3xl border-4 border-black overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="grid md:grid-cols-2">
        <div className="p-6 md:p-9 order-1">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className={`w-10 h-10 md:w-12 md:h-12 ${project.iconColor} rounded-full`}></div>
            <h3 className="text-xl md:text-3xl font-bold">{project.title}</h3>
          </div>
          <div className="inline-block bg-black text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm mb-4 md:mb-6">
            {project.tag}
          </div>
          <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8">
            {project.description}
          </p>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-bold flex items-center gap-2 hover:gap-4 transition-all text-sm md:text-base"
          >
            View github repo →
          </a>
        </div>
        
        {/* Image Carousel Section */}
        <div className={`${project.color} p-6 md:p-4 flex items-center justify-center order-2`}>
          <div className="relative w-full h-64 md:h-full overflow-hidden rounded-2xl border-4 md:border-6 border-black">
            {project.images?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} Screenshot ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            
            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {project.images?.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-white w-6' 
                      : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjectsPage;