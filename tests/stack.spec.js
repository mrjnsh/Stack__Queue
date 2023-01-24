const { Stack } = require("../stack");

test("stack - should push new item", () => {
  const stack = new Stack([2, 3]);
  stack.push(1);
  expect(stack.items).toEqual([2, 3, 1]);
});

test("stack - should pop correctly", () => {
  const stack = new Stack([2, 3]);
  expect(stack.pop()).toBe(3);
  expect(stack.items).toEqual([2]);
});

test("stack - should peek correctly", () => {
  const stack = new Stack([2, 3]);
  expect(stack.peek()).toBe(3);
  expect(stack.items).toEqual([2, 3]);
});

test("stack - toString", () => {
  const stack = new Stack([1, 2]);
  expect(stack.toString()).toBe("1,2");
});

test("stack - throw error if stack reaches max items", () => {
  const stack = new Stack([2, 3], 3);
  stack.push(5);
  expect(() => stack.push(6)).toThrowError();
});

test("stack - should merge stacks correctly", () => {
  const stack1 = new Stack([1, 2, 3]);
  const stack2 = new Stack([7, 8, 9]);
  stack1.merge(stack2);
  expect(stack1.toString()).toBe("1,2,3,7,8,9");
});

test("stack - should return stack size", () => {
  const stack = new Stack([1, 2]);

  stack.push(9);
  expect(stack.size()).toBe(3);
});
