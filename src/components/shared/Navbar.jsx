import { LogoOsi } from "@gravity-ui/icons";
import { Link } from "@heroui/react";

const Navbar = () => {
    // লিঙ্কের জন্য একটি অ্যারে তৈরি করুন
    const navLinks = [
        { name: "Features", href: "/features" },
        { name: "Pricing", href: "/pricing" },
        { name: "About", href: "/about" },
    ];

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-default-100 bg-background/70 backdrop-blur-lg">
            <header className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-3">
                    <LogoOsi className="text-primary w-6 h-6" />
                    <p className="font-bold text-xl">LibriFlow</p>
                </div>

                <ul className="flex items-center gap-6">
                    {/* ম্যাপ ব্যবহার করে লিঙ্কগুলো রেন্ডার করা হচ্ছে */}
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} color="foreground">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </header>
        </nav>
    );
};

export default Navbar;