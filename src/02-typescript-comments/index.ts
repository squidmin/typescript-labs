/**
 * Typescript's comments are like JavaScript's with one exception
 */


/**
 * Comments in TypeScript use the same syntax as JavaScript. So, you can use the double-slash
 *   for single-line comments or use slash stars to open a block of comments and a star slash to
 *   close the block.
 * A use of slash star /* is for JSDoc style or to comment on a big block of comments.
 * You can cause TypeScript to not emit any comments using the compiler option 'removeComments'.
 */

let x = 1;  // This is a single line comment

/* This can be spread on
multiple
lines */
let y = 2;

/**
 * One little detail you should know about TypeScript is about the starting comment at the
 *   top of a file. A special syntax with the slash star followed by an exclamation mark /*!
 *   tells TypeScript to keep the comment while transforming TypeScript into JavaScript.
 * The comment remains present even if the compiler option 'removeComments' is true.
 */

/**
 * The exclamation point's main goal is to keep the copyright at the top of the generated file
 *   that has been written in TypeScript and needs to be propagated to the generated JavaScript.
 */


export {};