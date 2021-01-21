// swap with temp variable
var business = 7;
var minister = 5;

console.log('before swap a =', business, 'b =', minister);

//swap
c = business;
business = minister;
minister = c
console.log('after swap a =', business, 'b =', minister);

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