var fruits = ['Apple', 'Watermelon'];
    alert ("Create array Fruits:\n\n" + fruits);
fruits.push('Strawberry');
    alert ('Add to the end of the array Strawberry:\n\n' + fruits);
fruits.splice(-2, 1, 'Melon');
    alert ('Replace second to last element on the melon:\n\n' + fruits);
    alert ('The Length of the array:\n\n' + fruits.length);
fruits.shift();
    alert ('Delete the first value with changes length of array:\n\n' + fruits);
    alert ('The Length of the array:\n\n' + fruits.length);
fruits.unshift('Banana', 'Cherry');
    alert ('Prepend two elements Banana & Cherry:\n\n' + fruits);
    ////////////////////////////////////////////////////////////////
fruits = fruits.filter(i=>fruits.indexOf(i)%2===0);
fruits = fruits.map(a => a.toUpperCase());
    alert ('Modify elements of array with even number index to Up case:\n\n' + fruits);
fruits = fruits.map(i => i.toLowerCase());     
    alert ('Modify array to low case:\n\n' + fruits);
