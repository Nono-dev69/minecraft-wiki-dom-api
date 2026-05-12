const form = document.querySelector("form");

async function test() {
	const response = await fetch("http://192.168.1.15:3000/v1/arena/entities");
	const json = await response.json();

	console.log(json);
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const formData = new FormData(form);
	console.log(data);
	test();
});
