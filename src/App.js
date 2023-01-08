import React,{useEffect,useState} from "react";
import axios from 'axios'
import './App.css';
import ProductCard from "./components/ProductCard/ProductCard";
import Cart from "./components/Cart/Cart";


function App() {
  const [products,setProducts] = useState([])
  const [totalPrice,setTotalPrice] = useState(0)
  const [modal,setModal] = useState(false)
  const [cartItem,setCartItem] = useState([])


  const deleteItem = (id,itemPrice) => {
    setCartItem(prev => prev.filter(n => n.id !== id))
    setTotalPrice(totalPrice - Math.floor(itemPrice))
  }


  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products')
      setProducts(response.data)
    }
    getProducts()
  },[])

  const addToCard = (item) => {
    setCartItem([...cartItem,item])
    setTotalPrice(prev =>  prev += Math.floor(item.price))
  }

  return (
      <div className="App">
        <Cart totalPrice={totalPrice} setModal={setModal} modal={modal} cartItem={cartItem}deleteItem={deleteItem}/>
        {modal === false ? <ProductCard products={products} addToCard={addToCard}/> : ''}
      </div>
  );
}

export default App;
