// ============================================================================
// TOPIC: NATIVE FETCH API WITH TYPESCRIPT
// Explanation: Browser/Node.js native fetch() API ko type-safe banana,
// HTTP response.ok check karna, aur JSON payload parse karna.
// ============================================================================

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const fetchData = async () => {
    try {
        // fetch() returns Promise<Response>
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

        // response.ok boolean status check karta hai (200-299 status code ke liye true)
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }

        // response.json() Promise<any> return karta hai.
        // 'const data: Todo' type annotation se parsed JSON payload type-safe ban jata hai.
        const data: Todo = await response.json();
        console.log("Todo: ", data);

    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log("Fetch Error:", error.message);
        } else {
            console.log("Unknown Fetch Error:", error);
        }
    }
};

fetchData();