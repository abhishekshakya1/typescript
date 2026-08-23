// ============================================================================
// TOPIC: OBJECT-ORIENTED PROGRAMMING (OOP) IN TYPESCRIPT
// Explanation: Classes, Access Modifiers (public, private, protected), Getters/Setters,
// Static Members, Abstract Classes, Parameter Properties, and Composition.
// ============================================================================

// ----------------------------------------------------------------------------
// 1. ACCESS MODIFIERS (public vs private)
// ----------------------------------------------------------------------------

class Chai {
    // public (Default): Kahin se bhi access ho sakta hai (Class, Child Class, Outside)
    public flavour: string = "Masala";

    // private: SIRF issi class ke andar access ho sakta hai. Outside access karne par TS Error aayega!
    private secretIngredients: string = "Cardamom";

    reveal() {
        return this.secretIngredients; // Valid! Class ke andar private accessible hai.
    }
}

const c = new Chai();
console.log(c.flavour); // Valid!
console.log(c.reveal()); // Valid!
// console.log(c.secretIngredients); // Error: Property 'secretIngredients' is private!

// ----------------------------------------------------------------------------
// 2. PROTECTED MODIFIER (Inhertiance & Subclasses)
// ----------------------------------------------------------------------------

class Shop {
    // protected: Iss class aur iski Child Classes (extends) me accessible hai, par outside nahi!
    protected shopName = "Chai Corner";
}

class Branch extends Shop {
    getName() {
        return this.shopName; // Valid! Child class me protected variable accessible hai.
    }
}

const b = new Branch();
console.log(b.getName()); // Valid!
// console.log(b.shopName); // Error: Property 'shopName' is protected!

// ----------------------------------------------------------------------------
// 3. ECMASCRIPT NATIVE PRIVATE FIELDS (#field)
// TS ke 'private' keyword ke alawa JS me '#field' native private syntax hai (Runtime Enforced).
// ----------------------------------------------------------------------------

class Wallet {
    #balance = 100; // Native JS private field

    getBalance() {
        return this.#balance;
    }
}

const w = new Wallet();
console.log(w.getBalance());

// ----------------------------------------------------------------------------
// 4. READONLY PROPERTIES IN CLASSES
// Readonly values sirf declaration ya Constructor me set ho sakti hain, baad me immutable hoti hain.
// ----------------------------------------------------------------------------

class Cup {
    readonly capacity: number = 250;

    constructor(capacity: number) {
        this.capacity = capacity; // Valid in constructor!
    }
}

const myCup = new Cup(300);
// myCup.capacity = 500; // Error: Cannot assign to 'capacity' because it is a read-only property.

// ----------------------------------------------------------------------------
// 5. GETTERS AND SETTERS (get / set) - Encapsulation & Validation Pattern
// Private variables ko read ('get') aur validate karke update ('set') karne ka pattern.
// ----------------------------------------------------------------------------

class ModernChai {
    private _sugar = 2;

    // Getter: Value padhne ke liye (c1.sugar)
    get sugar() {
        return this._sugar;
    }

    // Setter: Value change karne se pehle validation ke liye (c1.sugar = 3)
    set sugar(value: number) {
        if (value > 5) throw new Error("Too sweet!");
        this._sugar = value;
    }
}

const c1 = new ModernChai();
c1.sugar = 3; // Calls setter!
console.log(c1.sugar); // Calls getter!

// ----------------------------------------------------------------------------
// 6. STATIC MEMBERS (static)
// Static properties Class se judi hoti hain, Instance (new) se nahi!
// ----------------------------------------------------------------------------

class EkChai {
    // static property: Direct EkChai.shopName se access hogi
    static shopName = "Chaicode Caffe";

    // PARAMETER PROPERTY SHORTCUT:
    // 'public flavour: string' constructor me likhne se TS automatic property declare aur assign kar deta hai!
    constructor(public flavour: string) {}
}

console.log(EkChai.shopName); // Access via Class Name directly!
const ekChaiInstance = new EkChai("Elaichi");
console.log(ekChaiInstance.flavour);

// ----------------------------------------------------------------------------
// 7. ABSTRACT CLASSES ('abstract')
// Abstract class ek incomplete blueprint hoti hai jiska direct 'new' instance nahi ban sakta.
// Child classes ko mandatory saare 'abstract' methods implement karne hote hain.
// ----------------------------------------------------------------------------

abstract class Drink {
    abstract make(): void; // Pure contract: Child class ko ise define karna hi hoga!
}

class MyChai extends Drink {
    make(): void {
        console.log("Brewing Chai");
    }
}

const myChai = new MyChai();
myChai.make();
// const d = new Drink(); // Error: Cannot create an instance of an abstract class!

// ----------------------------------------------------------------------------
// 8. COMPOSITION & DEPENDENCY INJECTION PATTERN
// Class ke andar doosri Class ka instance pass karna (Production Architecture Pattern).
// ----------------------------------------------------------------------------

class Heater {
    heat() {
        console.log("Heating water...");
    }
}

class ChaiMaker {
    // Heater instance inject kiya gaya hai constructor ke zariye
    constructor(private heater: Heater) {}

    make() {
        this.heater.heat();
    }
}

const heater = new Heater();
const maker = new ChaiMaker(heater);
maker.make();