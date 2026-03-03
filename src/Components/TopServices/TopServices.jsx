import React from "react";
import { Link } from "react-router"; 
import { FaStar, FaArrowRight } from "react-icons/fa";

const TopServices = ({ data }) => {
  
  if (!data || data.length === 0) {
    return <div className="text-center py-10">Loading services...</div>;
  }

  return (
    <div className="container mx-auto py-20 px-4">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Top Rated Services</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Discover the highest rated professionals near you, vetted for quality and consistency.
        </p>
      </div>

      {/* Grid Layout & Mapping */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.slice(0,6).map((service) => (
          <div 
            key={service._id} 
            className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 group"
          >
            {/* Image Section */}
            <div className="relative h-56 overflow-hidden">
              <img 
                src={service.image} 
                alt={service.skillName} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-cyan-500 text-white px-4 py-1.5 rounded-full font-bold shadow-md">
                ${service.price}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest">
                  {service.category}
                </span>
                <div className="flex items-center gap-1">
                  <FaStar className="text-orange-400 text-sm" />
                  <span className="text-sm font-bold text-gray-800">{service.rating}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                {service.skillName}
              </h3>
              
              <p className="text-gray-500 text-sm line-clamp-2 mb-6">
                {service.description}
              </p>

              {/* Footer Part */}
              <div className="pt-4 border-t border-gray-50 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold text-xs">
                    {service.providerName.charAt(0)}
                  </div>
                  <span className="font-semibold text-gray-700 text-xs">{service.providerName}</span>
                </div>
                
                {/* View Details Route Link */}
                <Link 
                  to={`/services/${service._id}`} 
                  className="text-cyan-500 font-bold text-xs flex items-center gap-2 hover:gap-3 transition-all"
                >
                  View Details <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Button */}
      <div className="mt-12 text-center">
        <Link to="/services">
          <button className="px-10 py-3 border-2 border-cyan-500 text-cyan-500 font-bold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300">
            View All Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopServices;
