import React from 'react';
import {
  School,
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

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MakSocial: React.FC = () => {
  return (
    <div className="bg-[#FFFFFF] dark:bg-[#111827] text-gray-900 dark:text-gray-100 font-body antialiased transition-colors duration-300">
      {/* Navigation */}
      <Navbar />

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
      <section className="py-20 bg-background-[#FFFFFF] dark:bg-[#111827]">
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
            <a className="text-[#2ECC71] font-bold hover:underline mt-4 md:mt-0 flex items-center gap-1" href="#">
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
      <Footer />
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
      stars.push(<Star key={i} className="w-4 h-4 fill-current text-[#2ECC71]" />);
    }
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-4 h-4 fill-current text-[#2ECC71]" />);
    }
    return stars;
  };

  return (
    <div
      className={`bg-[#FFFFFF] dark:bg-[#111827] p-8 rounded-2xl shadow-sm border ${featured
          ? 'border-[#2ECC71]/20 shadow-card relative'
          : 'border-gray-100 dark:border-gray-700'
        }`}
    >
      {featured && (
        <div className="absolute -top-2.5 -right-4 bg-[#2ECC71] text-white text-xs px-2 py-1 rounded-[20px]">
          Top Review
        </div>
      )}
      <div className="flex text-[#2ECC71] mb-4">{renderStars()}</div>
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
      className="group p-4 bg-white dark:bg-background-[#111827] rounded-xl text-center border border-gray-100 dark:border-gray-700 hover:border-[#2ECC71] dark:hover:border-[#2ECC71] transition-all"
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