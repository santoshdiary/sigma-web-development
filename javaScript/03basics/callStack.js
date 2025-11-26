/************* EXECUTION CONTEXT ****************/
/*What is the Execution Context?

Everything in JavaScript is wrapped inside an execution context, which is an abstract concept (can be treated as a container) that holds all the information about the environment within which the current JavaScript code is being executed.*/

/*---------Phases of the JavaScript Execution Context-------

Memory Allocation Phase: In this phase, all the functions and variables of the JavaScript code get stored as a key-value pair inside the memory component of the execution context. In the case of a function, JavaScript copied the whole function into the memory block but in the case of variables, it assigned undefined as a placeholder.

Code Execution Phase: In this phase, the JavaScript code is executed one line at a time inside the Code Component (also known as the Thread of Execution) of the Execution Context.*/

//------------------CODE EXECUTION OF JAVASCRIPT---------------
// CODE->GLOBE EXECTION CONTEXT (HOLD ON THIS VARIABLE)->MEMORY ALLOCATION PHASE->EXECTION PHASE->