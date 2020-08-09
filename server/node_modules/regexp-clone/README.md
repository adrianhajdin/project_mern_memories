#regexp-clone
==============

Clones RegExps with flag and `lastIndex` preservation.

```js
const regexpClone = require('regexp-clone');

const a = /somethin/misguy;
console.log(a.global); // true
console.log(a.ignoreCase); // true
console.log(a.multiline); // true
console.log(a.dotAll); // true
console.log(a.unicode); // true
console.log(a.sticky); // true

const b = regexpClone(a);
console.log(b.global); // true
console.log(b.ignoreCase); // true
console.log(b.multiline); // true
console.log(b.dotAll); // true
console.log(b.unicode); // true
console.log(b.sticky); // true

const c = /hi/g;
c.test('this string hi there');
assert.strictEqual(c.lastIndex, 3);

const d = regexpClone(c);
assert.strictEqual(d.lastIndex, 3);
d.test('this string hi there');
assert.strictEqual(d.lastIndex, 14);
assert.strictEqual(c.lastIndex, 3);
```

```
npm install regexp-clone
```

## License

[MIT](https://github.com/aheckmann/regexp-clone/blob/master/LICENSE)
