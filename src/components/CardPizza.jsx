import PropTypes from "prop-types";

const CardPizza = ({ name, price, ingredients, img }) => {
  const formatPrice = (price) => {
    return price.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
    });
  };

  return (
    <div className="card h-100">
      <img
        src={img}
        className="card-img-top"
        alt={name}
        style={{ objectFit: "cover", height: "200px" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <strong>Ingredientes:</strong>
        </p>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p className="card-text">
          <strong>Precio:</strong> {formatPrice(price)}
        </p>
        <div className="mt-auto d-flex justify-content-between">
          <button className="btn btn-primary btn-sm">Ver más</button>
          <button className="btn btn-danger btn-sm">Añadir</button>
        </div>
      </div>
    </div>
  );
};

CardPizza.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  img: PropTypes.string.isRequired,
};

export default CardPizza;
