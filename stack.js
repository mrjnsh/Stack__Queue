class Stack {
  items;
  max;
  constructor(items = [], max) {
    this.items = items;
    this.max = max;
  }
  push(item) {
    if (this.items.length + 1 > this.max) {
      throw new Error("Stack reached max");
    }
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  toString() {
    return this.items.toString();
  }
  merge(s) {
    const temp = new Stack();
    while (s.peek() !== undefined) {
      temp.push(s.pop());
    }
    // temp will be like this: 9,8,7

    while (temp.peek() !== undefined) {
      this.push(temp.pop());
    }
  }
  size() {
    return this.items.length;
  }
}

module.exports = { Stack };

/**
 * [1,2,3,4] +5 [1,2,3,4,5]
 *
 * 1 ,2, 3    +    7,8,9   -> 1,2,3,7,8,9
 */
