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

// bebidas en base a objetos
const absolutRaspberry = {
  producto: "Vodka Raspberri.750ML",
  precio: 2500,
  img: "assets/img/absolutRaspberri.jpg",
};
const greyGoose = {
  producto: "Vodka Grey Goose.750ML",
  precio: 9200,
  img: "assets/img/vodkaGreyGoose.jpg",
};
const beefeaterGin = {
  producto: "Beefeater London Dry Gin.1000M",
  precio: 2700,
  img: "assets/img/ginBeefeater.jpg",
};
const bombayGin = {
  producto: "Bombay Sapphire London Dry Gin.750ML",
  precio: 2650,
  img: "assets/img/ginBombay.jpg",
};
const johnnieWalkerBlack = {
  producto: "Whisky Johnnie Walker Black Label.750ML",
  precio: 3700,
  img: "assets/img/johnnieWalkerBlack.jpg",
};
const johnnieWalkerBlue = {
  producto: "Whisky Johnnie Walker Blue Label.750ML",
  precio: 27500,
  img: "assets/img/johnnieWalkerBlue.jpg",
};
const campari = {
  producto: "Campari Aperitivo.750ML",
  precio: 750,
  img: "assets/img/campari.jpg",
};

//array bebidas en base a objetos
const bebidas = [
  absolutRaspberry,
  greyGoose,
  beefeaterGin,
  bombayGin,
  johnnieWalkerBlack,
  johnnieWalkerBlue,
  campari,
];

bebidas.push(
  {
    producto: "Fernet Branca.750ML",
    precio: 950,
    img: "assets/img/fernetBranca750.jpg",
  },
  {
    producto: "Six Pack Cerbeza Coronona.330ML 6U",
    precio: 1030,
    img: "assets/img/corona.jpg",
  }
);

console.log(bebidas);

bebidas.sort((a, b) => {
  if (a.precio > b.precio) {
    return 1;
  }
  if (a.precio < b.precio) {
    return -1;
  }

  return 0;
});

for (const bebida of bebidas) {
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
          <a href="#" class="btn btn-primary" onclick="alert('Agregado al Carrito');">COMPRAR</a>
        </div>
      </div>
    </div>`;

  productos.className = "row mx-5 py-4";

  document.body.appendChild(productos);
}
