"use client";
import React from 'react';
import { Link } from "@heroui/react";
// সাধারণ আইকনগুলো Lucide থেকেই থাকল (এগুলোতে সমস্যা নেই)
import { 
  Mail, 
  MapPin, 
  Phone,
  ArrowRight
} from "lucide-react";

// সোশ্যাল আইকনগুলোর জন্য FontAwesome (react-icons) ব্যবহার করা হয়েছে
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn 
} from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Icon component গুলো আপডেট করা হয়েছে
    const socialLinks = [
        { Icon: FaFacebookF, href: "https://facebook.com", name: "Facebook" },
        { Icon: FaTwitter, href: "https://twitter.com", name: "Twitter" },
        { Icon: FaInstagram, href: "https://instagram.com", name: "Instagram" },
        { Icon: FaLinkedinIn, href: "https://linkedin.com", name: "LinkedIn" },
    ];

    const footerLinks = [
        { name: "Home", href: "/" },
        { name: "All Books", href: "/books" },
        { name: "Categories", href: "/categories" },
        { name: "My Profile", href: "/profile" },
    ];

    return (
        <footer className="bg-background border-t border-default-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center text-white font-bold italic shadow-lg shadow-primary/20">
                                L
                            </div>
                            <span className="font-bold text-2xl text-neutral-700 tracking-tight">
                                LibriFlow
                            </span>
                        </div>
                        <p className="text-default-500 text-sm leading-relaxed max-w-xs">
                            A modern digital library platform designed to make reading and borrowing books easier than ever. Join our community of readers today.
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    underline="none"
                                    className="w-10 h-10 rounded-xl bg-default-50 flex items-center justify-center border border-default-200 text-default-500 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm"
                                >
                                    <social.Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-foreground text-lg mb-6">Quick Explore</h4>
                        <ul className="space-y-4">
                            {footerLinks.map((item) => (
                                <li key={item.name}>
                                    <Link 
                                        href={item.href}
                                        underline="none"
                                        className="text-default-500 hover:text-primary text-sm flex items-center gap-2 group transition-colors"
                                    >
                                        <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h4 className="font-bold text-foreground text-lg mb-6">Contact Us</h4>
                        <div className="space-y-5">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <MapPin size={18} />
                                </div>
                                <p className="text-sm text-default-500 leading-snug">
                                    Dinajpur Polytechnic Institute,<br />Dinajpur, Bangladesh
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Mail size={18} />
                                </div>
                                <Link href="mailto:info@libriflow.com" underline="none" className="text-sm text-default-500 hover:text-primary transition-colors">
                                    info@libriflow.com
                                </Link>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Phone size={18} />
                                </div>
                                <p className="text-sm text-default-500">+880 1XXX XXXXXX</p>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter or Extra Info */}
                    <div>
                        <h4 className="font-bold text-foreground text-lg mb-6">About the Project</h4>
                        <p className="text-sm text-default-500 leading-relaxed">
                            LibriFlow is built with Next.js 15, Tailwind CSS, and HeroUI to provide the best user experience for book enthusiasts.
                        </p>
                        <div className="mt-6 p-4 bg-default-50 rounded-2xl border border-default-100 text-[12px] text-default-400 italic">
                            &quot;Books are a uniquely portable magic.&quot;
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-default-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-default-400 text-xs font-medium">
                        © {currentYear} <span className="text-primary">LibriFlow</span>. Made with ❤️ for Readers.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" underline="none" className="text-xs text-default-400 hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" underline="none" className="text-xs text-default-400 hover:text-primary transition-colors">Terms of Service</Link>
                        <Link href="#" underline="none" className="text-xs text-default-400 hover:text-primary transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;