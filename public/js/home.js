
const porcentagemVoto = document.querySelectorAll('.porcentagemVoto');

const graficoPorcentagem = document.querySelectorAll('.porcentagemVoto');
const votoFirst = document.querySelectorAll('.votofirst');
const votoSecond = document.querySelectorAll('.votoSecond');
porcentagemVoto.forEach((element,index) =>{
    console.log(element,index);
    let valorPocentagem = Math.round(element.dataset.tamanho);
    let valorCem = 100;
    console.log(valorPocentagem);
    if(!valorPocentagem){
        valorPocentagem = 0;
        valorCem = 0;
    }
    votoFirst[index].innerText = "Voto1 = "+ valorPocentagem;
    votoSecond[index].innerText = "Voto2 = "+ (valorCem - valorPocentagem);
    element.style.width = valorPocentagem + "%";
});