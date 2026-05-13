import React from 'react';
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
            {/* Animated Emoji Section */}
            <div className="flex gap-4 mb-8">
                <span className="text-6xl md:text-8xl transition-all duration-500 hover:-rotate-12 hover:scale-110 cursor-default inline-block">
                    📚
                </span>
                <span className="text-6xl md:text-8xl animate-bounce transition-all duration-500 hover:rotate-12 hover:scale-110 cursor-default inline-block">
                    🧐
                </span>
                <span className="text-6xl md:text-8xl transition-all duration-500 hover:-rotate-12 hover:scale-110 cursor-default inline-block">
                    📖
                </span>
            </div>

            {/* Error Message */}
            <h1 className="text-7xl md:text-9xl font-black text-primary/20 absolute -z-10 select-none">
                404
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
                Oops! Page Not Found
            </h2>
            
            <p className="text-default-500 mt-4 max-w-md mx-auto text-lg">
                The book you are looking for might have been moved to another shelf or is currently unavailable in our digital library.
            </p>

            {/* Action Button */}
            <div className="mt-10">
                <Link 
                    href="/"
                    className="px-10 py-4 bg-primary text-white rounded-full font-bold shadow-xl shadow-primary/25 hover:bg-primary/90 transition-all flex items-center gap-2 group"
                >
                    <svg 
                        className="w-5 h-5 transition-transform group-hover:-translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Library Home
                </Link>
            </div>

            {/* Subtle Background Detail */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-20"></div>
        </div>
    );
};

export default NotFoundPage;