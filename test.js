function sum() {
    var i,
        n = arguments.length,
        total = 0;
    for (i = 0; i < n; i += 1) {
        total += arguments[i];
    }
    return total;
}

var ten = sum(1, 2,'test', 3, 4);

console.log(ten);