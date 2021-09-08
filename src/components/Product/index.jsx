import "./index.css";
import { FaShoppingBasket } from "react-icons/fa";

const Product = ({ list, handleClick }) => {
  return (
    <li className="product">
      <img src={list.image} alt={list.name}></img>
      <h3>{list.name}</h3>
      <h3>R$: {list.price}</h3>
      <button className="buttonAdd" onClick={() => handleClick(list.id)}>
        <FaShoppingBasket />
      </button>
    </li>
  );
};

export default Product;
