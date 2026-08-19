// ============================================================================
// TOPIC: UNIONS AND ANY IN TYPESCRIPT
// Explanation: Union Types (|) aapas me multiple allowed types join karte hain.
// 'any' TypeScript ka type checking off kar deta hai (jise avoid karna chahiye).
// ============================================================================

// 1. Union Types (|): Multiple allowed types assign karna
// 'runs' number bhi ho sakta hai aur string bhi.
let runs: number | string = "century";
runs = 100; // Both are valid!

// 2. Literal Union Types: Specific allowed values set karna (Enums ka lightweight alternative)
let apiRequestStatus: "pending" | "success" | "error" = "pending";
apiRequestStatus = "success"; // Valid!
// apiRequestStatus = "failed"; // TS Error: "failed" allowed values me nahi hai!

// 3. Union with undefined for variable initialization & loops
let orders = ["10", "20", "30", "40"];
let currentOrder: string | undefined; // Loop hone se pehle undefined ho sakta hai

for (let order of orders) {
    if (order === "30") {
        currentOrder = order;
        break;
    }
    currentOrder = "18";
}

console.log(currentOrder);
