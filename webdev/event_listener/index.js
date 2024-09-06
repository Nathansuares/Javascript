const mybox= document.getElementById("myBox");

mybox.addEventListener("click", event =>{
    event.target.style.backgroundColor ="tomato";
    event.target.textContent="Ouch!🤕"
})

mybox.addEventListener("mouseover", event =>{
    event.target.style.backgroundColor ="yellow";
    event.target.textContent="Don't do it!😮"
})

mybox.addEventListener("mouseout", event =>{
    event.target.style.backgroundColor ="green";
    event.target.textContent="Click Me 😎"
})