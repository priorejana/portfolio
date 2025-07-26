function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function toggleDarkMode() {
    const body = document.body;
    const darkIcon = document.getElementById("dark-icon");
    const lightIcon = document.getElementById("light-icon");

    body.classList.toggle("darkmode");
    
    if (body.classList.contains("darkmode")) {
        darkIcon.style.display = "none";
        lightIcon.style.display = "block";
    } else {
        darkIcon.style.display = "block";
        lightIcon.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}