export default function TechStack() {
  const techCategories = [
    {
      name: "Languages",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      technologies: [
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "C++",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        },
        {
          name: "C",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        },
        {
          name: "SQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
      ],
    },
    {
      name: "Frontend",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      technologies: [
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
      ],
    },
    {
      name: "Backend & Frameworks",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      technologies: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "Socket.io",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
        },
        {
          name: "REST APIs",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Supabase",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
        },
      ],
    },
    {
      name: "Database",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      technologies: [
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
      ],
    },
    {
      name: "Tools & Platform",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      technologies: [
        {
          name: "VS Code",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        },
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "GitHub",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
      ],
    },
  ];

  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Tech <span className="bg-gradient-to-r from-purple-500 to-yellow-500 text-white px-3">Stack</span>
        </h2>
        <p className="text-center text-gray-600 mb-8 md:mb-12 text-sm md:text-base px-4">
          Technologies and tools I use to bring ideas to life
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border-4 border-black p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`inline-block border-2 border-black px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white font-semibold text-sm mb-6`}
              >
                {category.name}
              </div>

              <div className="grid grid-cols-3 gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="group flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 transition-all duration-300 cursor-pointer"
                    title={tech.name}
                  >
                    <div className="w-14 h-14 relative flex items-center justify-center bg-white rounded-xl border-2 border-gray-200 group-hover:border-black group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110">
                      <img
                        src={tech.icon || "/placeholder.svg"}
                        alt={tech.name}
                        className="w-9 h-9 object-contain group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      <div className="hidden w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg items-center justify-center">
                        <span className="text-xs font-bold text-primary">
                          {tech.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-center text-gray-600 group-hover:text-black group-hover:font-semibold leading-tight transition-all duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </section>
  );
}