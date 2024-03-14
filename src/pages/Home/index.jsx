import imgSrc from 'falaise_cotiere.avif'
import rental_list from '../../datas/rental_ad_list.json'
import Banner from '../../components/Banner/Banner'
import Thumbnail from '../../components/Thumbnail/Thumbnail'

export default function Home() {
  return (
    <div className="main_container">
      <Banner
        imgSrc={imgSrc}
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
