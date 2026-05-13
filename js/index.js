const search = document.getElementById("search");
const btn = document.getElementById("btn-search");
const nameMobs = document.getElementById("name");
const img = document.getElementById("imgmobs");
const classification = document.getElementById("classification");
const type = document.getElementById("type");

const divMobs = document.getElementById("sct-mobs");
const sctName = document.getElementById("sct-name");
const sctType = document.getElementById("sct-type");

btn.addEventListener("click", async () => {
	const names = search.value;
	const response = await fetch(
		"http://10.69.4.208:3000/v1/entities?search=" + names,
	);
	const data = await response.json();
	const mob = data[0];

	nameMobs.textContent = mob.name;
	img.src = mob.image;
	classification.textContent = mob.classification;
	type.textContent = mob.type;

	const mobType = mob.type.toLowerCase();

	if (mobType === "passive") {
		divMobs.classList.add("green-border");
		divMobs.classList.remove("gris-border", "red-border");
		sctName.classList.add("green");
		sctName.classList.remove("gris", "red");
		sctType.classList.add("green");
		sctType.classList.remove("gris", "red");
	}

	if (mobType === "hostile") {
		divMobs.classList.add("red-border");
		divMobs.classList.remove("green-border", "gris-border");
		sctName.classList.add("red");
		sctName.classList.remove("green", "gris");
		sctType.classList.add("red");
		sctType.classList.remove("green", "gris");
	}

	if (mobType === "neutral") {
		divMobs.classList.add("gris-border");
		divMobs.classList.remove("red-border", "green-border");
		sctName.classList.add("gris");
		sctName.classList.remove("red", "green");
		sctType.classList.add("gris");
		sctType.classList.remove("red", "green");
	}

	console.log(mob);
});
