import React from "react";
import { Download, ArrowLeft } from "lucide-react";

const ResumePage = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Bhairulal_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 flex items-center justify-between">
          <a
            href="/"
            className="group inline-flex items-center gap-2 text-black font-bold hover:gap-3 transition-all bg-white border-4 border-black px-4 py-2 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-1"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="hidden md:inline">Back to Home</span>
          </a>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
            My <span className="bg-blue-500 text-white px-3">Resume</span>
          </h1>

          <button
            onClick={handleDownload}
            className="group bg-green-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-green-600 transition-all border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-1"
          >
            <Download className="w-5 h-5" />
            <span className="hidden md:inline">Download</span>
          </button>
        </div>
      </div>

      {/* Resume Display */}
      <section className="py-8 md:py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border-4 border-black p-4 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="w-full overflow-hidden rounded-xl border-2 border-gray-300">
              <iframe
                src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
                className="w-full h-[437px] md:h-[1000px]"
                title="Resume"
                style={{ border: "none" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumePage;
