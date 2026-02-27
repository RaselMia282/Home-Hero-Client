import React from 'react';
import { Link } from 'react-router';

import { Mail, Lock, Eye, ArrowRight } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      {/* Main Card */}
      <div className="w-full max-w-[450px] bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
          <p className="text-gray-500">Enter your details to access your account</p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <Mail size={18} />
              </span>
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <div className="flex justify-between mb-1.5 ml-1">
              <label className="text-sm font-semibold text-gray-700">Password</label>
              <button type="button" className="text-sm font-medium text-cyan-600 hover:underline">
                Forgot password?
              </button>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <Lock size={18} />
              </span>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all"
              />
              <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600">
                <Eye size={18} />
              </button>
            </div>
          </div>

          {/* Log In Button */}
          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/20 group"
          >
            Log In 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-8 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <span className="relative px-4 bg-white text-sm text-gray-400 uppercase tracking-wider">
            Or continue with
          </span>
        </div>

        {/* Google Login */}
        <button className="w-full border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold py-3 rounded-xl flex items-center justify-center gap-3 transition-all">
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/action/google.svg" alt="Google" className="w-5 h-5" />
          Google
        </button>

        {/* Switch to Register */}
      <p className="mt-6 text-gray-600">
        Don't have an account yet?{' '}
        <Link to="/register" className="text-cyan-600 font-bold hover:underline">
          Join HomeHero today
        </Link>
      </p>

        {/* Footer Policy */}
        <p className="mt-8 text-xs text-gray-500 leading-relaxed text-left border-t pt-6 border-gray-50">
          By logging in, you agree to our <span className="text-cyan-600 cursor-pointer">Terms of Service</span> and <span className="text-cyan-600 cursor-pointer">Privacy Policy</span>.
        </p>
      </div>

      
    </div>
  );
};

export default Login;
