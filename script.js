

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
    console.log(players);
    let playerFrontEnd = players.map(player => {
        console.log(player);
        return ` 
        <div class="row gx-5">
        <div class="col-md-3">
            <div>
                <p>Name</p>
                <h2>  <p>${player.strPlayer}</p></h2>
                <br>
                <p>Thumb</p>
                <img src="${player.strThumb}"
                     class="img-fluid">
                <br>
                <b>Born</b>
                <p>${player.dateBorn}</p>
                <br>
                <b>Birth Place</b>
                <p>${player.strBirthLocation} </p>
                <br>
                <b>Position</b>
                <p>${player.strPosition} </p>
                <br>
                <b>Team Number</b>
                <p>${player.strNumber} </p>
                <br>
                <b>Height</b>
                <p>${player.strHeight} </p>
                <br>
                <b>Weight</b>
                <p>${player.strWeight}</p>
                <br>
                <b>Market Value</b>
                <p>${player.strSigning}</p>
                <br>
                <b>Team</b>
                <p>${player.strTeam}</p>
                <br>
                <b>2nd Team</b>
                <p>${player.strTeam2}</p>
                <br>
                <b>Nationality</b>
                <p>${player.strNationality}</p>

            </div>

        </div>
        <div class="col-md-9">
            <div>

                <b>Description</b>
                <p>Available in: </p>
                <br>

                <p>
                ${player.strDescriptionEN}
                </p>
                <br>
                
                <br>
                <div class="row">
                    <div class="col-md-6">
                        <div>
                            <img src="${player.strFanart1}"
                                class="img-fluid">
                        </div>
                    </div>
                    <div class="col-md-6">
                    <div>
                        <img src="${player.strFanart2}"
                            class="img-fluid">
                    </div>
                </div>
                <div class="col-md-6">
                <div>
                    <img src="${player.strFanart3}"
                        class="img-fluid">
                </div>
            </div>
            <div class="col-md-6">
            <div>
                <img src="${player.strFanart4}"
                    class="img-fluid">
            </div>
        </div>

                </div>
            </div>
        </div>
    </div>
        <hr />
     

`
    })

    let playerPart = document.getElementById('player');

    playerPart.innerHTML = playerFrontEnd;
}