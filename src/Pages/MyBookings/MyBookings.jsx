import React, { useEffect, useState, use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";

const MyBookings = () => {
  const { user } = use(AuthContext);
  const [bookings, setBookings] = useState([]);

  
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/bookings?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setBookings(data));
    }
  }, [user]);

  
  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        
        fetch(`http://localhost:3000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your booking has been deleted.",
                icon: "success",
                timer: 1500,
                showConfirmButton: false
              });

             
              const remaining = bookings.filter((booking) => booking._id !== id);
              setBookings(remaining);
            }
          })
          .catch((err) => {
            Swal.fire("Error!", "Something went wrong.", "error");
            console.error(err);
          });
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      {/* Header Section */}
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-4xl font-black text-gray-900 tracking-tight">My Booked Services</h2>
        <p className="text-gray-500 mt-2 text-lg font-medium">
          Manage all your scheduled sessions in one place.
        </p>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-blue-50/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="bg-gray-50/80">
              <tr className="text-gray-600 border-b border-gray-100">
                <th className="p-6 text-left font-black uppercase text-xs tracking-widest">Service Info</th>
                <th className="p-6 text-left font-black uppercase text-xs tracking-widest">Provider</th>
                <th className="p-6 text-left font-black uppercase text-xs tracking-widest">Date</th>
                <th className="p-6 text-left font-black uppercase text-xs tracking-widest">Price</th>
                <th className="p-6 text-left font-black uppercase text-xs tracking-widest">Status</th>
                <th className="p-6 text-center font-black uppercase text-xs tracking-widest">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-50">
              {bookings.map((booking) => (
                <tr key={booking._id} className="hover:bg-blue-50/30 transition-all duration-300">
                  <td className="p-6">
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-md">
                        <img src={booking.image} className="w-full h-full object-cover" alt={booking.skillName} />
                      </div>
                      <span className="font-extrabold text-gray-800 text-lg">{booking.skillName}</span>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="font-bold text-gray-700">{booking.providerName}</div>
                    <div className="text-xs text-gray-400">{booking.providerEmail}</div>
                  </td>
                  <td className="p-6 text-gray-500 font-medium">{booking.bookingDate}</td>
                  <td className="p-6 font-black text-blue-600 text-xl">${booking.price}</td>
                  <td className="p-6">
                    <span className="px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-tighter bg-orange-100 text-orange-600 border border-orange-200">
                      {booking.status}
                    </span>
                  </td>
                  <td className="p-6 text-center">
                    <button
                      onClick={() => handleCancel(booking._id)}
                      className="px-6 py-2 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white rounded-xl font-black text-xs transition-all duration-300 active:scale-95"
                    >
                      CANCEL
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Empty State */}
          {bookings.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24 space-y-4">
              <div className="text-6xl text-gray-200">📭</div>
              <h3 className="text-2xl font-black text-gray-400">No Bookings Yet!</h3>
              <p className="text-gray-400 font-medium">Start exploring our premium services today.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
