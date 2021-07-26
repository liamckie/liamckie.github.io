const hamburgerBtn = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");
const switchElement = document.querySelector(".switch");

switchElement.addEventListener("click", () => {
    document.body.classList.toggle("dark");
})

function toggleBtn() {
    navList.classList.toggle("show");
}

hamburgerBtn.addEventListener("click", toggleBtn);