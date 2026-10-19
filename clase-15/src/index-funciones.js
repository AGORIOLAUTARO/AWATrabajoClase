// Funciones

// Declaración

function suma(a, b){
    //console.log(a + b)
    return a + b
}

// Invocar / Ejecutar / llamar
const resultado = suma(10,2)

console.log(resultado)


// Función flecha -> anónima
// FatArrow

// const resta = (a, b)=>{
//     return a - b
// }

// const resta = (a, b)=> a + b
//
// const resta = a => a + 5

// Callback

const a = (cb)=>{
    console.log('se ejecutó a')
    cb()

}

const b = ()=>{
     console.log('se ejecutó el callback b')

}

 console.log(b())
 a(b)

 a(()=>{
    console.log('Se ejecutó el callback b')
})