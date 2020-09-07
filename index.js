var MusicPlayer = /** @class */ (function () {
    function MusicPlayer() {
    }
    MusicPlayer.prototype.songRating = function () {
        var user1 = Math.floor(Math.random() * Math.floor(7));
        var user2 = Math.floor(Math.random() * Math.floor(7));
        var user3 = Math.floor(Math.random() * Math.floor(7));
        var avg = Number((user1 + user2 + user3) / 3);
        if (avg == 0) {
            avg++;
        }
        return avg;
    };
    MusicPlayer.prototype.forMusic = function () {
        document.getElementById("searchDiv").innerHTML = " ";
        document.getElementById("playlist").style.display = "none";
        musicObj.mainDiv.innerHTML = " ";
        musicObj.childDiv2.innerHTML = " ";
        musicObj.forNavBar.innerHTML = " ";
        musicObj.playListSongDiv.innerHTML = " ";
        var div = document.createElement("div");
        div.setAttribute('class', 'container ml-7');
        var divRow = document.createElement("div");
        divRow.setAttribute('class', 'row ml-5');
        var divCol = document.createElement("div");
        divCol.setAttribute("class", "col ml-5");
        var divCol1 = document.createElement("div");
        divCol1.setAttribute("class", "col ml-5");
        var ratingforSong = musicObj.songRating();
        var forRating = document.createElement('span');
        for (var j = 0; j < ratingforSong; j++) {
            forRating.innerHTML += "<span class=\"fa fa-star checked\"></span>";
        }
        var p = document.createElement('p');
        p.setAttribute("class", "forSongs");
        for (var i = 0; i < musicObj.SongNames.length; i++) {
            p.innerHTML += "<a href=\"#\" onclick='musicObj.displaySong(\"" + i + "\",\"" + musicObj.SongNames[i] + "\")'>" + (i + 1) + ".&nbsp;&nbsp; " + musicObj.SongNames[i] + "\n    </a>";
        }
        var divChildContainer = document.createElement('div');
        divChildContainer.setAttribute('class', 'container');
        divChildContainer.innerHTML = "<div class='row'>\n        <div class='col' bg-primary><img src=\"Alan Walker.JPG\" class=\"img-fluid img\" alt=\"...\"></div>\n        </div><div class='col child'><h3>" + musicObj.SongNames[0] + "</h3>User's Rating: <span class=ratingspace></span><p class='childstarforMusic'>" + forRating.innerHTML + "</p></div>\n        <div class='row'><div class='col'>\n        " + p.innerHTML + "</div></div>";
        divCol1.innerHTML = "";
        divCol1.innerHTML = divChildContainer.innerHTML;
        divCol.appendChild(divCol1);
        divRow.appendChild(divCol);
        div.appendChild(divRow);
        musicObj.mainDiv.appendChild(div);
        var divNavBar = document.createElement('div');
        divNavBar.setAttribute('class', 'container child1');
        var divNavBarRow = document.createElement('div');
        divNavBarRow.setAttribute('class', 'row');
        var divNavBarCol = document.createElement('div');
        divNavBarCol.setAttribute('class', 'col');
        divNavBarCol.innerHTML = "<nav class=\"navbar navbar-light bg-light\">\n        <a class=\"navbar-brand\">" + musicObj.SongNames[0] + "</a>\n        <audio controls class=\"audio\">\n        <source src=\"" + musicObj.MusicPlayerURLs[0] + "\" type=\"audio/mpeg\">\n        Your browser does not support the audio element.\n      </audio>\n    </nav>";
        divNavBarRow.appendChild(divNavBarCol);
        divNavBar.appendChild(divNavBarRow);
        musicObj.forNavBar.appendChild(divNavBar);
    };
    MusicPlayer.prototype.keyPress = function () {
        musicObj.mainDiv.innerHTML = " ";
        musicObj.childDiv.innerHTML = " ";
        musicObj.childDiv2.innerHTML = " ";
        musicObj.forNavBar.innerHTML = " ";
        musicObj.playListSongDiv.innerHTML = " ";
        musicObj.searchedSongstoDisplay = [];
        musicObj.searchedSongNames = [];
        musicObj.searchedSongImages = [];
        musicObj.searchedPlayListSongNames = [];
        document.getElementById("playlist").style.display = "none";
        var search1 = document.getElementById("search");
        search1.addEventListener('keypress', function (e) {
            musicObj.mainDiv.innerHTML = " ";
            musicObj.childDiv.innerHTML = " ";
            musicObj.childDiv2.innerHTML = " ";
            musicObj.forNavBar.innerHTML = " ";
            musicObj.playListSongDiv.innerHTML = " ";
            musicObj.searchedSongstoDisplay = [];
            musicObj.searchedSongNames = [];
            musicObj.searchedSongImages = [];
            musicObj.searchedPlayListSongNames = [];
            if (e.key === 'Enter') {
                var searchSong = document.getElementById("search").value.toLowerCase();
                for (var i = 0; i < musicObj.SongNames.length; i++) {
                    var songs = musicObj.SongNames[i].toLowerCase();
                    if (songs.includes(searchSong)) {
                        musicObj.searchedSongstoDisplay.push(musicObj.SongNames[i]);
                        musicObj.searchedSongNames.push(musicObj.MusicPlayerURLs[i]);
                        musicObj.searchedSongImages.push(musicObj.SongImages[i]);
                    }
                }
                for (var i = 0; i < musicObj.playlistNames.length; i++) {
                    var playlistName = musicObj.playlistNames[i].toLowerCase();
                    if (playlistName.includes(searchSong)) {
                        // console.log(playlistName, divCollection);
                        //console.log(playlistNames[i], document.getElementById(divCollection[i + 1]));
                        musicObj.searchedPlayListNames.push(musicObj.playlistNames[i]);
                        musicObj.searchedPlayListSongNames.push(document.getElementById(musicObj.divCollection[i + 1]));
                    }
                }
                var div = document.createElement("div");
                div.setAttribute('class', 'container ml-7');
                var divRow = document.createElement("div");
                divRow.setAttribute('class', 'row ml-5');
                var divCol = document.createElement("div");
                divCol.setAttribute("class", "col ml-5");
                var divCol1 = document.createElement("div");
                divCol1.setAttribute("class", "col ml-5");
                var p = document.createElement('p');
                p.setAttribute("class", "forSongs");
                for (var i = 0; i < musicObj.searchedSongNames.length; i++) {
                    p.innerHTML += "<a href=\"#\" onclick='musicObj.displaySearchedSong(\"" + i + "\",\"" + musicObj.searchedSongstoDisplay[i] + "\")'>" + musicObj.searchedSongstoDisplay[i] + "</a>";
                }
                var p1 = document.createElement('p');
                if (musicObj.searchedPlayListSongNames.length > 0) {
                    for (var i = 0; i < musicObj.searchedPlayListSongNames.length; i++) {
                        p1.innerHTML += musicObj.searchedPlayListSongNames[i].innerHTML + "<hr>";
                    }
                }
                var ratingforSong = musicObj.songRating();
                var forRating = document.createElement('span');
                for (var j = 0; j < ratingforSong; j++) {
                    forRating.innerHTML += "<span class=\"fa fa-star checked\"></span>";
                }
                var searchedSongImage = "";
                if (musicObj.searchedSongImages[0] != undefined) {
                    searchedSongImage = musicObj.searchedSongImages[0].toString() + ".JPG";
                }
                var divChildContainer = document.createElement('div');
                divChildContainer.setAttribute('class', 'container');
                if (searchedSongImage != "") {
                    divChildContainer.innerHTML = "<div class='row'>\n    <div class='col' bg-primary><img src=\"" + searchedSongImage + "\" class=\"img-fluid img\" alt=\"...\"></div>\n    </div><div class='col child'><h3>" + musicObj.searchedSongstoDisplay[0] + "</h3>User's Rating: <span class=ratingspace></span>" + forRating.innerHTML + "</div>\n    <div class='row'><div class='col'>\n    " + p.innerHTML + "</div></div>";
                }
                var divChildContainer1 = document.createElement('div');
                divChildContainer1.setAttribute('class', 'container');
                if (musicObj.searchedPlayListSongNames.length > 0)
                    divChildContainer1.innerHTML += "<div class='row'><div class=\"container play2\"><br><div class=\"row\"><div class=\"col\"><h4>Play Lists</h4>" + p1.innerHTML + "</div></div></div></div>";
                divCol1.innerHTML = " ";
                divCol1.innerHTML = divChildContainer.innerHTML;
                divCol.appendChild(divCol1);
                divRow.appendChild(divCol);
                div.appendChild(divRow);
                musicObj.mainDiv.appendChild(div);
                musicObj.childDiv.appendChild(divChildContainer1);
                if (musicObj.searchedSongImages.length > 0 || musicObj.searchedSongNames.length > 0) {
                    var divNavBar = document.createElement('div');
                    divNavBar.setAttribute('class', 'container child1');
                    var divNavBarRow = document.createElement('div');
                    divNavBarRow.setAttribute('class', 'row');
                    var divNavBarCol = document.createElement('div');
                    divNavBarCol.setAttribute('class', 'col');
                    divNavBarCol.innerHTML = "<nav class=\"navbar navbar-light bg-light\">\n        <a class=\"navbar-brand\">" + musicObj.searchedSongstoDisplay[0] + "</a>\n        <audio controls class=\"audio\">\n        <source src=\"" + musicObj.searchedSongNames[0] + "\" type=\"audio/mpeg\">\n        Your browser does not support the audio element.\n      </audio>\n    </nav>";
                    divNavBarRow.appendChild(divNavBarCol);
                    divNavBar.appendChild(divNavBarRow);
                    musicObj.forNavBar.appendChild(divNavBar);
                }
            }
        });
        return 1;
    };
    MusicPlayer.prototype.musicSongs = function () {
        document.getElementById("searchDiv").innerHTML = " ";
        document.getElementById("playlist").style.display = "none";
        musicObj.mainDiv.innerHTML = " ";
        musicObj.childDiv.innerHTML = " ";
        musicObj.childDiv2.innerHTML = " ";
        musicObj.forNavBar.innerHTML = " ";
        musicObj.playListSongDiv.innerHTML = " ";
        var div = document.createElement("div");
        div.setAttribute('class', 'container ml-7');
        var divRow = document.createElement("div");
        divRow.setAttribute('class', 'row ml-5');
        var divCol = document.createElement("div");
        divCol.setAttribute("class", "col ml-5");
        var divCol1 = document.createElement("div");
        divCol1.setAttribute("class", "col ml-5");
        var ratingforSong = musicObj.songRating();
        var forRating = document.createElement('span');
        for (var j = 0; j < ratingforSong; j++) {
            forRating.innerHTML += "<span class=\"fa fa-star checked\"></span>";
        }
        var divChildContainer = document.createElement('div');
        divChildContainer.setAttribute('class', 'container');
        var p = document.createElement('p');
        p.setAttribute("class", "forSongs");
        for (var i = 0; i < musicObj.SongNames.length; i++) {
            p.innerHTML += "<a href=\"#\" onclick='musicObj.displaySong(\"" + i + "\",\"" + musicObj.SongNames[i] + "\")'>" + (i + 1) + ".&nbsp;&nbsp; " + musicObj.SongNames[i] + "\n    </a>";
        }
        divChildContainer.innerHTML = "<div class='row'>\n    <div class='col' bg-primary><img src=\"Alan Walker.JPG\" class=\"img-fluid img\" alt=\"...\"></div>\n    </div><div class='col child'><h3>" + musicObj.SongNames[0] + "</h3>User's Rating: <span class=ratingspace></span>" + forRating.innerHTML + "</div>\n    <div class='row'><div class='col'>\n    " + p.innerHTML + "</div></div>";
        divCol1.innerHTML = "";
        divCol1.innerHTML = divChildContainer.innerHTML;
        divCol.appendChild(divCol1);
        divRow.appendChild(divCol);
        div.appendChild(divRow);
        musicObj.mainDiv.appendChild(div);
        var divNavBar = document.createElement('div');
        divNavBar.setAttribute('class', 'container child1');
        var divNavBarRow = document.createElement('div');
        divNavBarRow.setAttribute('class', 'row');
        var divNavBarCol = document.createElement('div');
        divNavBarCol.setAttribute('class', 'col');
        divNavBarCol.innerHTML = "<nav class=\"navbar navbar-light bg-light\">\n    <a class=\"navbar-brand\">" + musicObj.SongNames[0] + "</a>\n    <audio controls class=\"audio\">\n    <source src=\"" + musicObj.MusicPlayerURLs[0] + "\" type=\"audio/mpeg\">\n    Your browser does not support the audio element.\n  </audio>\n</nav>";
        divNavBarRow.appendChild(divNavBarCol);
        divNavBar.appendChild(divNavBarRow);
        musicObj.forNavBar.appendChild(divNavBar);
    };
    MusicPlayer.prototype.displaySearchedSong = function (i, searchedsongname) {
        musicObj.childDiv2.innerHTML = " ";
        musicObj.childDiv.innerHTML = " ";
        musicObj.mainDiv.innerHTML = " ";
        musicObj.forNavBar.innerHTML = " ";
        musicObj.playListSongDiv.innerHTML = " ";
        var div = document.createElement("div");
        div.setAttribute('class', 'container ml-7');
        var divRow = document.createElement("div");
        divRow.setAttribute('class', 'row ml-5');
        var divCol = document.createElement("div");
        divCol.setAttribute("class", "col ml-5");
        var divCol1 = document.createElement("div");
        divCol1.setAttribute("class", "col ml-5");
        var p = document.createElement('p');
        p.setAttribute("class", "forSongs");
        for (var i_1 = 0; i_1 < musicObj.searchedSongNames.length; i_1++) {
            p.innerHTML += "<a href=\"#\" onclick='musicObj.displaySearchedSong(\"" + i_1 + "\",\"" + musicObj.searchedSongstoDisplay[i_1] + "\")'>" + musicObj.searchedSongstoDisplay[i_1] + "</a>";
        }
        var p1 = document.createElement('p');
        for (var i_2 = 0; i_2 < musicObj.searchedPlayListSongNames.length; i_2++) {
            p1.innerHTML += musicObj.searchedPlayListSongNames[i_2].innerHTML + "<hr>";
        }
        var ratingforSong = musicObj.songRating();
        var forRating = document.createElement('span');
        for (var j = 0; j < ratingforSong; j++) {
            forRating.innerHTML += "<span class=\"fa fa-star checked\"></span>";
        }
        var searchedSongImage = musicObj.searchedSongImages[i].toString() + ".JPG";
        var divChildContainer = document.createElement('div');
        divChildContainer.setAttribute('class', 'container');
        divChildContainer.innerHTML = "<div class='row'>\n        <div class='col' bg-primary><img src=\"" + searchedSongImage + "\" class=\"img-fluid img\" alt=\"...\"></div>\n        </div><div class='col child'><h3>" + searchedsongname + "</h3>User's Rating: <span class=ratingspace></span>" + forRating.innerHTML + "</div>\n        <div class='row'><div class='col'>\n        " + p.innerHTML + "</div></div>";
        if (musicObj.searchedPlayListSongNames.length > 0)
            divChildContainer.innerHTML += "<div class='row'><div class=\"container play2\"><br><div class=\"row\"><div class=\"col\"><h4>Play 3Lists</h4>" + p1.innerHTML + "</div></div></div></div>";
        divCol1.innerHTML = " ";
        divCol1.innerHTML = divChildContainer.innerHTML;
        divCol.appendChild(divCol1);
        divRow.appendChild(divCol);
        div.appendChild(divRow);
        musicObj.childDiv2.appendChild(div);
        var divNavBar = document.createElement('div');
        divNavBar.setAttribute('class', 'container child1');
        var divNavBarRow = document.createElement('div');
        divNavBarRow.setAttribute('class', 'row');
        var divNavBarCol = document.createElement('div');
        divNavBarCol.setAttribute('class', 'col');
        divNavBarCol.innerHTML = "<nav class=\"navbar navbar-light bg-light\">\n            <a class=\"navbar-brand\">" + searchedsongname + "</a>\n            <audio controls class=\"audio\">\n            <source src=\"" + musicObj.searchedSongNames[i] + "\" type=\"audio/mpeg\">\n            Your browser does not support the audio element.\n          </audio>\n        </nav>";
        divNavBarRow.appendChild(divNavBarCol);
        divNavBar.appendChild(divNavBarRow);
        musicObj.forNavBar.appendChild(divNavBar);
    };
    MusicPlayer.prototype.displaySong = function (i, songname) {
        var divChildContainer = document.createElement('div');
        divChildContainer.setAttribute('class', 'container');
        musicObj.childDiv.innerHTML = "";
        musicObj.childDiv2.innerHTML = " ";
        musicObj.mainDiv.innerHTML = " ";
        musicObj.forNavBar.innerHTML = " ";
        divChildContainer.innerHTML = " ";
        musicObj.playListSongDiv.innerHTML = " ";
        var ratingforSong = musicObj.songRating();
        var forRating = document.createElement('span');
        for (var j = 0; j < ratingforSong; j++) {
            forRating.innerHTML += "<span class=\"fa fa-star checked\"></span>";
        }
        var imagesrc = musicObj.SongImages[i].toString() + ".JPG";
        var div = document.createElement("div");
        div.setAttribute('class', 'container ml-7');
        var divRow = document.createElement("div");
        divRow.setAttribute('class', 'row ml-5');
        var divCol = document.createElement("div");
        divCol.setAttribute("class", "col ml-5");
        var divCol1 = document.createElement("div");
        var p = document.createElement('p');
        p.setAttribute("class", "forSongs");
        for (var i_3 = 0; i_3 < musicObj.SongNames.length; i_3++) {
            p.innerHTML += "<a href=\"#\" onclick='musicObj.displaySong(\"" + i_3 + "\",\"" + musicObj.SongNames[i_3] + "\")'>" + (i_3 + 1) + ".&nbsp;&nbsp; " + musicObj.SongNames[i_3] + "\n            </a>";
        }
        divCol1.setAttribute("class", "col ml-5");
        divChildContainer.innerHTML = "<div class='row'>\n        <div class='col' bg-primary><img src=\"" + imagesrc + "\" class=\"img-fluid img\" alt=\"...\"></div>\n        </div><div class='col child'><h3>" + musicObj.SongNames[i] + "</h3>User's Rating: <span class=ratingspace></span>" + forRating.innerHTML + "</div>\n        <div class='row'><div class='col'>\n        " + p.innerHTML + "</div></div>";
        divCol1.innerHTML = "";
        divCol1.innerHTML = divChildContainer.innerHTML;
        divCol.appendChild(divCol1);
        divRow.appendChild(divCol);
        div.appendChild(divRow);
        // let p = document.createElement('div');
        // p.setAttribute('class', 'container child');
        // p.innerHTML = `<img src="${imagesrc}" class='img-fluid' alt="image not found"><h3 class='heading'>${SongNames[i]}</h3>`;
        musicObj.childDiv.appendChild(div);
        var divNavBar = document.createElement('div');
        divNavBar.setAttribute('class', 'container child1');
        var divNavBarRow = document.createElement('div');
        divNavBarRow.setAttribute('class', 'row');
        var divNavBarCol = document.createElement('div');
        divNavBarCol.setAttribute('class', 'col');
        divNavBarCol.innerHTML = "<nav class=\"navbar navbar-light bg-light\">\n        <a class=\"navbar-brand\">" + songname + "</a>\n        <audio controls class=\"audio\">\n        <source src=\"" + musicObj.MusicPlayerURLs[i] + "\" type=\"audio/mpeg\">\n        Your browser does not support the audio element.\n      </audio>\n    </nav>";
        divNavBarRow.appendChild(divNavBarCol);
        divNavBar.appendChild(divNavBarRow);
        musicObj.forNavBar.appendChild(divNavBar);
    };
    MusicPlayer.prototype.createPlayList = function () {
        musicObj.mainDiv.innerHTML = " ";
        musicObj.forNavBar.innerHTML = " ";
        musicObj.childDiv.innerHTML = " ";
        musicObj.childDiv2.innerHTML = " ";
        musicObj.playListSongDiv.innerHTML = " ";
        document.getElementById("searchDiv").innerHTML = " ";
        document.getElementById("playlist").style.display = "block";
        musicObj.PlayListDiv.innerHTML = "<button  class=\"btn btn-success\" onclick='musicObj.displayPlayList()'>Create a new PlayList</button>";
    };
    MusicPlayer.prototype.displayPlayList = function () {
        musicObj.playListSongDiv.innerHTML = " ";
        var playlistName = prompt("Please Enter the name of Playlist");
        if (playlistName !== null) {
            //console.log(playlistName);
            musicObj.playlistNames.push(playlistName);
            musicObj.globalPlaylist++;
            var displayPlay = document.createElement("div");
            displayPlay.setAttribute("class", "container ml-2 mt-2 play1");
            displayPlay.setAttribute("id", musicObj.globalPlaylist.toString());
            displayPlay.innerHTML = "<div class=\"forPadding\"></div><div class=\"row\">\n        <div class=\"col mt-1\">\n        " + playlistName + "\n        </div>\n       </div>";
            musicObj.divCollection[musicObj.globalPlaylist.toString()] = [musicObj.globalPlaylist.toString()];
            // musicObj.divCollection.insert(musicObj.globalPlaylist.toString(),musicObj.globalPlaylist.toString());
            //console.log(musicObj.divCollection[musicObj.globalPlaylist.toString()] );
            musicObj.contentsPlayListDiv[musicObj.globalPlaylist] = displayPlay;
            var displayPlay1 = document.createElement("span");
            displayPlay1.setAttribute("class", "container top");
            displayPlay1.innerHTML = "<div class=\"forPadding\"></div><div class=\"row\">\n            <div class=\"col\">\n            <button class=\"btn btn-success\" id=" + musicObj.globalPlaylist + " onclick=\"musicObj.addSong('" + musicObj.globalPlaylist + "','" + musicObj.divCollection + "')\">Add a Song to  above PlayList</button>\n           </div>\n       </div>";
            musicObj.playlistdiv.appendChild(displayPlay);
            musicObj.playlistdiv.appendChild(displayPlay1);
            musicObj.PlayListDiv.appendChild(musicObj.playlistdiv);
        }
        else {
            alert("Enter the Playlist Name");
        }
    };
    MusicPlayer.prototype.addSong = function (id, divCollection1) {
        //console.log(id);
        musicObj.displaySongstoadd.innerHTML = " ";
        var ul = document.createElement('ul');
        ul.setAttribute('class', 'list-group list-group-flush');
        ul.setAttribute('style', 'border:2px solid black;');
        ul.innerHTML += "<a href=\"#\" class=\"close1\" onclick=musicObj.closeSongList()>\n        <span aria-hidden=\"true\">&times;</span>\n      </a>";
        for (var i = 0; i < musicObj.SongNames.length; i++) {
            ul.innerHTML += "<li class=\"list-group-item\">" + musicObj.SongNames[i] + "&nbsp;&nbsp;<button class=\"btn btn-outline-dark\" id='songtoplaylist' onclick=musicObj.addtoPlayList('" + i + "','" + id + "','" + divCollection1 + "')> Add song to playlist</button></li>";
        }
        musicObj.displaySongstoadd.appendChild(ul);
        document.body.appendChild(musicObj.displaySongstoadd);
    };
    MusicPlayer.prototype.addtoPlayList = function (i, id, divCollection1) {
        var songContains = false;
        if (musicObj.playListDataArray[id] != null || musicObj.playListDataArray[id] != undefined) {
            var arrayofSongs = musicObj.playListDataArray[id].split(":");
            for (var j = 0; j < arrayofSongs.length; j++) {
                if (arrayofSongs[j] == musicObj.SongNames[i]) {
                    songContains = true;
                }
            }
        }
        if (!songContains) {
            if (musicObj.playListDataArray[id] != null || musicObj.playListDataArray[id] != undefined) {
                musicObj.playListDataArray[id] += ":" + musicObj.SongNames[i];
            }
            else {
                musicObj.playListDataArray[id] = musicObj.SongNames[i];
            }
            //  console.log(divCollection1[id.toString()]);
            //console.log(id.toString(),divCollection1[id.toString()],divCollection1);
            document.getElementById(id.toString()).innerHTML += "<div class=\"row\">\n        <div class=\"col\"><a href=\"#\" onclick='musicObj.displaySongForPlayList(\"" + i + "\")'>" + musicObj.SongNames[i] + "</a></div>\n        </div>";
            document.getElementById("card").innerHTML = " ";
            if (document.getElementById("card").innerHTML == " ") {
                alert("Closing the Song List");
            }
        }
    };
    MusicPlayer.prototype.displaySongForPlayList = function (i) {
        // childDiv.innerHTML = "";
        // childDiv2.innerHTML = " ";
        var divChildContainer = document.createElement('div');
        divChildContainer.setAttribute('class', 'container');
        musicObj.mainDiv.innerHTML = " ";
        musicObj.forNavBar.innerHTML = " ";
        divChildContainer.innerHTML = " ";
        musicObj.playListSongDiv.innerHTML = " ";
        var ratingforSong = musicObj.songRating();
        var forRating = document.createElement('span');
        for (var j = 0; j < ratingforSong; j++) {
            forRating.innerHTML += "<span class=\"fa fa-star checked\"></span>";
        }
        var p = document.createElement('p');
        p.setAttribute("class", "forSongs");
        for (var i_4 = 0; i_4 < musicObj.searchedSongNames.length; i_4++) {
            p.innerHTML += "<a href=\"#\" onclick='musicObj.displaySongForPlayList(\"" + i_4 + "\")'>" + musicObj.SongNames[i_4] + "</a>";
        }
        var imagesrc = musicObj.SongImages[i].toString() + ".JPG";
        var div = document.createElement("div");
        div.setAttribute('class', 'container ml-7');
        var divRow = document.createElement("div");
        divRow.setAttribute('class', 'row ml-5');
        var divCol = document.createElement("div");
        divCol.setAttribute("class", "col ml-5");
        var divCol1 = document.createElement("div");
        divCol1.setAttribute("class", "col ml-5");
        divChildContainer.innerHTML = "<div class='row'>\n        <div class='col' bg-primary><img src=\"" + imagesrc + "\" class=\"img-fluid img\" alt=\"...\"></div>\n        </div><div class='col child'><h3>" + musicObj.SongNames[i] + "</h3>User's Rating: <span class=ratingspace></span><p class='childstar1'>" + forRating.innerHTML + "</p></div>\n        <div class='row'></div>";
        divCol1.innerHTML = "";
        divCol1.innerHTML = divChildContainer.innerHTML;
        divCol.appendChild(divCol1);
        divRow.appendChild(divCol);
        div.appendChild(divRow);
        // let p = document.createElement('div');
        // p.setAttribute('class', 'container child');
        // p.innerHTML = `<img src="${imagesrc}" class='img-fluid' alt="image not found"><h3 class='heading'>${SongNames[i]}</h3>`;
        musicObj.playListSongDiv.appendChild(div);
        var divNavBar = document.createElement('div');
        divNavBar.setAttribute('class', 'container child1');
        var divNavBarRow = document.createElement('div');
        divNavBarRow.setAttribute('class', 'row');
        var divNavBarCol = document.createElement('div');
        divNavBarCol.setAttribute('class', 'col');
        divNavBarCol.innerHTML = "<nav class=\"navbar navbar-light bg-light\">\n        <a class=\"navbar-brand\">" + musicObj.SongNames[i] + "</a>\n        <audio controls class=\"audio\">\n        <source src=\"" + musicObj.MusicPlayerURLs[i] + "\" type=\"audio/mpeg\">\n        Your browser does not support the audio element.\n      </audio>\n    </nav>";
        divNavBarRow.appendChild(divNavBarCol);
        divNavBar.appendChild(divNavBarRow);
        musicObj.forNavBar.appendChild(divNavBar);
    };
    MusicPlayer.prototype.closeSongList = function () {
        document.getElementById("card").innerHTML = " ";
    };
    return MusicPlayer;
}());
var musicObj = new MusicPlayer();
musicObj.MusicPlayerURLs = ['https://www.talk2trend.com/english/alan-walker-on-my-way.mp3', 'https://www.talk2trend.com/english/taki-taki-mp3-free-download.mp3', 'https://www.talk2trend.com/english/blank-space.mp3', 'https://www.talk2trend.com/english/let-me-love-you.mp3', 'https://www.talk2trend.com/english/Imagine-Dragons-Believer.mp3', 'https://www.talk2trend.com/english/despacito-ft-daddy-yankee.mp3', 'https://www.talk2trend.com/english/maroon-5-girls-like-you.mp3', 'https://www.talk2trend.com/english/see-you-again-ft-charlie-puth.mp3', 'https://www.talk2trend.com/bollywood/ghungroo-mp3-song-download.mp3', 'https://www.talk2trend.com/bollywood/aankh-marey-simmba.mp3', 'https://www.talk2trend.com/bollywood/vaaste.mp3', 'https://www.talk2trend.com/bollywood/ve-maahi-kesari.mp3', 'https://www.talk2trend.com/bollywood/first-class-kalank.mp3'];
musicObj.SongNames = ["Alan Walker On My Way", "Taki Taki", "Blank Space", "Let Me Love You", "Imagine Dragons Believer", "Despacito", "Maroon Girls Like You", "See You Again", "Ghungroo", "Aankh Marey", "Vaaste", "Ve Maahi", "First Class"];
musicObj.SongImages = ["Alan Walker", "Taki Taki", "Blank Space", "let me love you", "Imagine Dragons Believer", "Despacito", "Maroon Girls Like You", "See You Again", "Ghungroo", "Aankh Marey", "Vaaste", "ve maahi", "First Class"];
musicObj.globalPlaylist = 0;
musicObj.playListDataArray = [];
musicObj.divCollection = [];
musicObj.contentsPlayListDiv = [];
musicObj.searchedSongstoDisplay = [];
musicObj.searchedSongNames = [];
musicObj.searchedPlayListNames = [];
musicObj.searchedPlayListSongNames = [];
musicObj.searchedSongImages = [];
musicObj.playlistNames = [];
musicObj.mainDiv = document.getElementById("main");
musicObj.childDiv = document.getElementById("childDiv");
musicObj.childDiv2 = document.getElementById("childDiv2");
musicObj.PlayListDiv = document.getElementById("playlist");
musicObj.displaySongstoadd = document.getElementById('card');
musicObj.playlistdiv = document.getElementById("play");
musicObj.playListSongDiv = document.getElementById("playlistSong");
musicObj.forNavBar = document.getElementById("forNavBar");
musicObj.forMusic();
musicObj.search = document.getElementById("search");
musicObj.search.addEventListener('focus', musicObj.keyPress);
musicObj.music = document.getElementById("music");
musicObj.music.addEventListener('click', musicObj.musicSongs);
musicObj.playListElement = document.getElementById("playLists");
musicObj.playListElement.addEventListener('click', musicObj.createPlayList);
