var numPositivo=prompt("Digite um número positivo:");
if (numPositivo < 0){
    console.log("O número digitado não é positivo!");
} else {
    function listaDecrescente(numPositivo) {
        var strNumero="";
        while(numPositivo >= 0) {
            strNumero= `${strNumero + numPositivo} \n `;
            numPositivo--;
        }
        return strNumero
    }
    listaDecrescente(numPositivo);

    function fizz(numPositivo){
        var strNumero="";
        x=0
        while(x <= numPositivo) {
            if (x % 3 == 0){
                strNumero=strNumero+"fizz ";
            }else{
                strNumero=strNumero + x + " ";
            }
            x=x+1
        }
        return strNumero
    }   
    fizz(numPositivo);
}