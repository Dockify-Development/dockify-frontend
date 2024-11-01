"use client"

import React from 'react';
import { Card } from './card';
import { Server as Instanceicon, ShoppingBag as Shopicon, CircleHelp as Supporticon, Info, Mail, User, Settings, Plus } from 'lucide-react';

interface SidebarProps {
    className?: string;
    isSidebarOpen: boolean;
    setActiveSection: (section: string) => void;
}

export default function Sidebar({ className = '', isSidebarOpen, setActiveSection }: SidebarProps) {
    return (
        <div className="flex items-center h-screen fixed">
            <Card className="bg-white/5 border-purple-800/50 flex flex-col space-y-10 text-3xl p-5 ml-8 items-start">
                <button className="bg-0 text-white hover:text-purple-600 transition duration-300 flex" onClick={() => setActiveSection("Instances")}><Instanceicon size={32} className="mr-2" />Instances</button>
                <button className="bg-0 text-white hover:text-purple-600 transition duration-300 flex" onClick={() => setActiveSection("Shop")}><Shopicon size={32} className="mr-2" />Shop</button>
                <button className="bg-0 text-white hover:text-purple-600 transition duration-300 flex" onClick={() => setActiveSection("Create New")}><Supporticon size={32} className="mr-2" />Create New</button>
                <button className="bg-0 text-white hover:text-purple-600 transition duration-300 flex" onClick={() => setActiveSection("Profile")}><Plus size={32} className="mr-2" />Profile</button>
                <button className="bg-0 text-white hover:text-purple-600 transition duration-300 flex" onClick={() => setActiveSection("Settings")}><Settings size={32} className="mr-2" />Settings</button>
            </Card>
        </div>
    );
}