$( document ).ready(function() {
    console.log( "ready!" );
    fetch("games.json")
    .then(response => response.json())
    .then(data => {
        console.log("Games: ", data);
        data.games.forEach(game => {
            const listItem = document.createElement('li');

            // Create and append the name
            const nameElement = document.createElement('h3');
            nameElement.textContent = game.name;
            listItem.appendChild(nameElement);

            // Create and append the image
            const imageElement = document.createElement('img');
            imageElement.src = game.img;
            imageElement.alt = `${game.name} image`;
            imageElement.style.width = "200px";
            listItem.appendChild(imageElement);

            // Create and append the first link
            const link1 = document.createElement('a');
            link1.href = game.repo;
            link1.textContent = "Repo Link";
            link1.target = "_blank";
            listItem.appendChild(link1);

            // Create and append the second link
            const link2 = document.createElement('a');
            link2.href = game.app;
            link2.textContent = "Game Link";
            link2.target = "_blank";
            listItem.appendChild(link2);

            // Add a favorite button
            // Add a favorite button
            const favoriteButton = document.createElement('button');
            favoriteButton.textContent = "Favorite";
            favoriteButton.addEventListener('click', () => {
                if (!listItem.classList.contains('favorite')) {
                    listItem.classList.add('favorite');
                    alert(`${game.name} has been marked as a favorite!`);
                } else {
                    listItem.classList.remove('favorite');
                    alert(`${game.name} has been removed from favorites!`);
                }
            });
            listItem.appendChild(favoriteButton);
            document.querySelector('#all').appendChild(listItem);
        });
    })
    .catch(error => console.error('Error loading game idea:', error));
});
