// ============================================================================
// TOPIC: GENERICS IN TYPESCRIPT (<T>)
// Explanation: Reusable, Type-Safe code components jo kisi bhi data type ke saath
// kaam karte hain bina 'any' use kiye aur exact type preserve karte hain.
// ============================================================================

// ----------------------------------------------------------------------------
// 1. GENERIC FUNCTIONS (<T>)
// <T> ek Type Placeholder hai jo passed argument ke type ko capture kar leta hai.
// ----------------------------------------------------------------------------
function wrapInArray<T>(item: T): T[] {
    return [item];
}

// TS automatically infers T = string -> returns string[]
wrapInArray("masala");

// TS automatically infers T = number -> returns number[]
wrapInArray(43);

// TS automatically infers T = { flavour: string } -> returns { flavour: string }[]
wrapInArray({ flavour: "ginger" });

// ----------------------------------------------------------------------------
// 2. MULTIPLE GENERIC TYPE PARAMETERS (<A, B>)
// Multiple independent type placeholders use karna.
// ----------------------------------------------------------------------------
function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b];
}

// Returns tuple [string, string]
pair("masala", "test");

// Returns tuple [string, { flavour: string }]
pair("namak", { flavour: "Ginger" });

// ----------------------------------------------------------------------------
// 3. GENERIC INTERFACES (Container / Box Patterns)
// Reusable wrapper interface jo container content type ko dynamically receive karti hai.
// ----------------------------------------------------------------------------
interface Box<T> {
    content: T;
}

const numberBox: Box<number> = { content: 20 };
const stringBox: Box<string> = { content: "10" };

// ----------------------------------------------------------------------------
// 4. REAL-WORLD GENERIC API RESPONSE PATTERN (ApiPromise<T>)
// Production B2B SaaS APIs me Backend API responses ke types define karne ka gold standard!
// ----------------------------------------------------------------------------
interface ApiPromise<T> {
    status: number;
    data: T; // Payload data type dynamic hai!
}

// API Response payload with custom { flavour: string } data type
const res: ApiPromise<{ flavour: string }> = {
    status: 200,
    data: { flavour: "lemon" },
};

// API Response payload with Array of numbers
const res2: ApiPromise<number[]> = {
    status: 200,
    data: [10, 20, 30],
};