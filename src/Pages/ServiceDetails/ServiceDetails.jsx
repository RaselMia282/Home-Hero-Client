import React, { use, useEffect, useState } from "react";
import { useLoaderData, Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const ServiceDetails = () => {
  const {user}=use(AuthContext);
  const data = useLoaderData();
  const [relatedService, setRelatedService] = useState([]);
const navigate = useNavigate();
  useEffect(() => {
    if (data?.category) {
      fetch(`http://localhost:3000/services`)
        .then((res) => res.json())
        .then((allData) => {
          const filtered = allData.filter((item) => item._id !== data._id);
          const shuffled = filtered.sort(() => 0.5 - Math.random());
          setRelatedService(shuffled);
        });
    }
    window.scrollTo(0, 0); 
  }, [data]);
  const handleBookings=()=>{
    if(!user?.email){
      return alert ("login first")
    }

    const bookingInfo ={
      serviceId : data._id,
      skillName :data.skillName,
      image :data.image,
      price:data.price,
      providerName:data.providerName,
      providerEmail:data.providerEmail,
      customerEmail:user.email,
      customerName:user.displayName,
      bookingDate:new Date().toLocaleDateString(),
      status:"pending",
    }

    fetch("http://localhost:3000/bookings",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(bookingInfo)
    })
    .then(res=>res.json())
    .then(result=>{
console.log(result);
if(result.insertedId){
  alert("booking successful")
  navigate("/my-bookings")
}

    })
  }

  const {
    image,
    skillName,
    category,
    rating,
    description,
    providerName,
    price,
    slotsAvailable,
  } = data;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-12 gap-8">
        
        {/* LEFT SIDE - 8 Columns */}
        <div className="col-span-12 lg:col-span-8 space-y-10">
          
          {/* 1. Bento Gallery Section */}
          <div className="grid grid-cols-12 gap-4 h-[300px] md:h-[450px]">
            {/* Main Big Image */}
            <div className="col-span-8 overflow-hidden rounded-3xl shadow-sm">
              <img
                src={image}
                alt={skillName}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Side Small Images */}
            <div className="col-span-4 grid grid-rows-2 gap-4">
              <div className="overflow-hidden rounded-3xl shadow-sm">
                <img src={image} className="w-full h-full object-cover" alt="detail 1" />
              </div>
              <div className="relative overflow-hidden rounded-3xl shadow-sm group cursor-pointer">
                <img src={image} className="w-full h-full object-cover blur-[1px]" alt="detail 2" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                   <span className="text-white font-bold text-sm md:text-lg">View All Photos</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Service Header & Description */}
          <div className="bg-white">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
                {category}
              </span>
              <span className="text-yellow-500 font-bold flex items-center gap-1">
                ⭐ {rating} <span className="text-gray-400 font-normal">(124 reviews)</span>
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              {skillName}
            </h1>
            <p className="text-gray-600 leading-relaxed text-lg">
              {description}
            </p>
          </div>

          {/* 3. Provider Profile Card (Now nice and wide) */}
          <div className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-black shadow-lg">
                  {providerName[0]}
                </div>
                <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-4 border-white rounded-full"></div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-2xl font-bold text-gray-800">{providerName}</h4>
                  <span className="text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  </span>
                </div>
                <p className="text-gray-500 font-medium">Professional Expert Instructor</p>
              </div>
            </div>

            <div className="flex gap-4 w-full md:w-auto">
              <div className="bg-gray-50 px-6 py-4 rounded-2xl text-center border border-gray-100 flex-1">
                <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1">Experience</p>
                <p className="text-xl font-black text-gray-800">8+ Years</p>
              </div>
              <div className="bg-gray-50 px-6 py-4 rounded-2xl text-center border border-gray-100 flex-1">
                <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1">Completed</p>
                <p className="text-xl font-black text-gray-800">1.2k+ Jobs</p>
              </div>
            </div>
          </div>

          {/* 4. FAQ Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Frequently Asked Questions</h3>
            <div className="join join-vertical w-full bg-white border border-gray-100 rounded-3xl overflow-hidden">
              <div className="collapse collapse-arrow join-item border-b border-gray-100">
                <input type="radio" name="my-accordion-4" defaultChecked /> 
                <div className="collapse-title text-lg font-bold text-gray-700">What is included in this service?</div>
                <div className="collapse-content text-gray-500"><p>Comprehensive 60-minute session with all materials.</p></div>
              </div>
              <div className="collapse collapse-arrow join-item border-b border-gray-100">
                <input type="radio" name="my-accordion-4" /> 
                <div className="collapse-title text-lg font-bold text-gray-700">Can I reschedule my booking?</div>
                <div className="collapse-content text-gray-500"><p>Yes, up to 24 hours before the session.</p></div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - 4 Columns (Sticky Booking Card) */}
        <div className="col-span-12 lg:col-span-4">
          <div className="border border-gray-100 rounded-[2.5rem] p-8 shadow-xl sticky top-10 bg-white space-y-6">
            <div>
              <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-1">Price per session</p>
              <h3 className="text-5xl font-black text-blue-600">${price}</h3>
            </div>

            <div className="space-y-4 py-6 border-y border-gray-50">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-medium">Slots Available</span>
                <span className="bg-red-50 text-red-500 px-3 py-1 rounded-lg font-bold text-sm">{slotsAvailable} left</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-medium">Duration</span>
                <span className="text-gray-800 font-bold">60 Minutes</span>
              </div>
            </div>

            <button onClick={handleBookings} className="btn btn-primary w-full h-16 rounded-2xl text-xl font-black shadow-lg shadow-blue-200">
              Book This Service
            </button>
            <p className="text-center text-xs text-gray-400 font-medium italic">
              * Secure payment & instant confirmation
            </p>
          </div>
        </div>
      </div>

      {/* Related Services - Full Width Bottom */}
      <div className="mt-24 pt-16 border-t border-gray-100">
        <div className="mb-12">
          <h2 className="text-4xl font-black text-gray-900 tracking-tight">Related Services</h2>
          <p className="text-gray-500 mt-2 text-lg font-medium">Explore more skills that might interest you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedService.slice(0, 4).map((service) => (
            <Link
              to={`/service-details/${service._id}`}
              key={service._id}
              className="group bg-white border border-gray-100 rounded-[2rem] overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="h-48 overflow-hidden">
                <img src={service.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={service.skillName} />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">{service.skillName}</h4>
                <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                  <span className="text-2xl font-black text-blue-600">${service.price}</span>
                  <span className="font-bold text-gray-700">⭐ {service.rating}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
