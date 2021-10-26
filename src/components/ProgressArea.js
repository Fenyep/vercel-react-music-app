function ProgressArea({
  mainAudio,
  currentVar,
  durationVar,
  playMusic,
  mainAudioEnded,
  progressArea,
  progressBar,
  src,
}) {
  function mainAudioLoadedData(musicDuration) {
    // update song total duration
    let audioDuration = mainAudio.current.duration;
    let totalMin = Math.floor(audioDuration / 60);
    let totalSec = Math.floor(audioDuration % 60);
    if (totalSec < 10) {
      // adding of if sec is less than 10
      totalSec = `0${totalSec}`;
    }
    musicDuration.current.innerText = `${totalMin}:${totalSec}`;
  }

  // upgrade progress bar with according to music current time
  function mainAudioTimeUpdate(e) {
    const currentTime = e.target.currentTime; // getting currentTime of song
    const duration = e.target.duration; // getting total duration of song
    let progressWidth = (currentTime / duration) * 100;
    progressBar.current.style.width = `${progressWidth}%`;

    let musicCurrentTime = currentVar;
    let musicDuration = durationVar;

    mainAudioLoadedData(musicDuration);
    // update playing song current time
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) {
      // adding of if sec is less than 10
      currentSec = `0${currentSec}`;
    }
    musicCurrentTime.current.innerText = `${currentMin}:${currentSec}`;
  }

  // let's update playing song current time on according to the progress bar width

  function progressAreaClick(e) {
    let progressWidthVal = progressArea.current.clientWidth; // getting width of progress bar
    let clickedOffSetX = e.nativeEvent.offsetX; // getting offset x value
    let songDuration = mainAudio.current.duration; // getting song total duration
    mainAudio.current.currentTime = (clickedOffSetX / progressWidthVal) * songDuration;
    playMusic();
  }

  return (
    <div ref={progressArea} onClick={progressAreaClick} className="progress-area">
      <div ref={progressBar} className="progress-bar"></div>
      <audio
        ref={mainAudio}
        onEnded={() => mainAudioEnded()}
        onTimeUpdate={mainAudioTimeUpdate}
        id="main-audio"
        src={src}
      ></audio>
    </div>
  );
}

export default ProgressArea;
