const btnNumber = document.getElementsByName('data-number');
const btnOpera = document.getElementsByName('data-opera');
const btnDelete = document.getElementsByName('data-delete')[0];
const btnIgual = document.getElementsByName('data-igual')[0];

var result = document.getElementById('result');

var opeActual='';
var opeAnterior='';
var operacion = undefined;


btnNumber.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumber(boton.innerText);

    })
});

btnOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOpera(boton.innerText);
    })
});

btnIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});

btnDelete.addEventListener('click', function(){
    clear();
    actualizarDisplay();
});

function agregarNumber(num){
    opeActual = opeActual.toString() + num.toString(); //concatenamos el numero
    actualizarDisplay();
}
function clear(){
    opeActual = '';
    opeAnterior='';
    operacion = undefined;
}

function actualizarDisplay(){
    result.value = opeActual;
}

function selectOpera(op) {
    if(opeActual == '') 
    return; //si no hya valores entonces no retorna nada
    if(opeAnterior !==''){
        calcular()
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = '';

    
}
function calcular(){
    var calculo;
    const anterior = parseFloat(opeAnterior);//asignar valor como float
    const actual = parseFloat(opeActual);//asignar valor como float
    if(isNaN(anterior) || isNaN(actual))
    return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;     

    }
    opeActual = calculo;
    opeAnterior ='';
    operacion = undefined;

}


clear();


