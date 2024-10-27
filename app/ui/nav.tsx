import Link from 'next/link';
import React, { useState, useEffect } from 'react';

interface NavProps {
    className?: string;
}

export function Nav({ className = '' }: NavProps) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
            isScrolled ? 'backdrop-blur-xl shadow-lg' : 'bg-transparent'
        } ${className}`}>
            <div className="container mx-auto flex flex-wrap justify-between items-center p-4">
                <Link href="/" className="flex items-center">
                    <h1 className="text-2xl font-semibold text-white">Dockify</h1>
                </Link>
                <button 
                    className="lg:hidden text-white focus:outline-none"
                    onClick={() => document.getElementById('navbar-menu')?.classList.toggle('hidden')}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
                <div id="navbar-menu" className="hidden w-full lg:flex lg:items-center lg:w-auto mt-4 lg:mt-0">
                    <div className="text-sm lg:flex-grow">
                        {['Home', 'Login', 'Sign up', 'Info', 'Contact', 'Dashboard'].map((item) => (
                            <Link 
                                key={item} 
                                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
                                className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:bg-purple-800 hover:text-white transition duration-300 p-2 rounded-lg mr-4"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}