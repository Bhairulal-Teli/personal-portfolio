import React from 'react';

const EducationSection = () => {
  return (
    <section id="education" className="py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          My <span className="bg-blue-500 text-white px-3">Education</span>
        </h2>
        <p className="text-center text-gray-600 mb-8 md:mb-12">Academic background and achievements</p>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-purple-100 border-4 border-black rounded-3xl p-6 md:p-8">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-600 rounded-full border-4 border-black mb-4 md:mb-6"></div>
            <h3 className="text-xl md:text-2xl font-bold mb-2">Bachelor of Technology</h3>
            <p className="text-base md:text-lg font-semibold text-gray-700 mb-2">Computer Science Engineering</p>
            <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">Uka Tarsadia University | 2023 - 2027</p>
            <p className="text-sm md:text-base text-gray-700">
              Focused on web development, data structures and algorithms, and software engineering principles. Completed various projects in MERN stack development.
            </p>
          </div>

          <div className="bg-blue-100 border-4 border-black rounded-3xl p-6 md:p-8">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-full border-4 border-black mb-4 md:mb-6"></div>
            <h3 className="text-xl md:text-2xl font-bold mb-2">Higher Secondary Education</h3>
            <p className="text-base md:text-lg font-semibold text-gray-700 mb-2">Science Stream (PCM)</p>
            <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">Shree Vasishtha Vidhyalaya | 2019 - 2021</p>
            <p className="text-sm md:text-base text-gray-700">
              Completed higher secondary education with focus on Physics, Chemistry, and Mathematics. Developed strong analytical and problem-solving skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;