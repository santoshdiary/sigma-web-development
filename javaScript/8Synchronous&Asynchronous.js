/**********************  SYNCHRONOUS AND ASYNCHRONOUS JAVASCRIPT  *********************************/

//https://www.geeksforgeeks.org/javascript/synchronous-and-asynchronous-in-javascript/

/*What is Synchronous JavaScript?
In synchronous programming, operations are performed one after the other, in sequence. So, basically each line of code waits for the previous one to finish before proceeding to the next. This means that the program executes in a predictable, linear order, with each task being completed before the next one starts.

This is straightforward and easy to follow, but it has some drawbacks, especially when dealing with time-consuming tasks like fetching data from a server or reading a large file. If such a task is included in the sequence, it will block the execution of the rest of the code until it’s finished, leading to potential delays and a bad user experience.
// console.log("Hi");
// console.log("Geek");
// console.log("How are you?");

*/

/*What is Asynchronous JavaScript?
Asynchronous programming, on the other hand, allows multiple tasks to run independently of each other. In asynchronous code, a task can be initiated, and while waiting for it to complete, other tasks can proceed. This non-blocking nature helps improve performance and responsiveness, especially in web applications.
console.log("Hi");

// setTimeout(() => {
//     console.log("Geek");
// }, 2000);

// console.log("End");

So, what the code does is first it logs in Hi then rather than executing the setTimeout function it logs in End and then it runs the setTimeout function.

At first, as usual, the Hi statement got logged in. As we use browsers to run JavaScript, there are the "web APIs" that handle these things for users. So, what JavaScript does is, it passes the setTimeout function in such web API and then we keep on running our code as usual. So it does not block the rest of the code from executing and after all the code its execution, it gets pushed to the call stack and then finally gets executed. This is what happens in asynchronous JavaScript.
*/
