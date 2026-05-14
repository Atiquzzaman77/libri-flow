"use client";
import React, { useState } from 'react';
import { Send, CheckCircle } from "lucide-react";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setEmail("");
           
        }
    };

    return (
        <section className="bg-slate-50 py-24 px-6">
            <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl border border-slate-100 flex flex-col md:flex-row items-center gap-12">
               
                <div className="flex-1 space-y-4 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
                        Never miss a <span className="text-blue-600">New Arrival!</span>
                    </h2>
                    <p className="text-slate-500 text-lg leading-relaxed">
                        Subscribe to our newsletter and get notified about the latest books and events.
                    </p>
                </div>

                
                <div className="flex-1 w-full">
                    {!isSubscribed ? (
                        <form onSubmit={handleSubscribe} className="relative group">
                            <input
                                required
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full h-16 pl-6 pr-16 bg-slate-100 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all outline-none text-slate-700"
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-2 bottom-2 px-6 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
                            >
                                <Send size={20} />
                            </button>
                        </form>
                    ) : (
                        <div className="flex items-center gap-3 bg-green-50 text-green-700 p-6 rounded-2xl border border-green-100 transition-all">
                            <CheckCircle size={24} />
                            <span className="font-bold text-lg">Thank you for subscribing!</span>
                        </div>
                    )}
                    <p className="text-[10px] text-slate-400 mt-4 text-center italic">
                        No spam, just pure knowledge. Unsubscribe anytime.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;