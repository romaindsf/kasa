function Tags({ rental_list, currentIndex }) {
    return (
        <ul className="tags_list">
            {rental_list[currentIndex].tags.map((tag) => (
                <li key={`${rental_list[currentIndex].id}-${tag}`}>
                    {tag}
                </li>
            ))}
        </ul>
    );
}

export default Tags;