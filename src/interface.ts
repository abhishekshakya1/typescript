// ============================================================================
// TOPIC: INTERFACE DEEP-DIVE IN TYPESCRIPT
// Explanation: Declaration Merging, Index Signatures, Callable Functions,
// Method Contracts, and Multiple Inheritance in Interfaces.
// ============================================================================

// ----------------------------------------------------------------------------
// 1. BASIC INTERFACE WITH OPTIONAL (?) & READONLY PROPERTIES
// ----------------------------------------------------------------------------
interface Chai {
    flavour: string;
    price: number;
    milk?: boolean; // Optional property
}

const masala: Chai = {
    flavour: "masala",
    price: 35,
};

interface Shop {
    readonly id: number; // Readonly property
    name: string;
}

const s: Shop = {
    id: 1,
    name: "Abhishek",
};
// s.id = 2; // Error: Cannot assign to 'id' because it is a read-only property!

// ----------------------------------------------------------------------------
// 2. CALLABLE FUNCTION INTERFACES (Function Signatures)
// Interface se kisi standalone function ka type contract define karna.
// ----------------------------------------------------------------------------
interface DiscountCalculator {
    (price: number): number; // Takes price: number, returns number
}

const apply50: DiscountCalculator = (p) => p * 0.5;

// ----------------------------------------------------------------------------
// 3. METHOD CONTRACTS IN INTERFACES
// Object ke andar methods ke signatures define karna.
// ----------------------------------------------------------------------------
interface TeaMachine {
    start(): void;
    stop(): void;
}

const machine: TeaMachine = {
    start() {
        console.log("start");
    },
    stop() {
        console.log("stop");
    },
};

// ----------------------------------------------------------------------------
// 4. INDEX SIGNATURES ([key: string]: ValueType)
// Dynamic Keys handling: Jab keys pehle se fix na hon (e.g. key-value rating dictionary).
// ----------------------------------------------------------------------------
interface ChaiRatings {
    [flavour: string]: Number; // Arbitrary string keys mapping to Number values
}

const ratings: ChaiRatings = {
    masala: 4.5,
    ginger: 4.8,
};

// ----------------------------------------------------------------------------
// 5. DECLARATION MERGING (Interface Feature ONLY!)
// Same name ki multiple interfaces aapas me automatic MERGE ho jaati hain.
// Note: 'type' alias me declaration merging nahi hoti (error aata hai)!
// ----------------------------------------------------------------------------
interface User {
    name: string;
}

interface User {
    age: number;
}

// User object ke paas name AND age dono honge!
const u: User = {
    name: "Abhishek",
    age: 21,
};

// ----------------------------------------------------------------------------
// 6. MULTIPLE INHERITANCE ('extends A, B')
// Interface ek se zyada parent interfaces se extend (inherit) kar sakti hai.
// ----------------------------------------------------------------------------
interface A {
    a: string;
}
interface B {
    b: string;
}

// Interface C inherits properties from BOTH A and B!
interface C extends A, B {}

const cInstance: C = {
    a: "Hello",
    b: "World",
};