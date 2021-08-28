

document.getElementById('search').addEventListener('click', function () {
    let inputValue = document.getElementById('input-text').value;
    console.log(inputValue);

    let url = `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${inputValue}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            playerDetails(data);
        })
    document.getElementById('input-text').value = '';
})


function playerDetails(data) {
    let players = data.player;

    players.forEach(player => {
        console.log(player);
    })
}