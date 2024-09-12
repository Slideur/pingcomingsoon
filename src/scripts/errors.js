let emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

document.querySelector(".notification").addEventListener("click", () => {
	if (emailValid.test(document.querySelector(".address").value)) {
	} else {
		document.querySelector(".invalidmail").style.visibility = "visible";
	}
});
