
let edad = "";
let nombre = "";
let apellido = "";
 //pedido para validar edad
while (edad < 18 || edad > 17) {
  edad = prompt("ingresa tu edad");
  if (edad < "18") {
    alert("Lo siento no tenes edad para beber");
  } else if (edad > "17") {
    alert("Genial! Ya podes ingresar tus datos para empezar a comprar tu bebida");
    // si es mayor pide nombre y apellido
    nombre = prompt("ingresa tu nombre");
    if (nombre != "") {
      apellido = prompt("ingresa tu apellido");
   }
 }
 break
}


//calcular precio con iva de un producto
function suma(a,b){
  let resultado;
  resultado = a + b;
  return resultado
}
function iva(x){
  let resultado;
  resultado = x * 0.21
  return resultado
}

let precioLista = 3550;
let precioFinal = suma(precioLista,iva(precioLista));
console.log(precioFinal);



// bebidas en base a objetos
const absolutRaspberry = { producto: "Vodka Raspberri.750ML", precio: 2500};
const greyGoose = { producto: "Vodka Grey Goose.750ML", precio: 9200};
const beefeaterGin = { producto: "Beefeater London Dry Gin.1000M", precio: 2700};
const bombayGin = { producto: "Bombay Sapphire London Dry Gin.750ML", precio: 2650};
const johnnieWalkerBlack = { producto: "Whisky Johnnie Walker Black Label.750ML", precio: 3700};
const johnnieWalkerBlue = { producto: "Whisky Johnnie Walker Blue Label.750ML", precio: 27500};
const campari = { producto: "Campari Aperitivo.750ML", precio: 750};

//array bebidas en base a objetos 
const bebidas = [absolutRaspberry , greyGoose , beefeaterGin , bombayGin , johnnieWalkerBlack , johnnieWalkerBlue , campari];

bebidas.push({producto: "Fernet Branca.750ML", precio: 950},{producto: "Six Pack Cerbeza Coronona.330ML 6U", precio: 1030})

console.log(bebidas)

bebidas.sort((a,b) => {
  if (a.precio > b.precio) {
    return 1;
  }
  if (a.precio < b.precio) {
    return -1;
  }

  return 0;
})



