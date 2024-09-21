function mult(x,y){
    return x+y
};
var soma = mult(1,2);
console.log(soma);

var soma2 = mult(1,1);
console.log(soma2);

var soma3 = function(a,b){
    return a+b;
};
console.log(soma3(1,4));

var soma0 = (d,e) =>{
    return d+e;
}
console.log(soma0(1,6));