const form = document.querySelector("form");
const Select = document.querySelector("select");
const formData = new FormData(form);

async function test() {
	const response = await fetch("http://10.69.4.208:3000/v1/entities");
	const json = await response.json();

	console.log(json);
}

form.addEventListener("submit", (e) => {
	e.preventDefault();

	console.log(data);
	test();
});
