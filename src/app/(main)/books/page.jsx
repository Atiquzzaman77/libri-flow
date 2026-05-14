"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Search, ArrowRight, BookOpen } from "lucide-react";

const BooksPage = () => {
    const [books, setBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    useEffect(() => {
        fetch('/books.json')
            .then((res) => res.json())
            .then((data) => setBooks(data))
            .catch((err) => console.error("Error fetching books:", err));
    }, []);

    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <main className="min-h-screen bg-white">

            <section className="bg-slate-50 border-b border-slate-100 py-16 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
                            Explore Our <span className="text-blue-600">Library</span>
                        </h1>
                        <p className="text-slate-500 text-lg">
                            Search through thousands of books and find your next favorite read.
                        </p>
                    </div>

                    
                    <div className="relative max-w-2xl mx-auto group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                        </div>
                        <input
                            type="text"
                            placeholder="Search by book title..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full h-14 pl-12 pr-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all shadow-sm text-slate-700"
                        />
                    </div>
                </div>
            </section>

            
            <section className="max-w-7xl mx-auto px-6 py-20">
                {filteredBooks.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredBooks.map((book) => (
                            <div
                                key={book.id}
                                onClick={() => router.push(`/books/${book.id}`)}
                                className="cursor-pointer bg-slate-50 hover:bg-slate-100 transition-all duration-300 group shadow-sm hover:shadow-xl rounded-3xl overflow-hidden border border-slate-100"
                            >
                                
                                <div className="relative aspect-3/4 w-full overflow-hidden">
                                    <Image
                                        src={book.image_url}
                                        alt={book.title}
                                        
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4 z-10">
                                        <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-blue-600 uppercase border border-blue-100">
                                            {book.category}
                                        </div>
                                    </div>
                                </div>

                                
                                <div className="p-6 space-y-4">
                                    <div className="space-y-1">
                                        <h3 className="font-bold text-lg text-slate-800 truncate">
                                            {book.title}
                                        </h3>
                                        <p className="text-xs text-blue-600 font-semibold italic">by {book.author}</p>
                                    </div>

                                    <button
                                        className="w-full py-3 bg-blue-50 text-blue-600 font-bold rounded-xl flex items-center justify-center gap-2 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
                                    >
                                        View Details
                                        <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 space-y-4">
                        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
                            <BookOpen size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">No books found</h3>
                        <p className="text-slate-500">Try searching with a different title.</p>
                    </div>
                )}
            </section>
        </main>
    );
};

export default BooksPage;