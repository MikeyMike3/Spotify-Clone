const songs = [
   {
        title: "Iris Green",
        artist: "Ghostluvme, Future",
        songLength: "2:59",
        imgPath: "imgs\\iris_green.PNG",
        mp3Path: "mp3_trials\\Iris Green (feat. Future).mp3",
        className: "irisGreen"
    },
    {
        title: "Down In The DM",
        artist: "Yo Gotti",
        songLength: "3:02",
        imgPath: "imgs\\down_in_the_dm.PNG",
        mp3Path: "mp3_trials\\Down In the DM.mp3",
        className:"downInTheDM"
    },
    {
        title: "Ransom",
        artist: "Lil Teca, Juice WRLD",
        songLength: "2:51",
        imgPath: "imgs\\ransom.PNG",
        mp3Path: "mp3_trials\\Ransom (with Juice WRLD) - Remix.mp3",
        className:"ransom"
    },
    {
        title: "Rapstar",
        artist: "Polo G",
        songLength: "2:45",
        imgPath: "imgs\\rapstar.PNG",
        mp3Path: "mp3_trials\\RAPSTAR.mp3",
        className:"rapstar"
    },
    {
        title: "Diamonds Dancing",
        artist: "Drake, Future",
        songLength: "5:14",
        imgPath: "imgs\\diamonds_dancing.PNG",
        mp3Path: "mp3_trials\\Diamonds Dancing.mp3",
        className:"diamondsDancing"
    },
    {
        title: "Conversations",
        artist: "Juice WRLD",
        songLength: "3:01",
        imgPath: "imgs\\conversations.PNG",
        mp3Path: "mp3_trials\\Conversations.mp3",
        className:"conversations"
    },
    {
        title: "Runaway",
        artist: "Kanye West",
        songLength: "9:07",
        imgPath: "imgs\\runaway.PNG",
        mp3Path: "mp3_trials\\Runaway.mp3",
        className:"runaway"
    }
]

const currentlyPlaying = [];
let currentlyPlayingImgElement;
let songClassName = null;

function makeCurrentlyPlaying(){
    // Adds img to currently_playing 
    const divCurrentlyPlaying = document.querySelector('.currently_playing');
    imgElement = document.createElement('img');
    imgElement.className = 'currently_playing_img';

    imgElement.src = currentlyPlaying[0].imgPath;
    divCurrentlyPlaying.insertBefore(imgElement, divCurrentlyPlaying.firstChild);
    
    // Adds title and artist to currently_playing_stacked
    const divStacked = divCurrentlyPlaying.querySelector('.currently_playing_stacked');
    
    // Clear existing content
    while (divStacked.firstChild) {
        divStacked.removeChild(divStacked.firstChild);
    }

    const titleElement = document.createElement('p');
    titleElement.textContent = currentlyPlaying[0].title;
    
    const artistElement = document.createElement('p');
    artistElement.textContent = currentlyPlaying[0].artist;

    divStacked.appendChild(titleElement);
    divStacked.appendChild(artistElement);
    
}

// sdjhakuwhuidiusaiduhsiuhaaaaaaaauiiudwiuhdiwuidawuidiuahsdiisaiudiusiudiausiudiudiidd
function removeCurrentlyPlaying(){
    if (imgElement && imgElement.parentNode) {
        imgElement.parentNode.removeChild(imgElement);
    }

}

function makeSongs(){
    
    for (let i = 0; i < songs.length; i++) {
        // Adds song_card to song_card_grid
        const song_card_grid = document.getElementById("song_card_grid");

        const song_card = document.createElement("div");
        song_card.className = "song_card";

        song_card_grid.appendChild(song_card);

        // Adds song_card_wrapper to song_card
        const song_card_wrapper = document.createElement('div');
        song_card_wrapper.className = 'song_card_wrapper';

        song_card.appendChild(song_card_wrapper);

        // Adds song_card_stacked to song_card_wrapper
        const song_card_stacked = document.createElement('div');
        song_card_stacked.className = 'song_card_stacked';

        song_card_wrapper.appendChild(song_card_stacked);

        //Adds play_card_play_button_container to song_card_stacked
        const play_card_play_button_container = document.createElement('div');
        play_card_play_button_container.className = 'play_card_play_button_container';

        song_card_stacked.appendChild(play_card_play_button_container);

        //Adds song_info to song_card_stacked
        const song_info = document.createElement('div');
        song_info.className = 'song_info';

        song_card_stacked.appendChild(song_info);

        //Adds imgPath to play_card_play_button_container
        const imgElement = document.createElement('img');

        imgElement.src = songs[i].imgPath;

        play_card_play_button_container.appendChild(imgElement)

        //Adds play_card_play_button to play_card_play_button_container
        const play_card_play_button = document.createElement('div');
        play_card_play_button.classList.add('play_card_play_button', songs[i].className)
        

        play_card_play_button_container.appendChild(play_card_play_button);

        //Adds play button to play_card_play_button
        const playButton = document.createElement('i');
        playButton.className = 'fa fa-play-circle';
        playButton.setAttribute('aria-hidden', 'true');

        play_card_play_button.appendChild(playButton);

        // creates pause button but doesnt add it anywhere
        const pauseButton = document.createElement('i');   
        pauseButton.className = 'fa fa-pause-circle';
        pauseButton.setAttribute('aria-hidden', 'true');

        const audioElement = document.getElementById('my_audio');

        playButton.addEventListener('click', addToCurrentlyPlaying);

        function addToCurrentlyPlaying() {

            // if (songClassName !== null){
            //     const getElementsOfSongClassName = document.getElementsByClassName(songClassName);
            //     console.log(getElementsOfSongClassName);
            //     for (let i = 0; i < getElementsOfSongClassName.length; i++){
            //         let elementToReplace = getElementsOfSongClassName[i];
            //         console.log(elementToReplace);
            //         const newPlayButton = document.createElement('i');
            //         newPlayButton.className = 'fa fa-play-circle';
            //         newPlayButton.setAttribute('aria-hidden', 'true');

            //         elementToReplace.replaceChild(newPlayButton, elementToReplace.firstChild);
            //     }

            // }
            
            if (currentlyPlaying.length === 1 && currentlyPlaying[0] === songs[i]) {
                // Toggle play/pause for the same song
                if (audioElement.paused) {
                    
                    audioElement.play();
                    songClassName = songs[i].className;
                    //console.log(songClassName);
                    console.log(play_card_play_button);
                    play_card_play_button.replaceChild(pauseButton, playButton);
                }

            } else {
                // Different song, update playlist and play
                if (currentlyPlaying.length === 1) {
                    removeCurrentlyPlaying(imgElement);
                    currentlyPlaying.splice(0, 1);
                }

                currentlyPlaying.push(songs[i]);
                makeCurrentlyPlaying();

                audioElement.src = currentlyPlaying[0].mp3Path;
                audioElement.load();
                play_card_play_button.replaceChild(pauseButton, playButton);

                if (audioElement.paused) {
                    audioElement.play();
                    songClassName = songs[i].className;;
                } 

                console.log(songClassName);
            }
                
        }

        pauseButton.addEventListener('click', pauseSong);

        function pauseSong() {
            audioElement.pause();
            songClassName = null;
            //console.log(songClassName);
            play_card_play_button.replaceChild(playButton, pauseButton);
        }
    
        //Adds h4 and p elements to song_info
        const h4Element = document.createElement('h4');
        const pElement = document.createElement('p');

        song_info.appendChild(h4Element);
        song_info.appendChild(pElement);

        const songInfoElements = document.querySelectorAll(".song_info");

        songInfoElements.forEach((songInfoElement, index) => {
            const h4Element = songInfoElement.querySelector("h4");
            const pElement = songInfoElement.querySelector("p");
            
            h4Element.textContent = songs[index].title;
            pElement.textContent = songs[index].artist;
        });
    }
}

makeSongs()