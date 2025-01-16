'use client';

import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass-effect py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <a 
            href="#" 
            className="text-2xl font-bold hero-gradient bg-clip-text text-transparent"
          >
            Ansar Ali
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://github.com/ansarali41"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full hero-gradient text-white hover:opacity-90 transition-opacity"
            >
              GitHub
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 glass-effect mt-2 rounded-xl">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://github.com/ansarali41"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              GitHub
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
