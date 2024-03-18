export default function Banner({ imgSrc, text }) {
  return (
    <div className="banner">
      <img src={imgSrc} alt={`bannière ${text}`} />
      {text}
    </div>
  )
}
