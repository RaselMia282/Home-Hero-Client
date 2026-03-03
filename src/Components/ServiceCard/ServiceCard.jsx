import React, { } from "react";
import { Link } from "react-router"; 
import { FaStar, FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ card }) => {
    
  const { _id, skillName, category, description, image, providerName, rating, price } = card;

  return (
    <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 group flex flex-col h-full">
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={skillName} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-cyan-500 text-white px-4 py-1.5 rounded-full font-bold shadow-md">
          ${price}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest">
            {category}
          </span>
          <div className="flex items-center gap-1">
            <FaStar className="text-orange-400 text-sm" />
            <span className="text-sm font-bold text-gray-800">{rating}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
          {skillName}
        </h3>
        
        <p className="text-gray-500 text-sm line-clamp-2 mb-6 flex-grow">
          {description}
        </p>

        {/* Footer Part */}
        <div className="pt-4 border-t border-gray-50 flex justify-between items-center mt-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold text-xs">
              {providerName ? providerName.charAt(0) : "P"}
            </div>
            <span className="font-semibold text-gray-700 text-xs">{providerName}</span>
          </div>
          
          {/* View Details Route Link */}
          <Link 
            to={`/service-details/${_id}`} 
            className="text-cyan-500 font-bold text-xs flex items-center gap-2 hover:gap-3 transition-all"
          >
            View Details <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
