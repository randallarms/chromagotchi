function setPet(pet, type, xp, level, variation) {
	var imgDir = "images/pets/";
	var xpTxt = document.getElementById("xp");
	pet.src = imgDir + type + "/" + variation + "/" + level + ".png";
	xpTxt.text = "XP: " + xp;
}

document.addEventListener('DOMContentLoaded', function() {
	
	var pet = document.getElementById("pet-img");
	
	var bg = chrome.extension.getBackgroundPage();
	
	var type = bg.getType();
	var xp = bg.getXP();
	var level = bg.getLevel();
	var variation = bg.getVariation();
	
	setPet(pet, type, xp, level, variation);
	
	document.getElementById("pet").addEventListener('click', function(){
		chrome.extension.getBackgroundPage().updatePet(1);
	});
		
}, false);