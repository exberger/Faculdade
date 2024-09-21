class Pessoa{

    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar(){
    console.log("Olá " + this.nome);
    }
}
pessoa = new Pessoa("Gabriel", "Schoemberger");

pessoa.falar();

class DispositivoEletronico{
    constructor(marca){
        this.marca = marca;
        this.ligado = false;
    }
    ligar(){
        if(this.ligado){
            console.log("Já está ligado!")
            return;
        }
        this.ligado = true;
    }
}

class Celular extends DispositivoEletronico{
    constructor(marca, cor, modelo){
        super(marca);
        this.cor = cor;
        this.modelo = modelo;
    }
}

var celular1 = new Celular("Apple", "Verde", "iphone 13");
console.log(celular1);
celular1.ligar();
celular1.ligar();

