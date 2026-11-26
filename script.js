const toggleButton = document.querySelector("#toggleIntro");
const intro = document.querySelector("#intro");

toggleButton.addEventListener("click", function () {
    intro.style.display = intro.style.display === "none" ? "block" : "none";
});
const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
    }

    alert("Your message has been submitted!");
});