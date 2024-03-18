import company_values from '../../datas/company_values'
import Banner from '../../components/Banner/Banner'
import Dropdown from '../../components/Dropdown/Dropdown'

export default function APropos() {
  return (
    <div className="main_container">
      <Banner imgSrc="assets/paysage_montagneux.avif" />
      <div className="a_propos">
        {company_values.map(({ title, content }, index) => (
          <Dropdown key={index} title={title} content={content} />
        ))}
      </div>
    </div>
  )
}
