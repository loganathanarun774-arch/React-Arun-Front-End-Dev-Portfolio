import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "Permium Apple E-Commerce Dashboard",
        description: "Developed a premium Apple-style e-commerce application using React with componentbased architecture and fully custom CSS for a modern, responsive UI",
        tags: ["React", "Tailwind"],
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Linkedln Automation Tool",
        description: "LinkedIn Automation project with a React-based LinkedIn UI clone and a Gobased automation backend designed to simulate human-like interactions for tasks such as messaging and lead generation.",
        tags: ["React.js", "API Intergration", "Tailwind CSS"],
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Medical Booking Platform",
        description: "Designed and developed a professional medical website with responsive layouts and a user-friendly interface, including a booking feature, Integrated APIs to fetch and display dynamic content\nFocused on accessibility, clean UI, and user-friendly navigation.\n",
        tags: ["React", "Tailwind CSS", "javascript"],
        color: "from-green-400 to-emerald-600"
    }
];

const Portfolio = () => {
    return (
        <section id="projects" className="py-20 bg-black-100 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        My <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Here are a few selected works that showcase my skills and passion for development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="group relative bg-tertiary rounded-2xl overflow-hidden cursor-pointer h-[350px]"
                        >
                            {/* Card Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                            <div className="p-8 h-full flex flex-col justify-between relative z-10 border border-white/5 hover:border-white/20 transition-colors rounded-2xl">
                                <div>
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mb-6">
                                        {project.description}
                                    </p>
                                </div>

                                <div>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="text-xs text-gray-300 bg-white/5 px-2 py-1 rounded">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    <button className="flex items-center text-sm font-bold text-cyan-400 hover:tracking-wide transition-all">
                                        VIEW PROJECT <span className="ml-2">→</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
