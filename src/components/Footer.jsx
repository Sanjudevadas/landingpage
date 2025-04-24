import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-purple-950 text-white py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Logo or Company Name */}
        <div className="mb-6">
          <h3 className=" text-indigo-500  text-3xl font-semibold">TEST</h3>
          <p className="text-lg mt-2">Your tagline or slogan here.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center gap-12 mb-6">
          <a href="#home" className="text-lg hover:text-indigo-600">Home</a>
          <a href="#services" className="text-lg hover:text-indigo-600">Services</a>
          <a href="#about" className="text-lg hover:text-indigo-600">About Us</a>
          <a href="#contact" className="text-lg hover:text-indigo-600">Contact</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-indigo-600">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-indigo-600">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-indigo-600">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-indigo-600">
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400">
  <p>© 2025 TEST. All rights reserved By <span className="text-indigo-400 font-semibold">Sanju Devadas</span>.</p>
</div>

      </div>
    </footer>
  );
};

export default Footer;
