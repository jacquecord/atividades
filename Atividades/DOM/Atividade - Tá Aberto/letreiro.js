/*function modificaBtnA() {
    var paragrafoAbr=document.querySelector('p');
    paragrafoAbr.innerText="Estamos aberto!"

    var btnAbr=document.querySelector('.cBtnA');
    btnAbr.style.color='green';
}

function modificaBtnF() {
    var paragrafoFec=document.querySelector('p');
    paragrafoFec.innerText="Estamos fechado!"

    var btnFch=document.querySelector('.cBtnF');
    btnFch.style.color='red';
}*/

function modificaBtn() {
    var prg = document.querySelector("p");
    if( prg.innerText === "Estamos aberto!") 
      prg.innerText = "Estamos fechado!";
    else 
       prg.innerText = "Estamos aberto!"
  }
  