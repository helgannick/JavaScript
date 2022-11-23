const {gets, print} = require('./funcoes.auxiliares');

let maiorValor = 0;

for (let i = 0; i < 5; i++) {
    const numeroSorteados = gets();
    if (numeroSorteados > maiorValor){
        maiorValor = numeroSorteados
    }
    
}




print(maiorValor)