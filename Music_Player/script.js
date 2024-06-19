const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progress = document.getElementById('progress');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');
const albumCover = document.getElementById('album-cover');

const songs = [
    {
        title: 'Havana',
        artist: 'Camila Cabello ft. Young Thug',
        src: 'havana.mp3',
        cover: 'havana.jpg'
    },
    // Add more songs here
    // {
    //     title: 'Song Title',
    //     artist: 'Artist Name',
    //     src: 'song.mp3',
    //     cover: 'cover.jpg'
    // }
];

let currentSongIndex = 0;

function loadSong(song) {
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    audio.src = song.src;
    albumCover.src = song.cover;
}

function playSong() {
    audio.play();
    playBtn.textContent = '⏸️';
}

function pauseSong() {
    audio.pause();
    playBtn.textContent = '▶️';
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
}

function updateProgress() {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.value = progressPercent;
}

playBtn.addEventListener('click', () => {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress);

progress.addEventListener('input', () => {
    audio.currentTime = (progress.value * audio.duration) / 100;
});

loadSong(songs[currentSongIndex]);
