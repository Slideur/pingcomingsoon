let emailValid =
	/^(([^<>()[].,;:s@]+(.[^<>()[].,;:s@]+)*)|(.+))@(([^<>()[].,;:s@]+.)+[^<>()[].,;:s@]{2,})$/i;

document.querySelector(".notification").addEventListener("click", () => {
	if (emailValid.test(document.querySelector(".address").value)) {
	} else {
		document.querySelector(".invalidmail").style.visibility = "visible";
	}
});
