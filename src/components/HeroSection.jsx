import React, { useState, useEffect } from "react";
import { Mail, Github } from "lucide-react";
import Dev_Image from "../assets/dev-image.png";

const HeroSection = () => {
  const [currentTitle, setCurrentTitle] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const titles = [
    "Mern Stack Developer",
    "Full Stack Developer",
    "React Developer",
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const currentFullTitle = titles[titleIndex];

        if (!isDeleting && charIndex < currentFullTitle.length) {
          setCurrentTitle(currentFullTitle.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else if (isDeleting && charIndex > 0) {
          setCurrentTitle(currentFullTitle.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else if (!isDeleting && charIndex === currentFullTitle.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setTitleIndex((titleIndex + 1) % titles.length);
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <section id="home" className="pt-32 md:pt-40 pb-12 md:pb-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            I'm{" "}
            <span className="bg-red-400 text-white px-2 md:px-4 whitespace-nowrap inline-block">
              Bhairulal
            </span>
            ,<br />
            <span className="text-3xl md:text-6xl">a</span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl bg-blue-500 text-white px-2 md:px-4 inline-block break-all">
              {currentTitle}
              <span className="animate-pulse">|</span>
            </span>
            <br />
            <span className="text-3xl md:text-6xl">from</span>{" "}
            <span className="bg-green-500 text-2xl md:text-3xl lg:text-4xl text-white px-2 md:px-4 whitespace-nowrap inline-block">
              Surat, Gujarat
            </span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8">
            Computer Science student skilled in full-stack web development with
            experience in JavaScript, Node.js, Express, React, MongoDB, and
            Supabase. Experienced in building scalable web apps, designing APIs,
            and managing databases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact">
              <button className="bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-80 transition whitespace-nowrap">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>Get in touch</span>
              </button>
            </a>
          </div>
        </div>
        <div className="bg-yellow-400 rounded-3xl border-4 border-black p-4 md:p-6 h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
  <img
    src={Dev_Image}
    alt="Developer animated image"
    className="max-w-full max-h-full object-contain"
  />
</div>

      </div>
    </section>
  );
};

export default HeroSection;
