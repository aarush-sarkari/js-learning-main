// JAVASCRIPT EXECUTION CONTEXT

// Execution context is an abstract concept that holds information about the environment within which the current code is being executed. It is created whenever a function is invoked or when the global code is executed.

// There are two types of execution contexts in JavaScript:
// 1. Global Execution Context (GEC)
// 2. Function Execution Context (FEC)

// Global Execution Context (GEC):
// - Created when the JavaScript engine starts executing the code.
// - It creates a global object (window in browsers, global in Node.js) and a special object called 'this' which refers to the global object.
// - The GEC is created only once during the lifetime of the program.

// Function Execution Context (FEC):
// - Created whenever a function is invoked.
// - Each function has its own execution context, which includes its own variable environment, scope chain, and 'this' value.
// - The FEC is created every time a function is called and destroyed when the function execution is completed.

// The execution context consists of three main components:
// 1. Variable Environment: It contains all the variables, functions, and parameters defined in the current execution context.
// 2. Scope Chain: It is a list of all the variable environments that are accessible from the current execution context.
// 3. 'this' value: It refers to the object that is currently executing the code.