document.addEventListener("DOMContentLoaded", () => {
    const userAgent = navigator.userAgent;

    // Detectar si es móvil o escritorio
    if (/Mobi|Android|iPhone/i.test(userAgent)) {
        // Redirigir a la versión móvil
        window.location.href = "mobile.html";
    } else {
        // Redirigir a la versión de escritorio
        window.location.href = "desktop.html";
    }
});
