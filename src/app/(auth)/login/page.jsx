"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { LogIn, Mail, Lock, ArrowRight, Globe, AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';
import { useAuth } from '@/lib/AuthContext'; 
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const { register, handleSubmit } = useForm();
    const { login } = useAuth(); 
    const router = useRouter();
    const [serverError, setServerError] = useState("");

   
    const handleGoogleSignIn = async () => {
        try {
            const { data, error } = await authClient.signIn.social({
                provider: "google",
                callbackURL: "/",
            });
            if (error) throw error;
            if (data?.user) {
                login(data.user); 
            }
        } catch (err) {
            setServerError(err.message || "Google Login failed.");
        }
    };

    // Email Login Handler
    const handleLoginFunc = async (formData) => {
        setServerError("");
        try {
            const { data: res, error } = await authClient.signIn.email({
                email: formData.email,
                password: formData.password,
                rememberMe: true,
                callbackURL: "/",
            });

            if (error) {
                setServerError(error.message || "Invalid credentials.");
                return;
            }

            if (res?.user) {
                login(res.user); // Context আপডেট
                router.push('/');
            }
        } catch (err) {
            setServerError("Login failed. Please try again.");
        }
    }

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-white rounded-[2.5rem] border border-slate-100 p-8 md:p-10 shadow-sm">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-3xl mb-4 text-primary">
                        <LogIn size={32} />
                    </div>
                    <h1 className="text-3xl font-black text-slate-800">Welcome Back</h1>
                    <p className="text-slate-500 mt-2 font-medium">Login to access your library dashboard</p>
                </div>

                {serverError && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-start gap-3 text-red-600 text-sm font-bold">
                        <AlertCircle className="mt-0.5 shrink-0" size={18} />
                        <span>{serverError}</span>
                    </div>
                )}

                <form className="space-y-5" onSubmit={handleSubmit(handleLoginFunc)}>
                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                        <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                            <input
                                type="email"
                                placeholder="gmail@example.com"
                                {...register("email")}
                                required
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
                                {...register("password")}
                                required
                                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-slate-700"
                            />
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button type="button" className="text-sm font-bold text-primary hover:underline">Forgot Password?</button>
                    </div>

                    <button type="submit" className="w-full py-4 bg-primary text-white font-black rounded-2xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95 flex items-center justify-center gap-2">
                        Login Now <ArrowRight size={20} />
                    </button>
                </form>

                <div className="relative my-8 text-center">
                    <hr className="border-slate-100" />
                    <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Or continue with</span>
                </div>

                <button type="button" onClick={handleGoogleSignIn} className="w-full flex items-center justify-center gap-3 py-4 bg-secondary/10 text-secondary font-bold rounded-2xl hover:bg-secondary/20 transition-all border border-secondary/5">
                    <Globe size={20} /> Continue with Google
                </button>

                <p className="text-center mt-8 text-slate-500 font-medium">
                    Don&lsquo;t have an account? <Link href="/signup" className="text-primary font-black hover:underline">Create One</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;