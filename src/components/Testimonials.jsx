import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa'; // Import quote icon

const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.",
    name: "Tony Stark",
    role: "CEO, Stark Industries",
  },
  {
    quote: "Suspendisse potenti. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
    name: "Bruce Wayne",
    role: "Founder, Wayne Enterprises",
  },
  {
    quote: "Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet.",
    name: "Diana Prince",
    role: "Creative Director, Themyscira Co.",
  },
  {
    quote: "Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis.",
    name: "Peter Parker",
    role: "Photographer, Daily Bugle",
  },
  {
    quote: "Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
    name: "Sherlock Holmes",
    role: "Consultant, Baker Street Analytics",
  },
  {
    quote: "Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
    name: "Katniss Everdeen",
    role: "Strategy Lead, District 12 Media",
  },
];

const Testimonials = () => {
  return (
    <section id='testimonials' className="bg-gradient-to-br from-purple-50 via-white to-purple-100 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center items-center">
      <h4 className="text-blue-950 text-sm font-medium flex items-center gap-2 mb-2 uppercase tracking-wider text-center">
          <FaQuoteLeft className="w-5 h-5" /> {/* Quote icon */}
          Testimonials
        </h4>
        <h2 className="text-4xl font-bold mb-10 text-purple-900">What Our Clients Say</h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            768: { slidesPerView: 1 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-2xl shadow-xl mx-4 relative overflow-hidden group transition-all duration-300 hover:scale-[1.02]">
                {/* Soft blur decoration */}
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-purple-100 rounded-full opacity-20 z-0 blur-2xl group-hover:scale-125 transition-all duration-500" />
                
                <p className="text-gray-700 italic text-lg relative z-10">“{item.quote}”</p>

                <div className="mt-6 text-left relative z-10">
                  <h4 className="font-semibold text-xl text-purple-800">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
