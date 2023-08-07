const btn = document.getElementById("hamburger-menu");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
	btn.classList.toggle("open");
	menu.classList.toggle("flex");
	menu.classList.toggle("hidden");
});
