document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Obtiene todos los enlaces internos con fragmentos
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    // Recorre cada enlace y agrega un evento de clic
    scrollLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Obtiene el destino del enlace (selecciona el elemento con el id correspondiente al href del enlace)
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            // Desplazamiento suave usando scrollIntoView
            targetElement.scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
