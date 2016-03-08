window.addEventListener('load', function() {
	//stran nalozena
		
	var potrdiPrijavo = function() {
		var uporabnik = document.querySelector("#uporabnisko_ime").value;
		document.querySelector("#uporabnik").innerHTML = uporabnik;
		document.querySelector(".pokrivalo").style.visibility = "hidden";
	}
	
	var aliEnter = function(e) {
		if (13 == e.keyCode) {
			potrdiPrijavo();
		}
	}
	//var e;
	document.querySelector("#prijavniGumb").addEventListener("click", potrdiPrijavo);
	document.querySelector("#prijavniGumb").addEventListener("keypress", aliEnter(e));
	
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});