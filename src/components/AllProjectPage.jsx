import ProjectCard from "./ProjectCard";

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
      bgColor: "bg-purple-600",
      iconColor: "bg-purple-600",
      description:
        "NextHire is a full-stack platform for DSA practice and mock interviews. Users can host or join sessions with real-time video, chat, and session tracking. Built with React, Tailwind, MongoDB, Clerk, Stream, and Inngest, NextHire gives desktop-optimized UI and robust backend functionality, providing a seamless experience for both learners and hosts.",
      repo: "https://github.com/Bhairulal-Teli/Next-Hire",
      livePreview: "https://next-hire-1-iyrt.onrender.com/",
      images: [Next_Hire1, Next_Hire2, Next_Hire3, Next_Hire4],
    },
    {
      id: 2,
      title: "Vila Restaurant",
      tag: "MERN Stack",
      bgColor: "bg-blue-400",
      iconColor: "bg-yellow-400",
      description:
        "ViLa is a full-stack web app for hotel staff to manage bookings and cabins. Staff can create, edit, and track reservations, check guests in and out, and view dashboard insights. Built with React, Supabase, and styled with Tailwind CSS, ViLa provides a smooth, desktop-optimized interface with efficient backend functionality.",
      repo: "https://github.com/Bhairulal-Teli/VILA_Restaurant",
      livePreview: "https://vilarestaurant.vercel.app/",
      images: [
        Vila_Restaurant1,
        Vila_Restaurant2,
        Vila_Restaurant3,
        Vila_Restaurant4,
      ],
    },
    {
      id: 3,
      title: "WanderLust",
      tag: "MERN Stack",
      bgColor: "bg-green-500",
      iconColor: "bg-green-500",
      description:
        "Wanderlust is a full-stack Airbnb-inspired web app where users can list, edit, and review properties. It features secure authentication, role-based access, and image uploads for a complete user experience. Built with Node.js, Express, MongoDB, and EJS, Wanderlust provides a responsive, desktop-optimized interface with reliable backend functionality.",
      repo: "https://github.com/Bhairulal-Teli/WanderLust",
      livePreview: "https://wanderlust-website-6bk8.onrender.com/",
      images: [WanderLust1, WanderLust2, WanderLust3],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b-4 border-black">
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-6 flex items-center">
          {/* Back button */}
          <a
            href="/"
            className="group inline-flex items-center gap-2 text-black font-bold hover:gap-3 transition-all bg-white border-4 border-black px-4 py-2 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-1"
          >
            <svg
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="hidden sm:inline">Back to Home</span>
          </a>

          <h1 className="absolute left-1/2 -translate-x-1/2 text-2xl md:text-4xl lg:text-5xl font-bold">
            All <span className="bg-red-400 text-white px-3">Projects</span>
          </h1>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 md:gap-8">
            {projects?.map((project) => (
              <ProjectCard key={project.id} {...project} />
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

export default AllProjectsPage;
