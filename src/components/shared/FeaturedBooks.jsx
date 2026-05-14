"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Star } from 'lucide-react';

const FeaturedBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/books.json')
            .then(res => res.json())
            .then(data => setBooks(data.slice(0, 4)));
    }, []);

    return (
        <section className="max-w-7xl mx-auto py-16 px-6">

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                <div>
                    <span className="text-primary font-black uppercase tracking-[0.2em] text-xs">Curated Collection</span>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-800 mt-2 flex items-center gap-3">
                        <BookOpen className="text-primary" size={32} /> Featured Books
                    </h2>
                </div>
                <Link href="/all-books" className="group flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-primary transition-colors">
                    Explore All Library <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {books.map((book) => (
                    <div
                        key={book.id}
                        className="group relative bg-white border border-slate-100 rounded-[2.5rem] p-5 transition-all duration-300 hover:border-primary/20 hover:shadow-sm"
                    >

                        <div className="relative aspect-3/4 rounded-[2rem] overflow-hidden mb-6 bg-primary/5">
                            <Image
                                src={book.image_url}
                                alt={book.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                                <div className="flex items-center gap-1">
                                    <Star size={12} className="fill-yellow-400 text-yellow-400" />
                                    <span className="text-[10px] font-bold text-slate-700">4.8</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2 mb-6 px-1">
                            <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary font-black text-[10px] uppercase tracking-wider rounded-lg">
                                {book.category || "Literature"}
                            </span>
                            <h3 className="font-bold text-slate-800 text-lg line-clamp-1 group-hover:text-primary transition-colors">
                                {book.title}
                            </h3>
                            <p className="text-sm text-slate-500 font-medium">by {book.author}</p>
                        </div>
                        <Link href={`/books/${book.id}`}>
                            <button className="w-full py-4 bg-slate-50 text-slate-700 text-sm font-bold rounded-2xl flex items-center justify-center gap-2 transition-all group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20">
                                View Details
                                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedBooks;