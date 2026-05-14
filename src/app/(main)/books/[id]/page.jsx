"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { BookOpen, User, Hash, Info } from 'lucide-react';

const BookDetails = () => {
    const { id } = useParams(); 
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);

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

    if (loading) return <div className="text-center py-20 text-2xl font-bold">Loading...</div>;
    if (!book) return <div className="text-center py-20 text-2xl font-bold text-red-500">Book Not Found!</div>;

    return (
        <section className="min-h-screen py-16 bg-slate-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row gap-10 p-8 md:p-12">
                    
                    
                    <div className="w-full md:w-2/5 shrink-0">
                        <div className="relative aspect-3/4 w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
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

                    
                    <div className="w-full md:w-3/5 flex flex-col justify-center space-y-6">
                        <div>
                            <span className="px-4 py-1.5 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider rounded-full border border-blue-100">
                                {book.category}
                            </span>
                            <h1 className="text-3xl md:text-5xl font-black text-slate-800 mt-4 leading-tight">
                                {book.title}
                            </h1>
                            <div className="flex items-center gap-2 text-blue-600 font-medium mt-3 text-lg italic">
                                <User size={20} />
                                <span>by {book.author}</span>
                            </div>
                        </div>

                        <hr className="border-slate-100" />

                        <div className="space-y-4">
                            <h3 className="flex items-center gap-2 font-bold text-slate-800 text-xl">
                                <Info size={20} className="text-blue-500" />
                                Description
                            </h3>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                {book.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-6 pt-4">
                            
                            <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 grow sm:grow-0">
                                <div className="bg-blue-600 p-3 rounded-xl text-white">
                                    <Hash size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-bold uppercase">Stock Availability</p>
                                    <p className="text-xl font-black text-slate-800">
                                        {book.quantity} <span className="text-sm font-normal text-slate-500">copies left</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <button className="w-full sm:w-auto px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                                <BookOpen size={20} />
                                Borrow This Book
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BookDetails;