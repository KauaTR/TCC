const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq =>{
    faq.addEventListener("click", () =>{
        faq.classList.toggle("active")
    })
})
/* CODIGO ACIMA TRATA SOBRE O MENU*/
let mais = document.getElementById('mais')
let btnLeiaMais = document.getElementById('btnLeiaMais')
let textoAparecendo = false;

function alteraEstado(para, textoDentro, estadoDisplay){
    mais.style.display = estadoDisplay;
    btnLeiaMais.innerText = textoDentro;
    textoAparecendo = para;
}
btnLeiaMais.addEventListener('click', () => {
    if(textoAparecendo){
        alteraEstado(false, 'Leia mais', 'none');
        return;
    }
    alteraEstado(true, 'Leia menos', 'flex');    
})
/* codigo acima trata-se sobre o botao ler mais */

let mybutton = document.getElementById("myBtn");    

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
} 
