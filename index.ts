class MusicPlayer
{
    MusicPlayerURLs:string[];
    SongNames:string[];
    SongImages:string[];
    mainDiv:HTMLDivElement;
    childDiv:HTMLDivElement;
    childDiv2:HTMLDivElement;
    globalPlaylist:number;
    playListDataArray : string[];
    divCollection : string[];
    contentsPlayListDiv : HTMLDivElement[];
    searchedSongstoDisplay : string[];
    searchedSongNames : string[];
    searchedPlayListNames : string[];
    searchedPlayListSongNames : HTMLDivElement[];
    searchedSongImages : string[];
    playlistNames : string[];
    PlayListDiv :HTMLDivElement;
    displaySongstoadd :HTMLDivElement;
    playlistdiv :HTMLDivElement;
    playListSongDiv :HTMLDivElement;
    forNavBar :HTMLDivElement;
    search:HTMLInputElement;
    music:HTMLAnchorElement;
    playListElement:HTMLAnchorElement;
    songRating():number {
        let user1:number = Math.floor(Math.random() * Math.floor(7));
        let user2:number = Math.floor(Math.random() * Math.floor(7));
        let user3:number = Math.floor(Math.random() * Math.floor(7));
        let avg:number = Number((user1 + user2 + user3) / 3);
        if (avg == 0) {
            avg++;
        }
        return avg;
    }
    
    forMusic() {
        (<HTMLDivElement>document.getElementById("searchDiv")).innerHTML = " ";
        (<HTMLDivElement>document.getElementById("playlist")).style.display = "none";
        musicObj.mainDiv.innerHTML = " ";
        musicObj.childDiv2.innerHTML = " ";
        musicObj.forNavBar.innerHTML = " ";
        musicObj.playListSongDiv.innerHTML = " ";
        let div = <HTMLDivElement>document.createElement("div");
        div.setAttribute('class', 'container ml-7');
        let divRow = <HTMLDivElement>document.createElement("div");
        divRow.setAttribute('class', 'row ml-5');
        let divCol = <HTMLDivElement>document.createElement("div");
        divCol.setAttribute("class", "col ml-5");
        let divCol1 = <HTMLDivElement>document.createElement("div");
        divCol1.setAttribute("class", "col ml-5");
        let ratingforSong:number = musicObj.songRating();
        let forRating = <HTMLElement>document.createElement('span');
        for (let j = 0; j < ratingforSong; j++) {
            forRating.innerHTML += `<span class="fa fa-star checked"></span>`
        }
        let p = <HTMLElement>document.createElement('p');
        
        p.setAttribute("class","forSongs");
    for (let i = 0; i < musicObj.SongNames.length; i++) {
    p.innerHTML += `<a href="#" onclick='musicObj.displaySong("${i}","${musicObj.SongNames[i]}")'>${i+1}.&nbsp;&nbsp; ${musicObj.SongNames[i]}
    </a>`;

    }
        let divChildContainer = <HTMLDivElement>document.createElement('div');
divChildContainer.setAttribute('class', 'container');
        divChildContainer.innerHTML = `<div class='row'>
        <div class='col' bg-primary><img src="Alan Walker.JPG" class="img-fluid img" alt="..."></div>
        </div><div class='col child'><h3>${musicObj.SongNames[0]}</h3>User's Rating: <span class=ratingspace></span><p class='childstarforMusic'>${forRating.innerHTML}</p></div>
        <div class='row'><div class='col'>
        ${p.innerHTML}</div></div>`;
        divCol1.innerHTML = "";
        divCol1.innerHTML = divChildContainer.innerHTML;
        divCol.appendChild(divCol1);
        divRow.appendChild(divCol);
        div.appendChild(divRow);
        musicObj.mainDiv.appendChild(div);
        let divNavBar = <HTMLDivElement>document.createElement('div');
        divNavBar.setAttribute('class', 'container child1');
        let divNavBarRow = <HTMLDivElement>document.createElement('div');
        divNavBarRow.setAttribute('class', 'row');
        let divNavBarCol = <HTMLDivElement>document.createElement('div');
        divNavBarCol.setAttribute('class', 'col');
        divNavBarCol.innerHTML = `<nav class="navbar navbar-light bg-light">
        <a class="navbar-brand">${musicObj.SongNames[0]}</a>
        <audio controls class="audio">
        <source src="${musicObj.MusicPlayerURLs[0]}" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    </nav>`;
        divNavBarRow.appendChild(divNavBarCol);
        divNavBar.appendChild(divNavBarRow);
        musicObj.forNavBar.appendChild(divNavBar);
    }
    keyPress():number
    {
        musicObj.mainDiv.innerHTML = " ";
        musicObj.childDiv.innerHTML = " ";
        musicObj.childDiv2.innerHTML = " ";
        musicObj.forNavBar.innerHTML = " ";
        musicObj.playListSongDiv.innerHTML = " ";
        musicObj.searchedSongstoDisplay = [];
        musicObj.searchedSongNames = [];
    musicObj.searchedSongImages = [];
    musicObj.searchedPlayListSongNames = [];
    (<HTMLDivElement>document.getElementById("playlist")).style.display = "none";
        
        let search1=(<HTMLElement>document.getElementById("search"));
        search1.addEventListener('keypress',(e)=> {
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
                let searchSong:string = (<HTMLInputElement>document.getElementById("search")).value.toLowerCase();
                for (let i = 0; i < musicObj.SongNames.length; i++) {
                let songs = musicObj.SongNames[i].toLowerCase();
                if (songs.includes(searchSong)) {
                    musicObj.searchedSongstoDisplay.push(musicObj.SongNames[i]);
                    musicObj.searchedSongNames.push(musicObj.MusicPlayerURLs[i]);
                    musicObj.searchedSongImages.push(musicObj.SongImages[i]);
            }
        }
        for (let i = 0; i < musicObj.playlistNames.length; i++) {
            let playlistName = musicObj.playlistNames[i].toLowerCase();
            if (playlistName.includes(searchSong)) {
               // console.log(playlistName, divCollection);
                //console.log(playlistNames[i], document.getElementById(divCollection[i + 1]));
                musicObj.searchedPlayListNames.push(musicObj.playlistNames[i]);
                musicObj.searchedPlayListSongNames.push(<HTMLDivElement>document.getElementById(musicObj.divCollection[i + 1]));
            }

        }
        let div = <HTMLDivElement>document.createElement("div");
        div.setAttribute('class', 'container ml-7');
        let divRow = <HTMLDivElement>document.createElement("div");
        divRow.setAttribute('class', 'row ml-5');
        let divCol = <HTMLDivElement>document.createElement("div");
        divCol.setAttribute("class", "col ml-5");
        let divCol1 = <HTMLDivElement>document.createElement("div");
        divCol1.setAttribute("class", "col ml-5");
        let p = <HTMLParagraphElement>document.createElement('p');
        p.setAttribute("class","forSongs");
        for (let i = 0; i < musicObj.searchedSongNames.length; i++) {
            p.innerHTML += `<a href="#" onclick='musicObj.displaySearchedSong("${i}","${musicObj.searchedSongstoDisplay[i]}")'>${musicObj.searchedSongstoDisplay[i]}</a>`;
        }
        let p1 = <HTMLParagraphElement>document.createElement('p');
        if (musicObj.searchedPlayListSongNames.length > 0) {

            for (let i = 0; i < musicObj.searchedPlayListSongNames.length; i++) {
                p1.innerHTML += `${musicObj.searchedPlayListSongNames[i].innerHTML}<hr>`;

            }
        }
        let ratingforSong:number = musicObj.songRating();
        let forRating = <HTMLSpanElement>document.createElement('span');
        for (let j = 0; j < ratingforSong; j++) {
            forRating.innerHTML += `<span class="fa fa-star checked"></span>`
        }
        let searchedSongImage:string = "";
        if (musicObj.searchedSongImages[0] != undefined) {
            searchedSongImage = musicObj.searchedSongImages[0].toString() + ".JPG";
        }
        let divChildContainer = <HTMLDivElement>document.createElement('div');
        divChildContainer.setAttribute('class', 'container');
        if (searchedSongImage != "") {
            divChildContainer.innerHTML = `<div class='row'>
    <div class='col' bg-primary><img src="${searchedSongImage}" class="img-fluid img" alt="..."></div>
    </div><div class='col child'><h3>${musicObj.searchedSongstoDisplay[0]}</h3>User's Rating: <span class=ratingspace></span>${forRating.innerHTML}</div>
    <div class='row'><div class='col'>
    ${p.innerHTML}</div></div>`;
        }
        let divChildContainer1 = <HTMLDivElement>document.createElement('div');
        divChildContainer1.setAttribute('class', 'container');
        if (musicObj.searchedPlayListSongNames.length > 0)
            divChildContainer1.innerHTML += `<div class='row'><div class="container play2"><br><div class="row"><div class="col"><h4>Play Lists</h4>${p1.innerHTML}</div></div></div></div>`;
        divCol1.innerHTML = " ";
        divCol1.innerHTML = divChildContainer.innerHTML;
        divCol.appendChild(divCol1);
        divRow.appendChild(divCol);
        div.appendChild(divRow);
        musicObj.mainDiv.appendChild(div);
        musicObj.childDiv.appendChild(divChildContainer1);
        if (musicObj.searchedSongImages.length > 0 || musicObj.searchedSongNames.length > 0) {
            let divNavBar = <HTMLDivElement>document.createElement('div');
            divNavBar.setAttribute('class', 'container child1');
            let divNavBarRow = document.createElement('div');
            divNavBarRow.setAttribute('class', 'row');
            let divNavBarCol = document.createElement('div');
            divNavBarCol.setAttribute('class', 'col');
            divNavBarCol.innerHTML = `<nav class="navbar navbar-light bg-light">
        <a class="navbar-brand">${musicObj.searchedSongstoDisplay[0]}</a>
        <audio controls class="audio">
        <source src="${musicObj.searchedSongNames[0]}" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    </nav>`;
            divNavBarRow.appendChild(divNavBarCol);
            divNavBar.appendChild(divNavBarRow);
            musicObj.forNavBar.appendChild(divNavBar);
        }
                
        }
            
        });
        return 1;
    }
    musicSongs()
    {
        (<HTMLDivElement>document.getElementById("searchDiv")).innerHTML = " ";
    (<HTMLDivElement>document.getElementById("playlist")).style.display = "none";
    musicObj.mainDiv.innerHTML = " ";
    musicObj.childDiv.innerHTML=" ";
    musicObj.childDiv2.innerHTML = " ";
    musicObj.forNavBar.innerHTML = " ";
    musicObj.playListSongDiv.innerHTML = " ";
    let div = <HTMLDivElement>document.createElement("div");
    div.setAttribute('class', 'container ml-7');
    let divRow = <HTMLDivElement>document.createElement("div");
    divRow.setAttribute('class', 'row ml-5');
    let divCol = <HTMLDivElement>document.createElement("div");
    divCol.setAttribute("class", "col ml-5");
    let divCol1 = <HTMLDivElement>document.createElement("div");
    divCol1.setAttribute("class", "col ml-5");
    let ratingforSong:number = musicObj.songRating();
    let forRating = <HTMLSpanElement>document.createElement('span');
    for (let j = 0; j < ratingforSong; j++) {
        forRating.innerHTML += `<span class="fa fa-star checked"></span>`
    }
    let divChildContainer = <HTMLDivElement>document.createElement('div');
divChildContainer.setAttribute('class', 'container');
let p = <HTMLParagraphElement>document.createElement('p');
p.setAttribute("class","forSongs");
for (let i = 0; i < musicObj.SongNames.length; i++) {
    p.innerHTML += `<a href="#" onclick='musicObj.displaySong("${i}","${musicObj.SongNames[i]}")'>${i+1}.&nbsp;&nbsp; ${musicObj.SongNames[i]}
    </a>`;

}
    divChildContainer.innerHTML = `<div class='row'>
    <div class='col' bg-primary><img src="Alan Walker.JPG" class="img-fluid img" alt="..."></div>
    </div><div class='col child'><h3>${musicObj.SongNames[0]}</h3>User's Rating: <span class=ratingspace></span>${forRating.innerHTML}</div>
    <div class='row'><div class='col'>
    ${p.innerHTML}</div></div>`;
    divCol1.innerHTML = "";
    divCol1.innerHTML = divChildContainer.innerHTML;
    divCol.appendChild(divCol1);
    divRow.appendChild(divCol);
    div.appendChild(divRow);
    musicObj.mainDiv.appendChild(div);
    let divNavBar = document.createElement('div');
    divNavBar.setAttribute('class', 'container child1');
    let divNavBarRow = document.createElement('div');
    divNavBarRow.setAttribute('class', 'row');
    let divNavBarCol = document.createElement('div');
    divNavBarCol.setAttribute('class', 'col');
    divNavBarCol.innerHTML = `<nav class="navbar navbar-light bg-light">
    <a class="navbar-brand">${musicObj.SongNames[0]}</a>
    <audio controls class="audio">
    <source src="${musicObj.MusicPlayerURLs[0]}" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
</nav>`;
    divNavBarRow.appendChild(divNavBarCol);
    divNavBar.appendChild(divNavBarRow);
    musicObj.forNavBar.appendChild(divNavBar);
    }
    displaySearchedSong(i:number, searchedsongname:string) {
        musicObj.childDiv2.innerHTML = " ";
        musicObj.childDiv.innerHTML = " ";
        musicObj.mainDiv.innerHTML = " ";
        musicObj.forNavBar.innerHTML = " ";
        musicObj.playListSongDiv.innerHTML = " ";
        let div = <HTMLDivElement>document.createElement("div");
        div.setAttribute('class', 'container ml-7');
        let divRow = <HTMLDivElement>document.createElement("div");
        divRow.setAttribute('class', 'row ml-5');
        let divCol = <HTMLDivElement>document.createElement("div");
        divCol.setAttribute("class", "col ml-5");
        let divCol1 =<HTMLDivElement>document.createElement("div");
        divCol1.setAttribute("class", "col ml-5");
    
        let p = <HTMLParagraphElement>document.createElement('p');
        p.setAttribute("class","forSongs");
        for (let i = 0; i < musicObj.searchedSongNames.length; i++) {
            p.innerHTML += `<a href="#" onclick='musicObj.displaySearchedSong("${i}","${musicObj.searchedSongstoDisplay[i]}")'>${musicObj.searchedSongstoDisplay[i]}</a>`;
        }
        let p1 = <HTMLParagraphElement>document.createElement('p');
        for (let i = 0; i < musicObj.searchedPlayListSongNames.length; i++) {
            p1.innerHTML += `${musicObj.searchedPlayListSongNames[i].innerHTML}<hr>`;
    
        }
        let ratingforSong:number = musicObj.songRating();
        let forRating = <HTMLSpanElement>document.createElement('span');
        for (let j = 0; j < ratingforSong; j++) {
            forRating.innerHTML += `<span class="fa fa-star checked"></span>`
        }
        let searchedSongImage = musicObj.searchedSongImages[i].toString() + ".JPG";
        let divChildContainer = <HTMLDivElement>document.createElement('div');
        divChildContainer.setAttribute('class', 'container');
        divChildContainer.innerHTML = `<div class='row'>
        <div class='col' bg-primary><img src="${searchedSongImage}" class="img-fluid img" alt="..."></div>
        </div><div class='col child'><h3>${searchedsongname}</h3>User's Rating: <span class=ratingspace></span>${forRating.innerHTML}</div>
        <div class='row'><div class='col'>
        ${p.innerHTML}</div></div>`
        if (musicObj.searchedPlayListSongNames.length > 0)
            divChildContainer.innerHTML += `<div class='row'><div class="container play2"><br><div class="row"><div class="col"><h4>Play 3Lists</h4>${p1.innerHTML}</div></div></div></div>`;
        divCol1.innerHTML = " ";
        divCol1.innerHTML = divChildContainer.innerHTML;
        divCol.appendChild(divCol1);
        divRow.appendChild(divCol);
        div.appendChild(divRow);
        musicObj.childDiv2.appendChild(div);
        let divNavBar = document.createElement('div');
        divNavBar.setAttribute('class', 'container child1');
        let divNavBarRow = document.createElement('div');
        divNavBarRow.setAttribute('class', 'row');
        let divNavBarCol = document.createElement('div');
        divNavBarCol.setAttribute('class', 'col');
        divNavBarCol.innerHTML = `<nav class="navbar navbar-light bg-light">
            <a class="navbar-brand">${searchedsongname}</a>
            <audio controls class="audio">
            <source src="${musicObj.searchedSongNames[i]}" type="audio/mpeg">
            Your browser does not support the audio element.
          </audio>
        </nav>`;
        divNavBarRow.appendChild(divNavBarCol);
        divNavBar.appendChild(divNavBarRow);
        musicObj.forNavBar.appendChild(divNavBar);
    
    }
    displaySong(i:number, songname:string) {
        let divChildContainer = <HTMLDivElement>document.createElement('div');
        divChildContainer.setAttribute('class', 'container');
        musicObj.childDiv.innerHTML = "";
        musicObj.childDiv2.innerHTML = " ";
        musicObj.mainDiv.innerHTML = " ";
        musicObj.forNavBar.innerHTML = " ";
        divChildContainer.innerHTML = " ";
        musicObj.playListSongDiv.innerHTML = " ";
        let ratingforSong:number = musicObj.songRating();
        let forRating = <HTMLSpanElement>document.createElement('span');
        for (let j = 0; j < ratingforSong; j++) {
            forRating.innerHTML += `<span class="fa fa-star checked"></span>`
        }
        let imagesrc = musicObj.SongImages[i].toString() + ".JPG";
        let div = <HTMLDivElement>document.createElement("div");
        div.setAttribute('class', 'container ml-7');
        let divRow = <HTMLDivElement>document.createElement("div");
        divRow.setAttribute('class', 'row ml-5');
        let divCol = <HTMLDivElement>document.createElement("div");
        divCol.setAttribute("class", "col ml-5");
        let divCol1 = <HTMLDivElement>document.createElement("div");
        let p = <HTMLParagraphElement>document.createElement('p');
        p.setAttribute("class","forSongs");
        for (let i = 0; i < musicObj.SongNames.length; i++) {
            p.innerHTML += `<a href="#" onclick='musicObj.displaySong("${i}","${musicObj.SongNames[i]}")'>${i+1}.&nbsp;&nbsp; ${musicObj.SongNames[i]}
            </a>`;
        
            }
        divCol1.setAttribute("class", "col ml-5");
        divChildContainer.innerHTML = `<div class='row'>
        <div class='col' bg-primary><img src="${imagesrc}" class="img-fluid img" alt="..."></div>
        </div><div class='col child'><h3>${musicObj.SongNames[i]}</h3>User's Rating: <span class=ratingspace></span>${forRating.innerHTML}</div>
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
        musicObj.childDiv.appendChild(div);
        let divNavBar = <HTMLDivElement>document.createElement('div');
        divNavBar.setAttribute('class', 'container child1');
        let divNavBarRow = <HTMLDivElement>document.createElement('div');
        divNavBarRow.setAttribute('class', 'row');
        let divNavBarCol = <HTMLDivElement>document.createElement('div');
        divNavBarCol.setAttribute('class', 'col');
        divNavBarCol.innerHTML = `<nav class="navbar navbar-light bg-light">
        <a class="navbar-brand">${songname}</a>
        <audio controls class="audio">
        <source src="${musicObj.MusicPlayerURLs[i]}" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    </nav>`;
        divNavBarRow.appendChild(divNavBarCol);
        divNavBar.appendChild(divNavBarRow);
        musicObj.forNavBar.appendChild(divNavBar);
    }
   
    createPlayList() {
      musicObj.mainDiv.innerHTML = " ";
      musicObj.forNavBar.innerHTML = " ";
        musicObj.childDiv.innerHTML = " ";
        musicObj.childDiv2.innerHTML = " ";
        musicObj.playListSongDiv.innerHTML = " ";
        (<HTMLDivElement>document.getElementById("searchDiv")).innerHTML = " ";
        (<HTMLDivElement>document.getElementById("playlist")).style.display = "block";
        musicObj.PlayListDiv.innerHTML = `<button  class="btn btn-success" onclick='musicObj.displayPlayList()'>Create a new PlayList</button>`
    
    
    }
    displayPlayList() {
        musicObj.playListSongDiv.innerHTML = " ";
        let playlistName = prompt("Please Enter the name of Playlist");
        if (playlistName !== null) {
            //console.log(playlistName);
            musicObj.playlistNames.push(playlistName);
            musicObj.globalPlaylist++;
            let displayPlay =<HTMLDivElement>document.createElement("div");
            displayPlay.setAttribute("class", "container ml-2 mt-2 play1");
            displayPlay.setAttribute("id", musicObj.globalPlaylist.toString());
            displayPlay.innerHTML = `<div class="forPadding"></div><div class="row">
        <div class="col mt-1">
        ${playlistName}
        </div>
       </div>`;
       musicObj.divCollection[musicObj.globalPlaylist.toString()] = [musicObj.globalPlaylist.toString()];
       // musicObj.divCollection.insert(musicObj.globalPlaylist.toString(),musicObj.globalPlaylist.toString());
        //console.log(musicObj.divCollection[musicObj.globalPlaylist.toString()] );
            musicObj.contentsPlayListDiv[musicObj.globalPlaylist] = displayPlay;
            let displayPlay1 = <HTMLSpanElement>document.createElement("span");
            displayPlay1.setAttribute("class", "container top");
            displayPlay1.innerHTML = `<div class="forPadding"></div><div class="row">
            <div class="col">
            <button class="btn btn-success" id=${musicObj.globalPlaylist} onclick="musicObj.addSong('${musicObj.globalPlaylist}','${musicObj.divCollection}')">Add a Song to  above PlayList</button>
           </div>
       </div>`;
        
            musicObj.playlistdiv.appendChild(displayPlay);
            musicObj.playlistdiv.appendChild(displayPlay1);
            musicObj.PlayListDiv.appendChild(musicObj.playlistdiv);
        } else {
            alert("Enter the Playlist Name");
        }
    
    }
    addSong(id:number,divCollection1:HTMLDivElement[]) {
        //console.log(id);
        musicObj.displaySongstoadd.innerHTML = " ";
        let ul = <HTMLElement>document.createElement('ul');
        ul.setAttribute('class', 'list-group list-group-flush')
        ul.setAttribute('style', 'border:2px solid black;')
        ul.innerHTML += `<a href="#" class="close1" onclick=musicObj.closeSongList()>
        <span aria-hidden="true">&times;</span>
      </a>`;
        for (let i = 0; i < musicObj.SongNames.length; i++) {
            ul.innerHTML += `<li class="list-group-item">${musicObj.SongNames[i]}&nbsp;&nbsp;<button class="btn btn-outline-dark" id='songtoplaylist' onclick=musicObj.addtoPlayList('${i}','${id}','${divCollection1}')> Add song to playlist</button></li>`;
        }
        musicObj.displaySongstoadd.appendChild(ul);
        <HTMLElement>document.body.appendChild(musicObj.displaySongstoadd);
    }
    addtoPlayList(i:number, id:number,divCollection1:HTMLDivElement[]) {
        let songContains:boolean = false;
        if (musicObj.playListDataArray[id] != null || musicObj.playListDataArray[id] != undefined) {
            let arrayofSongs = musicObj.playListDataArray[id].split(":");
            for (let j = 0; j < arrayofSongs.length; j++) {
                if (arrayofSongs[j] == musicObj.SongNames[i]) {
                    songContains = true;
                }
            }
        }
        if (!songContains) {
    
            if (musicObj.playListDataArray[id] != null || musicObj.playListDataArray[id] != undefined) {
                musicObj.playListDataArray[id] += ":" + musicObj.SongNames[i];
            } else {
                musicObj.playListDataArray[id] = musicObj.SongNames[i];
            }
          //  console.log(divCollection1[id.toString()]);
            //console.log(id.toString(),divCollection1[id.toString()],divCollection1);
            (<HTMLDivElement>document.getElementById(id.toString())).innerHTML += `<div class="row">
        <div class="col"><a href="#" onclick='musicObj.displaySongForPlayList("${i}")'>${musicObj.SongNames[i]}</a></div>
        </div>`;
            (<HTMLDivElement>document.getElementById("card")).innerHTML = " ";
            if ((<HTMLDivElement>document.getElementById("card")).innerHTML==" ") {
                alert("Closing the Song List")
            }
        }
    
    }
    displaySongForPlayList(i:number) {
        // childDiv.innerHTML = "";
        // childDiv2.innerHTML = " ";
        let divChildContainer = <HTMLDivElement>document.createElement('div');
        divChildContainer.setAttribute('class', 'container');
        musicObj.mainDiv.innerHTML = " ";
        musicObj.forNavBar.innerHTML = " ";
        divChildContainer.innerHTML = " ";
        musicObj.playListSongDiv.innerHTML = " ";
        let ratingforSong:number = musicObj.songRating();
        let forRating =<HTMLSpanElement>document.createElement('span');
        for (let j = 0; j < ratingforSong; j++) {
            forRating.innerHTML += `<span class="fa fa-star checked"></span>`
        }
        let p = <HTMLParagraphElement>document.createElement('p');
        p.setAttribute("class","forSongs");
        for (let i = 0; i < musicObj.searchedSongNames.length; i++) {
            p.innerHTML += `<a href="#" onclick='musicObj.displaySongForPlayList("${i}")'>${musicObj.SongNames[i]}</a>`;
        }
        let imagesrc = musicObj.SongImages[i].toString() + ".JPG";
        let div = <HTMLDivElement>document.createElement("div");
        div.setAttribute('class', 'container ml-7');
        let divRow = <HTMLDivElement>document.createElement("div");
        divRow.setAttribute('class', 'row ml-5');
        let divCol = <HTMLDivElement>document.createElement("div");
        divCol.setAttribute("class", "col ml-5");
        let divCol1 = <HTMLDivElement>document.createElement("div");
        divCol1.setAttribute("class", "col ml-5");
        divChildContainer.innerHTML = `<div class='row'>
        <div class='col' bg-primary><img src="${imagesrc}" class="img-fluid img" alt="..."></div>
        </div><div class='col child'><h3>${musicObj.SongNames[i]}</h3>User's Rating: <span class=ratingspace></span><p class='childstar1'>${forRating.innerHTML}</p></div>
        <div class='row'></div>`;
        divCol1.innerHTML = "";
        divCol1.innerHTML = divChildContainer.innerHTML;
        divCol.appendChild(divCol1);
        divRow.appendChild(divCol);
        div.appendChild(divRow);
    
        // let p = document.createElement('div');
        // p.setAttribute('class', 'container child');
        // p.innerHTML = `<img src="${imagesrc}" class='img-fluid' alt="image not found"><h3 class='heading'>${SongNames[i]}</h3>`;
        musicObj.playListSongDiv.appendChild(div);
        let divNavBar =<HTMLDivElement>document.createElement('div');
        divNavBar.setAttribute('class', 'container child1');
        let divNavBarRow = <HTMLDivElement>document.createElement('div');
        divNavBarRow.setAttribute('class', 'row');
        let divNavBarCol = <HTMLDivElement>document.createElement('div');
        divNavBarCol.setAttribute('class', 'col');
        divNavBarCol.innerHTML = `<nav class="navbar navbar-light bg-light">
        <a class="navbar-brand">${musicObj.SongNames[i]}</a>
        <audio controls class="audio">
        <source src="${musicObj.MusicPlayerURLs[i]}" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    </nav>`;
        divNavBarRow.appendChild(divNavBarCol);
        divNavBar.appendChild(divNavBarRow);
        musicObj.forNavBar.appendChild(divNavBar);
    
    }
    
    closeSongList() {
        (<HTMLDivElement>document.getElementById("card")).innerHTML = " ";
    }
      
}
let musicObj=new MusicPlayer();
musicObj.MusicPlayerURLs = ['https://www.talk2trend.com/english/alan-walker-on-my-way.mp3', 'https://www.talk2trend.com/english/taki-taki-mp3-free-download.mp3', 'https://www.talk2trend.com/english/blank-space.mp3', 'https://www.talk2trend.com/english/let-me-love-you.mp3', 'https://www.talk2trend.com/english/Imagine-Dragons-Believer.mp3', 'https://www.talk2trend.com/english/despacito-ft-daddy-yankee.mp3', 'https://www.talk2trend.com/english/maroon-5-girls-like-you.mp3', 'https://www.talk2trend.com/english/see-you-again-ft-charlie-puth.mp3', 'https://www.talk2trend.com/bollywood/ghungroo-mp3-song-download.mp3', 'https://www.talk2trend.com/bollywood/aankh-marey-simmba.mp3', 'https://www.talk2trend.com/bollywood/vaaste.mp3', 'https://www.talk2trend.com/bollywood/ve-maahi-kesari.mp3', 'https://www.talk2trend.com/bollywood/first-class-kalank.mp3'];
musicObj.SongNames = ["Alan Walker On My Way", "Taki Taki", "Blank Space", "Let Me Love You", "Imagine Dragons Believer", "Despacito", "Maroon Girls Like You", "See You Again", "Ghungroo", "Aankh Marey", "Vaaste", "Ve Maahi", "First Class"];
musicObj.SongImages = ["Alan Walker", "Taki Taki", "Blank Space", "let me love you", "Imagine Dragons Believer", "Despacito", "Maroon Girls Like You", "See You Again", "Ghungroo", "Aankh Marey", "Vaaste", "ve maahi", "First Class"];
musicObj.globalPlaylist=0;
musicObj.playListDataArray = [];
musicObj.divCollection = [];
musicObj.contentsPlayListDiv = [];
musicObj.searchedSongstoDisplay = [];
musicObj.searchedSongNames = [];
musicObj.searchedPlayListNames = [];
musicObj.searchedPlayListSongNames = [];
musicObj.searchedSongImages = [];
musicObj.playlistNames = [];
musicObj.mainDiv = <HTMLDivElement>document.getElementById("main");
musicObj.childDiv = <HTMLDivElement>document.getElementById("childDiv");
musicObj.childDiv2 = <HTMLDivElement>document.getElementById("childDiv2");
musicObj.PlayListDiv = <HTMLDivElement>document.getElementById("playlist");
musicObj.displaySongstoadd = <HTMLDivElement>document.getElementById('card');
musicObj.playlistdiv = <HTMLDivElement>document.getElementById("play");
musicObj.playListSongDiv = <HTMLDivElement>document.getElementById("playlistSong");
musicObj.forNavBar = <HTMLDivElement>document.getElementById("forNavBar");
musicObj.forMusic();
musicObj.search=(<HTMLInputElement>document.getElementById("search"));
musicObj.search.addEventListener('focus',musicObj.keyPress);
musicObj.music=(<HTMLAnchorElement>document.getElementById("music"));
musicObj.music.addEventListener('click',musicObj.musicSongs);
musicObj.playListElement=(<HTMLAnchorElement>document.getElementById("playLists"));
musicObj.playListElement.addEventListener('click',musicObj.createPlayList);

