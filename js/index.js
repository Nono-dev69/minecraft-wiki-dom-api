const search = document.getElementById("search");
const btn = document.getElementById("btn-search");
const classSelect = document.getElementById("class-select");
const typeSelect = document.getElementById("type-select");
const healthInput = document.getElementById("health-input");
const armorInput = document.getElementById("armor-input");
const damageInput = document.getElementById("damage-input");

const noResult = document.getElementById("no-result");
const resultsContainer = document.getElementById("results-container");

btn.addEventListener("click", async () => {
	const name = search.value.toLowerCase();
	const classification = classSelect.value;
	const type = typeSelect.value;
	const health = healthInput.value;
	const armor = armorInput.value;
	const damage = damageInput.value;

	const response = await fetch("http://play.hatlas.net:3000/v1/entities");
	const data = await response.json();

	const filtered = data.filter((entity) => {
		return (
			(!name || entity.name.toLowerCase().includes(name)) &&
			(!classification || entity.classification === classification) &&
			(!type || entity.type === type) &&
			(!health || entity.health >= Number(health)) &&
			(!armor || entity.armor >= Number(armor)) &&
			(!damage || entity.damage >= Number(damage))
		);
	});

	displayResults(filtered);
});

function displayResults(entities) {
	resultsContainer.innerHTML = "";

	if (entities.length === 0) {
		noResult.style.display = "flex";
		return;
	}

	noResult.style.display = "none";

	for (let i = 0; i < entities.length; i++) {
		const mob = entities[i];
		const mobType = mob.type.toLowerCase();

		let borderClass, bgClass;
		if (mobType === "passive") {
			borderClass = "green-border";
			bgClass = "green";
		} else if (mobType === "hostile") {
			borderClass = "red-border";
			bgClass = "red";
		} else {
			borderClass = "gris-border";
			bgClass = "gris";
		}

		const card = document.createElement("div");
		card.className = "sct6 " + borderClass;

		const nameDiv = document.createElement("div");
		nameDiv.className = "name " + bgClass;
		const nameTxt = document.createElement("p");
		nameTxt.textContent = mob.name;
		nameDiv.appendChild(nameTxt);

		const imgDiv = document.createElement("div");
		const img = document.createElement("img");
		img.className = "img1";
		img.src = mob.image.replace("play.hastlas.net", "play.hatlas.net");
		imgDiv.appendChild(img);

		const typeDiv = document.createElement("div");
		typeDiv.className = "type";
		const classLink = document.createElement("a");
		classLink.textContent = mob.classification;
		const typeTxt = document.createElement("p");
		typeTxt.textContent = mob.type;
		typeDiv.appendChild(classLink);
		typeDiv.appendChild(typeTxt);

		const btn = document.createElement("button");
		btn.className = "detail " + bgClass;
		btn.textContent = "SEE MORE";
		btn.addEventListener("click", () => {
			window.location.href = "/details.html?id=" + mob.id;
		});

		card.appendChild(nameDiv);
		card.appendChild(imgDiv);
		card.appendChild(typeDiv);
		card.appendChild(btn);

		resultsContainer.appendChild(card);
	}
}
