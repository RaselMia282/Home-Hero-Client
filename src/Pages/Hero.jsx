import React from 'react';
import heroImg from '../Images/Hero1.png'
import { Link } from 'react-router';
const Hero = () => {
    return (
        <div
  className="w-full min-h-[400px] md:min-h-[80vh] bg-cover bg-center bg-no-repeat flex items-center relative overflow-hidden"
  style={{ 
    backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.2)), url(${heroImg})`,
    backgroundAttachment: 'scroll' // মোবাইল ফ্রেন্ডলি রাখার জন্য
  }}
>
  <div className="container mx-auto px-6 relative z-10">
    <div className="max-w-3xl space-y-6 text-center md:text-left">
      <h1 className="text-4xl md:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
        Find Trusted Local <br />
        <span className="text-cyan-500">Experts</span> Easily
      </h1>

      <p className="text-gray-700 text-lg md:text-2xl max-w-xl font-medium leading-relaxed">
        From plumbing to electrical, cleaning to handyman service,
        ServiceHub connects you with vetted professionals.
      </p>

      {/* Button */}
      <div className="pt-4">
        <Link to="/services">
          <button className="bg-cyan-500 hover:bg-cyan-600 transition-all px-10 py-4 rounded-md cursor-pointer text-white font-bold text-base shadow-xl uppercase tracking-widest hover:-translate-y-1 active:scale-95">
            Explore Services
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>
    );
};

export default Hero;
