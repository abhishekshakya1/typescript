// ============================================================================
// TOPIC: TYPE ASSERTION, TYPE UNKNOWN, AND TYPE NEVER IN TYPESCRIPT
// Explanation: Advanced TypeScript types jo real-world APIs, DOM elements,
// error handling, aur exhaustive checking me use hote hain.
// ============================================================================

// ----------------------------------------------------------------------------
// 1. TYPE ASSERTION ('as' Syntax)
// Explanation: Jab aapko (developer ko) TypeScript se zyada pata hota hai ki
// variable ka exact type kya hai, tab aap 'as Type' se TS ko override karte ho.
// ----------------------------------------------------------------------------

let response: any = "42";
// TS ko bol rahe hain: "Bhai mujhe pata hai ye string hai, iska .length do!"
let numericLength: number = (response as string).length;

type Book = {
    name: string;
};

let bookString = `{"name":"Who Moved My Cheese"}`;

// JSON.parse() return type 'any' deta hai. 'as Book' se hum isey custom Book type me assert kar rahe hain.
let bookObject = JSON.parse(bookString) as Book;
console.log(bookObject.name);

// DOM Manipulation Example:
// document.getElementById() 'HTMLElement | null' deta hai.
// 'as HTMLInputElement' se hum TS ko batate hain ki ye Specifically <input> tag hai (jisse .value access ho sake).
const inputElements = document.getElementById("username") as HTMLInputElement;

// ----------------------------------------------------------------------------
// 2. 'any' VS 'unknown' (Sabse Important Difference!)
// 'any' = Type safety Completely OFF (Dangerous! Runtime crash ho sakta hai).
// 'unknown' = Type Safety ON (Safe! Pehle type check / narrowing karna padega).
// ----------------------------------------------------------------------------

// DANGEROUS USE OF 'any':
let value: any;
value = "chai";
value = [1, 2, 3];
value = 2.5;
// TS yahan type check nahi karega, par agar runtime me value number hui toh toUpperCase() crash kar dega!
value.toUpperCase();

// SAFE USE OF 'unknown':
let newValue: unknown;
newValue = "chai";
newValue = [1, 2, 3];
newValue = 2.5;

// TS compilation error dega agar hum direct 'newValue.toUpperCase()' likhenge.
// Isliye pehle type narrowing (typeof check) zaroori hai:
if (typeof newValue === "string") {
    console.log(newValue.toUpperCase()); // SAFE!
}

// ----------------------------------------------------------------------------
// 3. TRY...CATCH ERROR HANDLING WITH 'unknown'
// Modern TypeScript me catch(error) ka default type 'unknown' hota hai.
// ----------------------------------------------------------------------------

try {
    // Something that might fail
} catch (error) {
    // 'error' unknown hai, isliye pehle instanceof Error check karte hain
    if (error instanceof Error) {
        console.log(error.message); // Safe access to error.message
    } else {
        console.log("Unknown Error:", error);
    }
}

// Re-asserting unknown data:
const data: unknown = "chai aur code";
const strData: string = data as string; // Asserting unknown to string

// ----------------------------------------------------------------------------
// 4. TYPE 'never' (Values that NEVER occur / Unreachable Code)
// 'never' tab use hota hai jab function KABHI return nahi karta (e.g. error throw kare ya infinite loop ho).
// ----------------------------------------------------------------------------

type Role = "admin" | "user" | "superadmin";

function redirectBasedOnRole(role: Role): void {
    if (role === "admin") {
        console.log("Redirecting to admin dashboard");
        return;
    }

    if (role === "user") {
        console.log("Redirecting to user dashboard");
        return;
    }

    // Yahan agar hum superadmin miss kar dein, toh TS exhaustive check me alert kar sakta hai
    role;
}

// Function that never returns (Infinite Loop ya Error Throw)
function neverReturn(): never {
    while (true) {}
}

function throwError(message: string): never {
    throw new Error(message); // Function throws error, execution stops immediately!
};



