//write your JS code here:



const OPERATIONS = [
    { operation: "push", data: [[1, 2, 3], 4, 5] },
    { operation: "+", data: [1, 2, 3] },
    { operation: "+", data: [3] },
    { operation: "*", data: [2, 3] },
    { operation: "filter", data: [[1, 2, 3], 3] },
    { operation: "merge", data: [[1, 2, 3], [4, 5], [6], [7]] },
];

batchProcessing(OPERATIONS);

function opSum(data) {
    let result = 0;
    data.forEach(element => result += element)
    return result;
}

function opMul(data) {
    let result = 1;
    data.forEach(element => { result = result * element })
    return result;
}

function opPush(data) {
    let result = data[0];
    for(let i=1; i<data.length; i++){
        result.push(data[i]);
    }
    return result;
}

function opMerge(data) {
    return data.reduce(
        (acc, curr) => [...acc, ...curr],
        []
    )
}

function opFilter(data) {
    let value = data[0];
    let result = value.filter((val) => val != data[1]);
    return result;
}

function batchProcessing(operations) {

    //for (operation in operations) solo para recorrer objetos, no funciona en este caso

    for (let i = 0; i < operations.length; i++) {
        const op = operations[i];
        switch (op.operation) {
            case "+":
                console.log(opSum(op.data));
                break;
            case "*":
                console.log(opMul(op.data));
                break;
            case "push":
                console.log(opPush(op.data));
                break;
            case "merge":
                console.log(opMerge(op.data));
                break;
            case "filter":
                console.log(opFilter(op.data));
                break;
        }
    }

    //operations.forEach()
}

/* let nota = 28;
let resul = "";

if(nota < 50){
    resul = "INS";
}
else if(nota >50 && nota<60){
    resul = "SUF";
}
else if(nota >60 && nota<70){
    resul = "BIEN";
}
else if(nota >70 && nota<80){
    resul = "NOT";
}
else{
    resul = "SOB";
}
console.log(resul);



let nArray = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < nArray.length; i++) {
    sum += nArray[i];
}


let persona = {
    nombre: "Pepito",
    direccion: "Calle la que sea",
    telefono: "12345"
};

function esPar(data){
    if(data%2 == 0)
        return true;
    return false;
}

console.log(esPar(15));

let nMayor = [5, 12, 8, 3, 23];
let resMayor = [];

function mayor(date){
    
    for (let i = 0; i < nMayor.length; i++) {
        if(nMayor[i]>10){
            resMayor.push(nMayor[i]);
        }
    }
    return resMayor;
}

console.log(resMayor);

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

function traspuesta(mat){
    for(let i = 0; i<matriz.length; i++){
        for(let j = 0; j<matriz[i].length;){

        }
    }
} */

