function soma(x, y) {
    return x + y;
}

const sub = function (x, y) {
            return x-y;
        }

console.log(sub(10, 5));
console.log(typeof sub);

function impressao(operation, x, y ) {
    const r= operation(x, y)
    console.log(r)
}

impressao(soma, 10, 15)
impressao(sub, 10, 15)
