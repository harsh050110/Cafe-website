function CoffeeCard({ name,price}) {
    return (
        <div className="coffee-card">
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    )
}
export default CoffeeCard;