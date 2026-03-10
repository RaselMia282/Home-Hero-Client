import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";

const AddService = () => {
  const { user } = use(AuthContext); 
  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;

    const skillName = form.skillName.value;
    const image = form.image.value;
    const category = form.category.value;
    const price = form.price.value;
    const description = form.description.value;
    const providerName = user?.displayName;
    const providerEmail = user?.email; 

    const newService = {
      skillName,
      image,
      category,
      price: parseFloat(price),
      description,
      providerName,
      providerEmail,
      status: "active"
    };

    
    fetch("http://localhost:3000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Service Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-8 bg-white rounded-3xl shadow-2xl">
      <h2 className="text-3xl font-black text-center mb-6">Add New Service</h2>
      <form onSubmit={handleAddService} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Service Name */}
        <div className="form-control">
          <label className="label font-bold">Service Name</label>
          <input type="text" name="skillName" placeholder="e.g. Web Development" className="input input-bordered rounded-xl" required />
        </div>
        {/* Image URL */}
        <div className="form-control">
          <label className="label font-bold">Image URL</label>
          <input type="text" name="image" placeholder="Photo URL" className="input input-bordered rounded-xl" required />
        </div>
        {/* Category */}
        <div className="form-control">
          <label className="label font-bold">Category</label>
          <select name="category" className="select select-bordered rounded-xl">
            <option>Web Development</option>
            <option>Graphic Design</option>
            <option>Music</option>
            <option>Cleaning</option>
          </select>
        </div>
        {/* Price */}
        <div className="form-control">
          <label className="label font-bold">Price ($)</label>
          <input type="number" name="price" placeholder="Price per hour" className="input input-bordered rounded-xl" required />
        </div>
        {/* Provider Name (Read-only) */}
        <div className="form-control">
          <label className="label font-bold text-gray-400">Your Name</label>
          <input type="text" value={user?.displayName} readOnly className="input input-bordered bg-gray-50 rounded-xl" />
        </div>
        {/* Provider Email (Read-only) */}
        <div className="form-control">
          <label className="label font-bold text-gray-400">Your Email</label>
          <input type="email" value={user?.email} readOnly className="input input-bordered bg-gray-50 rounded-xl" />
        </div>
        {/* Description */}
        <div className="form-control md:col-span-2">
          <label className="label font-bold">Description</label>
          <textarea name="description" className="textarea textarea-bordered h-24 rounded-xl" placeholder="Describe your skill..." required></textarea>
        </div>
        {/* Submit Button */}
        <div className="form-control md:col-span-2 mt-4">
          <button className="btn btn-primary w-full rounded-xl font-black uppercase tracking-widest shadow-lg shadow-blue-200">
            List My Service
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
