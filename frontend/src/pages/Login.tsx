

import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  LogIn,
  Sun,
  GraduationCap,
} from "lucide-react";

const SignIn = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="h-screen w-full flex bg-[#FFFFFF] dark:bg-[#111827] text-gray-900 dark:text-gray-100 overflow-hidden">

        {/* LEFT IMAGE SECTION */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-black">
          <img
            src="/cocis.jpg"
            alt="Makerere University"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />
          <div className="absolute inset-0 bg-[#2ECC71]/20 mix-blend-overlay" />

          <div className="relative z-10 flex flex-col justify-between w-full p-12 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <GraduationCap className="text-[#2ECC71] w-10 h-10" />
                <span className="text-2xl font-bold">MakSocial</span>
              </div>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 backdrop-blur-md text-sm"
              >
                <Sun size={16} />
                Mode
              </button>
            </div>

            <div className="mb-12">
              <p className="text-lg text-gray-200 mb-2">
                Connect with Verified Peers.
              </p>
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                Welcome <br />
                <span className="">Home.</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-md">
                The central hub for communication, academic resources,
                and campus updates.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
          <div className="w-full max-w-[400px]">

            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center justify-center gap-2 mb-6">
              <GraduationCap className="text-[#2ECC71] w-10 h-10" />
              <span className="text-2xl font-bold">MakSocial</span>
            </div>

            <div className="text-center lg:text-left mb-6">
              <h2 className="text-3xl font-bold">Welcome Back!</h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Sign in to continue to MakSocial.
              </p>
            </div>

            <form className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  University Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    defaultValue="student@makerere.ac.ug"
                    className="w-full pl-10 py-2.5 rounded-lg bg-yellow-50 dark:bg-gray-800 focus:ring-2 focus:ring-[#2ECC71] outline-none"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex justify-between mb-1.5">
                  <label className="text-sm font-medium">Password</label>
                  <a
                    href="#"
                    className="text-sm text-[#2ECC71] hover:text-[#2ECC71]/80"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    defaultValue="password123"
                    className="w-full pl-10 pr-10 py-2.5 rounded-lg bg-yellow-50 dark:bg-gray-800 focus:ring-2 focus:ring-[#2ECC71] outline-none"
                  />
                  <Eye className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="relative w-full flex justify-center py-2.5 rounded-lg bg-[#2ECC71] hover:bg-[#2ECC71]/80 text-white font-semibold shadow-lg shadow-[#2ECC71]/30"
              >
                <LogIn className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-80" />
                Sign In
              </button>
            </form>

            <p className="text-center mt-6 text-sm text-gray-600 dark:text-gray-400">
              Don&apos;t have an account?{" "}
              <a
                href="#"
                className="font-semibold text-[#2ECC71] hover:text-[#2ECC71]/80"
              >
                Create an account
              </a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SignIn;
