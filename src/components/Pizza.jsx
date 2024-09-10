import { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas/p001");
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error fetching pizza:", error);
      }
    };

    fetchPizza();
  }, []);

  if (!pizza) return <div>Loading...</div>;

  return (
    <div className="pizza-details">
      <img src={pizza.image} alt={pizza.name} />
      <h2>{pizza.name}</h2>
      <p>Price: ${pizza.price}</p>
      <p>{pizza.description}</p>
      <ul>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <button>Add to Cart</button>
    </div>
  );
};

export default Pizza;
