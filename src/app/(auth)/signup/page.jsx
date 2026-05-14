"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { UserPlus, Mail, Lock, User, ArrowRight, Globe, Image as ImageIcon, AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';

const SignupPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const router = useRouter();
    const [serverError, setServerError] = useState("");

    const handleSignupFunc = async (data) => {
        setServerError("");

        const { name, email, password, photoUrl } = data;
        try {
            console.log("Registration Data:", data);

            // const isSuccess = true;

            // if (isSuccess) {

            //     router.push('/login');
            // } else {
            //     throw new Error("Registration failed. Please try again.");
            // }
        } catch (error) {
            setServerError(error.message);
        }
        const {data :res,error } = await authClient.signUp({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photoUrl,
            callbackURL: "/login",
        });
        console.log(res,error);
        
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-white rounded-[2.5rem] border border-slate-100 p-8 md:p-10 shadow-sm">


                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-3xl mb-4 text-primary">
                        <UserPlus size={32} />
                    </div>
                    <h1 className="text-3xl font-black text-slate-800 tracking-tight">Create Account</h1>
                    <p className="text-slate-500 mt-2 font-medium">Join LibriFlow to start your reading journey</p>
                </div>


                {serverError && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600 text-sm font-bold">
                        <AlertCircle size={18} />
                        {serverError}
                    </div>
                )}

                <form className="space-y-4" onSubmit={handleSubmit(handleSignupFunc)}>


                    <div className="space-y-1">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                        <div className="relative group">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                            <input
                                type="text"
                                {...register("name", { required: "Name is required" })}
                                placeholder="Atiq Rahaman"
                                className={`w-full pl-12 pr-4 py-4 bg-slate-50 border ${errors.name ? 'border-red-300' : 'border-slate-100'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-slate-700 font-medium`}
                            />
                        </div>
                        {errors.name && <p className="text-[10px] text-red-500 font-bold ml-2 uppercase">{errors.name.message}</p>}
                    </div>


                    <div className="space-y-1">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Photo URL</label>
                        <div className="relative group">
                            <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                            <input
                                type="url"
                                {...register("photoUrl")}
                                placeholder="https://example.com/photo.jpg"
                                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-slate-700 font-medium"
                            />
                        </div>
                    </div>


                    <div className="space-y-1">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                        <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                            <input
                                type="email"
                                {...register("email", { required: "Email is required" })}
                                placeholder="atik@example.com"
                                className={`w-full pl-12 pr-4 py-4 bg-slate-50 border ${errors.email ? 'border-red-300' : 'border-slate-100'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-slate-700 font-medium`}
                            />
                        </div>
                        {errors.email && <p className="text-[10px] text-red-500 font-bold ml-2 uppercase">{errors.email.message}</p>}
                    </div>


                    <div className="space-y-1">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Password</label>
                        <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                            <input
                                type="password"
                                {...register("password", { required: "Password is required", minLength: { value: 6, message: "Min 6 characters" } })}
                                placeholder="••••••••"
                                className={`w-full pl-12 pr-4 py-4 bg-slate-50 border ${errors.password ? 'border-red-300' : 'border-slate-100'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-slate-700`}
                            />
                        </div>
                        {errors.password && <p className="text-[10px] text-red-500 font-bold ml-2 uppercase">{errors.password.message}</p>}
                    </div>


                    <button type="submit" className="w-full py-4 bg-primary text-white font-black rounded-2xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95 flex items-center justify-center gap-2 mt-4">
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