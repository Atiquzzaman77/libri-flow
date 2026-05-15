

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";


const uri = process.env.MONGODB_URI;


if (!uri) {
    console.error("❌ MONGODB_URI is not found in .env.local file!");
}

const client = new MongoClient(uri || ""); 
const db = client.db("libri-flow");

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client
    }),
    emailAndPassword: {
        enabled: true,
    },
     socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID , 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET , 
        }, 
    },
});