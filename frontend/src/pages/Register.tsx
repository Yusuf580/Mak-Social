import React from "react";

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

          <div className="flex gap-4 mt-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="material-symbols-outlined text-primary text-xl">
                school
              </span>
              <span className="text-sm font-semibold text-white">
                Academic Resources
              </span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="material-symbols-outlined text-primary text-xl">
                groups
              </span>
              <span className="text-sm font-semibold text-white">
                Student Network
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 h-full overflow-y-auto flex items-center justify-center p-6 bg-background-light dark:bg-background-dark">
        <div className="w-full max-w-[480px] flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">
                  grid_view
                </span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                MakSocial
              </span>
            </div>

            <h2 className="text-3xl font-bold">Create Account</h2>
            <p className="text-slate-500 dark:text-slate-400">
              Sign up to get started with your academic journey.
            </p>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-5">
            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full h-12 rounded-lg border border-slate-300 dark:border-[#3b4754] bg-white dark:bg-[#1c2127] px-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-[#9dabb9]"
                />
                <span className="material-symbols-outlined absolute right-4 top-3 text-slate-400 dark:text-[#9dabb9]">
                  person
                </span>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                University Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="student@makerere.ac.ug"
                  className="w-full h-12 rounded-lg border border-slate-300 dark:border-[#3b4754] bg-white dark:bg-[#1c2127] px-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-[#9dabb9]"
                />
                <span className="material-symbols-outlined absolute right-4 top-3 text-slate-400 dark:text-[#9dabb9]">
                  mail
                </span>
              </div>
            </div>

            {/* College */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                College
              </label>
              <div className="relative">
                <select className="w-full h-12 rounded-lg border border-slate-300 dark:border-[#3b4754] bg-white dark:bg-[#1c2127] px-4 pr-10 focus:ring-2 focus:ring-primary focus:border-primary outline-none appearance-none cursor-pointer">
                  <option value="" disabled selected>
                    Select your college
                  </option>
                  <option value="CEDAT">CEDAT</option>
                  <option value="COCIS">COCIS</option>
                  <option value="CHUSS">CHUSS</option>
                  <option value="COVAB">COVAB</option>
                  <option value="CAES">CAES</option>
                  <option value="CHS">CHS</option>
                  <option value="CONAS">CONAS</option>
                  <option value="CEES">CEES</option>
                  <option value="COBAMS">COBAMS</option>
                  <option value="LAW">School of Law</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 top-3 text-slate-400 pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>

            {/* Year */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Year of Study
              </label>
              <div className="relative">
                <select className="w-full h-12 rounded-lg border border-slate-300 dark:border-[#3b4754] bg-white dark:bg-[#1c2127] px-4 pr-10 focus:ring-2 focus:ring-primary focus:border-primary outline-none appearance-none cursor-pointer">
                  <option value="" disabled selected>
                    Select your year
                  </option>
                  <option value="1">Year 1</option>
                  <option value="2">Year 2</option>
                  <option value="3">Year 3</option>
                  <option value="4">Year 4</option>
                  <option value="5">Year 5</option>
                  <option value="postgrad">Postgraduate</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 top-3 text-slate-400 pointer-events-none">
                  school
                </span>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3 mt-2">
              <input
                type="checkbox"
                className="w-4 h-4 mt-1 rounded border-slate-300 dark:border-[#3b4754] text-primary focus:ring-primary"
              />
              <p className="text-sm text-slate-600 dark:text-slate-400">
                I agree to the{" "}
                <a href="#" className="text-primary font-medium hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-primary font-medium hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            {/* Submit */}
            <button
              type="button"
              className="mt-2 w-full h-12 bg-primary hover:bg-green-600 text-white font-bold rounded-lg shadow-lg shadow-green-900/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              Sign Up
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </button>
          </form>

          {/* Footer */}
          <div className="text-center">
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Already have an account?{" "}
              <a href="#" className="text-primary font-semibold hover:underline">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
