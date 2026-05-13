const form = document.querySelector("form");
const Select = document.querySelector("select");
const formData = new FormData(form);

async function test() {
	const response = await fetch("http://10.69.4.208:3000/v1/entities", {
		method: "GET",
		headers: { "content-type": "application/json" },
		name: "",
		image: "",
	});
	const json = await response.json();
	for (let i = 0; i < json.length; i++) {
		const option = document.createElement("option");
		const imgentity = document.createElement("img");
		imgentity.setAttribute("src", json[i].icon);
		console.log(json[i].icon);
		option.textContent = json[i].name;

		option.appendChild(imgentity);
		option.value = json[i].name;
		Select.appendChild(option);
	}
	console.log(json);
}
window.addEventListener("DOMContentLoaded", () => {
	test();
});
form.addEventListener("submit", (e) => {
	e.preventDefault();
});
