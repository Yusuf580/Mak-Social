import React from "react";
import {
  GraduationCap,
  Users,
  LayoutGrid,
  User,
  Mail,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

const Register: React.FC = () => {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-white antialiased overflow-hidden h-screen w-full flex">
      {/* Left Section */}
      <div
        className="hidden lg:flex lg:w-1/2 relative flex-col justify-end p-12 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC3wlb5_7cbfcbFOT1F6_R9y8zIZqV6sRsJMapnNC_HurqHy_-ceBjFGS9RNjv9u2G51RvPdPqHICWBTG1iaIs6dE53d0_UoPzyst7rDMObS0qeyW0dpOmx-WnL7szML_cIqrwYd_AgflHa3whPLQv1DCRMvpk6_IcON8C5g7VHkokkeoEWspTayG8mEj4_ydHnoyRbGQvO6pqXqtQ5xG5S-bzeJQ-wJOfhYxRE-nyGYqo2C2Mb5YQg6-zZZdo60A5wpWJMxjTB9hW8")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        <div className="relative z-10 flex flex-col gap-4 max-w-lg">
          <h1 className="text-white text-5xl font-black leading-tight tracking-tight">
            Join the Community
          </h1>

          <p className="text-gray-200 text-lg font-medium leading-relaxed">
            Connect with peers, access premium academic resources, and stay updated
            with Makerere University events.
          </p>

          <div className="flex gap-3 mt-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <GraduationCap className="text-primary w-4 h-4" />
              <span className="text-sm font-semibold text-white">
                Academic Resources
              </span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <Users className="text-primary w-4 h-4" />
              <span className="text-sm font-semibold text-white">
                Student Network
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 h-full overflow-y-auto flex items-center justify-center p-4">
        <div className="w-full max-w-[420px] flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-9 h-9 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                <LayoutGrid className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                MakSocial
              </span>
            </div>

            <h2 className="text-2xl font-bold">Create Account</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Sign up to get started with your academic journey.
            </p>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-4">
            {/* Full Name */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full h-10 rounded-md border border-slate-300 dark:border-[#3b4754] bg-white dark:bg-[#1c2127] px-3 pr-10 text-sm focus:ring-2 focus:ring-primary outline-none"
                />
                <User className="absolute right-3 top-2.5 w-4 h-4 text-slate-400" />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">University Email</label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="student@makerere.ac.ug"
                  className="w-full h-10 rounded-md border border-slate-300 dark:border-[#3b4754] bg-white dark:bg-[#1c2127] px-3 pr-10 text-sm focus:ring-2 focus:ring-primary outline-none"
                />
                <Mail className="absolute right-3 top-2.5 w-4 h-4 text-slate-400" />
              </div>
            </div>

            {/* College */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">College</label>
              <div className="relative">
                <select className="w-full h-10 rounded-md border border-slate-300 dark:border-[#3b4754] bg-white dark:bg-[#1c2127] px-3 pr-10 text-sm appearance-none focus:ring-2 focus:ring-primary outline-none">
                  <option disabled selected>
                    Select your college
                  </option>
                  <option>CEDAT</option>
                  <option>COCIS</option>
                  <option>CHUSS</option>
                  <option>COVAB</option>
                  <option>CAES</option>
                  <option>CHS</option>
                  <option>CONAS</option>
                  <option>CEES</option>
                  <option>COBAMS</option>
                  <option>School of Law</option>
                </select>
                <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Year */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Year of Study</label>
              <div className="relative">
                <select className="w-full h-10 rounded-md border border-slate-300 dark:border-[#3b4754] bg-white dark:bg-[#1c2127] px-3 pr-10 text-sm appearance-none focus:ring-2 focus:ring-primary outline-none">
                  <option disabled selected>
                    Select your year
                  </option>
                  <option>Year 1</option>
                  <option>Year 2</option>
                  <option>Year 3</option>
                  <option>Year 4</option>
                  <option>Year 5</option>
                  <option>Postgraduate</option>
                </select>
                <GraduationCap className="absolute right-3 top-2.5 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
              <input type="checkbox" className="mt-0.5" />
              I agree to the{" "}
              <a className="text-primary font-medium hover:underline">
                Terms
              </a>{" "}
              and{" "}
              <a className="text-primary font-medium hover:underline">
                Privacy Policy
              </a>
            </label>

            {/* Submit */}
            <button className="w-full h-10 bg-primary hover:bg-green-600 text-white text-sm font-semibold rounded-md flex items-center justify-center gap-2">
              Sign Up
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-xs text-slate-500">
            Already have an account?{" "}
            <a className="text-primary font-semibold hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
