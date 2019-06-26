/*
A set of functions for the global namespace which the worker can load and execute jobs for.
No moudle exports are used as the worker cannot handle modules. No classes are used so the
worker can just find the function by name in the global namespace.
*/
function Multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}
//# sourceMappingURL=testFunctions.js.map