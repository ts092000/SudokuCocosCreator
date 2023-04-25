System.register([], function (_export, _context) {
  "use strict";

  function randomInt(n) {
    const x = Math.random() * n >> 0;
    return x === n ? n - 1 : x;
  }

  function knuthShuffle(elements, start = 0, end = elements.length) {
    if (start < 0) start = 0;
    if (end > elements.length) end = elements.length;
    if (start + 1 >= end) return;
    const N = end - start;

    for (let n = N - 1, j = end - 1; n > 0; --n, --j) {
      const i = randomInt(n) + start;
      const x = elements[i];
      elements[i] = elements[j];
      elements[j] = x;
    }
  }

  _export({
    default: knuthShuffle,
    knuthShuffle: knuthShuffle,
    randomInt: randomInt
  });

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=b6df4a5a1dcd19f1032e9e4c8c4506b54c467514.js.map