// ============================================================================
// TOPIC: TYPE NARROWING & TYPE GUARDS IN TYPESCRIPT
// Explanation: TypeScript me Union Types (e.g. string | number) ko specific
// type me convert/check karne ki process ko "Type Narrowing" kehte hain.
// ============================================================================

// ----------------------------------------------------------------------------
// 1. typeof Guard (Primitive types like string, number, boolean check karne ke liye)
// ----------------------------------------------------------------------------
const getChai = (kind: string | number) => {
    // typeof guard: Yahan TypeScript dekhta hai ki agar 'kind' string hai,
    // toh string ke methods use ho sakte hain.
    if (typeof kind === "string") {
        return `Making ${kind} chai`;
    }

    // Yahan tak pauhanche toh TypeScript ko pata hai ki 'kind' zaroor 'number' hi hoga!
    return `chai order: ${kind}`;
};

// console.log(getChai("lemon"));
// console.log(getChai(8));

// ----------------------------------------------------------------------------
// 2. Truthiness Narrowing (null, undefined, ya empty value check karne ke liye)
// ----------------------------------------------------------------------------
function serveChai(msg?: string) {
    // Truthiness guard: 'msg?' optional parameter hai (string | undefined).
    // 'if (msg)' check karta hai ki value undefined ya null toh nahi hai.
    if (msg) {
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}

// console.log(serveChai("ginger"));
// console.log(serveChai());

// ----------------------------------------------------------------------------
// 3. Equality & Literal Union Narrowing (Specific string literals check karne ke liye)
// ----------------------------------------------------------------------------
function orderChai(size: "small" | "medium" | "large" | number) {
    if (size === "small") {
        return `small cutting chai`;
    }

    if (size === "medium" || size === "large") {
        return `make extra chai`;
    }

    // Yahan size ka type narrowed hokar sirf 'number' bacha hai!
    return `chai order ${size}`;
}

// ----------------------------------------------------------------------------
// 4. instanceof Guard (Runtime Class Objects check karne ke liye)
// Note: instanceof sirf classes par kaam karta hai (Interfaces/Types par nahi).
// ----------------------------------------------------------------------------
class KulhadChai {
    serve() {
        return `Serving Kulhad Chai`;
    }
}

class CuttingChai {
    serve() {
        return `Serving Cutting Chai`;
    }
}

function serve(chai: KulhadChai | CuttingChai) {
    // instanceof check karta hai ki 'chai' Object KulhadChai class ka instance hai ya nahi
    if (chai instanceof KulhadChai) {
        return chai.serve();
    }

    return chai.serve();
}

// ----------------------------------------------------------------------------
// 5. Custom Type Predicate / Type Guard (obj is CustomType)
// Custom validation functions ke liye 'arg is Type' return type use hota hai.
// ----------------------------------------------------------------------------
type ChaiOrder = {
    type: string;
    sugar: number;
};

// 'obj is ChaiOrder' se TS samajh jata hai ki jab function 'true' return karega,
// tab 'obj' sach me 'ChaiOrder' structure ka object hai.
function isChaiOrder(obj: any): obj is ChaiOrder {
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    );
}

function serveOrder(item: ChaiOrder | string) {
    if (isChaiOrder(item)) {
        // TS ko pata chal gaya ki item ChaiOrder hai, toh item.sugar & item.type safely access kar sakte hain!
        return `Serving ${item.type} chai with ${item.sugar}`;
    }

    return `Serving custom chai: ${item}`;
}

// ----------------------------------------------------------------------------
// 6. Discriminated Unions / Tagged Unions (Common 'type' key se shapes alag karna)
// Production B2B APIs & Redux Reducers me ye pattern sabse zyada use hota hai.
// ----------------------------------------------------------------------------
type MasalaChai = {
    type: "masala"; // Tagged literal property
    spicelevel: number;
};

type GingerChai = {
    type: "ginger"; // Tagged literal property
    amount: number;
};

type ElaichiChai = {
    type: "elaichi"; // Tagged literal property
    aroma: number;
};

type Chai = MasalaChai | GingerChai | ElaichiChai;

function makeChai(order: Chai) {
    // switch statement common 'type' property par narrow kar raha hai
    switch (order.type) {
        case "masala":
            return "Masala Chai";
        case "ginger":
            return "Ginger Chai";
        case "elaichi":
            return "Elaichi Chai";
    }
}

// ----------------------------------------------------------------------------
// 7. 'in' Operator Guard (Object Key Presence Check)
// Interface/Types me property ki presence se narrowing karne ke liye.
// ----------------------------------------------------------------------------
function brew(order: MasalaChai | GingerChai) {
    // 'in' operator check karta hai ki 'spicelevel' key 'order' object me maujood hai ya nahi
    if ("spicelevel" in order) {
        // Yahan TS samajh gaya ki order 'MasalaChai' hai!
        console.log("Spice level is:", order.spicelevel);
    }
}

// ----------------------------------------------------------------------------
// 8. Custom Array Type Guard (arr is string[])
// ----------------------------------------------------------------------------
function isStringArray(arr: unknown): arr is string[] {
    // Check if it's an Array AND every item is of type string
    if (Array.isArray(arr)) {
        return arr.every((item) => typeof item === "string");
    }
    return false;
}
