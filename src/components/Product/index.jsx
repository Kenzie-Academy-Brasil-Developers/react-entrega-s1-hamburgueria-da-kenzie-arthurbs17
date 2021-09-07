const Product = ({ list, handleClick }) => {
  return (
    <li className="product">
      <h1>{list.name}</h1>
      <h3>{list.price}</h3>
      <button onClick={() => handleClick(list.id)}>
        Adicionar ao carrinho
      </button>
    </li>
  );
};

export default Product;
