import React, { useState, useEffect } from 'react';
import Next_Hire1 from "../assets/NextHire-1.png";
import Next_Hire2 from "../assets/NextHire-2.png";
import Next_Hire3 from "../assets/NextHire-3.png";
import Next_Hire4 from "../assets/NextHire-4.png";
import Vila_Restaurant1 from "../assets/VilaRestaurant-1.png";
import Vila_Restaurant2 from "../assets/VilaRestaurant-2.png";
import Vila_Restaurant3 from "../assets/VilaRestaurant-3.png";
import Vila_Restaurant4 from "../assets/VilaRestaurant-4.png";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-12 md:py-20 px-4 md:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Recent <span className="bg-red-400 text-white px-3">Projects</span>
        </h2>
        <p className="text-center text-gray-600 mb-8 md:mb-12">
          Check out my latest work
        </p>

        <div className="grid gap-6 md:gap-8">
          {/* Project 1 - Next-Hire */}
          <ProjectCard
            title="Next-Hire"
            tag="Full Stack"
            iconColor="bg-purple-600"
            bgColor="bg-purple-600"
            description="NextHire is a full-stack platform for DSA practice and mock interviews. User can host or join sessions with real-time video, chat, and session tracking. Built with React, Tailwind, MongoDB, Clerk, Stream, and Inngest."
            images={[Next_Hire1, Next_Hire2, Next_Hire3, Next_Hire4]} // Replace with 3 different images
            repo="https://github.com/Bhairulal-Teli/Next-Hire"
          />

          {/* Project 2 - Vila Restaurant */}
          <ProjectCard
            title="Vila Restaurant"
            tag="MERN Stack"
            iconColor="bg-yellow-400"
            bgColor="bg-blue-400"
            description="ViLa is a full-stack web app for hotel staff to manage bookings and cabins. Staff can create, edit, and track reservations, check-in/out guests, and view dashboard insights. Built with React, Supabase, and styled with Tailwind CSS."
            images={[Vila_Restaurant1, Vila_Restaurant2, Vila_Restaurant3, Vila_Restaurant4]} // Replace with 3 different images
            repo="https://github.com/Bhairulal-Teli/VILA_Restaurant"
          />
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center mt-10 md:mt-12">
          <a
            href="/projects"
            className="group bg-black text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-gray-900 transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-1"
          >
            View All Projects
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

// Project Card Component
const ProjectCard = ({ title, tag, iconColor, bgColor, description, images, repo }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-white rounded-3xl border-4 border-black overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="grid md:grid-cols-2">
        <div className="p-6 md:p-9 order-1">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className={`w-10 h-10 md:w-12 md:h-12 ${iconColor} rounded-full`}></div>
            <h3 className="text-xl md:text-3xl font-bold">{title}</h3>
          </div>
          <div className="inline-block bg-black text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm mb-4 md:mb-6">
            {tag}
          </div>
          <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8">
            {description}
          </p>
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-bold flex items-center gap-2 hover:gap-4 transition-all text-sm md:text-base"
          >
            View github repo →
          </a>
        </div>
        
        {/* Image Carousel Section */}
        <div className={`${bgColor} p-6 md:p-4 flex items-center justify-center order-2`}>
          <div className="relative w-full h-64 md:h-full overflow-hidden rounded-2xl border-4 md:border-6 border-black">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${title} Screenshot ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            
            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, index) => (
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

export default PortfolioSection;