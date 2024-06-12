let cuotasInput = document.getElementById('cuotas');
let precioInput = document.getElementById('precio');
let interesInput = document.getElementById('interes');
let saldoInput = document.getElementById('saldo');
let cuotas = 1;
let precio = 1;
let interes = 1;
let saldo = 100_000;

cuotasInput.oninput = e => cuotas = parseInt(cuotasInput.value);
precioInput.oninput = e => precio = parseInt(precioInput.value);
interesInput.oninput = e => interes = parseInt(interesInput.value);
saldoInput.oninput = e => saldo = parseInt(saldoInput.value);

function calcularCuotas(cuotasAux, precioAux, interesAux) {
    let preciofinalcuotas = precioAux;
    if (interesAux == 0 && cuotasAux == 1) {
        return preciofinalcuotas;
    } else {
        preciofinalcuotas = (precioAux + (precioAux * (interesAux / 100))) / cuotasAux;
        console.log();
        return preciofinalcuotas;
    }
}

let preciofinalcuotas = calcularCuotas(cuotas, precio, interes);


function calcularCuotasConInputs() {
    console.log(calcularCuotas(cuotas, precio, interes))
}

console.log(`el valor final de cada cuota es: ${calcularCuotas(cuotas, precio, interes)}`);
//algo tenia que hacer con un loop

function calcSaldo(saldo) {
    let aux = 1
    while (aux <= cuotas) {
        saldo = saldo - calcularCuotas(cuotas, precio, interes);
        console.log(`el saldo despues de la cuota ${aux} es: ${saldo}`);
        aux = aux + 1;
    }
}
