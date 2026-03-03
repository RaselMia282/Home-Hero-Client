import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";

const Services = () => {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState("All Categories");
  const [max, setMax] = useState();
  const [min, setMin] = useState();

  const data = useLoaderData();
  console.log(data);
  const displayData = data.filter((card) => {
    const matchesSearch = card.skillName
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      categories === "All Categories" || card.category === categories;
    const matchesMinPrice = !min || card.price >= parseFloat(min);
    const matchesMaxPrice = !max || card.price <= parseFloat(max);
    return (
      matchesCategory && matchesSearch && matchesMaxPrice && matchesMinPrice
    );
  });

  return (
    <div>
      {/* all available service section */}
      <div className="bg-base-200 py-8">
        <div className="ml-8">
          <h2 className="text-2xl font-bold">All Available Service </h2>
          <p className="text-xs py-2">
            Discover verified local professionals ready to help with you.
            <br></br> From singing to cooking guitar lessons to hands on coding
            experience{" "}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 px-8">
        {/* search services all categories min -max apply filters section */}
        <div className="py-2">
          {/* service search box */}
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              required
              placeholder="Search Services Here"
            />
          </label>
        </div>
        {/* all categories section */}
        <fieldset className="fieldset">
          <select
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
            className="select"
          >
            <option>All Categories</option>
            <option value="Finance">Finance</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Communication">Communication</option>
            <option value="Games">Games</option>
          </select>
        </fieldset>

        {/* Price Range Section */}
        <div className="flex items-center gap-2">
          {/* Min Input */}
          <input
            value={min}
            onChange={(e) => setMin(e.target.value)}
            type="number"
            placeholder="$ Min"
            className="input input-bordered input-sm w-24 "
          />

          <span className="text-gray-400">—</span>

          {/* Max Input */}
          <input
            value={max}
            onChange={(e) => setMax(e.target.value)}
            type="number"
            placeholder="$ Max"
            className="input input-bordered input-sm w-24 "
          />
        </div>
      </div>
      {/* map here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {displayData.length > 0 ? (
          displayData.map((card) => (
            <ServiceCard key={card._id} card={card}></ServiceCard>
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <h3 className="text-3xl font-bold text-gray-400">
              No Services Found for You! 🔍
            </h3>
            <p className="text-gray-500">
              Try adjusting your filters or search keywords.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
