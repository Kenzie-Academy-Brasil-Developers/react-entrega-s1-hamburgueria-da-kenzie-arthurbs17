import { useState } from "react";

const ShowProducts = ({ showProducts, showAllProducts }) => {
  const [filterProduct, setFilterProduct] = useState("");

  return (
    <div>
      <input
        className="inputSearch"
        type="text"
        value={filterProduct}
        onChange={(event) => setFilterProduct(event.target.value)}
      />
      <button
        className="procurar"
        onClick={() => {
          showProducts(filterProduct.toLowerCase());
        }}
      >
        Procurar
      </button>
      <button
        className="showAll"
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
