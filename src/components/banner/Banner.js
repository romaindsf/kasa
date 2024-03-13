function Banner({bannerSrc, text}) {
    return (
        <div className="banner">
            <img src={bannerSrc} alt="bannière"/>
            {text}
        </div>
    )
}
export default Banner