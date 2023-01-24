const { Queue } = require("../queue");

test("queue - should add new item", () => {
  const queue = new Queue([1, 2, 3]);
  queue.enqueue(2);
  expect(queue.items).toEqual([1, 2, 3, 2]);
});

test("queue - should remove first item", () => {
  const queue = new Queue([1, 2, 3]);
  expect(queue.dequeue()).toBe(1);
  expect(queue.items).toEqual([2, 3]);
});

test("queue - should peek first item", () => {
  const queue = new Queue([1, 2, 3]);
  expect(queue.peek()).toBe(1);
  expect(queue.items).toEqual([1, 2, 3]);
});

test("queue - should be string", () => {
  const queue = new Queue([1, 2, 3]);
  expect(queue.toString()).toBe("1,2,3");
});

test("queue - should return size", () => {
  const queue = new Queue([1, 2, 3]);
  expect(queue.size()).toBe(3);
});

test("queue - should merge queues", () => {
  const queue = new Queue([1, 2, 3]);
  const queue1 = new Queue([4, 5, 6]);
  queue.merge(queue1);
  expect(queue.items).toEqual([1, 2, 3, 4, 5, 6]);
});

test("queue - throw error", () => {
  const queue = new Queue([1, 2, 3], 3);
  expect(() => queue.enqueue(4)).toThrowError();
});
