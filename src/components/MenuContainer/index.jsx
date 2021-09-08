import Product from "../Product";
import "./index.css";

const MenuContainer = ({ list, handleClick }) => {
  return (
    <ul className="product_container">
      {list.map((product, index) => (
        <Product list={product} handleClick={handleClick} key={index} />
      ))}
    </ul>
  );
};

export default MenuContainer;
