"use client";
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowRight, Lock } from "lucide-react";
import { useAuth } from '@/lib/AuthContext';

const FeaturedBookCard = ({ book }) => {
    const { isLoggedIn, loading } = useAuth();
    const router = useRouter();

    
    if (!book) return null;

    const handleViewDetails = (id) => {
        if (!loading && isLoggedIn) {
            router.push(`/books/${id}`);
        } else {
            router.push('/login');
        }
    };

    return (
        <div className="bg-white border border-slate-100 rounded-[2.5rem] p-5 shadow-sm hover:shadow-md transition-all group">
            <div className="relative aspect-3/4 rounded-[2rem] overflow-hidden mb-5 bg-slate-100">
                
                <Image 
                    src={book?.image_url || book?.image || "https://via.placeholder.com/300x400"} 
                    alt={book?.title || "Book"} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                
                {!isLoggedIn && !loading && (
                    <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-white/20 p-3 rounded-full backdrop-blur-md">
                            <Lock className="text-white" size={24} />
                        </div>
                    </div>
                )}
            </div>
            
            <div className="mb-6 px-2">
                <h3 className="font-black text-xl text-slate-800 line-clamp-1">{book?.title || "Untitled Book"}</h3>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">by {book?.author || "Unknown"}</p>
            </div>

            <button 
                onClick={() => handleViewDetails(book?.id || book?._id)}
                disabled={loading}
                className={`w-full py-4 rounded-2xl font-black flex items-center justify-center gap-2 transition-all active:scale-95
                    ${isLoggedIn 
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-200" 
                        : "bg-slate-100 text-slate-500 hover:bg-slate-200"}`}
            >
                {loading ? "Checking..." : isLoggedIn ? (
                    <>View Details <ArrowRight size={18} /></>
                ) : (
                    <>Login to View <Lock size={16} /></>
                )}
            </button>
        </div>
    );
};

export default FeaturedBookCard;