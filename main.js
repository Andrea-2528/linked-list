import { LinkedList } from "./index.js";

const list = new LinkedList();

// TESTS
console.log("TESTS -------------------------------------------------------------");

// append
console.log("append() -------------------------------------------------------------");
console.log("append list of animals and print:");

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

// prepend
console.log("prepend() -------------------------------------------------------------");
console.log("prepend second and first node and print:");

list.prepend("lion");
list.prepend("tiger");

console.log(list.toString());

// size
console.log("size() -------------------------------------------------------------");
console.log("size of list:", list.size());

// head
console.log("head() -------------------------------------------------------------");
console.log("first node:", list.returnHead());

// tail
console.log("tail() -------------------------------------------------------------");
console.log("last node:", list.returnTail());

// at
console.log("at() -------------------------------------------------------------");
console.log("node at index 2:", list.at(2));
console.log("node at index 4:", list.at(4));
console.log("node at index 0:", list.at(0));
console.log("node at index 7:", list.at(7));
console.log("node at index 100:", list.at(100));
console.log("node at index -1:", list.at(-1));
console.log("node at index -5:", list.at(-5)); // All negative indexes return the first element, should make a case where index<0 returns null

// pop
console.log("pop() -------------------------------------------------------------");
console.log("pop last node:");
list.pop();
console.log(list.toString());

// contains
console.log("contains() -------------------------------------------------------------");
console.log("Does it contain: 'tiger'?", list.contains("tiger"));
console.log("Does it contain: 'snake'?", list.contains("snake"));
console.log("Does it contain: 'cat'?", list.contains("cat"));
console.log("Does it contain: 'test'?", list.contains("test"));
console.log("Does it contain: null?", list.contains(null));

// find
console.log("find() -------------------------------------------------------------");
console.log("Index of `tiger`:", list.find("tiger"));
console.log("Index of `snake`:", list.find("snake"));
console.log("Index of `cat`:", list.find("cat"));
console.log("Index of `test`:", list.find("test"));
console.log("Index of null:", list.find(null));

// insertAt
console.log("insertAt() -------------------------------------------------------------");
console.log(list.toString());
console.log("Insert 'gorilla' at index 6:");
list.insertAt("gorilla", 6);
console.log(list.toString());

console.log("Insert 'cow' at index 0:");
list.insertAt("cow", 0);
console.log(list.toString());

console.log("Insert 'mouse' at index 3:");
list.insertAt("mouse", 3);
console.log(list.toString());

// removeAt
console.log("removeAt() -------------------------------------------------------------");
console.log(list.toString());

console.log("Remove node at index 4:");
list.removeAt(4);
console.log(list.toString());

console.log("Remove node at index 0:");
list.removeAt(0);
console.log(list.toString());

console.log("Remove node at index 7:");
list.removeAt(7);
console.log(list.toString());