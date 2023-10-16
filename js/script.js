const boton = document.querySelector(".enviar");
const container = document.querySelector(".pedirNumero");
let input = document.querySelector(".inputEntrada");
let resultado = 0;
boton.addEventListener("click", function(){
    let numero = parseInt(input.value);
    if(isNaN(numero)){
        input.value = "";
        alert("Por favor ingrese un número");
    }else{
        resultado = calcularFactorial(numero);
        container.innerHTML += `<p class="resultado">El factorial de ${numero} es ${resultado}</p>`;
    }
});

function calcularFactorial(numero){
    let factorial = 1;
    for (let i = 1; i < numero; i++) {
        factorial += factorial*i;
    }
    return factorial
}

input.addEventListener("keydown", function(e){

    if(e.key=== 'Enter' && input.value != ""){
        let numero = parseInt(input.value);
        if(isNaN(numero)){
            input.value = "";
            alert("Por favor ingrese un número");
        }else{
            resultado = calcularFactorial(numero);
            container.innerHTML += `<p class="resultado">El factorial de ${numero} es ${resultado}</p>`;
        }
    }

})