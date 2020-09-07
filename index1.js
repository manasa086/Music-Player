let MusicPlayerURLs = ['https://www.talk2trend.com/english/alan-walker-on-my-way.mp3', 'https://www.talk2trend.com/english/taki-taki-mp3-free-download.mp3', 'https://www.talk2trend.com/english/blank-space.mp3', 'https://www.talk2trend.com/english/let-me-love-you.mp3', 'https://www.talk2trend.com/english/Imagine-Dragons-Believer.mp3', 'https://www.talk2trend.com/english/despacito-ft-daddy-yankee.mp3', 'https://www.talk2trend.com/english/maroon-5-girls-like-you.mp3', 'https://www.talk2trend.com/english/see-you-again-ft-charlie-puth.mp3', 'https://www.talk2trend.com/bollywood/ghungroo-mp3-song-download.mp3', 'https://www.talk2trend.com/bollywood/aankh-marey-simmba.mp3', 'https://www.talk2trend.com/bollywood/vaaste.mp3', 'https://www.talk2trend.com/bollywood/ve-maahi-kesari.mp3', 'https://www.talk2trend.com/bollywood/first-class-kalank.mp3'];
let SongNames = ["Alan Walker On My Way", "Taki Taki", "Blank Space", "Let Me Love You", "Imagine Dragons Believer", "Despacito", "Maroon Girls Like You", "See You Again", "Ghungroo", "Aankh Marey", "Vaaste", "Ve Maahi", "First Class"];
let SongImages = ["Alan Walker", "Taki Taki", "Blank Space", "let me love you", "Imagine Dragons Believer", "Despacito", "Maroon Girls Like You", "See You Again", "Ghungroo", "Aankh Marey", "Vaaste", "ve maahi", "First Class"];
let mainDiv = document.getElementById("main");
let childDiv = document.getElementById("childDiv");
let childDiv2 = document.getElementById("childDiv2");
let globalPlaylist = 0;
let playListDataArray = [];
let divCollection = [];
let contentsPlayListDiv = [];
let searchedSongstoDisplay = [];
let searchedSongNames = [];
let searchedPlayListNames = [];
let searchedPlayListSongNames = [];
let searchedSongImages = [];
let playlistNames = [];
let PlayListDiv = document.getElementById("playlist");
let displaySongstoadd = document.getElementById('card');
let playlistdiv = document.getElementById("play");
let playListSongDiv = document.getElementById("playlistSong");
let forNavBar = document.getElementById("forNavBar");
document.getElementById("search").addEventListener('keypress', function(e) {
    mainDiv.innerHTML = " ";
    childDiv.innerHTML = " ";
    childDiv2.innerHTML = " ";
    forNavBar.innerHTML = " ";
    playListSongDiv.innerHTML = " ";
    searchedSongstoDisplay = [];
    searchedSongNames = [];
    searchedSongImages = [];
    searchedPlayListSongNames = [];
    document.getElementById("playlist").style.display = "none";
    if (e.key === 'Enter') {
        let searchSong = document.getElementById("search").value.toLowerCase();
        for (let i = 0; i < SongNames.length; i++) {
            let songs = SongNames[i].toLowerCase();
            if (songs.includes(searchSong)) {
                searchedSongstoDisplay.push(SongNames[i]);
                searchedSongNames.push(MusicPlayerURLs[i]);
                searchedSongImages.push(SongImages[i]);
            }
        }
        for (let i = 0; i < playlistNames.length; i++) {
            let playlistName = playlistNames[i].toLowerCase();
            if (playlistName.includes(searchSong)) {
                console.log(playlistName, divCollection);
                console.log(playlistNames[i], document.getElementById(divCollection[i + 1]));
                searchedPlayListNames.push(playlistNames[i]);
                searchedPlayListSongNames.push(document.getElementById(divCollection[i + 1]));
            }

        }
        let div = document.createElement("div");
        div.setAttribute('class', 'container ml-7');
        let divRow = document.createElement("div");
        divRow.setAttribute('class', 'row ml-5');
        let divCol = document.createElement("div");
        divCol.setAttribute("class", "col ml-5");
        let divCol1 = document.createElement("div");
        divCol1.setAttribute("class", "col ml-5");
        let p = document.createElement('p');

        for (let i = 0; i < searchedSongNames.length; i++) {
            p.innerHTML += `<a href="#" onclick='displaySearchedSong("${i}","${searchedSongstoDisplay[i]}")'>${searchedSongstoDisplay[i]}</a>`;
        }
        let p1 = document.createElement('p');
        if (searchedPlayListSongNames.length > 0) {

            for (let i = 0; i < searchedPlayListSongNames.length; i++) {
                p1.innerHTML += `${searchedPlayListSongNames[i].innerHTML}<hr>`;

            }
        }
        let ratingforSong = songRating();
        let forRating = document.createElement('span');
        for (let j = 0; j < ratingforSong; j++) {
            forRating.innerHTML += `<span class="fa fa-star checked"></span>`
        }
        let searchedSongImage = "";
        if (searchedSongImages[0] != undefined) {
            searchedSongImage = searchedSongImages[0].toString() + ".JPG";
        }
        let divChildContainer = document.createElement('div');
        divChildContainer.setAttribute('class', 'container');
        if (searchedSongImage != "") {
            divChildContainer.innerHTML = `<div class='row'>
    <div class='col' bg-primary><img src="${searchedSongImage}" class="img-fluid img" alt="..."></div>
    </div><div class='col child'><h3>${searchedSongstoDisplay[0]}</h3>User's Rating: <span class=ratingspace></span>${forRating.innerHTML}</div>
    <div class='row'><div class='col'>
    ${p.innerHTML}</div></div>`;
        }
        let divChildContainer1 = document.createElement('div');
        divChildContainer1.setAttribute('class', 'container');
        if (searchedPlayListSongNames.length > 0)
            divChildContainer1.innerHTML += `<div class='row'><div class="container play2"><br><div class="row"><div class="col"><h4>Play Lists</h4>${p1.innerHTML}</div></div></div></div>`;
        divCol1.innerHTML = " ";
        divCol1.innerHTML = divChildContainer.innerHTML;
        divCol.appendChild(divCol1);
        divRow.appendChild(divCol);
        div.appendChild(divRow);
        mainDiv.appendChild(div);
        childDiv.appendChild(divChildContainer1);
        if (searchedSongImages.length > 0 || searchedSongNames.length > 0) {
            let divNavBar = document.createElement('div');
            divNavBar.setAttribute('class', 'container child1');
            let divNavBarRow = document.createElement('div');
            divNavBarRow.setAttribute('class', 'row');
            let divNavBarCol = document.createElement('div');
            divNavBarCol.setAttribute('class', 'col');
            divNavBarCol.innerHTML = `<nav class="navbar navbar-light bg-light">
        <a class="navbar-brand">${searchedSongstoDisplay[0]}</a>
        <audio controls class="audio">
        <source src="${searchedSongNames[0]}" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    </nav>`;
            divNavBarRow.appendChild(divNavBarCol);
            divNavBar.appendChild(divNavBarRow);
            forNavBar.appendChild(divNavBar);
        }

    }
});
let divChildContainer = document.createElement('div');
divChildContainer.setAttribute('class', 'container');

function songRating() {
    let user1 = Math.floor(Math.random() * Math.floor(7));
    let user2 = Math.floor(Math.random() * Math.floor(7));
    let user3 = Math.floor(Math.random() * Math.floor(7));
    let avg = parseInt((user1 + user2 + user3) / 3);
    if (avg == 0) {
        avg++;
    }
    return avg;
};
let p = document.createElement('p');
for (let i = 0; i < SongNames.length; i++) {
    p.innerHTML += `<a href="#" onclick='displaySong("${i}","${SongNames[i]}")'>${i+1}.&nbsp;&nbsp; ${SongNames[i]}
    </a>`;

}

function forMusic() {
    document.getElementById("searchDiv").innerHTML = " ";
    document.getElementById("playlist").style.display = "none";
    mainDiv.innerHTML = " ";
    childDiv2.innerHTML = " ";
    forNavBar.innerHTML = " ";
    playListSongDiv.innerHTML = " ";
    let div = document.createElement("div");
    div.setAttribute('class', 'container ml-7');
    let divRow = document.createElement("div");
    divRow.setAttribute('class', 'row ml-5');
    let divCol = document.createElement("div");
    divCol.setAttribute("class", "col ml-5");
    let divCol1 = document.createElement("div");
    divCol1.setAttribute("class", "col ml-5");
    let ratingforSong = songRating();
    let forRating = document.createElement('span');
    for (let j = 0; j < ratingforSong; j++) {
        forRating.innerHTML += `<span class="fa fa-star checked"></span>`
    }
    divChildContainer.innerHTML = `<div class='row'>
    <div class='col' bg-primary><img src="Alan Walker.JPG" class="img-fluid img" alt="..."></div>
    </div><div class='col child'><h3>${SongNames[0]}</h3>User's Rating: <span class=ratingspace></span>${forRating.innerHTML}</div>
    <div class='row'><div class='col'>
    ${p.innerHTML}</div></div>`;
    divCol1.innerHTML = "";
    divCol1.innerHTML = divChildContainer.innerHTML;
    divCol.appendChild(divCol1);
    divRow.appendChild(divCol);
    div.appendChild(divRow);
    mainDiv.appendChild(div);
    let divNavBar = document.createElement('div');
    divNavBar.setAttribute('class', 'container child1');
    let divNavBarRow = document.createElement('div');
    divNavBarRow.setAttribute('class', 'row');
    let divNavBarCol = document.createElement('div');
    divNavBarCol.setAttribute('class', 'col');
    divNavBarCol.innerHTML = `<nav class="navbar navbar-light bg-light">
    <a class="navbar-brand">${SongNames[0]}</a>
    <audio controls class="audio">
    <source src="${MusicPlayerURLs[0]}" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
</nav>`;
    divNavBarRow.appendChild(divNavBarCol);
    divNavBar.appendChild(divNavBarRow);
    forNavBar.appendChild(divNavBar);
}
forMusic();
document.getElementById("music").addEventListener('click', function() {
    document.getElementById("searchDiv").innerHTML = " ";
    document.getElementById("playlist").style.display = "none";
    mainDiv.innerHTML = " ";
    childDiv2.innerHTML = " ";
    forNavBar.innerHTML = " ";
    playListSongDiv.innerHTML = " ";
    let div = document.createElement("div");
    div.setAttribute('class', 'container ml-7');
    let divRow = document.createElement("div");
    divRow.setAttribute('class', 'row ml-5');
    let divCol = document.createElement("div");
    divCol.setAttribute("class", "col ml-5");
    let divCol1 = document.createElement("div");
    divCol1.setAttribute("class", "col ml-5");
    let ratingforSong = songRating();
    let forRating = document.createElement('span');
    for (let j = 0; j < ratingforSong; j++) {
        forRating.innerHTML += `<span class="fa fa-star checked"></span>`
    }
    divChildContainer.innerHTML = `<div class='row'>
    <div class='col' bg-primary><img src="Alan Walker.JPG" class="img-fluid img" alt="..."></div>
    </div><div class='col child'><h3>${SongNames[0]}</h3>User's Rating: <span class=ratingspace></span>${forRating.innerHTML}</div>
    <div class='row'><div class='col'>
    ${p.innerHTML}</div></div>`;
    divCol1.innerHTML = "";
    divCol1.innerHTML = divChildContainer.innerHTML;
    divCol.appendChild(divCol1);
    divRow.appendChild(divCol);
    div.appendChild(divRow);
    mainDiv.appendChild(div);
    let divNavBar = document.createElement('div');
    divNavBar.setAttribute('class', 'container child1');
    let divNavBarRow = document.createElement('div');
    divNavBarRow.setAttribute('class', 'row');
    let divNavBarCol = document.createElement('div');
    divNavBarCol.setAttribute('class', 'col');
    divNavBarCol.innerHTML = `<nav class="navbar navbar-light bg-light">
    <a class="navbar-brand">${SongNames[0]}</a>
    <audio controls class="audio">
    <source src="${MusicPlayerURLs[0]}" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
</nav>`;
    divNavBarRow.appendChild(divNavBarCol);
    divNavBar.appendChild(divNavBarRow);
    forNavBar.appendChild(divNavBar);


});

function displaySearchedSong(i, searchedsongname) {
    childDiv2.innerHTML = " ";
    childDiv.innerHTML = " ";
    mainDiv.innerHTML = " ";
    forNavBar.innerHTML = " ";
    playListSongDiv.innerHTML = " ";
    let ratingforSong = songRating();
    let div = document.createElement("div");
    div.setAttribute('class', 'container ml-7');
    let divRow = document.createElement("div");
    divRow.setAttribute('class', 'row ml-5');
    let divCol = document.createElement("div");
    divCol.setAttribute("class", "col ml-5");
    let divCol1 = document.createElement("div");
    divCol1.setAttribute("class", "col ml-5");

    let p = document.createElement('p');
    for (let i = 0; i < searchedSongNames.length; i++) {
        p.innerHTML += `<a href="#" onclick='displaySearchedSong("${i}","${searchedSongstoDisplay[i]}")'>${searchedSongstoDisplay[i]}</a>`;
    }
    let p1 = document.createElement('p');
    for (let i = 0; i < searchedPlayListSongNames.length; i++) {
        p1.innerHTML += `${searchedPlayListSongNames[i].innerHTML}<hr>`;

    }
    let forRating = document.createElement('span');
    for (let j = 0; j < ratingforSong; j++) {
        forRating.innerHTML += `<span class="fa fa-star checked"></span>`
    }
    let searchedSongImage = searchedSongImages[i].toString() + ".JPG";
    let divChildContainer = document.createElement('div');
    divChildContainer.setAttribute('class', 'container');
    divChildContainer.innerHTML = `<div class='row'>
    <div class='col' bg-primary><img src="${searchedSongImage}" class="img-fluid img" alt="..."></div>
    </div><div class='col child'><h3>${searchedsongname}</h3>User's Rating: <span class=ratingspace></span>${forRating.innerHTML}</div>
    <div class='row'><div class='col'>
    ${p.innerHTML}</div></div>`
    if (searchedPlayListSongNames.length > 0)
        divChildContainer.innerHTML += `<div class='row'><div class="container play2"><br><div class="row"><div class="col"><h4>Play 3Lists</h4>${p1.innerHTML}</div></div></div></div>`;
    divCol1.innerHTML = " ";
    divCol1.innerHTML = divChildContainer.innerHTML;
    divCol.appendChild(divCol1);
    divRow.appendChild(divCol);
    div.appendChild(divRow);
    childDiv2.appendChild(div);
    let divNavBar = document.createElement('div');
    divNavBar.setAttribute('class', 'container child1');
    let divNavBarRow = document.createElement('div');
    divNavBarRow.setAttribute('class', 'row');
    let divNavBarCol = document.createElement('div');
    divNavBarCol.setAttribute('class', 'col');
    divNavBarCol.innerHTML = `<nav class="navbar navbar-light bg-light">
        <a class="navbar-brand">${searchedsongname}</a>
        <audio controls class="audio">
        <source src="${searchedSongNames[i]}" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    </nav>`;
    divNavBarRow.appendChild(divNavBarCol);
    divNavBar.appendChild(divNavBarRow);
    forNavBar.appendChild(divNavBar);

}

function displaySong(i, songname) {
    childDiv.innerHTML = "";
    childDiv2.innerHTML = " ";
    mainDiv.innerHTML = " ";
    forNavBar.innerHTML = " ";
    divChildContainer.innerHTML = " ";
    playListSongDiv.innerHTML = " ";
    let ratingforSong = songRating();
    let forRating = document.createElement('span');
    for (let j = 0; j < ratingforSong; j++) {
        forRating.innerHTML += `<span class="fa fa-star checked"></span>`
    }
    let imagesrc = SongImages[i].toString() + ".JPG";
    let div = document.createElement("div");
    div.setAttribute('class', 'container ml-7');
    let divRow = document.createElement("div");
    divRow.setAttribute('class', 'row ml-5');
    let divCol = document.createElement("div");
    divCol.setAttribute("class", "col ml-5");
    let divCol1 = document.createElement("div");
    divCol1.setAttribute("class", "col ml-5");
    divChildContainer.innerHTML = `<div class='row'>
    <div class='col' bg-primary><img src="${imagesrc}" class="img-fluid img" alt="..."></div>
    </div><div class='col child'><h3>${SongNames[i]}</h3>User's Rating: <span class=ratingspace></span>${forRating.innerHTML}</div>
    <div class='row'><div class='col'>
    ${p.innerHTML}</div></div>`;
    divCol1.innerHTML = "";
    divCol1.innerHTML = divChildContainer.innerHTML;
    divCol.appendChild(divCol1);
    divRow.appendChild(divCol);
    div.appendChild(divRow);

    // let p = document.createElement('div');
    // p.setAttribute('class', 'container child');
    // p.innerHTML = `<img src="${imagesrc}" class='img-fluid' alt="image not found"><h3 class='heading'>${SongNames[i]}</h3>`;
    childDiv.appendChild(div);
    let divNavBar = document.createElement('div');
    divNavBar.setAttribute('class', 'container child1');
    let divNavBarRow = document.createElement('div');
    divNavBarRow.setAttribute('class', 'row');
    let divNavBarCol = document.createElement('div');
    divNavBarCol.setAttribute('class', 'col');
    divNavBarCol.innerHTML = `<nav class="navbar navbar-light bg-light">
    <a class="navbar-brand">${songname}</a>
    <audio controls class="audio">
    <source src="${MusicPlayerURLs[i]}" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
</nav>`;
    divNavBarRow.appendChild(divNavBarCol);
    divNavBar.appendChild(divNavBarRow);
    forNavBar.appendChild(divNavBar);
}

function createPlayList() {
    mainDiv.innerHTML = " ";
    forNavBar.innerHTML = " ";
    childDiv.innerHTML = " ";
    childDiv2.innerHTML = " ";
    playListSongDiv.innerHTML = " ";
    document.getElementById("searchDiv").innerHTML = " ";
    document.getElementById("playlist").style.display = "block";
    PlayListDiv.innerHTML = `<button  class="btn btn-success" onclick='displayPlayList()'>Create a new PlayList</button>`


}

function displayPlayList() {
    playListSongDiv.innerHTML = " ";
    let playlistName = prompt("Please Enter the name of Playlist");
    if (playlistName !== null) {
        //console.log(playlistName);
        playlistNames.push(playlistName);
        console.log(playlistNames);
        globalPlaylist++;
        let displayPlay = document.createElement("div");
        displayPlay.setAttribute("class", "container ml-2 mt-2 play1");
        displayPlay.setAttribute("id", globalPlaylist);
        displayPlay.innerHTML = `<div class="forPadding"></div><div class="row">
    <div class="col mt-1">
    ${playlistName}
    </div>
   </div>`;
        let displayPlay1 = document.createElement("span");
        displayPlay1.setAttribute("class", "container top");
        displayPlay1.innerHTML = `<div class="forPadding"></div><div class="row">
        <div class="col">
        <button class="btn btn-success" id=${globalPlaylist} onclick="addSong(this.id)">Add a Song to  above PlayList</button>
       </div>
   </div>`;
        divCollection[globalPlaylist] = [globalPlaylist];
        contentsPlayListDiv[globalPlaylist] = displayPlay;
        playlistdiv.appendChild(displayPlay);
        playlistdiv.appendChild(displayPlay1);
        PlayListDiv.appendChild(playlistdiv);
    } else {
        alert("Enter the Playlist Name");
    }

}

function addSong(id) {
    //console.log(id);
    displaySongstoadd.innerHTML = " ";
    let ul = document.createElement('ul');
    ul.setAttribute('class', 'list-group list-group-flush')
    ul.setAttribute('style', 'border:2px solid black;')
    ul.innerHTML += `<a href="#" class="close1" onclick=closeSongList()>
    <span aria-hidden="true">&times;</span>
  </a>`;
    for (let i = 0; i < SongNames.length; i++) {
        ul.innerHTML += `<li class="list-group-item">${SongNames[i]}&nbsp;&nbsp;<button class="btn btn-outline-dark" id='songtoplaylist' onclick=addtoPlayList('${i}','${id}')> Add song to playlist</button></li>`;
    }
    displaySongstoadd.appendChild(ul);
    document.body.appendChild(displaySongstoadd);
}

function addtoPlayList(i, id) {
    let songContains = false;
    if (playListDataArray[id] != null || playListDataArray[id] != undefined) {
        let arrayofSongs = playListDataArray[id].split(":");
        for (let j = 0; j < arrayofSongs.length; j++) {
            if (arrayofSongs[j] == SongNames[i]) {
                songContains = true;
            }
        }
    }
    if (!songContains) {

        if (playListDataArray[id] != null || playListDataArray[id] != undefined) {
            playListDataArray[id] += ":" + SongNames[i];
        } else {
            playListDataArray[id] = SongNames[i];
        }
        document.getElementById(divCollection[id]).innerHTML += `<div class="row">
    <div class="col"><a href="#" onclick='displaySongForPlayList("${i}")'>${SongNames[i]}</a></div>
    </div>`;
        document.getElementById("card").innerHTML = " ";
        if (document.getElementById("card").innerHTML == !" ") {
            alert("Closing the Song List")
        }
    }

}

function displaySongForPlayList(i) {
    // childDiv.innerHTML = "";
    // childDiv2.innerHTML = " ";
    mainDiv.innerHTML = " ";
    forNavBar.innerHTML = " ";
    divChildContainer.innerHTML = " ";
    playListSongDiv.innerHTML = " ";
    let ratingforSong = songRating();
    let forRating = document.createElement('span');
    for (let j = 0; j < ratingforSong; j++) {
        forRating.innerHTML += `<span class="fa fa-star checked"></span>`
    }
    let p = document.createElement('p');
    for (let i = 0; i < searchedSongNames.length; i++) {
        p.innerHTML += `<a href="#" onclick='displaySongForPlayList("${i}")'>${SongNames[i]}</a>`;
    }
    let imagesrc = SongImages[i].toString() + ".JPG";
    let div = document.createElement("div");
    div.setAttribute('class', 'container ml-7');
    let divRow = document.createElement("div");
    divRow.setAttribute('class', 'row ml-5');
    let divCol = document.createElement("div");
    divCol.setAttribute("class", "col ml-5");
    let divCol1 = document.createElement("div");
    divCol1.setAttribute("class", "col ml-5");
    divChildContainer.innerHTML = `<div class='row'>
    <div class='col' bg-primary><img src="${imagesrc}" class="img-fluid img" alt="..."></div>
    </div><div class='col child'><h3>${SongNames[i]}</h3>User's Rating: <span class=ratingspace></span>${forRating.innerHTML}</div>
    <div class='row'></div>`;
    divCol1.innerHTML = "";
    divCol1.innerHTML = divChildContainer.innerHTML;
    divCol.appendChild(divCol1);
    divRow.appendChild(divCol);
    div.appendChild(divRow);

    // let p = document.createElement('div');
    // p.setAttribute('class', 'container child');
    // p.innerHTML = `<img src="${imagesrc}" class='img-fluid' alt="image not found"><h3 class='heading'>${SongNames[i]}</h3>`;
    playListSongDiv.appendChild(div);
    let divNavBar = document.createElement('div');
    divNavBar.setAttribute('class', 'container child1');
    let divNavBarRow = document.createElement('div');
    divNavBarRow.setAttribute('class', 'row');
    let divNavBarCol = document.createElement('div');
    divNavBarCol.setAttribute('class', 'col');
    divNavBarCol.innerHTML = `<nav class="navbar navbar-light bg-light">
    <a class="navbar-brand">${SongNames[i]}</a>
    <audio controls class="audio">
    <source src="${MusicPlayerURLs[i]}" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
</nav>`;
    divNavBarRow.appendChild(divNavBarCol);
    divNavBar.appendChild(divNavBarRow);
    forNavBar.appendChild(divNavBar);

}

function closeSongList() {
    document.getElementById("card").innerHTML = " ";
}