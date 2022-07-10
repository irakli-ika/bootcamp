import messageBox from "./components/messageBox.js"
//generate unique id
const uid = () => Date.now().toString(36) + Math.random().toString(36).substr(2);

const showError = (_) => {
    const {errors, messageBoxContainer} = _
    setTimeout(() => {
        messageBoxContainer.innerHTML = ""
    }, 5000)
    errors.forEach(error => {
        const inputs = document.querySelector("." + error.placeholder)
        const labels = document.getElementById(error.placeholder).nextElementSibling
        inputs.classList.add("inputError")
        console.log(labels);
        labels.classList.add("inputError")
        messageBoxContainer.insertAdjacentHTML("beforeend", messageBox({id: uid(), headContent: error.type, bodyContent: error.message}))
    })
}

export default showError