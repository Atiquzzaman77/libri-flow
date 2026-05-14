"use client";
import React from 'react';
import { Users, BookText, Library, CheckCircle } from "lucide-react";

const LibraryStats = () => {
    const stats = [
        { id: 1, label: "Active Readers", value: "25k+", icon: Users },
        { id: 2, label: "Total Books", value: "10k+", icon: BookText },
        { id: 3, label: "Categories", value: "50+", icon: Library },
        { id: 4, label: "Free Access", value: "100%", icon: CheckCircle },
    ];

    return (
        <section className="bg-blue-600 py-16 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((item) => (
                    <div key={item.id} className="space-y-2 animate-appearance-in">
                        <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 transition-transform hover:scale-110">
                            <item.icon className="text-white" size={28} />
                        </div>
                        <h3 className="text-3xl font-extrabold text-white">{item.value}</h3>
                        <p className="text-blue-100 font-medium">{item.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LibraryStats;