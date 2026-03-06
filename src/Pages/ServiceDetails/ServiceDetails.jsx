import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Link } from "react-router";
const ServiceDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const [relatedService, setRelatedService] = useState([]);
  useEffect(() => {
    if (data?.category) {
      console.log(data.category);

      fetch(`http://localhost:3000/services`)
        .then((res) => res.json())
        .then((allData) => {
          const filtered = allData.filter((item) => item._id !== data._id);
          const shuffled = filtered.sort(()=>0.5-Math.random());
          setRelatedService(shuffled);
        });
    }
  }, [data]);
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
    <div className="container mx-auto px-4">
      <div className=" grid grid-cols-12">
        {/* left side */}
        <div className="col-span-8 p-4">
          <img
            src={image}
            alt={skillName}
            className="w-full h-[450px] object-cover rounded-3xl"
          />

          <div className="mt-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-bold">
                {category}
              </span>
              <span className="text-yellow-500 font-bold">⭐ {rating}</span>
            </div>

            <h1 className="text-4xl font-bold mb-6">{skillName}</h1>
            <p className="text-gray-600 leading-relaxed text-lg">
              {description}
            </p>

            {/* Provider info */}
            <div className="mt-10 p-6 bg-gray-50 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                {providerName[0]}
              </div>
              <div>
                <h4 className="font-bold text-lg">{providerName}</h4>
                <p className="text-sm text-gray-500">Professional Instructor</p>
              </div>
            </div>
            {/* asked que section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Frequently Asked Questions
              </h3>
              <div className="join join-vertical w-full border border-gray-200 rounded-xl overflow-hidden">
                {/* Question 1 */}
                <div className="collapse collapse-arrow join-item border-b border-gray-200">
                  <input type="radio" name="service-faq" defaultChecked />
                  <div className="collapse-title text-lg font-medium text-gray-700">
                    What is included in this service?
                  </div>
                  <div className="collapse-content text-gray-600">
                    <p>
                      This service covers a comprehensive 60-minute session
                      tailored to your skill level, including all necessary
                      materials and a follow-up guide for practice.
                    </p>
                  </div>
                </div>

                {/* Question 2 */}
                <div className="collapse collapse-arrow join-item border-b border-gray-200">
                  <input type="radio" name="service-faq" />
                  <div className="collapse-title text-lg font-medium text-gray-700">
                    Can I reschedule my booking?
                  </div>
                  <div className="collapse-content text-gray-600">
                    <p>
                      Yes, you can reschedule your booking up to 24 hours before
                      the scheduled time without any additional charges.
                    </p>
                  </div>
                </div>

                {/* Question 3 */}
                <div className="collapse collapse-arrow join-item">
                  <input type="radio" name="service-faq" />
                  <div className="collapse-title text-lg font-medium text-gray-700">
                    Are there any prerequisites?
                  </div>
                  <div className="collapse-content text-gray-600">
                    <p>
                      No prior experience is required for beginner-level
                      services. We provide all the basics to get you started
                      from scratch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* review sec */}
          <div className="mt-12">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-800">
                Customer Reviews
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500 font-bold text-xl">4.9</span>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                    readOnly
                  />
                </div>
                <span className="text-gray-400 text-sm">(124 Reviews)</span>
              </div>
            </div>

            <div className="space-y-8">
              {/* Review 1 */}
              <div className="border-b border-gray-100 pb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="avatar online placeholder">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-12">
                      <span className="text-lg font-bold">JD</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">James Daniel</h4>
                    <p className="text-xs text-gray-400">2 days ago</p>
                  </div>
                  <div className="ml-auto text-yellow-500 text-sm">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  "Absolutely fantastic experience! The instructor was
                  incredibly patient and explained complex concepts in a very
                  simple way. Highly recommended for anyone looking to start
                  their journey."
                </p>
              </div>

              {/* Review 2 */}
              <div className="border-b border-gray-100 pb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="avatar placeholder">
                    <div className="bg-purple-100 text-purple-600 rounded-full w-12">
                      <span className="text-lg font-bold">SA</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Sarah Anderson</h4>
                    <p className="text-xs text-gray-400">1 week ago</p>
                  </div>
                  <div className="ml-auto text-yellow-500 text-sm">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  "Great value for money. The session was well-structured and I
                  felt I learned more in an hour than I did from weeks of
                  watching tutorials online."
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="col-span-4 p-4">
          <div className="border rounded-3xl p-8 shadow-sm sticky top-10 bg-white">
            <p className="text-gray-500 text-sm mb-2">
              Price for 1 hour session
            </p>
            <h3 className="text-4xl font-bold mb-6 text-blue-600">${price}</h3>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm">
                <span>Slots Available:</span>
                <span className="font-bold text-red-500">
                  {slotsAvailable} left
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Duration:</span>
                <span className="font-bold">60 Minutes</span>
              </div>
            </div>

            <button className="btn btn-primary w-full py-4 rounded-xl text-lg font-bold">
              Book This Service
            </button>

            <p className="text-center text-xs text-gray-400 mt-4">
              Free cancellation up to 24h before
            </p>
          </div>
        </div>
      </div>
      {/* map here */}
      <div className="mt-20 border-t pt-10 pb-20">
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Related Services
          </h2>
          <p className="text-gray-500 mt-2 text-lg">
            Customers who booked this also explored these services.
          </p>
        </div>

        {/* Card Grid */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedService.slice(0, 4).map((service) => (
            <Link
              to={`/service-details/${service._id}`}
              key={service._id}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group block"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.skillName}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-4 line-clamp-1 group-hover:text-blue-600 transition-colors">
                  {service.skillName}
                </h4>

                <div className="flex justify-between items-center border-t pt-4">
                  <span className="text-2xl font-black text-blue-600">
                    ${service.price}
                  </span>

                  <div className="flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-full">
                    <span className="text-sm font-bold text-gray-700">
                      {service.rating}
                    </span>
                  </div>
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
