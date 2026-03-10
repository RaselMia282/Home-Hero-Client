import React, { useEffect, useState, use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyServices = () => {
  const { user } = use(AuthContext);
  const [myServices, setMyServices] = useState([]);

 
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/services?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyServices(data));
    }
  }, [user]);

  
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will remove your service permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/services/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Service removed.", "success");
              const remaining = myServices.filter((s) => s._id !== id);
              setMyServices(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Top Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-black text-gray-900">My Listed Services</h2>
          <p className="text-gray-500">Manage your service offerings, pricing, and visibility.</p>
        </div>
        <Link to="/add-service" className="btn btn-primary px-8 rounded-xl shadow-lg shadow-blue-200">
          + Add New Service
        </Link>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="bg-gray-50">
              <tr className="text-gray-500 font-bold uppercase text-xs">
                <th className="p-6">Image</th>
                <th className="p-6">Service Details</th>
                <th className="p-6">Category</th>
                <th className="p-6">Base Price</th>
                <th className="p-6">Status</th>
                <th className="p-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {myServices.map((service) => (
                <tr key={service._id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-6">
                    <img src={service.image} className="w-16 h-12 rounded-lg object-cover shadow-sm" alt="" />
                  </td>
                  <td className="p-6">
                    <div className="font-bold text-gray-800">{service.skillName}</div>
                    <div className="text-xs text-gray-400">ID: #{service._id.slice(-4)}</div>
                  </td>
                  <td className="p-6">
                    <span className="badge badge-outline text-gray-500 px-4 py-3">{service.category}</span>
                  </td>
                  <td className="p-6 font-bold text-gray-900">${service.price} <span className="text-[10px] text-gray-400">per hr</span></td>
                  <td className="p-6">
                    <span className="badge badge-success bg-green-100 text-green-600 border-none font-bold px-3">active</span>
                  </td>
                  <td className="p-6">
                    <div className="flex justify-center gap-2">
                      <Link to={`/update-service/${service._id}`} className="btn btn-sm btn-ghost border border-gray-200 rounded-lg hover:bg-blue-50">
                         ✏️ Edit
                      </Link>
                      <button onClick={() => handleDelete(service._id)} className="btn btn-sm btn-ghost border border-gray-200 rounded-lg hover:bg-red-50 text-red-500">
                         🗑️ Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
