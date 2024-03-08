import rental_list from "../../datas/rental_ad_list.json"
import Thumbnail from "../thumbnail/Thumbnail"

function RentalList() {
    return (
        <ul className="rental_list">
            {rental_list.map(({ id, cover, title }) => (
                <Thumbnail key={id}
                    id={id}
                    cover={cover}
                    title={title}
                />
            ))}
        </ul>
    );
}

export default RentalList