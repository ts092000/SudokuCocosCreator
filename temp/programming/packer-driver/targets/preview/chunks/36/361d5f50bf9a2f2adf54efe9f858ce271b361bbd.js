System.register([], function (_export, _context) {
  "use strict";

  function randomInt(n) {
    var x = Math.random() * n >> 0;
    return x === n ? n - 1 : x;
  }

  function knuthShuffle(elements, start, end) {
    if (start === void 0) {
      start = 0;
    }

    if (end === void 0) {
      end = elements.length;
    }

    if (start < 0) start = 0;
    if (end > elements.length) end = elements.length;
    if (start + 1 >= end) return;
    var N = end - start;

    for (var n = N - 1, j = end - 1; n > 0; --n, --j) {
      var i = randomInt(n) + start;
      var x = elements[i];
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
//# sourceMappingURL=361d5f50bf9a2f2adf54efe9f858ce271b361bbd.js.map