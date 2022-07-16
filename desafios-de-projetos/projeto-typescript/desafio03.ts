/*let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');

campoSaldo.innerHTML = 0

function somarAoSaldo(soma) {
    campoSaldo.innerHTML += soma;
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});*/

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo')!;
let saldoTot = 0;

campoSaldo.innerHTML = saldoTot.toString();

function somarAoSaldo(soma:number) {  
        saldoTot += soma;
        campoSaldo.innerHTML = saldoTot.toString();
}

function limparSaldo() {
    campoSaldo.innerHTML = '0';
}

if(botaoAtualizar){
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(parseInt(soma.value));
    });
}

if(botaoLimpar){
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
}