import { useState } from "react";

const ShowProducts = ({ showProducts, showAllProducts }) => {
  const [filterProduct, setFilterProduct] = useState("");

  return (
    <div>
      <input
        type="text"
        value={filterProduct}
        onChange={(event) => setFilterProduct(event.target.value)}
      />
      <button
        onClick={() => {
          showProducts(filterProduct.toLowerCase());
        }}
      >
        Procurar
      </button>
      <button
        onClick={() => {
          showAllProducts();
        }}
      >
        Mostrar todos
      </button>
    </div>
  );
};

export default ShowProducts;
