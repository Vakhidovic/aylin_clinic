const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");

burger.addEventListener("click",
	function () {
		burger.classList.toggle("active");
		menu.classList.toggle("active")
	});
