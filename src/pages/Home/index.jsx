import rental_list from '../../datas/rental_ad_list.json'
import Banner from '../../components/Banner/Banner'
import Thumbnail from '../../components/Thumbnail/Thumbnail'

export default function Home() {
  return (
    <div className="main_container">
      <Banner
        imgSrc="assets/falaise_cotiere.avif"
        text={
          <p>
            Chez vous, <span className="a_la_ligne">partout et ailleurs</span>
          </p>
        }
      />
      <ul className="rental_list">
        {rental_list.map(({ id, cover, title }) => (
          <Thumbnail key={id} id={id} cover={cover} title={title} />
        ))}
      </ul>
    </div>
  )
}
