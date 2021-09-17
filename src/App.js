import "./App.css";
import { useState } from "react";
import MenuContainer from "./components/MenuContainer";
import Cart from "./components/Cart";
import ShowProducts from "./components/ShowProducts";

import hambuguer from "./hamburguer.jpg";
import xburguer from "./cheeseburguer.jpg";
import xsalada from "./cheese-salada-burger.jpg";
import bigkenzie from "./bigkenzie.jpg";
import guarana from "./guarana.jpg";
import cocacola from "./cocacola.jpg";
import fanta from "./fanta.jpg";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 7.99,
      image: hambuguer,
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 8.99,
      image: xburguer,
    },
    {
      id: 3,
      name: "X-Salada",
      category: "Sanduíches",
      price: 10.99,
      image: xsalada,
    },
    {
      id: 4,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 16.99,
      image: bigkenzie,
    },
    {
      id: 5,
      name: "Guaraná",
      category: "Bebidas",
      price: 4.99,
      image: guarana,
    },
    { id: 6, name: "Coca", category: "Bebidas", price: 4.99, image: cocacola },
    { id: 7, name: "Fanta", category: "Bebidas", price: 4.99, image: fanta },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [currentSale, setCurrentSale] = useState([]);

  const handleCLick = (productId) => {
    const selectedProduct = products.find(
      (product) => product.id === productId
    );
    const verify = currentSale.find(
      (product) => product.id === selectedProduct.id
    );
    if (verify === undefined) {
      setCurrentSale([...currentSale, selectedProduct]);
    }
  };

  const removeProduct = (productId) => {
    setCurrentSale(currentSale.filter((prod) => prod.id !== productId));
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
      <main className="App-header">
        <h1>Kenzie Burguer</h1>
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
      </main>
    </div>
  );
}

export default App;
