const dataLists = document.getElementById("character")
const getData = (url) => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach(character => {
            const tmp =
            `<li data-select-lists="character" data-select-arrow="label_character">
            <!-- <input type="radio" name="character" id="" value=""> -->
            <span>${character.name}</span>
            <img src="https://chess-tournament-api.devtest.ge${character.image}" alt="">
            </li>`
            dataLists.insertAdjacentHTML("beforeend", tmp) 
        });
    });
    // console.log(dataLists);
}

export default getData