// script.js

console.log("JavaScript funcionando...");

document.addEventListener("DOMContentLoaded", function() {
    // Agrega un evento al hacer clic en el enlace de corte de pelo
    document.getElementById("haircut").addEventListener("click", function(event) {
        event.preventDefault();
        mostrarDetallesServicio("Corte de pelo seleccionado", "#ffcccb");
    });

    // Agrega un evento al hacer clic en el enlace de coloración
    document.getElementById("color").addEventListener("click", function(event) {
        event.preventDefault();
        mostrarDetallesServicio("Coloración seleccionada", "#add8e6");
    });
});

function mostrarDetallesServicio(servicio, color) {
    // Muestra los detalles del servicio en el div service-details
    var detallesDiv = document.getElementById("service-details");
    detallesDiv.innerHTML = `<p>${servicio}</p>`;
    detallesDiv.style.backgroundColor = color;
}
