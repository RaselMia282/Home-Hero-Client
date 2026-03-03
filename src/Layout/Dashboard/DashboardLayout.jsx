import React from 'react';
import { NavLink, Outlet } from 'react-router'; 
import { FaUser, FaPlusCircle, FaList, FaBook, FaHome } from 'react-icons/fa';

const DashboardLayout = () => {
    return (
        <div className="flex min-h-screen">
            {/* ১. বাম পাশের সাইডবার (Sidebar) */}
            <div className="w-64 text-white p-6 flex flex-col">
                <div className="mb-10 text-center">
                    <h2 className="text-2xl font-bold text-black">Home<span className="text-cyan-500">Hero</span></h2>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400">User Dashboard</p>
                </div>

                <nav className="flex-1 space-y-2">
                    {/* NavLink ব্যবহার করলে active ক্লাস দিয়ে মেনু হাইলাইট করা যায় */}
                    <NavLink to="/dashboard/profile" className={({isActive}) => `flex items-center gap-3 p-3 rounded-lg transition ${isActive ? 'bg-cyan-600 text-white' : 'hover:bg-slate-800 text-gray-400'}`}>
                        <FaUser /> Profile
                    </NavLink>

                    <NavLink to="/dashboard/ad-service" className={({isActive}) => `flex items-center gap-3 p-3 rounded-lg transition ${isActive ? 'bg-cyan-600 text-white' : 'hover:bg-slate-800 text-gray-400'}`}>
                        <FaPlusCircle /> Add Service
                    </NavLink>

                    <NavLink to="/dashboard/my-services" className={({isActive}) => `flex items-center gap-3 p-3 rounded-lg transition ${isActive ? 'bg-cyan-600 text-white' : 'hover:bg-slate-800 text-gray-400'}`}>
                        <FaList /> My Services
                    </NavLink>

                    <NavLink to="/dashboard/my-bookings" className={({isActive}) => `flex items-center gap-3 p-3 rounded-lg transition ${isActive ? 'bg-cyan-600 text-white' : 'hover:bg-slate-800 text-gray-400'}`}>
                        <FaBook /> My Bookings
                    </NavLink>
                </nav>

                
                <div className="mt-auto pt-5 border-t border-slate-700">
                    <NavLink to="/" className="flex items-center gap-3 p-3 text-gray-400 hover:text-cyan-400 transition">
                        <FaHome /> Back to Home
                    </NavLink>
                </div>
            </div>

            
            <div className="flex-1 bg-gray-50 overflow-y-auto h-screen">
                <header className="bg-cyan-50 py-4 px-10 shadow-sm flex justify-between items-center">
                    <h3 className="font-semibold text-slate-700 uppercase tracking-wider text-sm">Dashboard Overview</h3>
                    {/* এখানে চাইলে ইউজারের নাম বা ছোট ছবি দেখাতে পারো */}
                </header>

                <main className="p-10">
                    {/* এখানেই তোমার ড্যাশবোর্ডের ভেতরের সব পেজ শো করবে */}
                    <Outlet /> 
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
