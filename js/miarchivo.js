let edad = "";
let nombre = "";
let apellido = "";


//pedido para validar edad
while (edad < 18 || edad > 17) {
  edad = prompt("ingresa tu edad");
  if (edad < "18") {
    alert("Lo siento no tenes edad para beber");
  } else if (edad > "17") {
    alert(
      "Genial! Ya podes ingresar tus datos para empezar a comprar tu bebida"
    );
    // si es mayor pide nombre y apellido
    nombre = prompt("ingresa tu nombre");
    if (nombre != "") {
      apellido = prompt("ingresa tu apellido");
    }
  }
  //uso operador ternario
  const permiso = edad >= 18 ? true : false;

  permiso ? alert("Puede comprar bebidas") : alert("No puedes comprar bebidas");
  break;
}

//calcular precio con iva de un producto
function suma(a, b) {
  let resultado;
  resultado = a + b;
  return resultado;
}
function iva(x) {
  let resultado;
  resultado = x * 0.21;
  return resultado;
}

let precioLista = 3550;
let precioFinal = suma(precioLista, iva(precioLista));
console.log(precioFinal);
// integro json con fetch

// document.addEventListener('DOMContentLoaded', () => {
//   fetchData();
// })

// const fetchData = async () => {
//   try{
//     const res = await fetch('prod.json');
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error)
//   }
// }


// // bebidas en base a objetos
// const absolutRaspberry = {
//   producto: "Vodka Raspberri.750ML",
//   precio: 2500,
//   img: "assets/img/absolutRaspberri.jpg",
// };
// //uso desestructuracion de bebidas por producto y precio
// const { producto, precio } = absolutRaspberry;
// console.log(producto);
// console.log(precio);

// const greyGoose = {
//   producto: "Vodka Grey Goose.750ML",
//   precio: 9200,
//   img: "assets/img/vodkaGreyGoose.jpg",
// };

// const beefeaterGin = {
//   producto: "Beefeater London Dry Gin.1000M",
//   precio: 2700,
//   img: "assets/img/ginBeefeater.jpg",
// };

// const bombayGin = {
//   producto: "Bombay Sapphire London Dry Gin.750ML",
//   precio: 2650,
//   img: "assets/img/ginBombay.jpg",
// };

// const johnnieWalkerBlack = {
//   producto: "Whisky Johnnie Walker Black Label.750ML",
//   precio: 3700,
//   img: "assets/img/johnnieWalkerBlack.jpg",
// };

// const johnnieWalkerBlue = {
//   producto: "Whisky Johnnie Walker Blue Label.750ML",
//   precio: 27500,
//   img: "assets/img/johnnieWalkerBlue.jpg",
// };

// const campari = {
//   producto: "Campari Aperitivo.750ML",
//   precio: 750,
//   img: "assets/img/campari.jpg",
// };

// //agrego stock a producto campari usando spread
// const campari1 = { ...campari, stock: 50 };
// console.log(campari1);

//array bebidas en base a objetos
// const bebidas = [
//   absolutRaspberry,
//   greyGoose,
//   beefeaterGin,
//   bombayGin,
//   johnnieWalkerBlack,
//   johnnieWalkerBlue,
//   campari,
// ];

// bebidas.push(
//   {
//     producto: "Fernet Branca.750ML",
//     precio: 950,
//     img: "assets/img/fernetBranca750.jpg",
//   },
//   {
//     producto: "Six Pack Cerbeza Coronona.330ML 6U",
//     precio: 1030,
//     img: "assets/img/corona.jpg",
//   }
// );

// console.log(bebidas);

// bebidas.sort((a, b) => {
//   if (a.precio > b.precio) {
//     return 1;
//   }
//   if (a.precio < b.precio) {
//     return -1;
//   }

//   return 0;
// });



// //productos usando DOM
const bebidas = async() => {
  const resp = await

  fetch('/prod.json')
  const data = await resp.json ()

  console.log(resp);

  data.forEach ((bebida) => {

  let productos = document.createElement("div");
  //Definimos el innerHTML del elemento con una plantilla de texto
  productos.innerHTML = `<div class="col ml-5">
      <div class="card h-100" style="width: 18rem">
        <img
          src=${bebida.img}
          alt="imagen absolut raspberri"
          class="card-img-top"
        />
        <div class="card-body">
          <h1>${bebida.producto}</h1>
          <p>${bebida.precio}</p>
          <a href="#" id="btn-comprar" class="btn btn-primary" ;">COMPRAR</a>
        </div>
      </div>
    </div>`;

  productos.className = "row mx-5 py-4";

  document.body.appendChild(productos);
})

}

// //uso sweet alert en boton comprar

// const btn = document.querySelector("#btn-comprar");
// btn.addEventListener("click", () => {
//   Swal.fire({
//     text: "Agregaste el producto al carrito",
//     backdrop: true,
//     showConfirmButton: false,
//     timer: 1000
//   })
// })


// //uso JSON en array bebidas

// localStorage.setItem("listaBebidas", JSON.stringify(bebidas));

// let bebidasRecuperadas = JSON.parse(localStorage.getItem("listaBebidas"));
// console.log(bebidasRecuperadas);

// bebidasRecuperadas.push({
//   producto: "Whisky Johnnie Walker Etiqueta Roja.750ML",
//   precio: 2100,
//   img: "assets/img/JohnniewalkerEtiquetaRoja.jpg",
// });
// console.log(bebidasRecuperadas);
