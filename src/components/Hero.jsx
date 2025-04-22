import { Info } from "lucide-react";
import hero from "../assets/hero.jpg";

function Hero() {
  return (
    <section className="bg-gray-50 py-40 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left content */}
        <div className="flex-1 text-center md:text-left animate__animated animate__fadeIn">
          <h4 className="text-blue-600 text-lg font-semibold flex items-center gap-2 justify-center md:justify-start mb-2">
            <Info className="w-5 h-5" />
            ut perspiciatis unde omnis iste natus  
          </h4>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            <span className="block xl:inline">
              Lorem ipsum dolor sit amet  
            </span>
            <span className="block text-indigo-600 xl:inline">
              adipiscing elit sed do
            </span>
          </h1>

          <p className="mt-4 text-gray-600 text-lg md:text-xl">
            adipiscing elit sed do ut perspiciatis unde omnis iste natus error sit
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#services"
              className="bg-blue-950 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium transition"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="border border-blue-950 text-blue-950 hover:bg-blue-50 px-6 py-3 rounded-md text-lg font-medium transition"
            >
              Get a Quote
            </a>
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1 animate__animated animate__fadeIn animate__delay-1s">
          <img
            src={hero}
            alt="Business illustration"
            className="w-full max-w-md mx-auto rounded-md"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
