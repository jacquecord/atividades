var num=prompt("Digite um número:");
var strAsterisco="";
function linhaAsterisco(num){
    for(i=0; i < num; i++){
        strAsterisco=strAsterisco+`*`;
    }
    return document.write(strAsterisco);
}

linhaAsterisco(num);

var arrTriangulo=[];
function trianguloAsterisco(num){
    for(i=0; i < num; i++){
        arrTriangulo[i]="";
        for(j=0; j <= i; j++){
            arrTriangulo[i][j]="*";
        }
    }
    return arrTriangulo;
}

trianguloAsterisco(num);