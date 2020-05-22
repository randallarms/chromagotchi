var id = localStorage["petId"];
var type = localStorage["petType"];
var level = parseInt(localStorage["petLevel"]);
var xp = parseInt(localStorage["petXP"]);
var variation = localStorage["petVariation"];

var types = ["slime", "orb", "gem", "plant", "animal"];

function petCheck() {

	if (!(type in types)) {
		type = "slime";
		localStorage["petType"] = type;
	}

	if (!(level > 0 && level < 10)) {
		level = 1;
		localStorage["petLevel"] = level;
	}

	if (!(xp > 0 && level < 10000)) {
		xp = 1;
		localStorage["petXP"] = xp;
	}

	if (variation == undefined) {
		variation = "green";
		localStorage["petVariation"] = variation;
	}

}

function getId() {
	return localStorage["petId"];
}

function setId(val) {
	id = val;
	updatePet(id);
}

function getType() {
	return localStorage["petType"];
}

function setType(val) {
	type = val;
	updatePet(id);
}

function getLevel() {
	return parseInt(localStorage["petLevel"]);
}

function getXP() {
	return parseInt(localStorage["petXP"]);
}

function getVariation() {
	return localStorage["petVariation"];
}

function setVariation(val) {
	variation = val;
	updatePet(id);
}

chrome.runtime.onInstalled.addListener(function() {
	
});

function updatePet(newId) {
	//Update local vars and local storage values to reflect current pet; get stats from saved pets
}

function giveXp(mod) {
	
	var xp = parseInt(localStorage["petXP"]);
	localStorage["petXP"] = xp + mod;
	
	var level = parseInt(localStorage["petLevel"]);
	if ( localStorage["petXP"] > level * level * level * level ) {
		localStorage["petLevel"] = level + 1;
	}
	
	alert("Pet updated, xp: " + xp + ", level: " + level);
	
}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	var mod = 2;
	giveXp(mod);
});

chrome.tabs.onCreated.addListener(function(tab) {
	var mod = 1;
	giveXp(mod);
});
