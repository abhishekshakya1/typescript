// ============================================================================
// TOPIC: ARRAYS, TUPLES, AND ENUMS IN TYPESCRIPT
// Explanation: TypeScript me fixed arrays, tuple element ordering, tuple mutation gotchas,
// aur numeric/string/const Enums ka complete usage.
// ============================================================================

// ----------------------------------------------------------------------------
// 1. ARRAYS IN TYPESCRIPT
// ----------------------------------------------------------------------------

// Standard Type[] syntax
const chaiFlavours: string[] = ["Masala", "Adrak"];
const chaiPrice: number[] = [25, 35];

// Array<Type> Generic Syntax (Both string[] and Array<string> are identical)
const rating: Array<number> = [4.5, 5.2];

type Chai = {
    name: string;
    price: number;
};

// Array of custom Objects (Chai[])
const menu: Chai[] = [
    { name: "Lemon tea", price: 25 },
    { name: "Ginger tea", price: 35 },
    { name: "Black tea", price: 45 }
];

menu.push({ name: "Masala tea", price: 55 });

// Readonly Array: Modifications (like .push(), .pop()) are strictly prohibited!
const cities: readonly string[] = ["Faridabad", "Jaipur"];
// cities.push("Goa"); // Error: Property 'push' does not exist on type 'readonly string[]'.

// 2D Array Matrix (Array of Arrays)
const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
];

// ----------------------------------------------------------------------------
// 2. TUPLES IN TYPESCRIPT (Fixed Length & Ordered Type Arrays)
// ----------------------------------------------------------------------------

// Fixed Order: 1st element MUST be string, 2nd element MUST be number
let chaiTuple: [string, number];
chaiTuple = ["Masala chai", 2];
// chaiTuple = [2, "Masala chai"]; // Error: Order mismatched!

// Optional Elements in Tuple (?)
let userInfo: [string, number, boolean?];
userInfo = ["Abhishek", 22, true];
userInfo = ["Aman", 18]; // Valid without boolean!

// Readonly Tuple: Strictly prevents .push() or .pop() mutations!
const locationData: readonly [string, number] = ["Goa", 121008];

// Named Tuple Elements (Improves autocompletion & readability in IDEs)
const chaiItems: [name: string, price: number] = ["Masala chai", 35];

// ⚠️ THE TUPLE MUTATION GOTCHA IN TYPESCRIPT:
// JavaScript me tuples exist nahi karte, wo normal JS Arrays me compile hote hain.
// Isliye standard tuple par .push() compile hone deta hai:
let t: [string, number] = ["aman", 18];
console.log(t);
t.push("extra"); // Works at JS runtime! To prevent this, use 'readonly [string, number]'.
console.log(t);

// ----------------------------------------------------------------------------
// 3. ENUMS IN TYPESCRIPT (Named Constants)
// ----------------------------------------------------------------------------

// A. Numeric Enum (Default starts at 0: SMALL = 0, MEDIUM = 1, LARGE = 2)
enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.SMALL;

// B. Custom Auto-Incrementing Numeric Enum (PENDING = 100, SERVED = 101, CANCELLED = 102)
enum Status {
    PENDING = 100,
    SERVED,
    CANCELLED
}

// C. String Enum (Must explicitly assign strings to all members)
enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
}

function makeChai(type: ChaiType) {
    console.log(`Making ${type}`);
}

makeChai(ChaiType.GINGER);
// makeChai("masala"); // Error: Argument must be ChaiType.GINGER or ChaiType.MASALA!

// D. Heterogeneous Enum (Mix of numbers and strings - Generally Avoid in Production)
enum RandomEnum {
    ID = 1,
    NAME = "abhishek"
}

// E. Const Enum (Performance-Optimized!)
// 'const enum' compiled JS me extra Enum Object code generate nahi karta,
// wo direkt values inline paste kar deta hai (zero bundle size bloat).
const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

const s = Sugars.HIGH; // Compiles directly to: const s = 3; in JS!
