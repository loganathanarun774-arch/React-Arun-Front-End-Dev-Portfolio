import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CONFIG } from '../config';

const Hero = () => {
    const { hero } = CONFIG;

    return (
        <section id="home" className="relative w-full h-screen mx-auto flex items-center justify-center overflow-hidden bg-primary pb-20 curved-bottom z-20 shadow-2xl">

            {/* Background Image - Full Screen */}
            <div className="absolute inset-0 z-0">
                <img
                    src={hero.backgroundImage}
                    alt="Background"
                    className="w-full h-220 object-cover object-center "
                />
                {/* Dark/Gradient Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-primary/50 backdrop-blur-[1px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/40" />
            </div>

            {/* Decorative stars/plus signs */}
            <div className="absolute top-24 left-5 text-accent text-4xl animate-pulse z-10">+</div>
            <div className="absolute bottom-32 right-12 text-accent text-2xl animate-spin-slow z-10">✦</div>

            <div className="max-w-7xl w-full mx-auto px-6 md:px-12 relative z-10 pt-20">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Rating Stars Mockup */}
                        <div className="flex items-center gap-2 mb-4">
                        </div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-8xl font-bold text-white tracking-tight leading-tight mb-6 drop-shadow-lg"
                    >
                        {hero.heading}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-gray-100 text-lg md:text-2xl max-w-3xl font-semibold tracking-normal leading-relaxed mb-10 drop-shadow-lg"
                    >
                        {hero.subheading}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex flex-wrap gap-6"
                    >
                        {/* Primary Button */}
                        <Link to="/resume" className="inline-flex items-center px-10 py-4 bg-accent text-primary font-bold rounded-full btn-hover shadow-2xl shadow-accent/50 text-xl">
                            Resume
                        </Link>
                        {/* Secondary Button */}
                        <a href="#projects" className="inline-flex items-center px-10 py-4 border-2 border-white/50 text-white rounded-full hover:bg-white/10 transition-all gap-4 backdrop-blur-sm text-xl font-medium">
                            <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-accent">▶</span>
                            Explore Work
                        </a>
                    </motion.div>

                </div>
            </div>

            {/* Animated Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
            >
                <span className="text-[10px] text-white/40 uppercase tracking-[0.5em] font-bold">Scroll</span>
                <div className="w-[2px] h-16 bg-gradient-to-b from-accent/50 via-accent to-transparent rounded-full relative overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 64, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute top-0 left-0 w-full h-1/2 bg-white"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
