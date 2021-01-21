var business = 700;
var minister = 500;
var sochib = 300;

if (business > minister) {
    if (business > sochib) {
        console.log('Business is bigger');
    } else {
        console.log('Sochib is bigger');
    }
} else {
    if (minister > sochib) {
        console.log('Minister is bigger');
    } else {
        console.log('Sochib is bigger');
    }
}

// or, Math.max();