const getData = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
}

export default getData