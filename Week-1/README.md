

```markdown
# Suntech Assignments - Week 1: JavaScript Fundamentals & Array/Object Mastery

Welcome to the repository for Week 1 core assignments. This week focused on cementing the absolute basics of JavaScript, moving rapidly from basic variable manipulations and conditional logical engines into advanced Data Structure manipulation using JavaScript Array Methods (`filter`, `map`, `reduce`, `find`, `findIndex`) and Object mutations.

---

##  How to Run These Files

Ensure you have [Node.js](https://nodejs.org/) installed on your local system.

1. Clone or navigate to your local workspace.
2. Run any specific script using the node command via your terminal:
   ```bash
   node operator.js

```

---

## What We Learned & Implemented

The assignments are strategically divided into three key pillars of foundational JavaScript programming:

### 1. Arithmetic & Logical Engines

We explored basic assignment arithmetic (`+=`, `-=`, `*=`), conditional statements (`if`), and Ternary operators to execute logic conditionally.

* **Smart Login Status Engine:** Evaluates multi-layered boolean flags (`isLoggedIn` && `isProfileComplete`) to dynamically alter UX instructions.
* **Course Price Tag Labeler:** Uses bracketed boundary logic to categorize raw numeric items into contextual tiers (`Budget`, `Standard`, `Premium`).
* **Enrollment Eligibility Checker:** Employs the single-line syntax power of **Ternary Operators** (`condition ? expr1 : expr2`) to compress eligibility routing.
* **Total Amount Calculator:** Showcases cumulative compound assignment calculations, including calculating dynamic tax payloads (`totalAmount *= 1.18`).

### 2. High-Order Array Methods (The Big 5)

A major part of this week's assignments focused on processing matrices and object arrays cleanly without writing standard loops (`for`/`while`). We learned how to manipulate data streams using 5 critical native array workflows:

| Method | Core Purpose | Data Return |
| --- | --- | --- |
| **`.filter()`** | Sifts through a dataset based on a conditional truth test. | A filtered shallow copy array. |
| **`.map()`** | Transforms every item or structural element down an assembly line. | A brand new array of equal length. |
| **`.reduce()`** | Accrues, rolls up, or consolidates a complex matrix into a single ultimate value. | A single scalar result (number, string, obj). |
| **`.find()`** | Hunts out the *very first* occurrence matching a predicate requirement. | The individual matching item element. |
| **`.findIndex()`** | Hunts down the position location pointer of a matching asset. | The positive integer index (or `-1`). |

#### Deep-Dive Use Cases Solved:

* **Daily Temperature Analyzer:** Filtered extreme heat waves, mapped values into alternative Fahrenheit structures, and tracked global averages.
* **Online Course Name Processor & Student Marks List:** Normalizing string matrices to unified formats (`.toUpperCase()`) and pulling highest peak boundaries via conditional evaluations in continuous reducers.
* **E-Commerce Shopping Carts, Employee Payroll, & Movie Streaming Engines:** Working with arrays containing real-world mock Objects. Handling nested property evaluations, structured mutations using the **Spread Operator** (`...object`), and generating total ledger balances.
* **Bank Transaction Analyzer:** Using custom conditional code directly inside a `.reduce()` method to dynamically calculate a final net value on standard ledger types (`credit` vs `debit`).

### 3. Object Construction & Mutability Guarding

We studied key-value properties, key dynamic mapping, structural pruning, and state immutability.

* **User Profile Manager:** Mutating schemas on-the-fly, generating safe structural keys dynamically using `Object.keys()`, and stripping fields completely utilizing the `delete` keyword.
* **Exam Result Summary:** Extracting numerical payload arrays from structured keys using `Object.values()` to construct cross-functional metric sums and averages.
* **Application Settings Controller:** Demonstrating production-grade security architecture by freezing an entire configurations schema map permanently with `Object.freeze()`, preventing down-stream runtime edits.

---

## Code Architecture Highlight Examples

### Dynamic Array Transformations & Aggregations

```javascript
// Transforming records while calculating financial additions on-the-fly
const payroll = employees.map(e => ({
  ...e,
  netSalary: e.salary * 1.10
}));

// Running mathematical accumulations on data tracks
const grandTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

```

### Advanced Conditional Reduction

```javascript
// Computing real-time accounting balance variations dynamically
const balance = transactions.reduce((acc, t) => {
  return t.type === "credit" ? acc + t.amount : acc - t.amount;
}, 0);

```

---

```

```