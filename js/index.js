import leftSideContent from "./components/leftSide.js"
import messageBox from "./components/messageBox.js"

const registerForm = document.getElementById('register_form');
const leftSideContainer = document.getElementById("left_side");
const getStartedButton = document.getElementById("get_started")
const prevStep = document.getElementById("prev_step")
const nextStep = document.getElementById("next_step")
const homePageRow = document.querySelector(".home_page_row")
const registerRow = document.querySelector(".register_row ")
const personalInfo = document.getElementById("personal_info")
const personalInfoHeader = document.getElementById("personal_info_header")
const chessExperience = document.getElementById("chess_experience")
const chessExperienceHeader = document.getElementById("chess_experience_header")
const fieldLabel = document.querySelectorAll(".field_label")
const firstStepBar = document.querySelector(".steps_progress .number")
const input_fields = document.querySelectorAll(".personal_field")
const messageBoxContainer = document.querySelector(".message_box_container")

let stepCount = 0;
let content = null
let registerFormData = null

//generate unique id
const uid = () => Date.now().toString(36) + Math.random().toString(36).substr(2);

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
                personalInfo.classList.remove("disabled")
                personalInfoHeader.classList.remove("disabled")
                chessExperience.classList.add("disabled")
                chessExperienceHeader.classList.add("disabled")
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
        switch(stepCount) {
            case 1:                
                let personal_info_errors = []
                const entriesList = []
                
                messageBoxContainer.innerHTML = ""
                input_fields.forEach(input => {
                    const labels = input.nextElementSibling
                    input.classList.remove("inputError")
                    labels.classList.remove("inputError")
                });

                if (registerForm.name.value.trim().length >= 2) {
                    entriesList.push(['name', registerForm.name.value.trim()])
                } else {
                    personal_info_errors.push({
                        type: "invalid name",
                        message: "Please enter valid name",
                        placeholder: "name"
                    })
                }// end name field

                if (registerForm.email.value.trim().length > 0 && registerForm.email.value.trim().endsWith("@redberry.ge")) {
                    entriesList.push(['email', registerForm.email.value.trim()])
                } else {
                    personal_info_errors.push({
                        type: "invalid email",
                        message: "Please enter valid email address",
                        placeholder: "email"
                    })
                }// end email field

                if (registerForm.phone.value.trim().length === 9 
                    && phone.value.match(/[0-9]/g) 
                    && !(phone.value.match(/[a-zA-Z]/g))) {
                    entriesList.push(['phone', registerForm.phone.value.trim()])
                } else {
                    personal_info_errors.push({
                        type: "invalid phone number",
                        message: "Please enter valid phone number",
                        placeholder: "phone"
                    })
                }// end phone field

                if (registerForm.date.value.trim().length) {
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
                    firstStepBar.innerHTML = "1"
                    localStorage.removeItem('registerFormData')
                    setTimeout(() => {
                        messageBoxContainer.innerHTML = ""
                    }, 5000)
                    personal_info_errors.forEach(error => {
                        const inputs = document.getElementById(error.placeholder)
                        const labels = document.getElementById(error.placeholder).nextElementSibling
                        inputs.classList.add("inputError")
                        labels.classList.add("inputError")
                        messageBoxContainer.insertAdjacentHTML("beforeend", messageBox({id: uid(), headContent: error.type, bodyContent: error.message}))
                    })
                } else {
                    const entries = new Map(entriesList)
                    const entriesObject = Object.fromEntries(entries)
                    registerFormData.personal_info = entriesObject
                    stepCount++
                    content = {
                        text: `Many have become chess masters; 
                        no one has become the master of chess.`,
                        author: "Siegbert Tarrasch",
                        image: "third.png",
                        position: "right"
                    }
                    
                    leftSideContainer.innerHTML = leftSideContent(content)
                    
                    localStorage.setItem("registerFormData", JSON.stringify(registerFormData))
                    personalInfo.classList.add("disabled")
                    personalInfoHeader.classList.add("disabled")
                    chessExperience.classList.remove("disabled")
                    chessExperienceHeader.classList.remove("disabled")

                    const firstStepDoneIcon = `<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.8187 1.31883C14.0829 1.06737 14.4343 0.928356 14.799 0.931115C15.1637 0.933875 15.513 1.07819 15.7733 1.33362C16.0336 1.58905 16.1845 1.9356 16.1941 2.30016C16.2038 2.66471 16.0714 3.01876 15.825 3.28758L8.34374 12.6438C8.2151 12.7824 8.05984 12.8936 7.88724 12.9708C7.71464 13.0479 7.52825 13.0895 7.33921 13.093C7.15017 13.0965 6.96237 13.0619 6.78703 12.9911C6.6117 12.9204 6.45242 12.815 6.31874 12.6813L1.35749 7.72008C1.21933 7.59134 1.10851 7.43609 1.03165 7.26359C0.954791 7.09109 0.913462 6.90488 0.910131 6.71606C0.906799 6.52724 0.941533 6.33969 1.01226 6.16459C1.08299 5.98948 1.18826 5.83042 1.32179 5.69688C1.45533 5.56335 1.61439 5.45808 1.78949 5.38735C1.9646 5.31662 2.15215 5.28189 2.34097 5.28522C2.52979 5.28855 2.716 5.32988 2.8885 5.40674C3.061 5.4836 3.21625 5.59442 3.34499 5.73258L7.27124 9.65695L13.7812 1.36008C13.7929 1.3456 13.8054 1.33183 13.8187 1.31883ZM12.0937 10.9563L13.8187 12.6813C13.9524 12.8147 14.1115 12.9199 14.2867 12.9904C14.4619 13.061 14.6495 13.0956 14.8383 13.0921C15.0271 13.0886 15.2132 13.0471 15.3857 12.9701C15.5581 12.8931 15.7132 12.7821 15.8419 12.6438L23.3269 3.28758C23.4613 3.15483 23.5676 2.99635 23.6395 2.8216C23.7113 2.64684 23.7472 2.4594 23.745 2.27047C23.7428 2.08154 23.7026 1.89498 23.6267 1.72195C23.5508 1.54892 23.4408 1.39296 23.3033 1.26339C23.1657 1.13381 23.0035 1.03327 22.8263 0.967786C22.6491 0.902296 22.4604 0.873195 22.2717 0.88222C22.083 0.891246 21.898 0.938213 21.7278 1.02032C21.5576 1.10242 21.4058 1.21797 21.2812 1.36008L14.7694 9.65695L13.86 8.74571L12.0919 10.9563H12.0937Z" fill="#3BAF77"/>
                    </svg>`
                    firstStepBar.innerHTML = firstStepDoneIcon

                }
            break;
            default:
        }
    // }
})

input_fields.forEach(field => {
field.addEventListener("input", (e) => e ? firstStepBar.classList.add("active") : "")

if (field.value) {
    firstStepBar.classList.add("active")
} else firstStepBar.classList.remove("active")
})
//form
if (localStorage.hasOwnProperty('registerFormData')) {
    registerFormData = JSON.parse(localStorage.getItem('registerFormData'));
    if (registerFormData.hasOwnProperty("personal_info")) {
        registerForm.name.value = registerFormData.personal_info.name
        registerForm.email.value = registerFormData.personal_info.email
        registerForm.phone.value = registerFormData.personal_info.phone
        registerForm.date.value = registerFormData.personal_info.date
        
        fieldLabel.forEach(label => {
            label.classList.add('disabled');
        })
    }
} else {
    registerFormData = {
        personal_info: {

        },
        chess_experience: {
    
        }
    }
}

// form input fields
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

//select function
const openLevelSelect = document.querySelectorAll(".open_select_box");

openLevelSelect.forEach(select => {
    select.addEventListener("click", (e) => {
        document.getElementById(e.target.dataset.selectBox).classList.toggle("disabled")
    })
})