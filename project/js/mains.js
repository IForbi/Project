const cartButton = document.querySelector("#personal-cabinet");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", function(event){
	modal.classList.add("is-open");
});

close.addEventListener("click", function(event){
	modal.classList.remove("is-open");
});