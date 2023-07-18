console.log('Welcome To Spotify');

let songIndex = 0;
let audio = new Audio('');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('masterPlay');

let songs =[
    {songName: "Love Me Like You Do",filePath: "song/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Love Me Like You Do",filePath: "song/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Love Me Like You Do",filePath: "song/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Love Me Like You Do",filePath: "song/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Love Me Like You Do",filePath: "song/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Love Me Like You Do",filePath: "song/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Love Me Like You Do",filePath: "song/1.mp3", coverPath: "cover/1.jpg"},
]
//play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
})
//listen
myProgressBar.addEventListerner('timeupdate',()=>{
    console.log('timeupdate');
})