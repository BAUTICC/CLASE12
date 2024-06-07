let camponombre = document.querySelector("#nombre")

camponombre.addEventListener('focus',function(){
    console.log("estas utilizando el evento focus")
})

 let campoEmail= document.querySelector("#email")
 campoEmail.addEventListener('blur',function (){
alert("estas utilizandoo el evento blur")
})

camponombre.addEventListener('imput',function(){
    console.log(campoNombre);
})

let formulario = document.querySelector('form')

formulario.addEvenListener('submit', function(){
    if(campoNombre.value == '') {
        alert("tenes que completar el campo de nombre")
    } else if (campoEmail.value ==''){
        alert("tenes que completar el campo de email")

    }
})