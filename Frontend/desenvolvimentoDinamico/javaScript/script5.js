var carro = [{modelo: "relampago", nome: "mcqueen", ano: 2020},
    {modelo:"zondaF", nome:"paganiZonda", ano: 2018},
    {modelo: "3G0z", nome: "modelZ", ano: 2025}
]

for (let carrao in carro){
    console.log(carro[carrao]);
};


const carros = [{ modelo: 'Audi A3', marca: 'Audi', ano: 2020 },
    { modelo: 'Jeep Compact', marca: 'Jeep', ano: 2021 }
];

for (let indice in carros) {
    console.log('Carro ' + (parseInt(indice) + 1) + ':');
for (let atributo in carros[indice]) {
    console.log(atributo + ': ' + carros[indice][atributo]);
}
    console.log('-----');
};
num = 0;
while (num == 10){
    console.log(num + "+" + "1" + ":"),
    num++,
    console.log(num)
}
