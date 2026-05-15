
"use client";
import React, { useEffect, useState } from 'react';
import FeaturedBookCard from '../FeaturedBookCard';


const FeaturedBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/books.json') 
            .then(res => res.json())
            .then(data => {
              
                setBooks(data.slice(0, 4)); 
            })
            .catch(err => console.error("Error fetching books:", err));
    }, []);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-black text-slate-800 mb-10 text-center">Featured Books</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                   
                    {books && books.length > 0 && books.map((book) => (
                        <FeaturedBookCard key={book.id || book._id} book={book} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedBooks;