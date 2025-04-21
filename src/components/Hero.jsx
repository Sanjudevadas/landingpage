import hero from "../assets/hero.jpg";

function Hero() {
  return (
    <section className="bg-gray-50 py-40 px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Elevate Your Business <br /> with Our Expert Services
          </h1>
          <p className="mt-4 text-gray-600 text-lg md:text-xl">
            We help you grow with strategies tailored for success.
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
        <div className="flex-1">
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
