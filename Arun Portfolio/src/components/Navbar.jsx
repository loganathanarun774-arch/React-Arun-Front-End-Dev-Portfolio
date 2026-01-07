import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { CONFIG } from '../config';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { title: "Home", href: "#home" },
        { title: "About", href: "#about" },
        { title: "SKills", href: "#skills" },
        { title: "Projects", href: "#projects" },
        { title: "Contact", href: "#contact" },
    ];

    return (
        <nav className="w-full absolute top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex items-center justify-between h-24">

                    {/* Logo from Config */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <span className="text-accent text-2xl">✦</span>
                        <a href="#home" className="text-xl font-bold text-white tracking-wide">
                            {CONFIG.logo}
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    className="text-gray-300 hover:text-accent transition-colors text-sm font-medium"
                                >
                                    {link.title}
                                </a>
                            ))}
                            <a href="#contact" className="px-6 py-2 bg-accent text-primary font-bold rounded-full hover:shadow-lg transition-all text-sm">
                                Get Started
                            </a>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-primary shadow-xl absolute top-full left-0 right-0 border-b border-white/10">
                    <div className="px-4 py-6 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.title}
                                href={link.href}
                                className="text-gray-300 hover:text-accent block text-base font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
