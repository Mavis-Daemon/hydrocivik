//*array of songs and its data
const songs =
[
    {  
        id:1,
        name: "7-bite",
        author: "Hydrocivik",
        year: 2022,
        genre: "Retro",
        album: "3:17 AM on a School Night",
        albumTrack: 5,
        audioURL: "https://res.cloudinary.com/dpzwk2l36/video/upload/v1772714398/Hydrocivik_-_7-bite_djgyaw.mp3",
        coverArtURL: "https://res.cloudinary.com/dpzwk2l36/image/upload/v1772712397/7-bite_y04ejf.webp",
        coverArtDesc: "Hydrocivik - 7-bite's Cover Art",
        coverArtOffset: "50%",
        youtubeURL: "https://youtu.be/ekZpZjUazOw?si=hKyurH6SM_J2HrMB",
    },
    {  
        id:2,
        name: "Freewill",
        author: "Hydrocivik",
        year: 2021,
        genre: "Electronic",
        album: "3:17 AM on a School Night",
        albumTrack: 9,
        audioURL: "https://res.cloudinary.com/dpzwk2l36/video/upload/v1772714401/Hydrocivik_-_Freewill_remaster_xjdo4b.mp3",
        coverArtURL: "https://res.cloudinary.com/dpzwk2l36/image/upload/v1772712399/free_will_ibfr4n.webp",
        coverArtDesc: "Hydrocivik - Freewill's Cover Art",
        coverArtOffset: "30%",
        youtubeURL: "https://youtu.be/Zyd_r-JoiEE?si=GuKbMyOhV_KAW7HG",
    },
    {  
        id:3,
        name: "Afternoon Radiocha",
        author: "Hydrocivik",
        year: 2020,
        genre: "Hip-Hop",
        album: "3:17 AM on a School Night",
        albumTrack: 8,
        audioURL: "https://res.cloudinary.com/dpzwk2l36/video/upload/v1772714400/Hydrocivik_-_Afternoon_Radiocha_remaster_lialmf.mp3",
        coverArtURL: "https://res.cloudinary.com/dpzwk2l36/image/upload/v1772712397/afternoon_radiocha_cover_kmonel.webp",
        coverArtDesc: "Hydrocivik - Afternoon Radiocha's Cover Art",
        coverArtOffset: "50%",
        youtubeURL: "https://youtu.be/WpOJiRG8t9Q?si=glkR1Az2ZN_B89l8",
    },
    {  
        id:4,
        name: "Fa!ling_star",
        author: "Hydrocivik",
        year: 2020,
        genre: "Hip-Hop",
        album: "3:17 AM on a School Night",
        albumTrack: 6,
        audioURL: "https://res.cloudinary.com/dpzwk2l36/video/upload/v1772714401/Hydrocivik_-_Fa_ling_star_remaster_koa4yp.mp3",
        coverArtURL: "https://res.cloudinary.com/dpzwk2l36/image/upload/v1772712398/Failing_star_cover_jxk58w.webp",
        coverArtDesc: "Hydrocivik - Fa!ling_star's Cover Art",
        coverArtOffset: "40%",
        youtubeURL: "https://youtu.be/Ta5Wi5o3GDU?si=qodbF515yLaoHLik",
    },
    {  
        id:5,
        name: "Imagination_Land",
        author: "Hydrocivik",
        year: 2019,
        genre: "Electronic",
        album: "3:17 AM on a School Night",
        albumTrack: 4,
        audioURL: "https://res.cloudinary.com/dpzwk2l36/video/upload/v1772714402/Hydrocivik_-_Imagination_Land_remaster_n7lcyu.mp3",
        coverArtURL: "https://res.cloudinary.com/dpzwk2l36/image/upload/v1772712400/Imagination_Land_cover_nzuvgi.webp",
        coverArtDesc: "Hydrocivik - Imagination_Land's Cover Art",
        coverArtOffset: "10%",
        youtubeURL: "https://youtu.be/cTR65745TmY?si=VEgOEYBI6wCasAEq",
    },
    {  
        id:6,
        name: "Tsukareta",
        author: "Hydrocivik",
        year: 2019,
        genre: "Instrumental",
        album: "3:17 AM on a School Night",
        albumTrack: 7,
        audioURL: "https://res.cloudinary.com/dpzwk2l36/video/upload/v1772714406/Hydrocivik_-_Tsukareta_remaster_qqcvny.mp3",
        coverArtURL: "https://res.cloudinary.com/dpzwk2l36/image/upload/v1772712402/tsukareta_cover_khyxzo.webp",
        coverArtDesc: "Hydrocivik - Tsukareta's Cover Art",
        coverArtOffset: "80%",
        youtubeURL: "https://youtu.be/Rg3Nqo0gSv4?si=xOB_mvj5P97lxYVc",
    },
    {  
        id:7,
        name: "Shizukani",
        author: "Hydrocivik",
        year: 2019,
        genre: "Instrumental",
        album: "3:17 AM on a School Night",
        albumTrack: 3,
        audioURL: "https://res.cloudinary.com/dpzwk2l36/video/upload/v1772714403/Hydrocivik_-_Shizukani_remaster_gzpnbu.mp3",
        coverArtURL: "https://res.cloudinary.com/dpzwk2l36/image/upload/v1772712401/Shizukani_cover_jkaq1n.webp",
        coverArtDesc: "Hydrocivik - Shizukani's Cover Art",
        coverArtOffset: "50%",
        youtubeURL: "https://youtu.be/P4eafdOl1Yk?si=GR3InK8b-JlnpIbB",
    },
    {  
        id:8,
        name: "Chip",
        author: "Hydrocivik",
        year: 2018,
        genre: "Instrumental",
        album: "3:17 AM on a School Night",
        albumTrack: 2,
        audioURL: "https://res.cloudinary.com/dpzwk2l36/video/upload/v1772714408/Hydrocivik_-_Chip_remaster_iupmpt.mp3",
        coverArtURL: "https://res.cloudinary.com/dpzwk2l36/image/upload/v1772712398/chip_cover_kvk4dq.webp",
        coverArtDesc: "Hydrocivik - Chip's Cover Art",
        coverArtOffset: "80%",
        youtubeURL: "https://youtu.be/BDU7f4AUZ9k?si=zMz3NLqi4Tdz3cFB",
    },
    {  
        id:9,
        name: "Thisforyou",
        author: "Hydrocivik",
        year: 2017,
        genre: "Instrumental",
        album: "3:17 AM on a School Night",
        albumTrack: 1,
        audioURL: "https://res.cloudinary.com/dpzwk2l36/video/upload/v1772714403/Hydrocivik_-_Thisforyou_remaster_kigvxk.mp3",
        coverArtURL: "https://res.cloudinary.com/dpzwk2l36/image/upload/v1772712401/Thisforyou_cover_ti7zcs.webp",
        coverArtDesc: "Hydrocivik - Thisforyou's Cover Art",
        coverArtOffset: "50%",
        youtubeURL: "https://youtu.be/I0p_7Trhjzo?si=kU-cYytJC2oiXdlh",
    },
    
]
//*define destination list as song_list
const songList = document.getElementsByClassName('song_list')[0];


//*loop define each item in array of object as song, and create card
songs.forEach(song => {
    //create new elements
    let songCard = document.createElement('li');
    let cardContent = document.createElement('div');
    let cardTitle = document.createElement('p');
    let cardBackground = document.createElement('div');
    let cardImage = document.createElement('img');
    let cardDecoration = document.createElement('div');
    //define name and image link
    let songName = document.createTextNode(song.name);
    let imageURL = document.createTextNode(song.coverArtURL);
    //add class to each elements
    songCard.classList.add('song_card');
    songCard.classList.add('unselected');
    songCard.id = song.id;
    cardContent.classList.add('card_content');
    cardTitle.classList.add('card_title');
    cardBackground.classList.add('card_background');
    cardImage.classList.add('card_image');
    cardImage.src = song.coverArtURL;
    cardImage.alt = song.coverArtDesc;
    cardImage.style.objectPosition = '50%' + song.coverArtOffset;
    cardDecoration.classList.add('card_decoration');
    //add elements into each other
    cardBackground.appendChild(cardImage);
    cardBackground.appendChild(cardDecoration);
    cardTitle.appendChild(songName);
    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardBackground);
    songCard.appendChild(cardContent);
    songList.appendChild(songCard);
})

//*add song card into nodelist
let musicCards = document.querySelectorAll('.song_card');

//*extract song from current card
let songID;

//*select 1st card
musicCards.item(0).classList.remove('unselected');
musicCards.item(0).classList.add('selected');
songID = parseInt(musicCards.item(0).id);

//*scroll to clicked card
musicCards.forEach(musicCard => {
    musicCard.addEventListener("click", isClicked => {
        isClicked.stopPropagation();
        const scrollStep = musicCard.getBoundingClientRect().height + 32;
        const selectedCardIndex = Array.prototype.indexOf.call(musicCards, isClicked.currentTarget);
        const offsetTop = scrollStep * selectedCardIndex;
        songList.scrollTo({
            top: offsetTop,
            behavior: "smooth"
        });
    }, {capture: true})
})

//*make card selected when in the middle of view port
songList.addEventListener('scroll', scrollFX => {
    //console.log('--------------------------');
    musicCards.forEach(musicCard => {
        const songListCenter = songList.getBoundingClientRect().top + songList.getBoundingClientRect().height / 2;
        const musicCardCenter = musicCard.getBoundingClientRect().top + musicCard.getBoundingClientRect().height / 2;
        const cardDistToCenter = Math.abs(songListCenter - musicCardCenter);
        const cardRatioToCenter = Math.max(0, 1 - cardDistToCenter / (songList.getBoundingClientRect().height /2))
        //console.log(cardRatioToCenter);
    if(cardRatioToCenter > 0.95){
            musicCard.classList.remove('unselected');
            musicCard.classList.add('selected');
            songID = parseInt(musicCard.id);
        } else {
            musicCard.classList.remove('selected');
            musicCard.classList.add('unselected');
        }
        
    })

})

//*drag scroll effect
let isDown = false;
let startY;
let scrollTop;
let offsTop;
songList.addEventListener('mouseleave',mouseLeave => {
    isDown = false;
    songList.classList.remove('scrolling');
})

songList.addEventListener('mousedown',mouseDown => {
    isDown = true;
    songList.classList.add('scrolling');
    //track mouse start position
    startY = mouseDown.pageY - songList.offsetTop;
    scrollTop = songList.scrollTop;
})

songList.addEventListener('mouseup',mouseUp => {
    isDown = false;
    songList.classList.remove('scrolling');
    songList.scrollTo({
        top: offsTop,
        behavior: "smooth"
    });
})

songList.addEventListener('mousemove',mouseMove => {
    if(!isDown) return;
    mouseMove.preventDefault();
    //track mouse current position
    const currentY = mouseMove.pageY - songList.offsetTop;
    //track diviation from start position
    const scrolled = (currentY - startY) * 1;
    //scroll
    offsTop = songList.scrollTop - scrolled;
    // console.log(songList.scrollTop);

})
