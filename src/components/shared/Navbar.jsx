"use client";

import React, { useState } from "react";
import { Button } from "@heroui/react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Books", href: "/books" },
    { name: "My Profile", href: "/profile" },
  ];

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.refresh();
        },
      },
    });
  };

  const AvatarPlaceholder =
    "https://cdn-icons-png.flaticon.com/512/149/149071.png";

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-lg border-b border-default-100">
      <header className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 no-underline text-foreground"
          >
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
                  ${
                    isActive
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
            {user ? (
              <div className="flex items-center gap-3 bg-default-50 py-1 pl-1 pr-3 rounded-2xl shadow-sm shadow-primary/10">
                <Link
                  href="/profile"
                  className="w-10 h-10 rounded-full overflow-hidden shadow-sm hover:border-primary transition-all"
                >
                  <Image
                    src={user?.image || AvatarPlaceholder}
                    alt="Profile"
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </Link>

                <div className="flex flex-col">
                  <span className="text-xs font-bold text-foreground line-clamp-1 max-w-25">
                    {user?.name}
                  </span>

                  <button
                    onClick={handleLogout}
                    className="text-[10px] font-black uppercase tracking-tighter text-danger hover:underline text-left"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
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
            )}
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
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
              ${
                pathname === link.href
                  ? "bg-primary/10 text-primary"
                  : "text-default-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-4 border-t border-default-100">
            {user ? (
              <div className="space-y-4">
                <div className="flex items-center gap-3 px-4">
                  <Image
                    src={user?.image || AvatarPlaceholder}
                    alt="Profile"
                    width={44}
                    height={44}
                    className="rounded-full border-2 border-primary"
                  />

                  <span className="font-bold text-foreground">
                    {user?.name}
                  </span>
                </div>

                <Button
                  fullWidth
                  color="danger"
                  variant="flat"
                  className="rounded-2xl font-bold"
                  onClick={async () => {
                    await authClient.signOut({
                      fetchOptions: {
                        onSuccess: () => {
                          router.refresh();
                        },
                      },
                    });

                    setIsMenuOpen(false);
                  }}
                >
                  Logout
                </Button>
              </div>
            ) : (
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
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;