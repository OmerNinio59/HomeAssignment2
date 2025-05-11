document.addEventListener("DOMContentLoaded", () => {
    const toggleDkMode = document.getElementById("toggle-dark-mode");
    const body = document.body;

    const isDark = localStorage.getItem("dark-mode") === "true";
    if (isDark) {
        body.classList.add("dark-mode");
    }

    toggleDkMode.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");


        const darkEnabled = body.classList.contains("dark-mode");
        localStorage.setItem("dark-mode", darkEnabled);
    });
});

function showBurgerbar() {
    const burger = document.querySelector(".burgerBar")
    burger.style.display = 'flex' 
}

function hideBurgerbar() {
    const burger = document.querySelector(".burgerBar")
    burger.style.display = 'none' 
}