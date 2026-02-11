import ProjectCard from "./ProjectCard";

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
            description="NextHire is a full-stack platform for DSA practice and mock interviews. Users can host or join sessions with real-time video, chat, and session tracking. Built with React, Tailwind, MongoDB, Clerk, Stream, and Inngest, NextHire gives desktop-optimized UI and robust backend functionality, providing a seamless experience for both learners and hosts."
            images={[Next_Hire1, Next_Hire2, Next_Hire3, Next_Hire4]} // Replace with 3 different images
            repo="https://github.com/Bhairulal-Teli/Next-Hire"
            livePreview="https://next-hire-1-iyrt.onrender.com/"
          />

          {/* Project 2 - Vila Restaurant */}
          <ProjectCard
            title="Vila Restaurant"
            tag="MERN Stack"
            iconColor="bg-yellow-400"
            bgColor="bg-blue-400"
            description="ViLa is a full-stack web app for hotel staff to manage bookings and cabins. Staff can create, edit, and track reservations, check guests in and out, and view dashboard insights. Built with React, Supabase, and styled with Tailwind CSS, ViLa provides a smooth, desktop-optimized interface with efficient backend functionality."
            images={[
              Vila_Restaurant1,
              Vila_Restaurant2,
              Vila_Restaurant3,
              Vila_Restaurant4,
            ]} // Replace with 3 different images
            repo="https://github.com/Bhairulal-Teli/VILA_Restaurant"
            livePreview="https://vilarestaurant.vercel.app/"
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

export default PortfolioSection;
