function SongDetails({musicName, musicArtist, name, artist}) {
    return (<div className="song-details">
    <p ref={musicName} className="name">{name}</p>
    <p ref={musicArtist} className="artist">{artist}</p>
</div>);
}

export default SongDetails;