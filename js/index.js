import leftSideContent from "./components/leftSide.js"
import rightSideContent from "./components/rightSide.js"
// import changeStep from "./functions.js"
let stepCount = 0;
const leftSideContainer = document.getElementById("left_side");
const getStartedButton = document.getElementById("get_started")
const prevStep = document.getElementById("prev_step")
const nextStep = document.getElementById("next_step")
const homePageRow = document.querySelector(".home_page_row")
const registerRow = document.querySelector(".register_row ")

getStartedButton.addEventListener("click", (e) => {
    stepCount++
    homePageRow.classList.add("disabled")
    registerRow.classList.remove("disabled")

})

prevStep.addEventListener("click", (e) => {
    
    if (stepCount === 1) {
        stepCount--
        homePageRow.classList.remove("disabled")
        registerRow.classList.add("disabled")
    } else {
        
        switch(stepCount) {
            case 2:
                const content = {text: "When you see a good move, look for a better one.",
                                author: "Emanuel Lasker", image: "sec.png", position: "left"}
                leftSideContainer.innerHTML = leftSideContent(content)
              break;
            case 3:
              // code block
              break;
            default:
              // code block
          } 
    }
})

// form input fields
const input_fields = document.querySelectorAll(".personal_field")
input_fields.forEach(field => {
    field.addEventListener("focus", (e) => {
        console.log(e);
        const id = e.target.id
        document.querySelector(`[for="${id}"]`).classList.add("disabled")
    })

    field.addEventListener("blur", (e) => {
        const value = e.target.value.trim()
        const id = e.target.id
        if(value.length === 0) {
            document.querySelector(`[for="${id}"]`).classList.remove("disabled")
        }
    })
})