function ImgArea({musicImg ,src}) {
    return (<div className="img-area">
            <img ref={musicImg} src={src} alt="" />
        </div>);
}

export default ImgArea;