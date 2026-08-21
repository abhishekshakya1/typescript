// ============================================================================
// TOPIC: OBJECTS, STRUCTURAL TYPING & UTILITY TYPES IN TYPESCRIPT
// Explanation: TypeScript me Objects kaise behave karte hain, Duck Typing
// (Structural Typing) kya hoti hai, aur Built-in Utility Types (Partial, Pick, Omit, etc.)
// ============================================================================

// ----------------------------------------------------------------------------
// 1. INFERRED OBJECT TYPES & INLINE ANNOTATION
// ----------------------------------------------------------------------------

// Type Inference: TS automatically infers shape: { name: string; price: number; isHot: boolean }
const chai = {
    name: "Masala Chai",
    price: 20,
    isHot: true
};

// Inline Object Type Annotation
let tea: {
    name: string;
    price: number;
    isHot: boolean;
};

tea = {
    name: "Ginger Tea",
    price: 20,
    isHot: true
};

// ----------------------------------------------------------------------------
// 2. TYPE ALIASES WITH ARRAYS IN OBJECTS
// ----------------------------------------------------------------------------

type Tea = {
    name: string;
    price: number;
    ingredients: string[]; // Array of strings inside object
};

const adrakChai: Tea = {
    name: "Adrak Chai",
    price: 35,
    ingredients: ["ginger", "tea leaves", "clove"]
};

// ----------------------------------------------------------------------------
// 3. STRUCTURAL TYPING / DUCK TYPING (Crucial Concept!)
// Explanation: "If it looks like a duck and quacks like a duck, it's a duck."
// Agar ek object ke paas required keys maujood hain, toh extra keys hone par bhi
// TS reference assignment allow kar deta hai!
// ----------------------------------------------------------------------------

type Cup = { size: string };
let smallCup: Cup = { size: "200ml" };

let bigCup = { size: "500ml", material: "steel" }; // Has extra property 'material'

// VALID! Kyunki bigCup ke paas 'size: string' maujood hai (Structural Compatibility)
smallCup = bigCup;

type Brew = { brewTime: number };
const coffee = { brewTime: 5, beans: "Arabica" };
const chaiBrew: Brew = coffee; // Valid via variable reference!

// ----------------------------------------------------------------------------
// 4. NESTED OBJECT TYPES (B2B SaaS Models me use hone wala pattern)
// ----------------------------------------------------------------------------

type User = {
    username: string;
    password: string;
};

const u: User = {
    username: "abhishek",
    password: "123"
};

type Item = { name: string; quantity: number };
type Address = { street: string; pincode: number };

// Nested Types: Item[] array and Address object inside Order
type Order = {
    id: string;
    items: Item[];
    address: Address;
};

// ----------------------------------------------------------------------------
// 5. TYPESCRIPT BUILT-IN UTILITY TYPES (High-Leverage Production Features!)
// ----------------------------------------------------------------------------

type Chai = {
    name: string;
    price: number;
    isHot: boolean;
};

// A. Partial<T> - Makes ALL properties of T optional (?)
// Useful for UPDATE endpoints where user might update only 1 field (e.g. price)
const updateChai = (updates: Partial<Chai>) => {
    console.log("Updating chai with:", updates);
};

updateChai({ price: 25 });       // Valid! Only price provided
updateChai({ isHot: false });     // Valid! Only isHot provided
updateChai({});                   // Valid! Empty object provided

// B. Required<T> - Makes ALL optional (?) properties mandatory
type ChaiOrder = {
    name?: string;
    quantity?: number;
};

// Required<ChaiOrder> forces name AND quantity to be provided
const placeOrder = (order: Required<ChaiOrder>) => {
    console.log(order);
};

placeOrder({ name: "Masala Chai", quantity: 2 }); // Must pass both name and quantity

// C. Pick<T, K> - Creates a new type by SELECTING specific keys K from T
type ColdDrink = {
    name: string;
    price: number;
    isCold: boolean;
    ingredients: string[];
};

// Selects only 'name' and 'price' from ColdDrink
type BasicColdDrinkInfo = Pick<ColdDrink, "name" | "price">;

const ColdDrinkInfo: BasicColdDrinkInfo = {
    name: "Pepsi",
    price: 50
};

// D. Omit<T, K> - Creates a new type by REMOVING specific keys K from T
type ChaiNew = {
    name: string;
    price: number;
    isCold: boolean;
    secretIngredients: string;
};

// Removes 'secretIngredients' from ChaiNew (Public response model)
type PublicChai = Omit<ChaiNew, "secretIngredients">;

const publicChaiData: PublicChai = {
    name: "Special Masala Chai",
    price: 30,
    isCold: false
    // secretIngredients is excluded!
};