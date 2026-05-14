"use client";
import React, { useState } from "react";
import { Button } from "@heroui/react";
import { usePathname } from "next/navigation"; 
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Books", href: "/books" },
    { name: "My Profile", href: "/profile" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-lg border-b border-default-100">
      <header className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
        
        
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 no-underline text-foreground">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold italic shadow-lg shadow-primary/20">
              L
            </div>
            <span className="font-bold text-xl tracking-tight">
              LibriFlow
            </span>
          </Link>
        </div>

       
        <ul className="hidden md:flex items-center gap-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href; 
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-xl hover:scale-105 active:scale-95 no-underline 
                    ${isActive 
                      ? "bg-primary text-white shadow-md shadow-primary/20" 
                      : "text-default-600 hover:bg-default-100 hover:text-primary"
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-3">
            
            <Link href="/profile" className="text-default-600 no-underline">
              <div className="w-10 h-10 rounded-full bg-default-100 flex items-center justify-center border-2 border-default-200 shadow-sm hover:border-primary transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </Link>

            
            <Link href="/login">
            <Button
              
              size="sm"
              color="primary"
              variant="solid"
              className="font-bold rounded-xl shadow-sm shadow-primary/25 transition-transform active:scale-95"
            >
              Log in
            </Button>
            </Link>
          </div>

          
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

      
      {isMenuOpen && (
        <div className="md:hidden bg-background px-6 py-6 space-y-4 border-t border-default-100">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block text-lg font-semibold px-4 py-3 rounded-2xl transition-all no-underline
                ${pathname === link.href ? "bg-primary/10 text-primary" : "text-default-600"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4">
            <Button
              as={Link}
              href="/login"
              fullWidth
              color="primary"
              size="lg"
              className="rounded-2xl font-bold"
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