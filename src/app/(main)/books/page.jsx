"use client";
import React, { useState, useEffect } from 'react';
import FeaturedBookCard from '@/components/FeaturedBookCard'; 
import { Search, Filter, BookOpen } from 'lucide-react';

const AllBooksPage = () => {
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetch('/books.json')
            .then(res => res.json())
            .then(data => {
                setBooks(data);
                setFilteredBooks(data);
                const uniqueCats = ["All", ...new Set(data.map(book => book.category))];
                setCategories(uniqueCats);
            })
            .catch(err => console.error("Error loading books:", err));
    }, []);

    useEffect(() => {
        let result = books;

        if (selectedCategory !== "All") {
            result = result.filter(book => book.category === selectedCategory);
        }

        if (searchQuery) {
            result = result.filter(book => 
                book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                book.author.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilteredBooks(result);
    }, [selectedCategory, searchQuery, books]);

    return (
        <div className="min-h-screen bg-slate-50/50 pb-20">
            
            <div className="bg-white border-b border-slate-100 py-12 mb-10">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl font-black text-slate-800 mb-4">Explore Library</h1>
                    <p className="text-slate-500 font-medium">Find your next favorite book from our collection</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-10">
                    
                    
                    <aside className="w-full lg:w-64 shrink-0">
                        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm sticky top-24">
                            <div className="flex items-center gap-2 mb-6 text-slate-800">
                                <Filter size={20} className="text-primary" />
                                <h2 className="font-black text-lg uppercase tracking-tight">Categories</h2>
                            </div>
                            
                            <div className="space-y-2">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`w-full text-left px-5 py-3 rounded-2xl font-bold transition-all ${
                                            selectedCategory === cat 
                                            ? "bg-primary text-white shadow-md shadow-primary/20 scale-105" 
                                            : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>

                  
                    <main className="flex-1">
                        
                        <div className="relative mb-8 group">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={22} />
                            <input 
                                type="text"
                                placeholder="Search by title or author..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-16 pr-6 py-5 bg-white border border-slate-100 rounded-[2rem] focus:outline-none focus:ring-4 focus:ring-primary/10 shadow-sm font-medium text-slate-700"
                            />
                        </div>

                        
                        {filteredBooks.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                                {filteredBooks.map((book) => (
                                    <FeaturedBookCard key={book.id || book._id} book={book} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-slate-200">
                                <BookOpen size={48} className="mx-auto text-slate-300 mb-4" />
                                <p className="text-slate-500 font-bold">No books found in this category.</p>
                            </div>
                        )}
                    </main>

                </div>
            </div>
        </div>
    );
};

export default AllBooksPage;