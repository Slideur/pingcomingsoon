let emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

document.querySelector(".notification").addEventListener("click", () => {
	if (emailValid.test(document.querySelector(".address").value)) {
		document.querySelector(".invalidmail").style.visibility = "hidden";
	} else {
		document.querySelector(".invalidmail").style.visibility = "visible";
	}
});

document.querySelector(".notification").addEventListener("click", () => {
	let init = document.querySelector(".address");
	init.value = "";
});
