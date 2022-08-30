

let numEstudiantes = parseInt(
  prompt("ingresa el numero de estudiante que entra en nuestro sistema ")
);

for (i = 0; i < numEstudiantes; i++) {
  let ingresarEstudiante = prompt("Ingresar nombre del estudiante")
  alert('estudiante '+i+' registrado'+ ingresarEstudiante);
}

if( numEstudiantes > 0){
    alert ('Registro exitoso')
}
else{
    alert('no registrado')
}


