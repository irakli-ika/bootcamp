// select function
const openSelect = document.querySelectorAll(".open_select_box");

openSelect.forEach(select => {
    select.addEventListener("click", (e) => {
        const select = document.getElementById(e.target.dataset.selectBox)
        const selectArrow = document.querySelectorAll("." + e.target.dataset.labelArrow)
        
        select.classList.toggle("disabled")
        
        selectArrow.forEach(arrow => {
            arrow.classList.toggle("disabled")
        })
    })
})
