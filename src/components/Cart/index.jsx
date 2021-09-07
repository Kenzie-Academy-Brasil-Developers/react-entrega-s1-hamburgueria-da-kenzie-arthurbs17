const Cart = ({ list }) => {
  return (
    <div className="Cart">
      <h1>Carrinho</h1>
      {list.map((product, index) => (
        <div key={index}>
          <h3>{product.name}</h3>
          <h3>{product.price}</h3>
        </div>
      ))}
    </div>
  );
};

export default Cart;
