import leftSideContent from "./components/leftSide.js"
import rightSideContent from "./components/rightSide.js"
// import changeStep from "./functions.js"
const registerForm = document.getElementById('register_form');
const leftSideContainer = document.getElementById("left_side");
const getStartedButton = document.getElementById("get_started")
const prevStep = document.getElementById("prev_step")
const nextStep = document.getElementById("next_step")
const homePageRow = document.querySelector(".home_page_row")
const registerRow = document.querySelector(".register_row ")
let stepCount = 0;
let content = null
let registerFormData = null

getStartedButton.addEventListener("click", (e) => {
    stepCount++
    content = {
        text: "When you see a good move, look for a better one.",
        author: "Emanuel Lasker",
        image: "second.png",
        position: "left"
    }
    leftSideContainer.innerHTML = leftSideContent(content)
    homePageRow.classList.add("disabled")
    registerRow.classList.remove("disabled")

})

prevStep.addEventListener("click", (e) => {
    let content = null
    if (stepCount === 1) {
        stepCount--
        homePageRow.classList.remove("disabled")
        registerRow.classList.add("disabled")
    } else {
        
        switch(stepCount) {
            case 2:
                stepCount--
                content = {
                    text: "When you see a good move, look for a better one.",
                    author: "Emanuel Lasker",
                    image: "second.png",
                    position: "left"
                }
                leftSideContainer.innerHTML = leftSideContent(content)
              break;
            // case 3:
            //     stepCount--
            //     content = {
            //         text: "When you see a good move, look for a better one.",
            //         author: "Emanuel Lasker", 
            //         image: "sec.png", 
            //         position: "left"
            //     }
            //     leftSideContainer.innerHTML = leftSideContent(content)
            //   break;
            default:
              // code block
          } 
    }
})
nextStep.addEventListener("click", (e) => {
    
    // if (stepCount === 1) {
    //     stepCount--
    //     homePageRow.classList.remove("disabled")
    //     registerRow.classList.add("disabled")
    // } else {
        console.log(stepCount);
        switch(stepCount) {
            case 1:
                let personal_info_errors = []
                const entriesList = []
                
                document.querySelectorAll(".personal_field")
                .forEach(input => input.classList.remove("inputError"));

                if (registerForm.name.value.trim().length > 2) {
                    entriesList.push(['name', registerForm.name.value.trim()])
                } else {
                    personal_info_errors.push({
                        type: "invalid name",
                        message: "Please enter valid name",
                        placeholder: "name"
                    })
                }// end name field

                if (registerForm.email.value.trim().endsWith("@redberry.ge")) {
                    entriesList.push(['email', registerForm.email.value.trim()])
                } else {
                    personal_info_errors.push({
                        type: "invalid email",
                        message: "Please enter valid email address",
                        placeholder: "email"
                    })
                }// end email field

                if (registerForm.phone.value.trim().length > 2) {
                    entriesList.push(['phone', registerForm.phone.value.trim()])
                } else {
                    personal_info_errors.push({
                        type: "invalid phone number",
                        message: "Please enter valid phone number",
                        placeholder: "phone"
                    })
                }// end phone field
                
                if (registerForm.date.value.trim().length > 2) {
                    entriesList.push(['date', registerForm.date.value.trim()])
                } else {
                    personal_info_errors.push({
                        type: "invalid date",
                        message: "Please enter birth of date",
                        placeholder: "date"
                    })
                }// end date field

                // check errors
                if(personal_info_errors.length) {
                    personal_info_errors.forEach(error => {
                        document.getElementById(error.placeholder).classList.add("inputError")
                        console.log(error.message);
                        
                    })
                } else {
                    const entries = new Map(entriesList)
                    const entriesObject = Object.fromEntries(entries)
                    stepCount++
                    content = {
                        text: `Many have become chess masters; 
                        no one has become the master of chess.`,
                        author: "Siegbert Tarrasch",
                        image: "third.png",
                        position: "right"
                    }
                    leftSideContainer.innerHTML = leftSideContent(content)
                    
                    localStorage.setItem(entriesObject, JSON.stringify(entriesObject))
                }

            break;
            default:
        }
    // }
})

//form
if (localStorage.hasOwnProperty('registerFormData')) {
    registerFormData = JSON.parse(localStorage.getItem('registerFormData'));
} else {
    registerFormData = {
        personal_info: {

        },
        chess_experience: {
    
        }
    }
}

// form input fields
const input_fields = document.querySelectorAll(".personal_field")
input_fields.forEach(field => {
    field.addEventListener("focus", (e) => {
        // console.log(e);
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