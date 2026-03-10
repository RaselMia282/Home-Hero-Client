import React, { use, useEffect, useState } from "react";
import { useLoaderData, Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";

const ServiceDetails = () => {
  const { user } = use(AuthContext);
  const data = useLoaderData();
  const [relatedService, setRelatedService] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); 
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

  const handleBookings = () => {
    if (!user?.email) {
      return Swal.fire("Login Required", "Please login first to book a service!", "warning");
    }
    setIsModalOpen(true); 
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    const form = e.target;

    const bookingInfo = {
      serviceId: data._id,
      skillName: data.skillName,
      image: data.image,
      price: data.price,
      providerName: data.providerName,
      providerEmail: data.providerEmail,
      customerEmail: user.email,
      customerName: user.displayName,
      bookingDate: form.date.value,
      instruction: form.instruction.value, 
      status: "pending",
    };

    fetch("http://localhost:3000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire("Success!", "Service booked successfully!", "success");
          setIsModalOpen(false); 
          navigate("/my-bookings");
        }
      });
  };

  const {
    image,
    skillName,
    category,
    rating,
    description,
    providerName,
    price,
    slotsAvailable,
    _id,
  } = data;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-12 gap-8">
        {/* LEFT SIDE - 8 Columns */}
        <div className="col-span-12 lg:col-span-8 space-y-10">
          {/* 1. Bento Gallery Section */}
          <div className="grid grid-cols-12 gap-4 h-[300px] md:h-[450px]">
            <div className="col-span-8 overflow-hidden rounded-3xl shadow-sm">
              <img
                src={image}
                alt={skillName}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
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
            <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
          </div>

          {/* 3. Provider Profile Card */}
          <div className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-black shadow-lg">
                  {providerName ? providerName[0] : "P"}
                </div>
                <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-4 border-white rounded-full"></div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-2xl font-bold text-gray-800">{providerName}</h4>
                  <span className="text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
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
        </div>

        {/* RIGHT SIDE - Sticky Booking Card */}
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
            <p className="text-center text-xs text-gray-400 font-medium italic">* Secure payment & instant confirmation</p>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {isModalOpen && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-white rounded-3xl p-8">
            <h3 className="font-black text-2xl mb-4 text-gray-800 text-center">Confirm Your Booking</h3>
            <form onSubmit={handleConfirmBooking} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label text-xs font-bold uppercase text-gray-400">Service Name</label>
                  <input type="text" value={skillName} readOnly className="input input-bordered bg-gray-50 font-bold" />
                </div>
                <div className="form-control">
                  <label className="label text-xs font-bold uppercase text-gray-400">Price</label>
                  <input type="text" value={`$${price}`} readOnly className="input input-bordered bg-gray-50 font-bold text-blue-600" />
                </div>
              </div>
              <div className="form-control">
                <label className="label text-xs font-bold uppercase text-gray-400">Service Taking Date</label>
                <input type="date" name="date" required className="input input-bordered focus:border-blue-500" />
              </div>
              <div className="form-control">
                <label className="label text-xs font-bold uppercase text-gray-400">Special Instructions</label>
                <textarea
                  name="instruction"
                  placeholder="Address or specific requirements..."
                  className="textarea textarea-bordered h-24 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <div className="modal-action gap-4">
                <button type="button" onClick={() => setIsModalOpen(false)} className="btn btn-ghost flex-1 rounded-xl font-bold">Cancel</button>
                <button type="submit" className="btn btn-primary flex-1 rounded-xl font-black text-lg shadow-lg">Purchase</button>
              </div>
            </form>
          </div>
        </dialog>
      )}

      {/* Related Services */}
      <div className="mt-24 pt-16 border-t border-gray-100">
        <h2 className="text-4xl font-black text-gray-900 mb-12">Related Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedService.slice(0, 4).map((service) => (
            <Link to={`/service-details/${service._id}`} key={service._id} className="group bg-white border border-gray-100 rounded-[2rem] overflow-hidden hover:shadow-2xl transition-all duration-500">
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
