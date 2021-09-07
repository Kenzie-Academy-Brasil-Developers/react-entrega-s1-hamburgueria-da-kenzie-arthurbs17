import Product from "../Product";

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
