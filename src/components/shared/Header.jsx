"use client";
import React from 'react';
import { Button } from "@heroui/react";
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <section className="relative bg-background py-20 lg:py-32 overflow-hidden flex items-center justify-center">
            
            
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-4xl mx-auto px-6 text-center">
                
                
                <div className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
                    Discover Your Next Adventure
                </div>
                
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                    Find Your <br />
                    <span className="text-primary">Next Read</span>
                </h1>
                
                
                <p className="mt-8 text-lg md:text-xl text-default-600 max-w-2xl mx-auto leading-relaxed">
                    A seamless and modern web application designed to digitize the traditional library experience. 
                    Explore our vast collection from the JSON database and borrow your favorite titles digitally.
                </p>
                
                
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
                    <Link href={"/books"}>
                    <Button  
                        size="lg"
                        className="w-full sm:w-auto px-10 py-7 bg-primary text-white rounded-full font-bold hover:scale-105 transition-transform shadow-xl shadow-primary/25 text-lg"
                    >
                        Browse Now
                    </Button>
                    </Link>
                    <Link href="/signup">
                    <Button 
                        // as={Link}
                        // href="/signup"
                        variant="bordered"
                        size="lg"
                        className="w-full sm:w-auto px-10 py-7 border-2 border-default-200 text-foreground rounded-full font-bold hover:bg-default-100 transition-colors text-lg"
                    >
                        Register Now
                    </Button></Link>
                </div>

                
                <div className="mt-12 flex flex-col items-center gap-4">
                    <div className="flex -space-x-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="w-10 h-10 rounded-full bg-default-200 border-2 border-background flex items-center justify-center font-bold text-[10px] shadow-sm overflow-hidden">
                                <Image
                                    src={`https://i.pravatar.cc/150?u=atiq${i}`} 
                                    alt="user" 
                                    height={40}
                                    width={40}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-default-500 font-medium">
                        Join <span className="text-foreground font-bold">1,200+</span> book lovers exploring digitally
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Header;