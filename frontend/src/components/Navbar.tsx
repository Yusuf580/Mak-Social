
import {
  School,
  Menu
} from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar()
    {
        return (
            <nav className="sticky top-0 w-full z-50 bg-[#FFFFFF]/90 dark:bg-[#111827]/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
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
                            <a className="text-gray-600 dark:text-gray-300 hover:text-[#2ECC71] dark:hover:text-[#2ECC71] font-medium transition-colors" href="#">
                                Home
                            </a>
                            <a className="text-gray-600 dark:text-gray-300 hover:text-[#2ECC71] dark:hover:text-[#2ECC71] font-medium transition-colors" href="#features">
                                Features
                            </a>
                            <a className="text-gray-600 dark:text-gray-300 hover:text-[#2ECC71] dark:hover:text-[#2ECC71] font-medium transition-colors" href="#vault">
                                Academic Vault
                            </a>
                            <a className="text-gray-600 dark:text-gray-300 hover:text-[#2ECC71] dark:hover:text-[#2ECC71] font-medium transition-colors" href="#colleges">
                                Colleges
                            </a>
                        </div>

                        <div className="hidden md:flex items-center space-x-4">
                            <Link to="/login" className="text-gray-700 dark:text-gray-200 font-bold hover:text-[#2ECC71] transition-colors">
                                Log In
                            </Link>
                            <Link to="/register" className="bg-[#2ECC71] dark:bg-gray-800 text-white border border-gray-200 dark:border-gray-700 px-6 py-2.5 rounded-xl font-bold hover:border-[#2ECC71] dark:hover:border-[#2ECC71] transition-all shadow-sm">
                                Sign Up Now
                            </Link>
                        </div>

                        <div className="md:hidden flex items-center">
                            <button className="text-gray-600 dark:text-gray-300 focus:outline-none">
                                <Menu className="w-8 h-8" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }

export default Navbar;