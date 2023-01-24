class Queue {
  items;
  max;
  constructor(items = [], max) {
    this.items = items;
    this.max = max;
  }

  enqueue(i) {
    if (this.items.length + 1 > this.max) {
      throw new Error("max items reached");
    }
    this.items = [...this.items, i];
  }

  dequeue() {
    const [head, ...rest] = this.items;
    this.items = rest;
    return head;
  }

  peek() {
    return this.items[0];
  }

  toString() {
    return this.items.toString();
  }

  size() {
    return this.items.length;
  }

  merge(q) {
    while (q.peek() !== undefined) {
      this.enqueue(q.dequeue());
    }
  }
}

module.exports = { Queue };
