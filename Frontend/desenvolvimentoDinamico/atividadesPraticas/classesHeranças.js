class Funcionario{
    constructor(nome, idade, cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }
    seApresentar(){
        console.log("Olá meu nome é " + this.nome + " minha idade é: " + this.idade + ", nesta empresa trabalho como: " + this.cargo + ", muito prazer!!");
    }
    trabalhar(){
        console.log(this.nome + " esta trabalhando!");
    }
}

class Gerente extends Funcionario{
    constructor(nome, idade, cargo, departamento){
        super(nome, idade, cargo);
        this.departamento = departamento;

    }
    gerenciar(){
        console.log (this.nome + " está gerenciando!")
    }
}
class Desenvolvedor extends Funcionario{
    constructor(nome, idade, cargo, linguagem){
        super(nome, idade, cargo);
        this.linguagem = linguagem;

    }
    programar(){
        console.log (this.nome + " está programando!")
    }
}

var funcionario1 = new Funcionario("Gabriel Asaaf", "25", "fiscal")
console.log(funcionario1)
funcionario1.seApresentar();
funcionario1.trabalhar();


var gerente1 = new Gerente("Gabriel", "25", "gerente", "liderança");
console.log(gerente1);
gerente1.seApresentar();
gerente1.gerenciar();


var dev1 = new Desenvolvedor("Asaaf", "25", "desenvolvedor", "JavaScript");
console.log(dev1);
dev1.seApresentar();
dev1.programar();
class Funcionario{
    constructor(nome, idade, cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }
    seApresentar(){
        console.log("Olá meu nome é " + this.nome + " minha idade é: " + this.idade + ", nesta empresa trabalho como: " + this.cargo + ", muito prazer!!");
    }
    trabalhar(){
        console.log(this.nome + " esta trabalhando!");
    }
}

class Gerente extends Funcionario{
    constructor(nome, idade, cargo, departamento){
        super(nome, idade, cargo);
        this.departamento = departamento;

    }
    gerenciar(){
        console.log (this.nome + " está gerenciando!")
    }
}
class Desenvolvedor extends Funcionario{
    constructor(nome, idade, cargo, linguagem){
        super(nome, idade, cargo);
        this.linguagem = linguagem;

    }
    programar(){
        console.log (this.nome + " está programando!")
    }
}

var funcionario1 = new Funcionario("Gabriel Asaaf", "25", "fiscal")
console.log(funcionario1)
funcionario1.seApresentar();
funcionario1.trabalhar();


var gerente1 = new Gerente("Gabriel", "25", "gerente", "liderança");
console.log(gerente1);
gerente1.seApresentar();
gerente1.gerenciar();


var dev1 = new Desenvolvedor("Asaaf", "25", "desenvolvedor", "JavaScript");
console.log(dev1);
dev1.seApresentar();
dev1.programar();
