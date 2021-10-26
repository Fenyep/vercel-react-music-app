function Controls({
  allMusic,
  musicIndex,
  loadMusic,
  nextMusic,
  playMusic,
  pauseMusic,
  playPauseIconBtn,
  musicList,
  wrapper,
  repeatBtn,
  nextBtn,
  prevBtn,
  playPauseBtn,
  showMoreBtn,
}) {
  // play or music button event
  function playPause() {
    const isMusicPaused = wrapper.current.classList.contains("paused");
    // if isMusicPaused is true then call pauseMusic else call playeMusic
    isMusicPaused ? pauseMusic() : playMusic();
    // playingNow();
    // console.log(musicIndex);
  }

  // prev music function
  function prevMusic() {
    // here we'll just decrement of index by 1
    musicIndex--;
    // if musicIndex is less than 1 then musicIndex wiil be array length so the last song will play
    musicIndex < 1 ? (musicIndex = allMusic.length) : (musicIndex = musicIndex);
    loadMusic(musicIndex);
    playMusic();
    //   playingNow();
  }

  //   // repeat one music function
  //   function repeatOneMusic() {
  //     // here we'll reset the musicIndex accordingly
  //     musicIndex = musicIndex;
  //     loadMusic(musicIndex);
  //     playMusic();
  //   }

  //   // shufflic music function
  //   function shuffleMusic() {
  //     // here we'll read a music at random

  //     let randIndex = Math.floor(Math.random() * allMusic.length + 1);
  //     do {
  //       randIndex = Math.floor(Math.random() * allMusic.length + 1);
  //     } while (musicIndex == randIndex);
  //     musicIndex = randIndex; // passing randomIndex to musicIndex so the random song will play
  //     loadMusic(musicIndex);
  //     playMusic();
  //     playingNow();
  //   }

  function showMoreBtnClick() {
    musicList.current.classList.toggle("show");
  }

  function repeatBtnCLick() {
    // first we get the innerText of the icon then we'll change accordingly
    let getText = repeatBtn.current.innerText;

    // let's do different changes on different icon click using switch
    switch (getText) {
      case "repeat": // if this icon is repeat then change it to repeat_one
        repeatBtn.current.innerText = "repeat_one";
        repeatBtn.current.setAttribute("title", "Song looped");
        break;
      case "repeat_one": // if this icon is repeat one then change it to shuffle
        repeatBtn.current.innerText = "shuffle";
        repeatBtn.current.setAttribute("title", "Playback shuffle");
        break;
      case "shuffle": // if this icon is shuffle then change it to repeat
        repeatBtn.current.innerText = "repeat";
        repeatBtn.current.setAttribute("title", "Playlist looped");
        break;
      default:
        break;
    }
  }

  return (
    <div className="controls">
      <i
        ref={repeatBtn}
        onClick={() => repeatBtnCLick()}
        id="repeat-plist"
        title="Playlist looped"
        className="material-icons"
      >
        repeat
      </i>
      <i
        ref={prevBtn}
        onClick={() => prevMusic()}
        id="prev"
        className="material-icons"
      >
        skip_previous
      </i>
      <div ref={playPauseBtn} className="play-pause">
        <i
          onClick={() => playPause()}
          ref={playPauseIconBtn}
          className="material-icons"
        >
          play_arrow
        </i>
      </div>
      <i
        ref={nextBtn}
        onClick={() => nextMusic()}
        id="next"
        className="material-icons"
      >
        skip_next
      </i>
      <i
        ref={showMoreBtn}
        onClick={() => showMoreBtnClick()}
        id="more-music"
        className="material-icons"
      >
        queue_music
      </i>
    </div>
  );
}

export default Controls;
