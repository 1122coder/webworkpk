const btn =document.querySelector("#resp-btn");
const hidden = document.querySelector(".hidden")

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    btn.nextElementSibling.classList.remove("hidden")
});

$('#resp-btn').mouseout(function(){
    hidden.classList.add("hidden");
})
