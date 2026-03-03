import { Link, useNavigate } from "react-router";

import { User, Mail, Image, Lock, Eye, ArrowRight,EyeOff } from "lucide-react";
import { AuthContext } from "../../Context/AuthContext";
import { use, useState } from "react";


const Register = () => {
  const { createUser, updateUserProfile, googleSignIn } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const password = e.target.password.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const terms = e.target.terms.checked;
    console.log(name, password, email, photo, terms);

    // password regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    if (!passwordRegex.test(password)) {
      alert("Must have at least one uppercase and one lowercase letter");
      return;
    }

    // terms check
    if (!terms) {
      alert("Please accept our terms and conditions");
      return;
    }

    // call the createUser from authprovider

    createUser(email, password)
      .then((result) => {
        console.log("result", result);

        // update profile for user
        updateUserProfile(name, photo)
          .then((result) => {
            console.log(result);
            navigate("/");
            e.target.reset();
          })
          .catch((err) => {
            console.log(err.message);
          });
        console.log(result);
      })
      .catch((err) => {
        console.log(err.massage);
      });
  };

  // google login
  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="container mx-auto py-12 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 shadow-xl border-b-4 border-cyan-500 rounded-2xl">
        <div className="space-y-4 mb-8">
          <h1 className="text-center text-3xl font-bold text-gray-800">
            Get Started Today
          </h1>
          <p className="text-center text-gray-500">
            Join thousands of neighbors finding local help
          </p>

          {/* Google Login Button */}
          <button
            onClick={handleGoogle}
            className="flex items-center justify-center gap-3 bg-white text-gray-700 w-full border border-gray-200 py-3 rounded-xl hover:bg-gray-50 transition-all font-semibold shadow-sm"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/action/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Sign up with Google
          </button>

          <div className="divider text-gray-400 text-xs font-bold uppercase tracking-widest">
            OR REGISTER WITH EMAIL
          </div>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">
              Full Name
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <User size={18} />
              </span>
              <input
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all"
                type="text"
                name="name"
                placeholder="Your Name"
              />
            </div>
          </div>

          {/* Your Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">
              Your Email
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <Mail size={18} />
              </span>
              <input
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all"
                type="email"
                name="email"
                placeholder="name@example.com"
              />
            </div>
          </div>

          {/* Profile Photo URL */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">
              Profile Photo URL
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <Image size={18} />
              </span>
              <input
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all"
                type="text"
                name="photo"
                placeholder="https://example.com/photo.jpg"
              />
            </div>
            <p className="mt-1 text-xs text-gray-400 ml-1 italic">
              Optional: URL to your avatar image
            </p>
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between items-center mb-1.5 ml-1">
              <label className="text-sm font-semibold text-gray-700">
                Password
              </label>
              <button
              onClick={handleTogglePassword}
                type="button"
                className="text-xs font-bold text-cyan-600 hover:text-cyan-700"
              >
                Show
              </button>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <Lock size={18} />
              </span>
              <input
                className="w-full pl-10 pr-10 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all"
                type={showPassword?"text":"password"}
                name="password"
                placeholder="••••••••"
              />
              <span onClick={handleTogglePassword} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer">
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-start gap-3 py-2">
            <input
              name="terms"
              type="checkbox"
              className="checkbox checkbox-cyan checkbox-sm mt-0.5"
            />
            <p className="text-xs text-gray-600 leading-tight">
              I agree to HomeHero's{" "}
              <span className="text-cyan-600 font-bold cursor-pointer">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-cyan-600 font-bold cursor-pointer">
                Privacy Policy
              </span>
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20 group"
          >
            Create Account
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-8 pt-6 border-t border-gray-50">
          <p className="text-center text-gray-600 text-sm">
            Already have an account?{" "}
            <Link
              className="text-cyan-600 font-extrabold hover:underline"
              to="/login"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
