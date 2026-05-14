"use client";

// import { HeroUIProvider } from "@heroui/react";
// যদি উপরের লাইনে এরর দেয়, তবে এটি ট্রাই করুন: 
import { NextUIProvider as HeroUIProvider } from "@heroui/react";

import { useRouter } from 'next/navigation';

export function Providers({ children }) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      {children}
    </HeroUIProvider>
  );
}