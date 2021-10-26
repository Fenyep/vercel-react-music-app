import Wrapper from "./Wrapper";
import TopBar from "./TopBar";
import ImgArea from "./ImgArea";
import SongDetails from "./SongDetails";
import Timer from "./Timer";
import ProgressArea from "./ProgressArea";
import Controls from "./Controls";
import MusicList from "./MusicList";
import { /*useState, /*useEffect,*/ useRef } from "react";
import { allMusic } from "../datas/allMusic";

function App() {
  let musicIndex = Math.floor(Math.random() * allMusic.length + 1);

  const wrapper = useRef();
  const musicImg = useRef();
  const musicName = useRef();
  const musicArtist = useRef();
  const mainAudio = useRef();
  const playPauseBtn = useRef();
  const prevBtn = useRef();
  const nextBtn = useRef();
  const progressArea = useRef();
  const progressBar = useRef();
  const musicList = useRef();
  const showMoreBtn = useRef();
  const hideMusicBtn = useRef();

  const current = useRef();
  const durationVar = useRef();

  const repeatBtn = useRef();

  const playPauseIconBtn = useRef();

  const liTag = useRef();

  const audioDuration = useRef();

  const liList = [];

  // load Music function
  function loadMusic(indexNumb) {
    musicName.current.innerText = allMusic[indexNumb - 1].name;
    musicArtist.current.innerText = allMusic[indexNumb - 1].artist;
    musicImg.current.src = allMusic[indexNumb - 1].img;
    mainAudio.current.src = allMusic[indexNumb - 1].src;
  }

  // play music function
  function playMusic() {
    wrapper.current.classList.add("paused");
    playPauseIconBtn.current.innerText = "pause";
    mainAudio.current.play();
  }
  // pause music function
  function pauseMusic() {
    wrapper.current.classList.remove("paused");
    playPauseIconBtn.current.innerText = "play_arrow";
    mainAudio.current.pause();
  }

  function nextMusic() {
    // here we'll just increment of index by 1
    musicIndex++;
    // if musicIndex is greater than array length then musicIndex wiil be 1 so the first song will play
    musicIndex > allMusic.length ? (musicIndex = 1) : (musicIndex = musicIndex);
    loadMusic(musicIndex);
    playMusic();
    playingNow();
    // console.log(musicIndex);
  }

  // repeat one music function
  function repeatOneMusic() {
    // here we'll reset the musicIndex accordingly
    musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
  }

  // shufflic music function
  function shuffleMusic() {
    // here we'll read a music at random

    let randIndex = Math.floor(Math.random() * allMusic.length + 1);
    do {
      randIndex = Math.floor(Math.random() * allMusic.length + 1);
    } while (musicIndex === randIndex);
    musicIndex = randIndex; // passing randomIndex to musicIndex so the random song will play
    loadMusic(musicIndex);
    playMusic();
    playingNow();
  }

  // above we just change the icon, now let's work on what to do
  // after the song ended

  function mainAudioEnded() {
    // we'll do according to the icon means if user has set icon to loop song then we'll repeat
    // the current song and will do further accordingly

    let getText = repeatBtn.current.innerText; // getting innnerText icon
    // let's do different changes on different icon click using switch
    switch (getText) {
      case "repeat": // if this icon is repeat then read the next song
        nextMusic();
        break;
      case "repeat_one": // if this icon is repeat one then read thesame song
        repeatOneMusic();
        break;
      case "shuffle": // if this icon is shuffle then read a song at random
        shuffleMusic();
        break;
      default:
        break;
    }
  }

  for (let i = 0; i < liList.length; i++) {
    liList[i] = liTag;
  }

  function playingNow() {
    for (let j = 0; j < liList.length; j++) {
      let audioTag = audioDuration;
      // let's remove playing class form all other li expect the last one which is clicked
      if (liList[j].current.classList.contains("playing")) {
        liList[j].current.classList.remove("playing");
        // let's get that audio duration value and pass .audio-duration innerText
        let adDuration = audioTag.current.getAttribute("t-duration");
        audioTag.current.innerText = adDuration; // passing t-duration value to audio duration innerText
      }
      // if there is an li tag which li-index is equal to musicIndex
      // then this music is playing now and we'll style it
      if (liList[j].current.getAttribute("li-index") === musicIndex) {
        liList[j].current.classList.add("playing");
        audioTag.current.innerText = "Playing";
      }

      // adding onclick attribute in all li tags
      liList[j].current.setAttribute("onclick", "clicked(this)");
    }
  }

    // let's play song on li click
  function clicked(musicId) {
    musicIndex = musicId;
    loadMusic(musicIndex);
    playMusic();
    playingNow();
  }

  return (
    <Wrapper wrapper={wrapper}>
      <TopBar />
      <ImgArea musicImg={musicImg} src={allMusic[musicIndex - 1].img} />
      <SongDetails
        musicName={musicName}
        musicArtist={musicArtist}
        name={allMusic[musicIndex - 1].name}
        artist={allMusic[musicIndex - 1].artist}
      />
      <Timer current={current} durationVar={durationVar} />
      <ProgressArea
        mainAudio={mainAudio}
        currentVar={current}
        durationVar={durationVar}
        playMusic={playMusic}
        mainAudioEnded={mainAudioEnded}
        progressArea={progressArea}
        progressBar={progressBar}
        src={allMusic[musicIndex - 1].src}
      />
      <Controls
        allMusic={allMusic}
        musicIndex={musicIndex}
        loadMusic={loadMusic}
        nextMusic={nextMusic}
        playMusic={playMusic}
        pauseMusic={pauseMusic}
        musicList={musicList}
        wrapper={wrapper}
        playPauseIconBtn={playPauseIconBtn}
        repeatBtn={repeatBtn}
        nextBtn={nextBtn}
        prevBtn={prevBtn}
        mainAudio={mainAudio}
        playPauseBtn={playPauseBtn}
        showMoreBtn={showMoreBtn}
      />
      <MusicList
        musicList={musicList}
        showMoreBtn={showMoreBtn}
        hideMusicBtn={hideMusicBtn}
        audioDuration={audioDuration}
        clicked={clicked}
        liTag={liTag}
        allMusic={allMusic}
      />
    </Wrapper>
  );
}

export default App;
