import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONFIG } from '../config';

const Resume = () => {
    const { about, resume } = CONFIG;

    return (
        <section className="min-h-screen bg-[#0a0a0f] text-white font-sans selection:bg-[#8e75ff]/30">
            {/* Navigation Header */}
            <div className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Portfolio</span>
                </Link>
                <button
                    onClick={() => window.print()}
                    className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#8e75ff] to-[#6e57e0] rounded-full font-bold shadow-lg hover:shadow-[#8e75ff]/20 transition-all active:scale-95"
                >
                    <Download size={18} />
                    <span>Download CV</span>
                </button>
            </div>

            <div className="max-w-6xl mx-auto px-6 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#0f0f17] rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 flex flex-col md:flex-row min-h-[1000px]"
                >
                    {/* Left Column (Narrower) */}
                    <div className="w-full md:w-[35%] bg-gradient-to-b from-[#1a1a2e] to-[#0f0f17] p-10 md:p-14 border-r border-white/5">
                        {/* Profile Image Arch */}
                        <div className="relative w-48 h-64 mx-auto mb-12 overflow-hidden rounded-[4rem] border-2 border-white/10 shadow-emerald-500/10">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#8e75ff]/20 to-transparent z-10" />
                            <img
                                src={about.profileImage}
                                alt={CONFIG.name}
                                className="w-full h-full object-cover grayscale brightness-110"
                            />
                        </div>

                        {/* Contact Person */}
                        <div className="space-y-8 mb-16">
                            <div className="relative">
                                <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-white/40 mb-3 ml-1">Contact Person</h3>
                                <div className="h-[2px] w-full bg-gradient-to-r from-[#8e75ff] to-transparent opacity-30 rounded-full mb-6" />
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#8e75ff] group-hover:bg-[#8e75ff] group-hover:text-white transition-all">
                                        <Phone size={18} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-white/30 uppercase font-bold tracking-wider">Phone</span>
                                        <span className="text-sm font-medium">{about.contact.phone}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#8e75ff] group-hover:bg-[#8e75ff] group-hover:text-white transition-all">
                                        <Mail size={18} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-white/30 uppercase font-bold tracking-wider">Email</span>
                                        <span className="text-sm font-medium break-all">{about.contact.email}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#8e75ff] group-hover:bg-[#8e75ff] group-hover:text-white transition-all">
                                        <MapPin size={18} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-white/30 uppercase font-bold tracking-wider">Address</span>
                                        <span className="text-sm font-medium">{about.contact.address}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Education */}
                        <div className="space-y-8">
                            <div className="relative">
                                <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-white/40 mb-3 ml-1">Education</h3>
                                <div className="h-[2px] w-full bg-gradient-to-r from-[#8e75ff] to-transparent opacity-30 rounded-full mb-6" />
                            </div>

                            <div className="space-y-8">
                                <div className="relative pl-6 border-l-2 border-[#8e75ff]/30">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#8e75ff] shadow-[0_0_15px_rgba(142,117,255,0.5)]" />
                                    <h4 className="font-bold text-white leading-tight mb-2">{about.education.school}</h4>
                                    <p className="text-[#8e75ff] text-xs font-bold mb-1 italic">({about.education.period})</p>
                                    <p className="text-white/40 text-sm italic">{about.education.degree}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Wider content) */}
                    <div className="flex-1 p-10 md:p-16 space-y-16">
                        {/* Header */}
                        <div>
                            <motion.h1
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4"
                            >
                                {CONFIG.name.split(' ')[0]} <br />
                                <span className="opacity-40">{CONFIG.name.split(' ')[1]}</span>
                            </motion.h1>
                            <div className="inline-block px-8 py-2 bg-[#8e75ff] text-white font-black text-sm tracking-[0.4em] uppercase rounded-lg shadow-xl shadow-[#8e75ff]/20">
                                {CONFIG.name.includes("Arun") ? "Web Developer" : "Designer"}
                            </div>
                        </div>

                        {/* Summary */}
                        <div className="space-y-6">
                            <p className="text-gray-400 text-lg leading-relaxed font-light first-letter:text-[#8e75ff] first-letter:text-4xl first-letter:font-black first-letter:mr-1">
                                {resume.summary}
                            </p>
                        </div>

                        {/* Work Experience / Projects */}
                        <div className="space-y-10">
                            <div className="flex items-center gap-6">
                                <h3 className="text-sm font-bold tracking-[0.4em] uppercase text-[#8e75ff]">Experience</h3>
                                <div className="h-[1px] flex-1 bg-white/10" />
                            </div>

                            <div className="space-y-12">
                                {resume.experience.map((exp, i) => (
                                    <div key={i} className="group flex gap-8">
                                        <div className="hidden sm:block text-right pt-2 min-w-[100px]">
                                            <span className="text-sm font-black text-white group-hover:text-[#8e75ff] transition-colors">{exp.period}</span>
                                        </div>
                                        <div className="flex-1 space-y-3">
                                            <h4 className="text-2xl font-black text-white group-hover:translate-x-1 transition-transform inline-block">
                                                {exp.company}
                                            </h4>
                                            <p className="text-[#8e75ff] text-sm font-bold uppercase tracking-widest">{exp.role}</p>
                                            <p className="text-white/40 leading-relaxed text-sm">
                                                {exp.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Skills Grid */}
                        <div className="space-y-10">
                            <div className="flex items-center gap-6">
                                <h3 className="text-sm font-bold tracking-[0.4em] uppercase text-[#8e75ff]">Skills</h3>
                                <div className="h-[1px] flex-1 bg-white/10" />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-16">
                                {about.skills.technical_display.map((skill, i) => (
                                    <div key={i} className="group">
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="text-sm font-bold text-white/60 group-hover:text-white transition-colors">{skill.label}</span>
                                            <div className="flex gap-1">
                                                {[...Array(10)].map((_, idx) => (
                                                    <div
                                                        key={idx}
                                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx < skill.level ? 'bg-[#8e75ff] shadow-[0_0_8px_rgba(142,117,255,0.6)]' : 'bg-white/10'}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Global Design Elements */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#8e75ff]/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#00e5ff]/5 rounded-full blur-[120px]" />
            </div>
        </section>
    );
};

export default Resume;
