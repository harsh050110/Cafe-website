import coffeeData from "../data/coffeeData";
import CoffeeCard from "../components/CoffeeCard";

function Menu() {
  return (
    <section className="page">
      <h1>Our Menu</h1>
      <div className="coffee-list">
        {coffeeData.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            name={coffee.name}
            price={coffee.price}
          />
        ))}
      </div>
    </section>
  );
}

export default Menu;
