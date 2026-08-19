// ============================================================================
// TOPIC: TYPE INFERENCE VS TYPE ANNOTATION IN TYPESCRIPT
// Explanation: TypeScript khud bhi type guess (infer) karta hai,
// aur hum explicitly bhi type declare (annotate) kar sakte hain.
// ============================================================================

// 1. Type Inference (Automatic Type Assignment)
// TS khud dekh leta hai ki "chai" ek string hai, toh drink ka type automatically string ban jata hai.
let drink = "chai";

// 2. Type Inference with Ternary Operators
// Yahan cups ka type automatically 'number' infer hoga (kyunki 10 aur 5 dono numbers hain).
let cups = Math.random() > 0.5 ? 10 : 5;

let name = "Abhishek";

// 3. Type Annotation (Explicit Type Assignment)
// Jab hum khud colon (:) lagakar type specify karte hain:
let drinkFlavour: string = "lemon";
