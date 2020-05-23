function setPet(pet, type, xp, level, variation) {
	var imgDir = "images/pets/";
	var xpTxt = document.getElementById("xp");
	pet.src = imgDir + type + "/" + variation + "/" + level + ".png";
	xpTxt.text = "XP: " + xp;
}

document.addEventListener('DOMContentLoaded', function() {
	
	var pet = document.getElementById("pet-img");
	
	var bg = chrome.extension.getBackgroundPage();
	
	bg.petCheck();
	
	var id = bg.getId();
	var type = bg.getType();
	var xp = bg.getXP();
	var level = bg.getLevel();
	var variation = bg.getVariation();
	
	setPet(pet, type, xp, level, variation);
	
	document.getElementById("pet").addEventListener('click', function(){
		chrome.extension.getBackgroundPage().giveXp(1);
	});
	
	var input = document.getElementById("input");
	
	input.addEventListener("keyup", function(event) {
		if (event.key === "Enter") {
			var text = input.value;
			switch (text.toLowerCase()) {
				case "greenslime":
					//Set pet as level 1 green slime
					type = "slime";
					variation = "green";
					break;
				case "redslime":
					//Set pet as level 1 red slime
					type = "slime";
					variation = "red";
					break;
				case "blueslime":
					//Set pet as level 1 blue slime
					type = "slime";
					variation = "blue";
					break;
				case "brownslime":
					//Set pet as level 1 brown slime
					type = "slime";
					variation = "brown";
					break;
				case "greenorb":
					//Set pet as level 1 green orb
					type = "orb";
					variation = "green";
					break;
				case "redorb":
					//Set pet as level 1 red orb
					type = "orb";
					variation = "red";
					break;
				case "blueorb":
					//Set pet as level 1 blue orb
					type = "orb";
					variation = "blue";
					break;
				case "dandelion":
					//Set pet as level 1 dandelion
					type = "plant";
					variation = "dandelion";
					break;
				default:
					//Command error
					alert("No such command.");
					break;
			}
			bg.setType(type);
			bg.setVariation(variation);
			bg.petCheck();
			setPet(pet, bg.getType(), bg.getXP(), bg.getLevel(), bg.getVariation());
			alert("Your pet is now a " + bg.getVariation() + " " + bg.getType() + "!");
		}
	});
	
});