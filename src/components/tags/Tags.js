function Tags({ rentalInfo }) {
    return (
        <ul className="tags_list">
            {rentalInfo.tags.map((tag, index) => (
                <li key={index}>
                    {tag}
                </li>
            ))}
        </ul>
    );
}

export default Tags;