import "./App.css";
import { useState } from "react";
import MenuContainer from "./components/MenuContainer";
import Cart from "./components/Cart";
import ShowProducts from "./components/ShowProducts";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99 },
    { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99 },
    { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99 },
    { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99 },
    { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99 },
    { id: 6, name: "Coca", category: "Bebidas", price: 4.99 },
    { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [currentSale, setCurrentSale] = useState([]);

  const handleCLick = (productId) => {
    const selectedProduct = products.find(
      (product) => product.id === productId
    );
    setCurrentSale([...currentSale, selectedProduct]);
  };

  const removeProduct = (productId) => {
    setCurrentSale([
      ...currentSale.slice(0, productId),
      ...currentSale.slice(productId + 1),
    ]);
  };

  const showProducts = (inputProduct) => {
    setFilteredProducts(
      products.filter((product) => product.name.toLowerCase() === inputProduct)
    );
  };

  const showAllProducts = () => {
    setFilteredProducts([]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <ShowProducts
          showProducts={showProducts}
          showAllProducts={showAllProducts}
        />
        {filteredProducts.length > 0 ? (
          <MenuContainer list={filteredProducts} handleClick={handleCLick} />
        ) : (
          <MenuContainer list={products} handleClick={handleCLick} />
        )}
        <Cart list={currentSale} removeProduct={removeProduct} />
      </header>
    </div>
  );
}

export default App;
