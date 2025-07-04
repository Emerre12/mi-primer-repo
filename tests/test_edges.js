const assert = require('assert');

// Build edges array logic from Tesseract.html
const edges = [];
for (let i = 0; i < 16; i++) {
  for (let j = i + 1; j < 16; j++) {
    if ([1, 2, 4, 8].includes(i ^ j)) {
      edges.push([i, j]);
    }
  }
}

assert.strictEqual(edges.length, 32, `Expected 32 edges, got ${edges.length}`);
console.log('Test passed: edges array length is', edges.length);
