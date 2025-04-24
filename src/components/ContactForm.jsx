import contactus from '../assets/contactus.jpg';
import { Mail } from "lucide-react";
const ContactForm = () => {
  return (
    <div id='contact' className="bg-gradient-to-br from-purple-50 via-white to-purple-100 py-20 px-6 md:px-20">
       <h4 className="text-blue-950 text-sm font-medium flex items-center gap-2 mb-2 uppercase tracking-wider justify-center">
  <Mail className="w-5 h-5" />
  Contact
</h4>
      <h2 className="text-4xl font-bold text-purple-900 text-center mb-4">Contact Us</h2>
      <p className="text-gray-600 text-center mb-8 text-base md:text-lg">
        We'd love to hear from you! Fill out the form below and we'll get back to you shortly.
      </p>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-12">
        
        {/* Left - Framed Image */}
        <div className="flex-1 h-full flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-lg w-full overflow-hidden">
            {/* Browser bar effect */}
            <div className="bg-gray-200 px-4 py-2 flex items-center gap-2">
              <span className="w-3 h-3 bg-red-400 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span className="w-3 h-3 bg-green-400 rounded-full"></span>
            </div>
            <img
              src={contactus}
              alt="Contact"
              className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
            />
              <div className="bg-gray-200 px-4 py-2 flex items-center gap-2">
              <span className="w-3 h-3 bg-red-400 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span className="w-3 h-3 bg-green-400 rounded-full"></span>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="flex-1 flex items-center">
          <div className="w-full bg-white p-8 md:p-10 rounded-2xl shadow-2xl">
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Enter your message"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-purple-900 text-white font-semibold py-3 px-8 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactForm;
