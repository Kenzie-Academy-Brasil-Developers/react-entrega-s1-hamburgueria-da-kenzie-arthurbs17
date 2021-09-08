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
      <h3>
        Subtotal R$:{" "}
        {list.reduce((acc, product) => product.price + acc, 0).toFixed(2)}
      </h3>
      <h3>Quantidade de itens: {list.length}</h3>
    </div>
  );
};

export default Cart;
