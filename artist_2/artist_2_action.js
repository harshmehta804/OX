const music = new Audio('../audio/charlie/1.mp3');


const songs =[
    {
        id: 1,
        songName: `Barish Lete Aane<br>
        <div class="subtitle">Darshan Raval</div>`,
        poster: "../IMG/darshan raval/1.jpg"
    },
    {
        id: 2,
        songName: `Bhula Dunga<br>
        <div class="subtitle">Darshan Raval</div>`,
        poster: "../IMG/darshan raval/2.jpg"
    },
    {
        id: 3,
        songName: `Ek Terfa<br>
        <div class="subtitle">Darshan Raval</div>`,
        poster: "../IMG/darshan raval/3.jpg"
    },
    {
        id: 4,
        songName: `Hawa Banke<br>
        <div class="subtitle">Darshan Raval</div>`,
        poster: "../IMG/darshan raval/4.jpg"
    },
    {
        id: 5,
        songName: `Kabhi Tumhe<br>
        <div class="subtitle">Darshan Raval</div>`,
        poster: "../IMG/darshan raval/5.jpg"
    },
    {
        id: 6,
        songName: `Tera Zikr<br>
        <div class="subtitle">Darshan Raval</div>`,
        poster: "../IMG/darshan raval/6.jpg"
    },
    {
        id: 7,
        songName: `Tere Naal<br>
        <div class="subtitle">Darshan Raval</div>`,
        poster: "../IMG/darshan raval/7.jpg"
    },
    {
        id: 8,
        songName: `Yara Teri Yaari<br>
        <div class="subtitle">Darshan Raval</div>`,
        poster: "../IMG/darshan raval/8.jpg"
    },
    
]

Array.from(document.getElementsByClassName('img_play')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    
})
Array.from(document.getElementsByClassName('titles')).forEach((e,i)=>{
    
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
    
})





let masterPlay=document.getElementById('masterplay');
let wave =document.getElementById('waves');

masterPlay.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active2');
        masterPlay.classList.remove('fa-play')
        masterPlay.classList.add('fa-pause')
    } else{
        music.pause();
        wave.classList.remove('active2');
        masterPlay.classList.add('fa-play')
        masterPlay.classList.remove('fa-pause')
    }
})



let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right =document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

// pop_song_right.addEventListener('click',()=>{
//     pop_song.scrollLeft +=330;
// });
// pop_song_left.addEventListener('click',()=>{
//     pop_song.scrollLeft -=330;
// });

// let pop_art_left = document.getElementById('pop_art_left');
// let pop_art_right=document.getElementById('pop_art_right');
// let Artists_bx =document.getElementsByClassName('Artists_bx')[0];


index=0;
let poster_master_play = document.getElementById('poster_master_play')
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index=el.target.id;
        music.src=`../audio/darshan raval/${index}.mp3`;
        poster_master_play.src=`../IMG/darshan raval/${index}.jpg`;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        music.play();

        let songsTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songsTitles.forEach(elss=>{
            let {songName}= elss;
            title.innerHTML=songName;
        })

    })
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek=document.getElementById('seek');
let bar2=document.getElementById('bar2');
let dot=document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr=music.currentTime;
    let music_dur=music.duration;

    let min1=Math.floor(music_dur/60);
    let sec1=Math.floor(music_dur%60);

    
    
    if(sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    
    let min2=Math.floor(music_curr/60);
    let sec2=Math.floor(music_curr%60);
    if(sec2 < 10){
        sec2=`0${sec2}`;
    }
    currentStart.innerText=`${min2}:${sec2}`;
    currentEnd.innerText=`${min1}:${sec1}`;


    let progressbar = parseInt((music_curr/music_dur)*100);
    seek.value=progressbar;
    // console.log(seek.value);

    let seekbar = seek.value;
    bar2.style.width= `${seekbar}%`;
    dot.style.left=`${seekbar}%`;
});

seek.addEventListener('change',()=>{
    music.currentTime=seek.value*music.duration/100;
});

let vol_icon = document.getElementById('vol_icon');
let vol=document.getElementById('vol');
let vol_bar=document.getElementsByClassName('vol_bar')[0];
let vol_dot=document.getElementById('vol_dot');

vol.addEventListener('change',()=>{
    if(vol.value==0){
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.add('fa-volume-off');
    }
    if(vol.value>0){
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.add('fa-volume-low');
        vol_icon.classList.remove('fa-volume-off');
    }
    if(vol.value>50){
        vol_icon.classList.add('fa-volume-high');
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.remove('fa-volume-off');
    }
    let vol_a=vol.value;
    vol_bar.style.width=`${vol_a}%`;
    vol_bar.style.left=`${vol_a}%`;
});

let back=document.getElementById('back');
let next=document.getElementById('next');

back.addEventListener('click',()=>{
    index -=1;
    if(index<1){
        index=Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src=`../audio/darshan raval/${index}.mp3`;
        poster_master_play.src=`../IMG/darshan raval/${index}.jpg`;
        music.play();

        let songsTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songsTitles.forEach(elss=>{
            let {songName}= elss;
            title.innerHTML=songName;
        })

});

next.addEventListener('click',()=>{
    index +=1;
    if(index>Array.from(document.getElementsByClassName('songItem')).length){
        index=1;
    }
    music.src=`../audio/darshan raval/${index}.mp3`;
        poster_master_play.src=`../IMG/darshan raval/${index}.jpg`;
        music.play();

        let songsTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songsTitles.forEach(elss=>{
            let {songName}= elss;
            title.innerHTML=songName;
        })

})