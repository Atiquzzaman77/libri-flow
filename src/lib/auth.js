import dns from "node:dns";
dns.setServers(['8.8.8.8','8.8.4.4']);

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

// ভেরিয়েবলটি রিড করা হচ্ছে
const uri = process.env.MONGODB_URI;

// যদি ইউরি না পাওয়া যায় তবে কনসোলে ওয়ার্নিং দেবে
if (!uri) {
    console.error("❌ MONGODB_URI is not found in .env.local file!");
}

const client = new MongoClient(uri || ""); 
const db = client.db();

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client
    }),
    emailAndPassword: {
        enabled: true,
    },
});