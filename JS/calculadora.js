let historico = document.getElementById('p');

function calcular(v){
    let para = document.createElement('p');
    let data = v + " = " + eval(v);
    para.innerText = data;
    historico.prepend(para);
    return eval(v);
}


function backspace(b){
    return b.slice(0, b.length - 1);

}