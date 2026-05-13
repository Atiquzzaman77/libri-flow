"use client";
import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const LatestBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
       
        fetch('/books.json')
            .then((res) => res.json())
            .then((data) => setBooks(data))
            .catch((err) => console.error("Error fetching books:", err));
    }, []);

    return (
        <div className="bg-background py-3 select-none">
            
            <div className="max-w-7xl mx-auto px-6">
                <Marquee 
                    speed={60} 
                    gradient={false} 
                    pauseOnHover={true}
                >
                    <div className="flex items-center text-sm md:text-base font-medium text-default-600">
                        
                        <span className="text-primary font-bold mr-2">New Arrivals:</span>
                        
                        {books.length > 0 ? (
                            books.map((book, index) => (
                                <span key={book.id} className="flex items-center">
                                    {book.title}
                                    {index !== books.length - 1 ? (
                                        <span className="mx-4 opacity-30">|</span>
                                    ) : null}
                                </span>
                            ))
                        ) : (
                            <span>Loading books...</span>
                        )}

                       
                        <span className="ml-10 text-secondary font-bold flex items-center">
                            <span className="mr-4 opacity-30">|</span>
                            Special Discount on Memberships - Join Today!
                            <span className="ml-4 opacity-30">|</span>
                        </span>
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default LatestBooks;