function calculatePrice() {
    const type = document.getElementById("site-type").value;
    const pages = parseInt(document.getElementById("pages").value);
    const custom = document.getElementById("custom").checked;
    const resultDiv = document.getElementById("result");

    if (!type || isNaN(pages) || pages < 1 || pages > 10) {
        resultDiv.innerText = "Please make sure that all fields are filled currectly."
        setTimeout(() => resultDiv.classList.add("show"), 10);
        return;
    }

    let basePrice = 0

    switch (type) {
        case "Business Site":
            basePrice = 1000;
            break;

        case "Online Store":
            basePrice = 2000;
            break;

        case "Blog":
            basePrice = 1500;
            break;
    }

    const extraPages = pages > 1 ? (pages - 1) * 200 : 0;
    const customPrice = custom ? 1000 : 0;
    const totalPrice = basePrice + extraPages + customPrice;

    resultDiv.classList.remove("show");
    resultDiv.innerText = `Total fee is: ₪${totalPrice}`;
    setTimeout(() => resultDiv.classList.add("show"), 10);
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const resultDiv = document.getElementById("result");

    if (form) {
        form.addEventListener('reset', () => {
            resultDiv.innerText = "";
            resultDiv.classList.remove("show");
        });
    }
});
