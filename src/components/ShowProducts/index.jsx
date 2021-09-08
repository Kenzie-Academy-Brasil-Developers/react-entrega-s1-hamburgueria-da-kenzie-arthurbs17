import { useState } from "react";
import "./index.css";
import { FaSearch } from "react-icons/fa";

const ShowProducts = ({ showProducts, showAllProducts }) => {
  const [filterProduct, setFilterProduct] = useState("");

  return (
    <div className="search">
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
        <FaSearch />
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
