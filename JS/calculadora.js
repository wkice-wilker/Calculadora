let historico = document.getElementById('historico');
let inputR = document.getElementById('inputArea');

function calcular(v){
    para = document.createElement('p');
    data = v + " = " + eval(v);
    para.innerText = data;
    historico.appendChild(para);

    inputR.innerText = data;

    return eval(v);
}

function backspace(b){
    return b.slice(0, b.length - 1);

}