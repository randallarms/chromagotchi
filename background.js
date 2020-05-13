var type = localStorage["petType"];
var level = parseInt(localStorage["petLevel"]);
var xp = parseInt(localStorage["petXP"]);
var variation = localStorage["petVariation"];

var types = ["slime", "orb", "gem", "plant", "animal"];

if (type in types) {
	type = "slime";
	localStorage["petType"] = type;
} else if (!(level > 0 && level < 10)) {
	level = 1;
	localStorage["petLevel"] = level;
} else if (!(xp > 0 && level < 10000)) {
	xp = 1;
	localStorage["petXP"] = xp;
} else if (variation == undefined) {
	variation = "green";
	localStorage["petVariation"] = variation;
}

function getType() {
	return localStorage["petType"];
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

chrome.runtime.onInstalled.addListener(function() {
	
});

function updatePet(mod) {
	
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
	updatePet(mod);
});

chrome.tabs.onCreated.addListener(function(tab) {
	var mod = 1;
	updatePet(mod);
});
