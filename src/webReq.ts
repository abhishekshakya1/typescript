// ============================================================================
// TOPIC: AXIOS WITH TYPESCRIPT, GENERICS & AXIOS ERROR GUARDS
// Explanation: Production APIs me Axios ko generic interfaces ke saath use karna,
// response data ko type-safe banana, aur Axios errors ko safely handle karna.
// ============================================================================

import axios, { type AxiosResponse } from "axios";

// 1. API Response Model Interface
interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

// 2. Strongly-Typed Axios Async GET Request
const fetchData = async () => {
    try {
        // AxiosResponse<Todo> ya axios.get<Todo>() se response.data ka type 'Todo' ban jata hai
        const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        
        // Autocompletion available for response.data.title, response.data.completed, etc.
        console.log("Todo", response.data);

    } catch (error: unknown) { // Type 'unknown' for safe error handling
        // axios.isAxiosError(error) ek built-in Type Guard hai jo confirm karta hai ki error Axios HTTP Error hai
        if (axios.isAxiosError(error)) {
            console.log("Axios Error Message:", error.message);
            
            // HTTP Status Code (404, 500, etc.) check karne ke liye:
            if (error.response) {
                console.log("HTTP Status Code:", error.response.status);
            }
        } else {
            console.log("Non-Axios General Error:", error);
        }
    }
};

fetchData();

// ----------------------------------------------------------------------------
// 3. TYPE DEFINITIONS & DECLARATION FILES (.d.ts)
// ----------------------------------------------------------------------------
// Jab hum npm se koi purani JavaScript library install karte hain:
// npm install legacy-library
// Unme TS types nahi hote. Unke TypeScript types community-driven `@types` package se milte hain:
// npm install -D @types/legacy-library
//
// Ye `.d.ts` (Declaration Files) TypeScript ko batati hain ki JS library ke functions aur objects ka structure kya hai.