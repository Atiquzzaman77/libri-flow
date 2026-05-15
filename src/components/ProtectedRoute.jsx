"use client";
import { useAuth } from "@/lib/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
    const { isLoggedIn, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
       
        if (!loading && !isLoggedIn) {
            router.push("/login");
        }
    }, [isLoggedIn, loading, router]);

    
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="font-black text-slate-400 animate-pulse uppercase tracking-widest">
                    Loading...
                </div>
            </div>
        );
    }

    
    return isLoggedIn ? children : null;
};

export default ProtectedRoute;