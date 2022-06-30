"use strict";
console.log("hello world!!!");
function* generator(i) {
    yield i;
    yield i + 10;
    i++;
    yield i + i + 10;
}
const gen = generator(10);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
