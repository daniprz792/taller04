const botonesGaleria = document.querySelectorAll(".boton-galeria");
const modalImagen = document.querySelector(".modal-imagen");
const imagenAmpliada = document.querySelector(".modal-imagen-contenido");
const descripcionImagen = document.querySelector(".modal-descripcion");
const botonCerrarModal = document.querySelector(".modal-cerrar");

botonesGaleria.forEach((boton) => {
  boton.addEventListener("click", () => {
    const galeria = document.getElementById(boton.getAttribute("aria-controls"));
    const estaAbierta = boton.getAttribute("aria-expanded") === "true";

    galeria.hidden = estaAbierta;
    boton.setAttribute("aria-expanded", String(!estaAbierta));
    boton.textContent = estaAbierta
      ? "Ver imágenes del proyecto"
      : "Ocultar imágenes del proyecto";
  });
});

document.querySelectorAll(".galeria a").forEach((enlace) => {
  enlace.addEventListener("click", (evento) => {
    evento.preventDefault();

    const miniatura = enlace.querySelector("img");
    imagenAmpliada.src = enlace.href;
    imagenAmpliada.alt = miniatura.alt;
    descripcionImagen.textContent = miniatura.alt;
    modalImagen.showModal();
  });
});

botonCerrarModal.addEventListener("click", () => {
  modalImagen.close();
});

modalImagen.addEventListener("click", (evento) => {
  if (evento.target === modalImagen) {
    modalImagen.close();
  }
});
