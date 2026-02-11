import {
  Home,
  Grid3x3,
  BookOpen,
  Calendar,
  MessageCircle,
  HelpCircle,
  Briefcase,
  LogOut,
  Bell,
  
  GraduationCap,
  User,
  Settings,
} from 'lucide-react';
const Sidebar = () =>{
    return(
        <aside className="w-72 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 hidden md:flex flex-col justify-between overflow-y-auto shrink-0 z-20">
          <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="p-8 mb-2">
              <div className="flex items-center gap-3">
                <GraduationCap className="text-[#2ECC71] w-10 h-10" />
                <div className="flex flex-col">
                  <h1 className="font-bold text-2xl leading-none text-gray-900 dark:text-white tracking-tight">
                    MAK SOCIAL
                  </h1>
                  <span className="text-[10px] font-bold text-[#2ECC71] tracking-[0.2em] uppercase mt-1">
                    Connect & Learn
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="px-6 flex-1 flex flex-col gap-2">
              <a
                href="#"
                className="flex items-center gap-4 px-4 py-4 bg-[#2ECC71] text-white rounded-xl shadow-md shadow-[#2ECC71]/20 transform transition-all hover:scale-[1.02]"
              >
                <Home className="w-5 h-5" />
                <span className="text-[14px] font-bold">Home Feed</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 px-4 py-4 text-gray-600 dark:text-gray-300 hover:bg-[#2ECC71]/10 dark:hover:bg-[#2ECC71]/10 hover:text-[#2ECC71] dark:hover:text-[#2ECC71] rounded-xl transition-all"
              >
                <Grid3x3 className="w-5 h-5" />
                <span className="text-[14px] font-medium">Photos</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 px-4 py-4 text-gray-600 dark:text-gray-300 hover:bg-[#2ECC71]/10 dark:hover:bg-[#2ECC71]/10 hover:text-[#2ECC71] dark:hover:text-[#2ECC71] rounded-xl transition-all"
              >
                <BookOpen className="w-5 h-5" />
                <span className="text-[14px] font-medium">Study Vault</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 px-4 py-4 text-gray-600 dark:text-gray-300 hover:bg-[#2ECC71]/10 dark:hover:bg-[#2ECC71]/10 hover:text-[#2ECC71] dark:hover:text-[#2ECC71] rounded-xl transition-all"
              >
                <Calendar className="w-5 h-5" />
                <span className="text-[14px] font-medium">Calender</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 px-4 py-4 text-gray-600 dark:text-gray-300 hover:bg-[#2ECC71]/10 dark:hover:bg-[#2ECC71]/10 hover:text-[#2ECC71] dark:hover:text-[#2ECC71] rounded-xl transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="text-[14px] font-medium">Messages</span>
                <span className="ml-auto bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  3
                </span>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 px-4 py-4 text-gray-600 dark:text-gray-300 hover:bg-[#2ECC71]/10 dark:hover:bg-[#2ECC71]/10 hover:text-[#2ECC71] dark:hover:text-[#2ECC71] rounded-xl transition-all"
              >
                <HelpCircle className="w-5 h-5" />
                <span className="text-[14px] font-medium">Lost & Found</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 px-4 py-4 text-gray-600 dark:text-gray-300 hover:bg-[#2ECC71]/10 dark:hover:bg-[#2ECC71]/10 hover:text-[#2ECC71] dark:hover:text-[#2ECC71] rounded-xl transition-all"
              >
                <Briefcase className="w-5 h-5" />
                <span className="text-[14px] font-medium">Opportunities</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 px-4 py-4 text-gray-600 dark:text-gray-300 hover:bg-[#2ECC71]/10 dark:hover:bg-[#2ECC71]/10 hover:text-[#2ECC71] dark:hover:text-[#2ECC71] rounded-xl transition-all"
              >
                <Bell className="w-5 h-5" />
                <span className="text-[14px] font-medium">Notifications</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 px-4 py-4 text-gray-600 dark:text-gray-300 hover:bg-[#2ECC71]/10 dark:hover:bg-[#2ECC71]/10 hover:text-[#2ECC71] dark:hover:text-[#2ECC71] rounded-xl transition-all"
              >
                <Settings className="w-5 h-5" />
                <span className="text-[14px] font-medium">Settings</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 px-4 py-4 text-gray-600 dark:text-gray-300 hover:bg-[#2ECC71]/10 dark:hover:bg-[#2ECC71]/10 hover:text-[#2ECC71] dark:hover:text-[#2ECC71] rounded-xl transition-all"
              >
                <User className="w-5 h-5" />
                <span className="text-[14px] font-medium">Profile</span>
              </a>
            </nav>

            {/* Logout */}
            <div className="p-6 mt-4">
              <button className="w-full flex items-center justify-center gap-3 px-4 py-3.5 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-900/20 dark:hover:text-red-400 rounded-xl transition-colors font-semibold text-sm uppercase tracking-wide border border-transparent hover:border-red-200 dark:hover:border-red-800">
                <LogOut className="w-5 h-5" />
                LOGOUT
              </button>
            </div>
          </div>
        </aside>
    );
};

