import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Atom, Briefcase, Mail, Phone, Linkedin, Github } from 'lucide-react';
import { CONFIG } from '../config';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-primary relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="inline-block px-4 py-1 bg-secondary text-accent text-xs font-bold rounded-full mb-6 tracking-widest uppercase">
                        Get In Touch
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Service
                    </h2>
                    <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                        Have a project in mind or looking for a frontend developer? Let’s connect and build something clean, functional, and impactful.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {CONFIG.services.map((service, index) => {
                            const IconComponent = {
                                Monitor: <Monitor size={32} />,
                                Atom: <Atom size={32} />,
                                Briefcase: <Briefcase size={32} />
                            }[service.icon];

                            return (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -10 }}
                                    className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-accent/40 hover:bg-white/10 transition-all group text-left"
                                >
                                    <div
                                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg transition-transform group-hover:scale-110"
                                        style={{ backgroundColor: `${service.color}20`, color: service.color }}
                                    >
                                        {IconComponent}
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                                        {service.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {service.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Footer / Social Section */}
                <div className="mt-32 pt-16 border-t border-white/5">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                        <div className="text-left">
                            <h3 className="text-2xl font-bold text-white mb-2">{CONFIG.logo}</h3>
                            <p className="text-gray-500 text-sm">Building clean, responsive interfaces with modern frontend technologies.</p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8">
                            <a href={`mailto:${CONFIG.about.contact.email}`} className="flex items-center gap-3 text-gray-400 hover:text-accent transition-colors">
                                <Mail size={20} />
                                <span className="text-sm">Email</span>
                            </a>
                            <a href={CONFIG.about.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-accent transition-colors">
                                <Linkedin size={20} />
                                <span className="text-sm">LinkedIn</span>
                            </a>
                            <a href={CONFIG.about.contact.Github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-accent transition-colors">
                                <Github size={20} />
                                <span className="text-sm">GitHub</span>
                            </a>
                        </div>
                    </div>

                    <footer className="mt-16 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs pb-10">
                        <p>© {new Date().getFullYear()} {CONFIG.logo}. All rights reserved.</p>
                        <div className="flex gap-8 mt-4 md:mt-0">
                            <a href="#" className="hover:text-accent transition-colors">Terms</a>
                            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
                            <a href="#" className="hover:text-accent transition-colors">Cookies</a>
                        </div>
                    </footer>
                </div>
            </div>
        </section>
    );
};

export default Contact;
