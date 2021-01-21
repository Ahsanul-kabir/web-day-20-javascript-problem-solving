// swap with temp variable
var a = 7;
var b = 5;

console.log('before swap a =', a, 'b =', b);

//swap
c = a;
a = b;
b = c
console.log('after swap a =', a, 'b =', b);

// now without temp variable

var x = 7;
var y = 5;

console.log('before swap x =', x, 'y =', y);

//swap
x = x + y;
y = x - y;
x = x - y;
console.log('after swap x =', x, 'y =', y);


// now swap language specific

p = 10;
q = 12;
console.log('before swap p =', p, 'q =', q);
[p, q] = [q, p];
console.log('after swap p =', p, 'q =', q);