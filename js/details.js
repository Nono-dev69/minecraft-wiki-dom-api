const params = new URLSearchParams(window.location.search);
const entityId = params.get("id");

async function loadEntity() {
	const response = await fetch(
		"http://play.hatlas.net:3000/v1/entities/" + entityId,
	);
	const entity = await response.json();
	Entity(entity);
}

loadEntity();

function Entity(entity) {
	document.getElementById("entity-name").textContent = entity.name;
	document.getElementById("entity-name-span").textContent = entity.name;
	document.getElementById("entity-desc").textContent = entity.description;
	document.getElementById("name-txt").textContent = entity.name;

	document.getElementById("name-img").src = entity.icon.replace(
		"play.hastlas.net",
		"play.hatlas.net",
	);
	document.getElementById("mob-img").src = entity.image.replace(
		"play.hastlas.net",
		"play.hatlas.net",
	);

	document.getElementById("health-number").textContent = entity.health;
	document.getElementById("armor-number").textContent = entity.armor;
	document.getElementById("strength-number").textContent =
		entity.strength ?? 0;
	document.getElementById("class-value").textContent = entity.classification;
	document.getElementById("behavior-value").textContent = entity.type;
	document.getElementById("size-height").textContent =
		"Height: " + entity.height + " blocks";
	document.getElementById("size-width").textContent =
		"Width: " + entity.width + " blocks";

	const mobType = entity.type.toLowerCase();
	const nameBox = document.getElementById("name-box");
	const detailBtn = document.getElementById("detail-btn");
	const card = document.getElementById("entity-card");
	const healthBox = document.getElementById("health-box");
	const armorBox = document.getElementById("armor-box");
	const strengthBox = document.getElementById("strength-box");
	const classBox = document.getElementById("class-box");
	const behaviorBox = document.getElementById("behavior-box");

	if (mobType === "hostile") {
		nameBox.classList.add("background-hostile");
		detailBtn.classList.add("background-hostile");
		card.classList.add("border-hostile");
		healthBox.classList.add("border-bottom-hostile");
		armorBox.classList.add("border-bottom-hostile");
		strengthBox.classList.add("border-bottom-hostile");
		classBox.classList.add("border-bottom-hostile");
		behaviorBox.classList.add("border-bottom-hostile");
	} else if (mobType === "neutral") {
		nameBox.classList.add("background-neutral");
		detailBtn.classList.add("background-neutral");
		card.classList.add("border-neutral");
		healthBox.classList.add("border-bottom-neutral");
		armorBox.classList.add("border-bottom-neutral");
		strengthBox.classList.add("border-bottom-neutral");
		classBox.classList.add("border-bottom-neutral");
		behaviorBox.classList.add("border-bottom-neutral");
	} else {
		nameBox.classList.add("background-passive");
		detailBtn.classList.add("background-passive");
		card.classList.add("border-passive");
		healthBox.classList.add("border-bottom-passive");
		armorBox.classList.add("border-bottom-passive");
		strengthBox.classList.add("border-bottom-passive");
		classBox.classList.add("border-bottom-passive");
		behaviorBox.classList.add("border-bottom-passive");
	}



	
}




