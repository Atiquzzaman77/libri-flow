"use client";
import React, { useState, useEffect } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute'; 
import { useAuth } from '@/lib/AuthContext';
import { authClient } from '@/lib/auth-client';
import { User, Camera, Save, Mail, Loader2, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const ProfilePage = () => {
    const { user } = useAuth(); 
    const [name, setName] = useState(() => user?.name || "");
    const [photoUrl, setPhotoUrl] = useState(() => user?.image || "");
    const [isUpdating, setIsUpdating] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleUpdate = async (e) => {
        e.preventDefault();
        setIsUpdating(true);
        setSuccessMessage(""); 

        try {
       
            const { error } = await authClient.updateUser({
                name: name,
                image: photoUrl,
            });

            if (error) throw error;
            
          
            setSuccessMessage("Profile updated successfully!");

           
            setTimeout(() => {
                window.location.reload();
            }, 1500);

        } catch (err) {
            console.error(err);
            alert("Update failed. Please try again.");
        } finally {
            setIsUpdating(false);
        }
    };

    return (
        <ProtectedRoute>
            <div className="min-h-screen bg-slate-50/50 py-16 px-6 font-sans">
                <div className="max-w-xl mx-auto bg-white rounded-[3rem] p-10 shadow-sm border border-slate-100">
                    
                    <div className="flex flex-col items-center mb-10">
                        <div className="relative">
                            <div className="w-32 h-32 rounded-[2.5rem] overflow-hidden border-4 border-slate-50 bg-slate-100 relative shadow-sm">
                                <Image 
                                    src={photoUrl || "/placeholder-user.png"} 
                                    alt="Profile" 
                                    fill 
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-primary p-3 rounded-2xl text-white shadow-lg border-4 border-white">
                                <Camera size={18} />
                            </div>
                        </div>
                        <h2 className="mt-6 text-2xl font-black text-slate-800 tracking-tight">Edit Profile</h2>
                        <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em] mt-1">Update your identity</p>
                    </div>

                    {successMessage && (
                        <div className="mb-8 p-4 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-2xl font-bold text-sm flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                            <CheckCircle2 size={20} className="text-emerald-500" />
                            {successMessage}
                        </div>
                    )}

                    <form onSubmit={handleUpdate} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
                            <input 
                                type="text" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 font-bold text-slate-700"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Profile Image URL</label>
                            <input 
                                type="url" 
                                value={photoUrl}
                                onChange={(e) => setPhotoUrl(e.target.value)}
                                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 font-bold text-slate-700"
                                placeholder="https://example.com/photo.jpg"
                            />
                        </div>

                        <div className="space-y-2 opacity-50">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                            <input 
                                type="email" 
                                value={user?.email || ""} 
                                readOnly
                                className="w-full px-6 py-4 bg-slate-100 border border-slate-100 rounded-2xl font-bold text-slate-500 cursor-not-allowed"
                            />
                        </div>

                        <button 
                            type="submit" 
                            disabled={isUpdating}
                            className="w-full py-5 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-70"
                        >
                            {isUpdating ? <Loader2 className="animate-spin" /> : <Save size={20} />}
                            {isUpdating ? "Saving..." : "Save Changes"}
                        </button>
                    </form>
                </div>
            </div>
        </ProtectedRoute>
    );
};

export default ProfilePage;