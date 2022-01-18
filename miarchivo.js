let edad = ''
let nombre = ''
let apellido = ''

while(edad < 18  || edad > 17) {
    edad = prompt('ingresa tu edad');
        if(edad < '18')
        alert('Lo siento no tenes edad para beber')
    
        if(edad > '17'){
        alert('Genial! Ya podes ingresar tus datos para empezar a comprar tu bebida')
        nombre = prompt('ingresa tu nombre')
        if(nombre != ''){
            apellido = prompt('ingresa tu apellido')
        }
    }
}
