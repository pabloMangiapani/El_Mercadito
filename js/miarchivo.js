
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

//array bebidas

const bebidas = ["Vodka Raspberri.750ML", "Vodka Grey Goose.750ML", "Beefeater London Dry Gin.1000ML", "Bombay Sapphire London Dry Gin.750ML", "Whisky Johnnie Walker Black Label.750ML", "Whisky Johnnie Walker Blue Label.750ML", "Campari Aperitivo.750ML"]

console.log(bebidas);

bebidas.push('Fernet Branca.750ML','Six Pack Cerbeza Coronona.330ML 6U');

console.log(bebidas);

