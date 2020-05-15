function setPet(pet, type, xp, level, variation) {
	var imgDir = "images/pets/";
	var xpTxt = document.getElementById("xp");
	pet.src = imgDir + type + "/" + variation + "/" + level + ".png";
	xpTxt.text = "XP: " + xp;
}

document.addEventListener('DOMContentLoaded', function() {
	
	var pet = document.getElementById("pet-img");
	
	var bg = chrome.extension.getBackgroundPage();
	
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
					//Give level 1 green slime
				case "redslime":
					//Give level 1 red slime
				case "blueslime":
					//Give level 1 blue slime
				case "brownslime":
					//Give level 1 brown slime
				case "greenorb":
					//Give level 1 green orb
				case "redorb":
					//Give level 1 red orb
				case "blueorb":
					//Give level 1 blue orb
				case "dandelion":
					//Give level 1 dandelion
				default:
					//Command error
			}
		}
	}
	
});
		
}, false);