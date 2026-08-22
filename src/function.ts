// ============================================================================
// TOPIC: FUNCTIONS IN TYPESCRIPT
// Explanation: Parameters ko type dena, Explicit vs Inferred Return Types,
// Optional vs Default Parameters, aur Typed Object Arguments in Functions.
// ============================================================================

// ----------------------------------------------------------------------------
// 1. TYPED PARAMETERS
// Function parameters ke aage ': type' annotate karna mandatory hai
// taaki accidental invalid data (e.g. string in place of number) na pass ho sake.
// ----------------------------------------------------------------------------
function makeChai(type: string, cups: number) {
    console.log(`Making ${cups} cups of ${type} chai`);
}

makeChai("Masala", 2);

// ----------------------------------------------------------------------------
// 2. EXPLICIT RETURN TYPES
// Function name ke aage '(): type' likhne se TS guarantee karta hai ki
// function sirf aur sirf wahi data type return karega.
// ----------------------------------------------------------------------------
function getChaiPrice(): number {
    return 25;
}

// ----------------------------------------------------------------------------
// 3. RETURN TYPE INFERENCE & UNIONS (string vs string | null)
// ----------------------------------------------------------------------------

// Explicit return type 'string' hone ki wajeh se TS null return nahi karne dega.
function makeOrder1(order: string): string {
    if (!order) return "null"; // Must return a string!
    return order;
}

// Automatic Inference: TS dekhta hai ki ye function 'string' bhi return kar sakta hai aur 'null' bhi,
// toh return type automatically 'string | null' infer kar leta hai!
function makeOrder2(order: string) {
    if (!order) return null;
    return order;
}

// ----------------------------------------------------------------------------
// 4. VOID RETURN TYPE
// 'void' ka matlab hai ki function chalega, par koi value return nahi karega.
// ----------------------------------------------------------------------------
function logChai(): void {
    console.log("Chai is ready");
}

// ----------------------------------------------------------------------------
// 5. OPTIONAL PARAMETERS (?) VS DEFAULT PARAMETERS (=)
// ----------------------------------------------------------------------------

// Optional Parameter ('type?: string') -> Type ban jata hai 'string | undefined'
// Call karte waqt argument chhod sakte hain (undefined pass hoga).
function orderChai1(type?: string) {
    console.log(type);
}

// Default Parameter ('type: string = "Masala"') -> Type hai 'string'
// Agar argument na paas karein, toh automatically default value ("Masala") use hogi.
function orderChai2(type: string = "Masala") {
    console.log(type);
}

// ----------------------------------------------------------------------------
// 6. INLINE OBJECT ARGUMENTS WITH LITERAL UNIONS
// Complex payload parameters ko type annotate karna
// ----------------------------------------------------------------------------
function createChai(order: {
    type: string;
    sugar: number;
    size: "small" | "large";
}): number {
    return 4;
}

console.log(createChai({ type: "lemon", sugar: 2, size: "small" }));
