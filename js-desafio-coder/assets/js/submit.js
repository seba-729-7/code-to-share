const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  const myForm = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: myForm,
    headers: {
      'Accept': 'application/json',
    }
  });
  if (response.ok) {
    this.reset();Swal.fire({
        title: "Excelente",
        text: "El formulario fue enviado con exito",
        icon: "success",
      });
  }
}
