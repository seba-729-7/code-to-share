const theForm = document.getElementById("form");
$(document).ready(function () {
  $("#form").validate({
    //reglas que debe cumplir el formulario
    rules: {
      name: { required: true, minlength: 4 },
      surname: { required: true, minlength: 4 },
      email: { required: true, minlength: 4 },
      phone: { required: true, number: true, maxlength: 11, minlength: 8 },
    },
    //mensajes que aparecen
    messages: {
      name: {
        required: "El nombre es requerido",
        minlength: "Minimo de 4 letras",
      },

      surname: {
        required: "El apellido es requerido",
        minlength: "Minimo de 4 letras",
      },

      email: {
        required: "El email es requerido",
        email: "El correo no es valido",
      },

      phone: {
        required: "El telefono es requerido",
        number: "Solo se aceptan numeros",
        minlength: "Minimo de 8 caracteres",
        maxlength: "Maximo de 11 caracteres",
      },
    },
  });
});

$("#form").on("submit", function (e) {
  var isvalid = $("#form").valid();
  if (isvalid) {
    handleSubmit(e);
  }
});

function getData(form) {
  return new Promise((resolve, reject) => {
    resolve(
      fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      })
    );
  });
}

async function handleSubmit(event) {
  event.preventDefault();
  const response = await getData(theForm);
  if (response.ok) {
    theForm.reset();
    Swal.fire({
      title: "Excelente",
      text: "El formulario fue enviado con exito",
      icon: "success",
    });
  }
}
