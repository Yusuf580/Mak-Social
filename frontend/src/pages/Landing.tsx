import React from 'react';
import {
  School,
  Menu,
  PlayCircle,
  MessageSquare,
  BookOpen,
  Network,
  CheckCircle,
  Star,
  StarHalf,
  Computer,
  Gavel,
  Wrench,
  Brain,
  Microscope,
  Building2,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

const MakSocial: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 font-body antialiased transition-colors duration-300">
      {/* Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 bg-[#2ECC71] rounded-xl flex items-center justify-center text-white">
                <School className="w-6 h-6" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-gray-900 dark:text-white">
                MakSocial
              </span>
            </div>

            <div className="hidden md:flex space-x-8 items-center">
              <a className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors" href="#">
                Home
              </a>
              <a className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors" href="#features">
                Features
              </a>
              <a className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors" href="#vault">
                Academic Vault
              </a>
              <a className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors" href="#colleges">
                Colleges
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <a className="text-gray-700 dark:text-gray-200 font-bold hover:text-primary transition-colors" href="#">
                Log In
              </a>
              <a className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 px-6 py-2.5 rounded-xl font-bold hover:border-primary dark:hover:border-primary transition-all shadow-sm" href="#">
                Sign Up Now
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button className="text-gray-600 dark:text-gray-300 focus:outline-none">
                <Menu className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-[20px] lg:pb-32 overflow-hidden">
        <div className="bg-primary/10 w-96 h-96 rounded-full hero-blob -top-20 -left-20 dark:bg-primary/5" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="max-w-2xl">
              <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-tight text-gray-900 dark:text-white mb-6">
                Join the <br />
                <span className="text-underline-anim">Makerere</span> Community
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-lg">
                The ultimate hub for Makerere University students and staff. Access notes, network with peers, and stay updated with campus life instantly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a className="bg-[#2ECC71] hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold text-lg shadow-glow transition-all transform hover:-translate-y-1 text-center" href="#">
                  Join Now
                </a>
                <a className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all" href="#">
                  <PlayCircle className="w-6 h-6 text-[#2ECC71]" />
                  See how it works
                </a>
              </div>
            </div>

            <div className="relative lg:ml-auto w-full max-w-lg lg:max-w-full">
              <div className="absolute right-0 top-10 w-3/4 h-3/4 bg-green-100 dark:bg-green-900/20 rounded-full blur-3xl -z-10" />
              
              <div className="absolute -bottom-6 -left-6 w-24 h-24 text-gray-200 dark:text-gray-700">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.7C91.4,-34.3,98.1,-19.6,95.8,-5.8C93.5,8,82.3,20.9,71.4,32.2C60.5,43.5,49.9,53.2,38.1,60.8C26.3,68.4,13.2,73.9,0.5,73.1C-12.2,72.2,-24.4,65,-35.1,56.7C-45.8,48.4,-55.1,39,-62.7,28.2C-70.3,17.4,-76.2,5.2,-74.6,-6.2C-73,-17.6,-63.9,-28.2,-54.1,-37.2C-44.3,-46.2,-33.8,-53.6,-22.7,-62.3C-11.6,-71,-0,-81,13.8,-83.4C27.6,-85.8,44.7,-76.4,44.7,-76.4Z" fill="currentColor" transform="translate(100 100)" />
                </svg>
              </div>

              <div className="relative z-10">
                <img
                  alt="Students Collaborating"
                  className="rounded-3xl shadow-2xl object-cover h-[400px] w-full lg:h-[500px]"
                  src="/hero.jpg"
                />
                
                <div className="absolute -top-6 -right-4 bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-card max-w-[240px] border border-gray-100 dark:border-gray-700 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="flex items-start gap-3">
                    <div className="bg-[#2ECC71]/10 p-2 rounded-lg text-[#2ECC71]">
                      <School className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Academic Vault</p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">Past Paper: COC 3201 Found.</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-8 -left-8 bg-[#1A2533] p-5 rounded-2xl shadow-card max-w-[280px]">
                  <p className="text-white font-medium text-sm mb-3">
                    "Does anyone have the notes for yesterday's Psychology lecture?"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-green-400" />
                    <span className="text-gray-300 text-xs">Sarah K. just posted in CoC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-surface-light dark:bg-surface-dark border-y border-gray-200 dark:border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x dark:divide-gray-700 divide-gray-200">
            <div className="p-4">
              <p className="text-4xl font-display font-extrabold text-gray-900 dark:text-white mb-1">15k+</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">Total Users</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-display font-extrabold text-gray-900 dark:text-white mb-1">8.2k</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">Active Students</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-display font-extrabold text-gray-900 dark:text-white mb-1">120+</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">Student Groups</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-display font-extrabold text-gray-900 dark:text-white mb-1">50k</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">Monthly Visits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background-light dark:bg-background-dark" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#2ECC71] font-bold tracking-wider uppercase text-sm">Why MakSocial?</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mt-2 mb-4">
              Empowering the Student Journey
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Everything you need to succeed at Makerere, all in one place. Connect, learn, and grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F9FAFB] dark:[#1F2937] p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-card transition-shadow group">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2ECC71] group-hover:text-white transition-colors text-[#2ECC71]">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-3">
                Seamless Communication
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Instant messaging for students and lecturers. Create study groups, share updates, and stay connected with your college peers effortlessly.
              </p>
            </div>

            <div className="bg-[#F9FAFB] dark:[#1F2937] p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-card transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#2ECC71]/5 rounded-bl-full" />
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2ECC71] group-hover:text-white transition-colors text-[#2ECC71]">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-3">
                Academic Vault
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                A centralized repository for lecture notes, past papers, and research materials contributed by top students and faculty.
              </p>
            </div>

            <div className="bg-[#F9FAFB] dark:[#1F2937] p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-card transition-shadow group">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2ECC71] group-hover:text-white transition-colors text-[#2ECC71]">
                <Network className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-3">
                Networking
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Build professional connections before you graduate. Link up with alumni, find mentors, and discover internship opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Section */}
      <section className="py-20 bg-surface-light dark:bg-surface-dark relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-[#2ECC71]/5 rounded-tr-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#1A2533] rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-gray-800 to-transparent opacity-50" />
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2ECC71]/20 text-[#2ECC71] text-sm font-bold mb-6">
                  <ShieldCheck className="w-4 h-4" />
                  Verified & Trusted
                </div>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-6">
                  Official Channels & Verified Staff
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Distinguish official university communications from general chatter. Verified badges for lecturers, Guild officials, and administration ensure you get authentic information.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle className="w-5 h-5 text-[#2ECC71]" />
                    Direct updates from Dean's offices
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle className="w-5 h-5 text-[#2ECC71]" />
                    Verified Guild announcements
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle className="w-5 h-5 text-[#2ECC71]" />
                    Authenticated course coordinators
                  </li>
                </ul>
                <button className="bg-white text-[#1A2533] px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                  Apply for Verification
                </button>
              </div>

              <div className="relative">
                <img
                  alt="Lecturer using tablet"
                  className="rounded-2xl shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-gray-700"
                  src="/lec.jpg"
                />
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                    <img
                      alt="Avatar"
                      src="/vc.jpeg"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1">
                      Prof. Barnabas Nawangwe
                      <ShieldCheck className="w-4 h-4 text-blue-500" />
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Vice Chancellor of Makerere University</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white">
              Voices from the Hill
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              Hear what students and alumni have to say.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              rating={5}
              quote="Finding past papers used to be a nightmare. MakSocial's vault changed everything. I aced my finals thanks to the shared resources."
              name="Brenda N."
              role="Law Student, Year 3"
              avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuBrzDA7V14MEI2RDarjNzIFXZnIcDYb53v0fwPFYDIf4GmXvFwZ_FsrzZhSfHZpiDSNOudbdtmHOHgGEMIUrH_A63B7f9uR1dBVmdcCdPk8c3I9nShM5m0LU1PHUA7NnN30020fobq58ma4SzmCpDoopY4iP5lgle_QQg1xkNApmBz0myDUWYTlHtMiuJAmP5SRABKC3dN9buZBRlvXen-VNwAz2GETa_zMJ8siPhmxP-4ldkp6k3V-yF0tWhFOMHbz5wAQugSzWlPy"
            />

            <TestimonialCard
              rating={5}
              quote="The networking feature is underrated. I connected with a senior who guided me through my internship application at a top firm."
              name="David M."
              role="Engineering Alumni"
              avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuDtMLlxQ6sxypTTjilu7sYiKndTmGjvrZ-CyAzPRf6-_LhDGHQklcrrwByI0kewy7IhBG2_jyglK1gat8cvnOKFEnm51RYTRWmUnV34lQl3p8cTjIlym7wvDZx9-n1DXbnoZLZc7wLetjBIc9ipKJSLCWk5xZBnaakp6HDb7oNTvo_VJ1DMbbeWsEChBbKh8xrKfDGzWBjAWsYMUUd00tFHNylLWZyU8E1XtutvDjzqtk7y9FFfdO0oXc3YZyDZZVF5B-iBP1YDfwpH"
              featured
            />

            <TestimonialCard
              rating={4.5}
              quote="Finally, a place where official guild updates are separated from rumors. It makes campus life much less confusing."
              name="Patricia A."
              role="Social Sciences"
              avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuDRu-JNeuBboV9UYoHQSOy2uEy_ulNfCCNCzOtLSPX8GW_MbzbQXr8-dhN6SglXV2p0Pp621hf4oCg-gzKpa_FRMb02NWgg9emrRvBW2-HPasOR3I-nJq1tjXZlHQsmQXnO6HrQ8VmDf4PXDsjNHfzeaqfcfIhAx9qfNHnUIsti0LVnTqs0cL4tFa4S4Xm5CeJibOywlxNdsbzFBmHxDEHzRJoBTVSvd5u2duKga0NcocmydCqJMjBBGMEzaec5Jj4vH44dN_Zctxan"
            />
          </div>
        </div>
      </section>

      {/* Colleges Section */}
      <section className="py-20 bg-surface-light dark:bg-surface-dark" id="colleges">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="font-display font-bold text-3xl text-gray-900 dark:text-white">
                Explore Colleges
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Find your niche within the university.
              </p>
            </div>
            <a className="text-primary font-bold hover:underline mt-4 md:mt-0 flex items-center gap-1" href="#">
              View all colleges
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <CollegeCard name="COCIS" icon={Computer} color="blue" />
            <CollegeCard name="Law" icon={Gavel} color="red" />
            <CollegeCard name="CEDAT" icon={Wrench} color="orange" />
            <CollegeCard name="CHUSS" icon={Brain} color="purple" />
            <CollegeCard name="CONAS" icon={Microscope} color="green" />
            <CollegeCard name="COBAMS" icon={Building2} color="teal" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                  <School className="w-5 h-5" />
                </div>
                <span className="font-display font-bold text-xl text-gray-900 dark:text-white">
                  MakSocial
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Connecting the Great Hill. We provide a digital campus experience for Makerere University students to learn, share, and grow together.
              </p>
              <div className="flex gap-4">
                <a className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-colors" href="#">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-colors" href="#">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Platform</h3>
              <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                <li><a className="hover:text-primary transition-colors" href="#">Features</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Academic Vault</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Groups</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Events Calendar</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">University</h3>
              <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                <li><a className="hover:text-primary transition-colors" href="#">About Makerere</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Colleges</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Administration</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Guild Council</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Contact</h3>
              <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  support@maksocial.ac.ug
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +256 700 123 456
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Makerere Hill, Kampala
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400 text-center md:text-left">
              © 2023 MakSocial. All rights reserved. Not officially affiliated with University Admin.
            </p>
            <div className="flex gap-6 text-xs text-gray-400">
              <a className="hover:text-gray-600 dark:hover:text-gray-200" href="#">Privacy Policy</a>
              <a className="hover:text-gray-600 dark:hover:text-gray-200" href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Testimonial Card Component
interface TestimonialCardProps {
  rating: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  featured?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  rating,
  quote,
  name,
  role,
  avatar,
  featured = false,
}) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-current" />);
    }
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-4 h-4 fill-current" />);
    }
    return stars;
  };

  return (
    <div
      className={`bg-surface-light dark:bg-surface-dark p-8 rounded-2xl shadow-sm border ${
        featured
          ? 'border-primary/20 shadow-card relative'
          : 'border-gray-100 dark:border-gray-700'
      }`}
    >
      {featured && (
        <div className="absolute -top-4 -right-4 bg-primary text-white text-xs px-2 py-1 rounded">
          Top Review
        </div>
      )}
      <div className="flex text-primary mb-4">{renderStars()}</div>
      <p className="text-gray-700 dark:text-gray-300 italic mb-6">"{quote}"</p>
      <div className="flex items-center gap-4">
        <img alt={name} className="w-12 h-12 rounded-full object-cover" src={avatar} />
        <div>
          <p className="font-bold text-gray-900 dark:text-white text-sm">{name}</p>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

// College Card Component
interface CollegeCardProps {
  name: string;
  icon: React.ElementType;
  color: 'blue' | 'red' | 'orange' | 'purple' | 'green' | 'teal';
}

const CollegeCard: React.FC<CollegeCardProps> = ({ name, icon: Icon, color }) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600',
    red: 'bg-red-100 text-red-600 group-hover:bg-red-600',
    orange: 'bg-orange-100 text-orange-600 group-hover:bg-orange-600',
    purple: 'bg-purple-100 text-purple-600 group-hover:bg-purple-600',
    green: 'bg-green-100 text-green-600 group-hover:bg-green-600',
    teal: 'bg-teal-100 text-teal-600 group-hover:bg-teal-600',
  };

  return (
    <a
      className="group p-4 bg-white dark:bg-background-dark rounded-xl text-center border border-gray-100 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all"
      href="#"
    >
      <div
        className={`w-10 h-10 ${colorClasses[color]} rounded-lg mx-auto flex items-center justify-center mb-3 group-hover:text-white transition-colors`}
      >
        <Icon className="w-5 h-5" />
      </div>
      <span className="text-sm font-bold text-gray-800 dark:text-gray-200">{name}</span>
    </a>
  );
};

export default MakSocial;