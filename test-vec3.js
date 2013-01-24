/**
 * Tests for Vec3.js
 */

var assert = require('assert'),
    vec3 = require('./vec3');

var a, b, c;

// Creation
a = vec3.make();
assert(a.x === 0);
assert(a.y === 0);
assert(a.z === 0);

a = vec3.make(1, 2, 3);
assert(a.x === 1);
assert(a.y === 2);
assert(a.z === 3);


// Equality
a = vec3.make(2, -2, 2);
b = vec3.make(2, -2, 2);
assert.equal(vec3.equal(a, b), true);

b.y = 2;
assert.equal(vec3.equal(a, b), false);


// Length and normalization
// (Using pathaogrean triples)
a = vec3.make(2, 3, 6);
assert(vec3.length(a) == 7);

a = vec3.make(12, 16, 21);
assert(vec3.length(a) == 29);

a = vec3.make(1, 0, 0);
vec3.normalize(a)
assert(vec3.equal(a, {x: 1, y: 0, z: 0}));

a = vec3.make(0, 0, 1);
vec3.normalize(a)
assert(vec3.equal(a, {x: 0, y: 0, z: 1}));

// Cross products