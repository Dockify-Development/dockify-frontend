import Link from 'next/link';
import React from 'react';

interface NavProps {
    className?: string; // Optional className prop
}

export function Nav({ className = '' }: NavProps) {
    return (
        <nav className={`bg-transparent bg-opaque-50 backdrop-blur-md text-white p-4 shadow-2xl ${className}`}>
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-2xl font-semibold text-white">Dockify</h1>
                </Link>
                <div className="flex space-x-6">
                    <Link href="/">
                        <p className="text-gray-300 hover:bg-purple-900 transition duration-300 p-3 rounded-2xl">Home</p>
                    </Link>
                    <Link href="/login">
                        <p className="text-gray-300 hover:bg-purple-900 transition duration-300 p-3 rounded-2xl">Login</p>
                    </Link>
                    <Link href="/signup">
                        <p className="text-gray-300 hover:bg-purple-900 transition duration-300 p-3 rounded-2xl">Signup</p>
                    </Link>
                    <Link href="/info">
                        <p className="text-gray-300 hover:bg-purple-900 transition duration-300 p-3 rounded-2xl">Info</p>
                    </Link>
                    <Link href="/contact">
                        <p className="text-gray-300 hover:bg-purple-900 transition duration-300 p-3 rounded-2xl">Contact</p>
                    </Link>
                    <Link href="/dashboard">
                        <p className="text-gray-300 hover:bg-purple-900 transition duration-300 p-3 rounded-2xl">Dashboard</p>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
