
let pregunta = document.querySelectorAll('.pregunta-frecuente');
let botonDer = document.querySelectorAll('.simb-der');
let respuesta = document.querySelectorAll('.respuesta-frecuente');
let parrafo = document.querySelectorAll('.respuesta-frecuente p');

for (let i = 0; i < botonDer.length; i = i + 1) {
    let altoparrafo = parrafo[i].clientHeight;
    let conttador = 0;

    botonDer[i].addEventListener('click', () => {
        if ( conttador == 0 ) {
            respuesta[i].style.height = `120px  `;
            respuesta[i].style.width = `85%`;
            pregunta[i].style.marginBottom = '30px';
            botonDer[i].innerHTML = '<i>-</i>';
            conttador = conttador + 1
        }

        else if ( conttador == 1 ) {
            respuesta[i].style.height = `0`;
            pregunta[i].style.marginBottom = '0';
            botonDer[i].innerHTML = '<i class="bi bi-chevron-compact-down"></i>';
            conttador = conttador - 1
        }
    })
}

console.log(parrafo)