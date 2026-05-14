"use client";
import React from 'react';
import Link from 'next/link';
import { UserPlus, Mail, Lock, User, ArrowRight, Globe } from 'lucide-react';

const SignupPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-white rounded-[2.5rem] border border-slate-100 p-8 md:p-10 shadow-sm">
                
              
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-3xl mb-4 text-primary">
                        <UserPlus size={32} />
                    </div>
                    <h1 className="text-3xl font-black text-slate-800 tracking-tight">Create Account</h1>
                    <p className="text-slate-500 mt-2 font-medium">Join LibriFlow to start your reading journey</p>
                </div>

             
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    
                    
                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                        <div className="relative group">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                            <input 
                                type="text" 
                                placeholder="Atiq Rahaman"
                                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-slate-700 font-medium"
                            />
                        </div>
                    </div>

                    
                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                        <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                            <input 
                                type="email" 
                                placeholder="atik@example.com"
                                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-slate-700 font-medium"
                            />
                        </div>
                    </div>

                   
                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Password</label>
                        <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                            <input 
                                type="password" 
                                placeholder="••••••••"
                                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-slate-700"
                            />
                        </div>
                    </div>

                  
                    <button type="submit" className="w-full py-4 bg-primary text-white font-black rounded-2xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95 flex items-center justify-center gap-2">
                        Register Now <ArrowRight size={20} />
                    </button>
                </form>

                
                <div className="relative my-8 text-center">
                    <hr className="border-slate-100" />
                    <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Or join with</span>
                </div>

                
                <div className="grid grid-cols-1 gap-4">
                    <button className="flex items-center justify-center gap-3 py-4 bg-secondary/10 text-secondary font-bold rounded-2xl hover:bg-secondary/20 transition-all border border-secondary/5">
                        <Globe size={20} /> Register with GitHub
                    </button>
                </div>

                
                <p className="text-center mt-8 text-slate-500 font-medium">
                    Already have an account? <Link href="/login" className="text-primary font-black hover:underline">Log In</Link>
                </p>
            </div>
        </div>
    );
};

export default SignupPage;