"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button, Card } from "@heroui/react";
import Link from 'next/link';

const FeaturedBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/books.json')
            .then((res) => res.json())
            .then((data) => {
                setBooks(data.slice(0, 4));
            })
            .catch((err) => console.error("Error fetching featured books:", err));
    }, []);

    return (
        <section className="py-20 max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                        Featured <span className="text-primary">Books</span>
                    </h2>
                    <p className="text-default-500 mt-2">Handpicked top-rated books for your next read.</p>
                </div>
                <Link href={"/books"}>
                    <Button
                        variant="flat"
                        color="primary"
                        className="font-bold rounded-xl shadow-sm"
                    >
                        View All Books
                    </Button>
                </Link>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {books.map((book) => (
                    <Card
                        key={book.id}
                        isPressable
                        className="border-none bg-default-50 hover:bg-default-100 transition-all duration-300 group shadow-md hover:shadow-xl rounded-3xl"
                    >

                        <div className="relative overflow-hidden w-full aspect-3/4">

                            <div className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-primary uppercase border border-primary/20">
                                {book.category}
                            </div>

                            <Image
                                src={book.image_url}
                                alt={book.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>


                        <div className="flex flex-col p-6 gap-3">
                            <div className="space-y-1">
                                <h3 className="font-bold text-xl text-foreground truncate">
                                    {book.title}
                                </h3>
                                <p className="text-sm text-primary font-semibold italic">by {book.author}</p>
                            </div>

                            <p className="text-sm text-default-500 line-clamp-2 h-10 leading-relaxed">
                                {book.description}
                            </p>

                            <Link href={`/books/${book.id}`}>
                                <Button
                                    variant="flat"
                                    color="primary"
                                    className="font-bold mt-2 py-6 rounded-2xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform"
                                >
                                    View Details
                                </Button>
                            </Link>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default FeaturedBooks; 