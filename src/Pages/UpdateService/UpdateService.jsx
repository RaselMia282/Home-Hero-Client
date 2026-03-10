import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateService = () => {
  const service = useLoaderData(); 
  const navigate = useNavigate();
  const { _id, skillName, image, category, price, description } = service;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedData = {
      skillName: form.skillName.value,
      image: form.image.value,
      category: form.category.value,
      price: parseFloat(form.price.value),
      description: form.description.value,
    };

    fetch(`http://localhost:3000/services/${_id}`, {
      method: "PATCH", 
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Success!", "Service updated successfully", "success");
          navigate("/my-services"); 
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-8 bg-white rounded-3xl shadow-xl">
      <h2 className="text-3xl font-black text-center mb-6">Update Service</h2>
      <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-control">
          <label className="label font-bold">Service Name</label>
          <input type="text" name="skillName" defaultValue={skillName} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label font-bold">Image URL</label>
          <input type="text" name="image" defaultValue={image} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label font-bold">Category</label>
          <select name="category" defaultValue={category} className="select select-bordered">
            <option>Web Development</option>
            <option>Graphic Design</option>
            <option>Music</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label font-bold">Price ($)</label>
          <input type="number" name="price" defaultValue={price} className="input input-bordered" required />
        </div>
        <div className="form-control md:col-span-2">
          <label className="label font-bold">Description</label>
          <textarea name="description" defaultValue={description} className="textarea textarea-bordered h-24" required></textarea>
        </div>
        <button className="btn btn-primary md:col-span-2 rounded-xl">Save Changes</button>
      </form>
    </div>
  );
};

export default UpdateService;
