import './App.css';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Structures from './components/Structres';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <ContactForm />
      <Footer />

      {/* ✅ Floating WhatsApp Button */}
      <a
        href="https://wa.me/919633750711"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      >
        <svg
          className="w-6 h-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12.004 0C5.376 0 .001 5.373.001 12.002c0 2.116.553 4.145 1.604 5.949L0 24l6.27-1.63A11.954 11.954 0 0 0 12.004 24C18.632 24 24 18.627 24 12.002 24 5.373 18.632 0 12.004 0zm0 21.93a9.91 9.91 0 0 1-5.061-1.396l-.362-.215-3.719.967.993-3.63-.237-.372a9.929 9.929 0 0 1 8.386-15.28c5.487 0 9.959 4.47 9.959 9.958 0 5.489-4.472 9.958-9.959 9.958zm5.679-7.498c-.31-.156-1.827-.902-2.11-1.004-.283-.104-.489-.156-.695.155s-.796 1.004-.976 1.209c-.178.207-.356.234-.666.078-.311-.156-1.313-.482-2.5-1.535-.924-.823-1.547-1.84-1.727-2.15-.18-.31-.02-.478.135-.633.14-.14.311-.364.466-.547.155-.181.207-.311.311-.518.104-.208.052-.39-.026-.547-.078-.156-.695-1.676-.952-2.3-.25-.601-.504-.519-.695-.528-.18-.008-.389-.01-.599-.01a1.151 1.151 0 0 0-.833.39c-.286.31-1.09 1.063-1.09 2.59 0 1.526 1.116 3.004 1.272 3.211.156.208 2.198 3.356 5.324 4.7.745.321 1.326.512 1.777.655.746.237 1.425.204 1.96.124.597-.089 1.827-.747 2.086-1.467.26-.718.26-1.335.182-1.465-.078-.13-.26-.208-.57-.363z" />
        </svg>
      </a>
    </div>
  );
}

export default App;
