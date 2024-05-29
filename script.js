
let carrousel = document.querySelector('.carrousel-contenedor');

let imagenes = ["./styles/fotos/slide1.jpg", 
                "./styles/fotos/slide2.jpg", 
                "./styles/fotos/slide3.jpg", 
                "./styles/fotos/slide4.jpg", 
                "./styles/fotos/slide5.jpg",
                "./styles/fotos/slide6.jpg",
                "./styles/fotos/slide7.jpg",
                "./styles/fotos/slide8.jpg",
];

let num = 0;

const imgHTML = () => {
    carrousel.innerHTML = `
        <img  
            src = "${imagenes[num]}" 
            alt="slide${num+1}" 
            title = "slide${num+1} 
            class = "img">
    `; 
}

const next = () => {
    num++;
    if (num === imagenes.length) {
        num = 0;
        
    }
    
    imgHTML();
}

const prev = () => {
    num--;
    if (num < 0) {
        num = imagenes.length - 1;
    }
    imgHTML();
}

imgHTML();

let botonAdelante = document.querySelector('.adelante')
botonAdelante.addEventListener('click', next);

let botonAtras = document.querySelector('.atras')
botonAtras.addEventListener('click', prev);