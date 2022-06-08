let player = "x";

function myFunc(id) {
	if (document.getElementById(id).innerHTML) {
		return
	}
	
	document.getElementById(id).innerHTML = player;
	
	if (player === "o") {
		player = "x";
	} 
	else{
		player = "o";
	}
}