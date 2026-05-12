"use client";
import React, { useState } from "react";
import { Link, Button } from "@heroui/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Books", href: "/books" },
    { name: "My Profile", href: "/profile" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-lg border-b border-default-100">
      <header className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 no-underline">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold italic shadow-lg shadow-primary/20">
              L
            </div>
            <span className="font-bold text-xl text-neutral-700 tracking-tight">
              LibriFlow
            </span>
          </Link>
        </div>

        {/* Center Links - Clean Boxed with No Underline */}
        <ul className="hidden md:flex items-center gap-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                // underline="none" ব্যবহার করে নিচের বর্ডার সরানো হয়েছে
                underline="none"
                className="relative px-5 py-2 text-sm font-medium  transition-all duration-300 rounded-xl hover:bg-default-100 hover:text-primary hover:scale-105 hover:shadow-lg hover:shadow-primary/5 active:scale-95"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* User Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-3">
            {/* User Icon */}
            <div className="w-9 h-9 rounded-full bg-default-50 flex items-center justify-center border border-default-200">
              <svg className="w-5 h-5 text-default-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            
            {/* Login Button - Color restored and underline removed */}
            <Button 
              as={Link} 
              href="/auth/login" 
              size="sm" 
              color="primary" // আপনার প্রাইমারি কালার
              variant="solid" 
              className="font-bold rounded-xl shadow-sm shadow-primary/25 no-underline transition-transform active:scale-95"
            >
              Log in
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden bg-background px-6 py-6 space-y-4 border-t border-default-100">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              underline="none"
              className="block text-lg font-semibold text-default-600 px-4 py-3 rounded-2xl hover:bg-default-50 hover:text-primary transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 px-2">
            <Button 
              as={Link} 
              href="/auth/login" 
              fullWidth 
              color="primary"
              size="lg"
              className="rounded-2xl font-bold no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Log in
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;