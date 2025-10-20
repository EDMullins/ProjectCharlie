fetch("https://EDMullins.github.io/ProjectCharlie/games.json")
    .then(response => response.json())
    .then(data => {
        console.log("Games: ", data);
    })