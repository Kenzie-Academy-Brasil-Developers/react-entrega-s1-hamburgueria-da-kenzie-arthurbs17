const Product = ({ list, handleClick }) => {
  return (
    <li className="product">
      <h3>{list.name}</h3>
      <h3>{list.price}</h3>
      <button onClick={() => handleClick(list.id)}>
        Adicionar ao carrinho
      </button>
    </li>
  );
};

export default Product;
