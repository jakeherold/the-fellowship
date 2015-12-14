
function div_show(){
	$('#blackout').show();
}

function div_hide(){
	$('#blackout').hide();
}

var player = {
	pName: null, // set to null here for testing
	species: null,
	gameStage: null
};

//processes char Creation form data and saves to local storage-REH/GLG
var startGame = function(e) {
  e.preventDefault();
	var elf = 0;
	var dwarf = 0;
	var hobbit = 0;
	var q1 = $('[name = q1]').val();
	var q2 = $('[name = q2]').val();
	var q3 = $('[name = q3]').val();
	var q4 = $('[name = q4]').val();
	var qs = [q1, q2, q3,q4];
	qs.forEach(function(q){
		switch (q) {
			case 'elf':
				elf++;
				break;
			case 'dwarf':
				dwarf++;
				break;
			case 'hobbit':
				hobbit++;
				break;
		}
	});
	console.log(elf);
	console.log(dwarf);
	console.log(hobbit);

	if (elf >= hobbit && elf >= dwarf) {
		player.species = "elf";
	}
	else if (dwarf >= elf && dwarf >= hobbit) {
		player.species = "dwarf";
	}
	else if (hobbit >= dwarf && hobbit >= elf) {
		player.species = "hobbit";
	}
	if(document.getElementById('playerName').value ===""){
		alert("Please enter a name");
		return;
	}
	player.pName = document.getElementById('playerName').value;
	var storedPlayer = JSON.stringify(player);
	localStorage.setItem("LOTR", storedPlayer);
	window.location='game.html';
}
//start game Button-REH
$('#startGame').on('click', startGame);
