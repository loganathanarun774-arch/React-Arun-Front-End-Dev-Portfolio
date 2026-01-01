import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Globe, Code2, Layers, Cpu, Compass, Github, Atom, Terminal, Wind, Boxes } from 'lucide-react';
import { CONFIG } from '../config';

const About = () => {
    const { about } = CONFIG;

    return (
        <section id="about" className="py-24 bg-primary text-white overflow-hidden font-sans">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                {/* Top Section: Title, Bio, Contact and Profile */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">

                    {/* Left Column: Bio & Contact (Col 7) */}
                    <div className="lg:col-span-7 space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
                                About <span className="text-[#8e75ff]">me</span>
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                                {about.bio}
                            </p>
                        </motion.div>

                        {/* Contact Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6"
                        >
                            <h3 className="text-xl font-bold text-gray-200">Contact</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                                    <Mail size={16} className="text-[#8e75ff]" />
                                    <span>{about.contact.email}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                                    <Phone size={16} className="text-[#8e75ff]" />
                                    <span>{about.contact.phone}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                                    <Linkedin size={16} className="text-[#8e75ff]" />
                                    <span>{about.contact.linkedin}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                                    <Github size={16} className="text-[#8e75ff]" />
                                    <span>{about.contact.Github}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Profile Image with Shape (Col 5) */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end relative pt-10 lg:pt-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Teal Glow Effect */}
                            <div className="absolute inset-0 bg-[#00e5ff]/20 blur-[60px] rounded-full -z-10 animate-pulse" />

                            {/* Specific Arch/Pill Shape from Reference */}
                            <div className="relative w-72 h-96 overflow-hidden rounded-[8rem] border-2 border-white/5 shadow-2xl">
                                {/* Teal Gradient Overlay inside shape */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#00e5ff]/20 to-transparent z-10" />
                                <img
                                    src={about.profileImage}
                                    alt="Silhouette"
                                    className="w-full h-full object-cover grayscale brightness-110"
                                />
                            </div>

                            {/* Floating Curved Lines Mockup */}
                            <svg className="absolute -top-10 -right-10 w-40 h-40 opacity-20 pointer-events-none" viewBox="0 0 100 100">
                                <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="#8e75ff" strokeWidth="0.5" />
                                <path d="M0,60 Q25,10 50,60 T100,60" fill="none" stroke="#00e5ff" strokeWidth="0.5" />
                            </svg>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Section: Large Purple Container */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-[#1F3D36] to-[#16322C] p-10 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden"
                >
                    {/* Subtle noise texture or pattern */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">

                        {/* Left Col inside container */}
                        <div className="space-y-12">
                            {/* Education */}
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-3xl font-bold text-white">Education</h3>
                                    <span className="px-4 py-1 border border-white/20 rounded-full text-xs">{about.education.period}</span>
                                </div>
                                <p className="text-white/80 font-medium">{about.education.school}</p>
                            </div>

                            {/* Technical Skill Icons */}
                            <div id="skills">
                                <h3 className="text-2xl font-bold text-white mb-8">Technical skill</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                    {about.skills.technical_display.map((skill, i) => {
                                        // Dynamic icon selection
                                        const IconComponent = {
                                            Atom: <Atom size={32} />,
                                            Code2: <Code2 size={32} />,
                                            Layers: <Layers size={32} />,
                                            Terminal: <Terminal size={32} />,
                                            Wind: <Wind size={32} />,
                                            Boxes: <Boxes size={32} />
                                        }[skill.icon];

                                        return (
                                            <motion.div
                                                key={i}
                                                whileHover={{ y: -5 }}
                                                className="bg-[#0a0a0f]/40 backdrop-blur-md rounded-3xl p-6 flex flex-col items-center justify-between aspect-[4/5] shadow-xl border border-white/5 group hover:border-white/10 transition-all"
                                            >
                                                <div
                                                    className="p-4 rounded-2xl mb-4 transition-transform group-hover:scale-110"
                                                    style={{ color: skill.color }}
                                                >
                                                    {IconComponent}
                                                </div>
                                                <div className="text-center">
                                                    <span className="text-2xl font-bold text-white mb-1 block">{skill.percentage}</span>
                                                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold group-hover:text-white/60 transition-colors">
                                                        {skill.label}
                                                    </span>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Interest */}
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">Interest</h3>
                                <div className="flex gap-4">
                                    {about.interests.map((it, i) => (
                                        <span key={i} className="text-white/70 text-sm flex items-center gap-2">
                                            {it} {i < about.interests.length - 1 && <span className="text-white/20">|</span>}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Col inside container */}
                        <div className="space-y-12">
                            {/* Soft Skills */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-8">
                                    <h3 className="text-3xl font-bold text-white">Soft skill</h3>
                                    <div className="space-y-3">
                                        {about.skills.soft.slice(0, 2).map((s, i) => (
                                            <div key={i} className="text-white/80 text-sm py-1">{s}</div>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-3 pt-14 flex items-center gap-4">
                                    <div className="w-[1px] h-20 bg-white/20 hidden md:block" />
                                    <div>
                                        {about.skills.soft.slice(2).map((s, i) => (
                                            <div key={i} className="text-white/80 text-sm py-1">{s}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Skill set */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-8">
                                    <h3 className="text-2xl font-bold text-white">Skill set</h3>
                                    <div className="space-y-3">
                                        {about.skills.set.slice(0, 3).map((s, i) => (
                                            <div key={i} className="text-white/80 text-sm py-1">{s}</div>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-3 pt-14 flex items-center gap-4">
                                    <div className="w-[1px] h-24 bg-white/20 hidden md:block" />
                                    <div>
                                        {about.skills.set.slice(3).map((s, i) => (
                                            <div key={i} className="text-white/80 text-sm py-1">{s}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Language */}
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">Language</h3>
                                <div className="flex gap-4">
                                    {about.languages.map((l, i) => (
                                        <span key={i} className="text-white/70 text-sm flex items-center gap-2">
                                            {l} {i < about.languages.length - 1 && <span className="text-white/20">|</span>}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
