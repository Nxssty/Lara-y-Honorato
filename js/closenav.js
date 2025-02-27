document.addEventListener("DOMContentLoaded", function () {
    let navbarCollapse = document.querySelector(".navbar-collapse");
    let navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    let dropdownToggles = document.querySelectorAll(".dropdown-toggle");
    let dropdownItems = document.querySelectorAll(".dropdown-menu .dropdown-item");

    // Cierra el navbar solo cuando se hace clic en Inicio, Clientes, Nosotros o Contacto
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (!link.classList.contains("dropdown-toggle")) {
                new bootstrap.Collapse(navbarCollapse, { toggle: true });
            }
        });
    });

    // Mantiene abierto el dropdown hasta que se seleccione una opción dentro de él
    dropdownItems.forEach(function (item) {
        item.addEventListener("click", function () {
            new bootstrap.Collapse(navbarCollapse, { toggle: true }); // Cierra el navbar
        });
    });

});