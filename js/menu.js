const $openbtn = document.querySelector("#openbtn")
const $closebtn = document.querySelector("#closebtn")
const $dial = document.querySelector("#dial")

$closebtn.addEventListener("click", () => {
        $dial.close();
})

$openbtn.addEventListener("click", () =>{
        $dial.showModal();
})

