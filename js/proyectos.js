const botonesGaleria = document.querySelectorAll(".boton-galeria");

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
