import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="container mx-auto py-12 flex items-center justify-center">
      <div className="w-full max-w-md bg-base-100 p-8 shadow-lg border-b-4 border-cyan-500 rounded-lg">
        <div className="space-y-3">
          <h1 className="text-center font-bold">Get Started Today</h1>
          <p className="text-center">
            Join thousands of neighbors finding local help
          </p>
          <button className="btn bg-white text-black w-full border-[#e5e5e5]">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
          <div className="divider">OR REGISTER WITH EMAIL</div>
        </div>
        <div className="">
          <div>
            <h2 className="py-2 font-semibold">Full Name</h2>
            <input
              className="input w-full input-bordered focus:hover:border-cyan-500"
              type="text"
              name=""
              id=""
              placeholder="Your Name"
            />
          </div>
          <div>
            <h2 className="py-2 font-semibold">Your Email</h2>
            <input
              className="input input-bordered w-full focus:hover:border-cyan-500"
              type="text"
              name=""
              id=""
              placeholder="Your Email"
            />
          </div>
          <div>
            <h2 className="py-2 font-semibold">Profile Photo URL</h2>
            <input
              className="input input-bordered w-full focus:hover:border-cyan-500"
              type="text"
              name=""
              id=""
              placeholder="Your Photo"
            />
            <p className="py-0.5 text-gray-500">
              Optional:URL to your avatar image
            </p>
          </div>
          <div>
            <div className="flex gap-66 items-center">
              <h2 className="py-0.5 font-semibold">Password</h2>
              <button className="text-cyan-600 cursor-pointer">Show</button>
            </div>
            <input
              className="input w-full focus:hover:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 input-bordered"
              type="password"
              name=""
              id=""
              placeholder="Your Password"
            />
          </div>
          <div className="flex items-center gap-2 py-1">
            <input type="checkbox" className="checkbox" />
            <p className="text-sm text-gray-700">
              I agree to HomeHero's{" "}
              <span className="text-cyan-600">Terms of Service</span> and{" "}
              <span className="text-cyan-600">Privacy Policy</span>
            </p>
          </div>
          <div className="w-full bg-cyan-600 px-4 py-3 rounded-2xl text-center">
            <button
              type="button"
              className="text-white font-semibold cursor-pointer"
            >
              Create Account
            </button>
          </div>
          {/* last section */}
          <div className="bg-base-100 py-6">
            <p className="text-center">
              Already have an account ?
              <Link className="text-cyan-600 font-bold" to="/login">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
