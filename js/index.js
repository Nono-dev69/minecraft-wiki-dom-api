const search = document.getElementById("search");
const btn = document.getElementById("btn-search");
const nameMobs = document.getElementById("name");
const img = document.getElementById("imgmobs");
const classification = document.getElementById("classification");
const type = document.getElementById("type");

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

	if (mob.type == "Passive") {
		console.log("cc1");

		sctName.classList.add("green");
		sctName.classList.remove("gris");
		sctName.classList.remove("red");
	}
	if (mob.type == "hostile") {
		console.log("cc2");
		sctName.classList.add("red");
		sctName.classList.remove("green");
		sctName.classList.remove("gris");
	}
	if (mob.type == "neutral") {
		console.log("cc3");
		sctName.classList.add("gris");
		sctName.classList.remove("red");
		sctName.classList.remove("green");
	}

	console.log(mob.type);
});
