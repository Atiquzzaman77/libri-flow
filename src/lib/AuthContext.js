"use client";
import { createContext, useContext } from "react";
import { authClient } from "@/lib/auth-client";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
    const { data: session, isPending, error } = authClient.useSession();

    const value = {
        user: session?.user || null,
        isLoggedIn: !!session?.user,
        loading: isPending,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);