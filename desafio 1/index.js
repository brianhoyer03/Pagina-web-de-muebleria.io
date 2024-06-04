/* LOS MAS VENDIDOS, AHORA TIENEN UN 20% DE DESCUENTO */

const plus = (a, b) => a + b;
const discount = x => x * 0.2;
const minus = (a, b) => a - b;

// productos 
let prod1 = 500;
let prod2 = 800;
let prod3 = 200;

let envio = 50;

//Carrito

const productos = [
    {id: 1, mueble: "Ropero 4 puerta", precio: 500 },
    {id: 2, mueble: "Ropero 6 puertas", precio: 800},
    {id: 3, mueble: "Mesita de noche", precio: 200}
];

let carrito = [];

//calculo parcial
let finalProd1 = minus(prod1, discount(prod1));
let finalProd2 = minus(prod2, discount(prod2));
let finalProd3 = minus(prod3, discount(prod3));

//calculos finales con envio
let prod1ConEnvio = plus(finalProd1, envio); 
let prod2ConEnvio = plus(finalProd2, envio);
let prod3ConEnvio = plus(finalProd3, envio);


function comprar1(){    
    let envio = document.getElementById("box1");
    let total = envio.checked ? prod1ConEnvio : finalProd1
    Swal.fire(
        'Tu producto se agrego al carrito',
        `El precio final de tu Mueble con el 20% de descuentos es: ${total} pesos chilenos.`
    )
};

function comprar2(){
    envio = document.getElementById("box2");
    total = envio.checked ? prod2ConEnvio : finalProd2
    Swal.fire(
        'Tu producto se agrego al carrito',
        `El precio final de tu Mueble con el 20% de descuentos es: ${total} pesos chilenos.`
    ) 
};

function comprar3(){
    envio = document.getElementById("box3");
    total = envio.checked ? prod3ConEnvio : finalProd3
    Swal.fire(
        'Tu producto se agrego al carrito',
        `El precio final de tu Mueble con el 20% de descuentos es: ${total} pesos chilenos.`
    ) 
};

let boton = document.getElementById("btnComprar");
boton.addEventListener("click", comprar1);

boton = document.getElementById("btn2Comprar");
boton.addEventListener("click", comprar2);

boton = document.getElementById("btn3Comprar");
boton.addEventListener("click", comprar3);


 