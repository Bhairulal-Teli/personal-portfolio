import React, { useState } from "react";
import { Mail, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-5xl">
        {/* Desktop & mobile nav bar */}
        <div className="bg-white rounded-full border-4 border-black px-6 py-3 shadow-lg flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full border-4 border-black flex items-center justify-center">
              <span className="text-black font-black text-lg">B</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="text-base font-medium hover:opacity-70 transition"
            >
              About
            </a>
            <a
              href="#portfolio"
              className="text-base font-medium hover:opacity-70 transition"
            >
              Projects
            </a>
            <a
              href="#education"
              className="text-base font-medium hover:opacity-70 transition"
            >
              Education
            </a>
            <a
              href="#tech-stack"
              className="text-base font-medium hover:opacity-70 transition"
            >
              Tech Stack
            </a> 
            <a
              href="/resume"
              className="text-base font-medium hover:opacity-70 transition"
            >
              Resume
            </a>
            <a href="#contact">
              <button className="bg-black text-white px-6 py-2 rounded-full hover:opacity-80 transition">
                <Mail className="inline w-4 h-4" />
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden bg-black text-white p-2 rounded-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu - outside the rounded nav div */}
        <div
          className={`md:hidden mt-2 bg-white rounded-2xl border-4 border-black shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-3 p-4">
            <a
              href="#home"
              className="text-base font-medium hover:opacity-70 py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#education"
              className="text-base font-medium hover:opacity-70 py-2"
              onClick={() => setIsOpen(false)}
            >
              Education
            </a>
            <a
              href="#tech-stack"
              className="text-base font-medium hover:opacity-70 py-2"
              onClick={() => setIsOpen(false)}
            >
              Tech Stack
            </a>
            <a
              href="#contact"
              className="text-base font-medium hover:opacity-70 py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a
              href="/resume"
              className="text-base font-medium hover:opacity-70 py-2"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;