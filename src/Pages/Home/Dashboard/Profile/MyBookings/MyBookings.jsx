import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../../../Context/AuthContext";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/bookings?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setBookings(data));
    }
  }, [user]);

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-gray-800">My Bookings</h2>
        <p className="text-gray-500">Manage and track your upcoming services</p>
      </div>

      <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="table w-full border-collapse">
            {/* Table Header */}
            <thead className="bg-gray-50/50">
              <tr className="text-gray-600 border-b border-gray-100">
                <th className="p-5 text-left font-bold uppercase text-xs tracking-wider">Service</th>
                <th className="p-5 text-left font-bold uppercase text-xs tracking-wider">Provider</th>
                <th className="p-5 text-left font-bold uppercase text-xs tracking-wider">Date</th>
                <th className="p-5 text-left font-bold uppercase text-xs tracking-wider">Price</th>
                <th className="p-5 text-left font-bold uppercase text-xs tracking-wider">Status</th>
                <th className="p-5 text-center font-bold uppercase text-xs tracking-wider">Action</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-50">
              {bookings.map((booking) => (
                <tr key={booking._id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-5">
                    <div className="flex items-center gap-4">
                      <img 
                        src={booking.image} 
                        className="w-14 h-14 rounded-2xl object-cover shadow-sm" 
                        alt="" 
                      />
                      <span className="font-bold text-gray-800">{booking.skillName}</span>
                    </div>
                  </td>
                  <td className="p-5 text-gray-600 font-medium">{booking.providerName}</td>
                  <td className="p-5 text-gray-500 text-sm">{booking.bookingDate}</td>
                  <td className="p-5 font-black text-blue-600">${booking.price}</td>
                  <td className="p-5">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-tight
                      ${booking.status === "Pending" ? "bg-orange-100 text-orange-600" : "bg-green-100 text-green-600"}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="p-5 text-center">
                    <button className="btn btn-ghost btn-sm text-red-500 hover:bg-red-50 rounded-xl">
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* Empty State */}
          {bookings.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 font-medium text-lg">No bookings found yet. Time to learn something new!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBookings;