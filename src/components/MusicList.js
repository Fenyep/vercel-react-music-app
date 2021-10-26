import { useRef } from "react/cjs/react.development";

function MusicList({
  musicList,
  showMoreBtn,
  hideMusicBtn,
  audioDuration,
  clicked,
  liTag,
  allMusic,
}) {
  function hideMusicBtnClick() {
    showMoreBtn.current.click();
  }

//   let liAudioDuration = useRef();
  let liAudioTag = useRef();

  //   function liAudioTagLoadedData(liAudioDurationRef, liAudioTagRef) {
  //     let audioDuration = liAudioTagRef.current.duration;
  //     let totalMin = Math.floor(audioDuration / 60);
  //     let totalSec = Math.floor(audioDuration % 60);
  //     if (totalSec < 10) {
  //       // adding of if sec is less than 10
  //       totalSec = `0${totalSec}`;
  //     }
  //     liAudioDurationRef.current.innerText = `${totalMin}:${totalSec}`;
  //     // adding t-duration attribute which we'll use below
  //     liAudioDurationRef.current.setAttribute(
  //       "t-duration",
  //       `${totalMin}:${totalSec}`
  //     );
  //   }

  //   function ulLoad() {
  //     // let's create li according to the array length
  //     for (let i = 0; i < allMusic.length; i++) {
  //       liAudioTagLoadedData(liAudioDuration, liAudioTag);
  //     }
  //   }


  return (
    <div ref={musicList} className="music-list">
      <div className="header">
        <div className="row">
          <i className="material-icons">queue_music</i>
          <span>Music list</span>
        </div>
        <i
          ref={hideMusicBtn}
          onClick={() => hideMusicBtnClick()}
          id="close"
          className="material-icons"
        >
          close
        </i>
      </div>
      <ul /*onLoad={() => ulLoad()}*/>
        {allMusic.map(({ id, name, artist, src, music }) => (
          <li key={id} ref={liTag} li-index={id} onClick={() => clicked(id)}>
            <div className="row">
              <span>{name}</span>
              <p>{artist}</p>
            </div>
            <audio className={music} ref={liAudioTag} src={src}></audio>
            {/* <span id={music} ref={audioDuration} className="audio-duration">
              3:40
            </span> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MusicList;
