const inputs = document.querySelectorAll("[data-input]");
const placeholders = document.querySelectorAll("[data-placeholder]");



inputs.forEach(input => {
    input.addEventListener("focus", (e)=>{

        console.log("focused");
        const correspondingPlaceholder = input.previousElementSibling;
        if (correspondingPlaceholder.classList.contains("placeholder-active")){
            correspondingPlaceholder.classList.add("placeholder-inactive");
            correspondingPlaceholder.classList.remove("placeholder-active");
        }

    });
    input.addEventListener("blur", (e)=>{
        
        placeholders.forEach(placeholder =>{
            if (placeholder.nextElementSibling.value === ""){
                placeholder.classList.add("placeholder-active");
                placeholder.classList.remove("placeholder-inactive");
            }
        }); 

    })
});