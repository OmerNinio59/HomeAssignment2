  const toggleDkMode = document.getElementById("toggle-dark-mode");
  const body = document.body;

  toggleDkMode.onclick = () => {
    body.classList.toggle("dark-mode");
  };

function showBurgerbar() {
    const burger = document.querySelector(".burgerBar")
    burger.classList.add("open"); 
}

function hideBurgerbar() {
    const burger = document.querySelector(".burgerBar")
    burger.classList.remove("open"); 
}