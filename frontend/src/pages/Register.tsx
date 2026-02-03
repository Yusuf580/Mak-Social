import React from 'react';
import {
    Users, ArrowRight, BookOpen,
    Terminal, Activity, Database,
    Fingerprint
} from 'lucide-react';
import { Link } from 'react-router-dom';

const COLLEGES = ['COCIS', 'CEDAT', 'CHUSS', 'CONAS', 'CHS', 'CAES', 'COBAMS', 'CEES', 'LAW'];
const STATUSES = ['Year 1', 'Year 2', 'Finalist', 'Masters', 'Graduate'];

const Register: React.FC = () => {
    return (
        <div className="flex h-screen w-full bg-[#0d1117] text-[#c9d1d9] overflow-hidden font-sans">

            {/* LEFT PANEL */}
            <div className="hidden lg:block w-1/2 relative bg-[#05080c] border-r border-[#30363d]">
                <img
                    src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200"
                    className="absolute inset-0 w-full h-full object-cover opacity-25 grayscale"
                    alt="Graduation Spirit"
                />

                <div className="inset-0 bg-gradient-to-r from-[#0d1117] via-[#0d1117]/70 to-transparent p-20 flex flex-col justify-end">
                    <div className="space-y-10 max-w-lg">

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-[2px] flex items-center justify-center shadow-2xl">
                                <Users size={24} className="text-black" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 flex items-center gap-2">
                                    <Activity size={12} className="animate-pulse" /> Enrollment_Active
                                </p>
                                <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                                    Network Node v4.2 Stable
                                </p>
                            </div>
                        </div>

                        <h1 className="text-6xl font-black text-white uppercase leading-[0.9]">
                            Define Your <br />
                            <span className="text-slate-500">Identity.</span>
                        </h1>

                        <div className="grid grid-cols-2 gap-4">
                            <InfoCard icon={<BookOpen size={18} />} title="Vault Access" desc="Academic Repositories" />
                            <InfoCard icon={<Fingerprint size={18} />} title="Verified Log" desc="Official Metadata" />
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-12 relative overflow-hidden">
                <div className="absolute top-8 right-8">
                    <Link
                        to="/login"
                        className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white"
                    >
                        Existing Node? Sign In
                    </Link>
                </div>

                <div className="w-full max-w-md flex flex-col justify-center space-y-6
                  px-8 py-10 bg-white/5 border border-white/10 rounded-md">
                    {/* Header */}
                    <div className="space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 border border-slate-700 rounded-[2px] text-[9px] font-black uppercase">
                            <Terminal size={14} /> Initialization_Sequence
                        </div>
                        <h2 className="text-3xl font-black text-white uppercase">
                            Node Registration.
                        </h2>
                    </div>

                    {/* Form */}
                    <form className="space-y-4">
                        <Input label="Full Legal Alias" placeholder="e.g. John Doe" />
                        <Input label="Wing Credential (Email)" placeholder="student@mak.ac.ug" type="email" />

                        <div className="grid grid-cols-2 gap-3">
                            <Select label="Primary Hub" options={COLLEGES} />
                            <Select label="Strata Stage" options={STATUSES} />
                        </div>

                        <button
                            type="button"
                            className="w-full bg-white text-black font-black py-3 rounded-[2px] text-xs uppercase tracking-[0.2em] hover:bg-[#f0f0f0] transition-all flex items-center justify-center gap-3"
                        >
                            Commit Node Identity <ArrowRight size={18} />
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="pt-3 border-t border-[#30363d] text-center space-y-2">
                        <div className="flex justify-center gap-4 opacity-50">
                            <Database size={16} />
                            <Terminal size={16} />
                            <Activity size={16} />
                        </div>
                        <p className="text-[8px] font-bold text-slate-500 uppercase tracking-[0.4em] leading-loose">
                            By committing your node, you authorize synchronization with the Hill Intelligence Registry.
                        </p>
                    </div>
                </div>
            </div>



        </div >
    );
};

/* ---------- Small UI helpers ---------- */

const Input = ({ label, ...props }: any) => (
    <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
            {label}
        </label>
        <input
            {...props}
            className="w-full bg-[#161b22] border border-[#30363d] rounded-[2px] py-4 px-6 text-sm font-bold text-white outline-none focus:border-slate-500"
        />
    </div>
);

const Select = ({ label, options }: any) => (
    <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
            {label}
        </label>
        <select className="w-full bg-[#161b22] border border-[#30363d] rounded-[2px] py-4 px-4 text-[10px] font-black uppercase text-white">
            {options.map((o: string) => (
                <option key={o}>{o}</option>
            ))}
        </select>
    </div>
);

const InfoCard = ({ icon, title, desc }: any) => (
    <div className="p-5 bg-white/5 rounded-[2px] border border-white/10 space-y-2">
        {icon}
        <h4 className="text-[10px] font-black uppercase text-white tracking-widest">{title}</h4>
        <p className="text-[8px] text-slate-500 font-bold uppercase">{desc}</p>
    </div>
);

export default Register;
