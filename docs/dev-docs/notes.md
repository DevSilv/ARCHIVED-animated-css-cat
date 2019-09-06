# Notes

## Outputting parameters in JavaScript

The following is a hint to outputting parameters. If you are using an arrow function with only one expression (say, `Array.prototype.filter()`) and want to output e.g. its parameters to the console, the short way would be to append to its body the negated `console.log()` call. It would work, since functions not explicitly returning value return the `undefined` value, which is converted to `false`; the negated `false` value becomes the `true` value; lastly, the `true` value appended with the logical `AND` operator does nothing.

Example: `const item = ["a", "b", "c"].filter(elem => elem === "b" && !console.log(elem))` (note the exclamation mark before `console`).

References:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions