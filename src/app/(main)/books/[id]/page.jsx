"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { BookOpen, User, Hash, Info, Loader2 } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast'; 

const BookDetails = () => {
    const { id } = useParams(); 
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isBorrowing, setIsBorrowing] = useState(false);

    useEffect(() => {
        fetch('/books.json')
            .then((res) => res.json())
            .then((data) => {
                const selectedBook = data.find((b) => b.id === parseInt(id));
                setBook(selectedBook);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching book details:", err);
                setLoading(false);
            });
    }, [id]);

   
    const handleBorrow = () => {
        setIsBorrowing(true);
        
       
        setTimeout(() => {
            setIsBorrowing(false);
            toast.success(`${book.title} has been borrowed successfully!`, {
                duration: 4000,
                position: 'top-center',
                style: {
                    borderRadius: '16px',
                    background: '#1e293b',
                    color: '#fff',
                    fontWeight: 'bold'
                },
            });
        }, 1000);
    };

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
            <Loader2 className="animate-spin text-blue-600" size={40} />
        </div>
    );
    
    if (!book) return (
        <div className="min-h-screen flex items-center justify-center text-2xl font-black text-red-500 uppercase tracking-widest">
            Book Not Found!
        </div>
    );

    return (
        <section className="min-h-screen py-16 bg-slate-50">
            
            <Toaster />

            <div className="max-w-6xl mx-auto px-6">
                <div className="bg-white rounded-[3rem] shadow-sm border border-slate-100 overflow-hidden flex flex-col md:flex-row gap-10 p-8 md:p-12">
                    
                   
                    <div className="w-full md:w-2/5 shrink-0">
                        <div className="relative aspect-3/4 w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 bg-slate-50">
                            <Image
                                src={book.image_url}
                                alt={book.title}
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 40vw"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    
                    <div className="w-full md:w-3/5 flex flex-col justify-center space-y-8">
                        <div>
                            <span className="px-5 py-2 bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-[0.2em] rounded-full">
                                {book.category}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-black text-slate-800 mt-6 leading-tight tracking-tight">
                                {book.title}
                            </h1>
                            <div className="flex items-center gap-3 text-blue-600 font-bold mt-4 text-xl">
                                <div className="bg-blue-100 p-2 rounded-full">
                                    <User size={20} />
                                </div>
                                <span>by {book.author}</span>
                            </div>
                        </div>

                        <div className="h-px bg-slate-100 w-full" />

                        <div className="space-y-4">
                            <h3 className="flex items-center gap-3 font-black text-slate-800 text-xl uppercase tracking-wider">
                                <Info size={22} className="text-blue-500" />
                                Description
                            </h3>
                            <p className="text-slate-500 leading-relaxed text-lg font-medium">
                                {book.description}
                            </p>
                        </div>

                        
                        <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                            <div className="flex items-center gap-5 bg-slate-50 p-5 rounded-[2rem] border border-slate-100 w-full sm:w-auto">
                                <div className="bg-blue-600 p-4 rounded-2xl text-white shadow-lg shadow-blue-200">
                                    <Hash size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Availability</p>
                                    <p className="text-2xl font-black text-slate-800">
                                        {book.quantity} <span className="text-sm font-bold text-slate-400">pcs</span>
                                    </p>
                                </div>
                            </div>

                            <button 
                                onClick={handleBorrow}
                                disabled={isBorrowing || book.quantity === 0}
                                className={`w-full sm:w-auto px-12 py-5 rounded-[2rem] font-black flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl 
                                    ${isBorrowing ? "bg-slate-200 text-slate-400 cursor-not-allowed" : "bg-blue-600 text-white shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1"}`}
                            >
                                {isBorrowing ? (
                                    <Loader2 className="animate-spin" size={20} />
                                ) : (
                                    <BookOpen size={20} />
                                )}
                                {isBorrowing ? "Processing..." : "Borrow This Book"}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BookDetails;