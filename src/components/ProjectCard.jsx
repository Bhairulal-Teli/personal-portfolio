import { useEffect, useState } from "react";

const ProjectCard = ({
  title,
  tag,
  iconColor,
  bgColor,
  description,
  images,
  repo,
  livePreview,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-white rounded-3xl border-4 border-black overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:max-h-[360px]">
      <div className="grid md:grid-cols-2">
        <div className="p-3 md:p-5 order-1">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div
              className={`w-8 h-8 md:w-12 md:h-12 ${iconColor} rounded-full`}
            ></div>
            <h3 className="text-xl md:text-3xl font-bold">{title}</h3>
            <div className="bg-gray-500 text-white px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs md:text-sm">
              {tag}
            </div>
          </div>

          <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8">
            {description}
          </p>
          <div className="flex flex-row justify-between">
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-green-400 text-black px-4 py-2 rounded-xl font-bold text-sm flex items-center justify-center hover:bg-green-500 transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 lg:ml-10 ml-5"
            >
              <span className="hidden sm:inline">View Github Repo →</span>
              <span className="inline sm:hidden">GitHub →</span>
            </a>
            <a
              href={livePreview}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-red-500 text-white px-4 py-2 rounded-xl font-bold text-sm flex items-center justify-center hover:bg-red-600 transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 lg:mr-10 mr-5"
            >
              <span className="hidden sm:inline">Live Preview →</span>
              <span className="inline sm:hidden">Live →</span>
            </a>
          </div>
        </div>

        {/* Image Carousel Section */}
        <div
          className={`${bgColor} p-4 md:p-3 flex items-center justify-center order-2`}
        >
          <div className="relative w-full h-48 sm:h-60 md:h-72 lg:h-72 overflow-hidden rounded-2xl border-4 md:border-6 border-black">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${title} Screenshot ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? "bg-white w-6" : "bg-white/50"
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

export default ProjectCard;
