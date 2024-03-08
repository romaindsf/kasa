import rental_list from "../../datas/rental_ad_list.json"
import Thumbnail from "../thumbnail/Thumbnail"

function RentalList () {
    return (
        <ul>
            {rental_list.map(({id, cover, title}) => (
                <Thumbnail
                    id={id}
                    cover={cover}
                    title={title}
                />
            ))}
        </ul>
    )
}

export default RentalList