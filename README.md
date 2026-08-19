# 🟦 TypeScript Masterclass & Hands-on Production Engineering

Welcome to my **TypeScript Mastery Repository**! 🚀  
This repository contains my structured code, hands-on experiments, production-grade type patterns, and solved practice quizzes built while mastering TypeScript for enterprise full-stack development.

---

## 🎯 Purpose & Learn In Public Initiative
- **Proof of Work:** Demonstrating deep, production-level understanding of TypeScript beyond superficial syntax.
- **Revision Reference:** A structured codebase with rich explanatory notes covering type narrowing, utility types, tuples, enums, and architecture design.
- **Target Goal:** Upgrading tech stack to build high-scale B2B SaaS applications (Next.js 15, PostgreSQL, Prisma, Redis, Docker).

---

## 📚 Topics Mastered & Code Structure

```
typescript/
├── src/
│   ├── typesInTs.ts       # Type Inference vs Explicit Type Annotations
│   ├── unionAndAny.ts     # Union Types (|), Literal Unions & 'any' vs 'unknown'
│   ├── typeNarrowing.ts   # typeof, 'in', instanceof, Custom Type Guards & Discriminated Unions
│   ├── moreTypes.ts       # Type Assertion ('as'), 'unknown' vs 'any', 'never' & Error Handling
│   ├── interfaces.ts      # Type Aliases vs Interfaces, 'implements', Intersections (&), Readonly & Optional
│   ├── object.ts          # Duck Typing / Structural Typing & Utility Types (Partial, Required, Pick, Omit)
│   ├── function.ts        # Typed Parameters, Explicit Returns, Union Returns, Void, Optional & Default Params
│   ├── ArrayEnum.ts       # Arrays, Tuples, Readonly Tuples, Tuple Mutation Gotchas, Enums & Const Enums
│   └── answer.ts          # Solved Hands-on Evaluation Quizzes & Technical Problem Solving
├── dist/                  # Compiled JavaScript Production Output (Ignored in Git)
├── tsconfig.json          # TypeScript Compiler Configuration
└── package.json           # Project Configuration
```

---

## 💡 Key Engineering Takeaways

### 1. Type Narrowing & Safety
- **`typeof` Guards:** Safe operations on primitives.
- **`in` Operator:** Narrowing interfaces and object shapes at runtime.
- **`instanceof` Guards:** Validating runtime class instances.
- **Discriminated Unions:** Tagged literal properties (`type: "masala" | "ginger"`) for deterministic state handling in APIs.

### 2. Enterprise Utility Types
- **`Partial<T>`:** Makes all properties optional (ideal for REST API `PATCH` update payloads).
- **`Required<T>`:** Enforces all optional properties to be required.
- **`Pick<T, K>`:** Creates a sub-type by selecting specified keys.
- **`Omit<T, K>`:** Excludes sensitive fields (e.g., `passwordHash`, `twoFactorSecret`) for public API responses.

### 3. Structural Typing (Duck Typing)
- Objects with matching required keys are structurally compatible, even if extra properties exist when passed via variable references.

### 4. Tuple Safety & Const Enums
- **Tuple Mutation Fix:** Regular tuples allow `.push()` due to JS array compilation. Using `readonly [string, number]` strictly locks tuple immutability.
- **`const enum` Optimization:** Zero bundle size bloat by directly inlining literal values at compile time.

---

## 🛠️ How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/abhishekshakya1/TypeScript-Learnings.git
   cd TypeScript-Learnings
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Compile TypeScript:**
   ```bash
   npx tsc
   ```

4. **Run compiled JavaScript:**
   ```bash
   node dist/ArrayEnum.js
   ```

---

**Author:** [Abhishek Kumar](https://github.com/abhishekshakya1)  
*Full Stack Developer | Continuous Learner*
