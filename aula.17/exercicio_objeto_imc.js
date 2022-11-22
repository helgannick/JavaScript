class pessoa{
    nome;
    peso;
    altura;
    
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calculoImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc(){
        const imc = this.calculoImc();
        if (imc < 18.5){
          return  ('Abaixo do peso');

        } else if (imc >= 18.5 && imc < 25){
          return  ('Peso normal');

        } else if (imc >= 25 && imc < 30){
          return  ('Acima do peso');

        } else if (imc >= 30 && imc < 40){
          return  ('Obeso');

        } else{
          return  ('Obesidade Grave')
        }
    }
}

const jose = new pessoa('José Carlos', 70, 1.75 );
    console.log(jose.classificarImc());


const marcos = new pessoa('Marcos B', 94, 1.70);
    console.log(marcos.classificarImc());
