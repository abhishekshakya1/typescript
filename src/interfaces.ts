// ============================================================================
// TOPIC: TYPES vs INTERFACES IN TYPESCRIPT
// Explanation: Type Aliases ('type') aur 'interface' dono objects, functions,
// aur contracts define karne me use hote hain. Key differences & features below.
// ============================================================================

// ----------------------------------------------------------------------------
// 1. REUSABLE TYPE ALIASES FOR OBJECTS
// Reusable object structure ko type alias se name dete hain.
// ----------------------------------------------------------------------------
type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
};

// Clean Reusability: Multiple functions me ek hi type use kar sakte hain
function makeChai(order: ChaiOrder) {
    console.log(order);
}

function serveChai(order: ChaiOrder) {
    console.log(order);
}

// ----------------------------------------------------------------------------
// 2. CLASSES IMPLEMENTING TYPES & INTERFACES ('implements' Keyword)
// Classes contract follow karne ke liye 'implements' keyword use karti hain.
// ----------------------------------------------------------------------------
type TeaRecipe = {
    water: number;
    milk: number;
};

class MasalaChai implements TeaRecipe {
    water = 100;
    milk = 50;
}

interface CupSize {
    size: "small" | "large";
}

class Chai implements CupSize {
    size: "small" | "large" = "small";
}

// NOTE: Class kisi Union Type ko direkt 'implements' nahi kar sakti:
// type Response = {ok: true} | {ok: false};
// class MyRes implements Response { ok: boolean = true; } // TS Error!

// ----------------------------------------------------------------------------
// 3. LITERAL UNION TYPE ALIASES
// Enum ki jagah string literals ka union type banana
// ----------------------------------------------------------------------------
type TeaType = "masala" | "ginger" | "lemon";

function orderChai(t: TeaType) {
    console.log(t);
}

// ----------------------------------------------------------------------------
// 4. INTERSECTION TYPES ('&' Operator)
// Multiple Types ko aapas me COMBINE (merge) karke naya type banana.
// Interfaces me 'extends' use hota hai, Types me '&' (Intersection) use hota hai.
// ----------------------------------------------------------------------------
type BaseChai = { teaLeaves: number };
type Extra = { masala: number };

// MasaalaChai ke paas BaseChai (teaLeaves) AUR Extra (masala) DONO properties hongi!
type MasaalaChai = BaseChai & Extra;

const cup: MasaalaChai = {
    teaLeaves: 2,
    masala: 1,
};

// ----------------------------------------------------------------------------
// 5. OPTIONAL PROPERTIES ('?' Operator)
// Kuch properties ko optional (ho bhi sakti hain, nahi bhi) banana.
// ----------------------------------------------------------------------------
type User = {
    username: string;
    bio?: string; // bio optional hai (string | undefined)
};

const user1: User = { username: "Abhishek" }; // Valid without bio
const user2: User = { username: "Aman", bio: "I am on sleep mode now" }; // Valid with bio

// ----------------------------------------------------------------------------
// 6. READONLY PROPERTIES ('readonly' Keyword)
// Immutable properties jo sirf object creation ke waqt assign hoti hain aur baad me change nahi ho sakti.
// ----------------------------------------------------------------------------
type Config = {
    readonly appName: string; // Change karna allow nahi hoga!
    version: number;
};

const cfg: Config = {
    appName: "Masterji",
    version: 1,
};

// TS ERROR PREVENTED:
// cfg.appName = "Pro"; // Error: Cannot assign to 'appName' because it is a read-only property!
cfg.version = 2; // Valid! version readonly nahi hai.