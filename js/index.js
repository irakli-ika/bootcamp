import leftSideContent from "./components/leftSide.js"
import rightSideContent from "./components/rightSide.js"
// import changeStep from "./functions.js"

const leftSideContainer = document.getElementById("left_side");
// const rightSideContainer = document.getElementById("right_side")
const getStartedButton = document.getElementById("get_started")
const prevStep = document.getElementById("prev_step")
const nextStep = document.getElementById("next_step")

prevStep.addEventListener("click",() => {
    
})

getStartedButton.addEventListener("click", (e) => {
    const rightSideContainer = document.querySelectorAll(".right_side_card")
    const setArguments = {text: "When you see a good move, look for a better one.",
                            author: "Emanuel Lasker", image: "second.png", position: "left"}
    leftSideContainer.innerHTML = leftSideContent(setArguments)
    // rightSideContainer.innerHTML = rightSideContent()
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