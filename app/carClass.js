'use strict';

function Car(name, model, type) {
	this.name = name || 'General';
	this.model = model || 'GM';
	this.type = type;

	if (this.name === 'Porshe' || this.name === 'Koenigsegg'){
		this.numOfDoors = 2;
	}
	else {
		this.numOfDoors = 4;
	}

	if (this.type === 'trailer') {
		this.numOfWheels = 8;
		this.isSaloon = false;
	}
	else if(model === "Agera R") {
		this.numOfWheels = 4;
		this.isSaloon = true;
	}

	this.speed = "0 km/h";
	this.drive = function(level) {
		if(level === 5) {
			this.speed = "250 km/h";
		}
		else if(level === 7) {
			this.speed = "77 km/h";
		}
		return this;
	}

};
 

module.exports =  Car;
