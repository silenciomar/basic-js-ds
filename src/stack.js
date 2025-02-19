const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() { 
    this.stack = [];
  }

  push(element) { // метод добавляет элемент в стек
    this.stack.push(element);
  }

  pop() { // метод удаляет элемент из стека
    if (this.stack === 0) return undefined;

    return this.stack.pop();
  }

  peek() { // метод возвращает элемент с верхушки стека не удаляя его оттуда
    return this.stack[this.stack.length - 1];
  }
}

module.exports = {
  Stack
};
