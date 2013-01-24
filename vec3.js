/**
 * All js vector math libraries suck. 
 * This library assumes vectors are objects with x, y, z properties.
 */

var Vec3 = {};

// Creation 
Vec3.make = function(x, y, z) {
  return {
    x: x || 0,
    y: y || 0,
    z: z || 0
  }
}

Vec3.makeRay = function(o, d) {
  return {
    o: o,
    d: d
  }
}

// Comparing
Vec3.equal = function(a, b) {
  return a.x == b.x && 
         a.y == b.y &&
         a.z == b.z;
}

// Sizing
Vec3.length = function(a) {
  return Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z);
}


Vec3.normalize = function(a) {
  var length = Vec3.length(a);
  if(length > 0.000001) {
    a.x /= length;
    a.y /= length;
    a.z /= length;
    return a;
  }
  return 0;
}


// Math
Vec3.cross = function(a, b) {
  var result = Vec3.make();
  result.x = a.y * b.z - a.z * b.y;
  result.y = a.z * b.x - a.x * b.z;
  result.z = a.z * b.y - a.y * b.z;
  return result;
}


module.exports = Vec3;