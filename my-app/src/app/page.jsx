'use client'
import React, { useEffect, useState } from "react"
import { Box, Flex } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import ProductInfo from "./components/ProductInfo"

const Home = () => {
  // Store the data from the api
  const [productInfo, setProductInfo] = useState([])
  // Selected t-shirt size
  const [sizeSelected, setSizeSelected] = useState('')
  // State keeping track of items in cart w/ quantity
  const [cartItems, setCartItems] = useState([]);

  // Get the info from the api
  useEffect(() => {
    const getData = async () => {
      const query = await fetch('https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product')
      const res = await query.json()
      setProductInfo(res)
    }
    getData()
  }, [])
  
  // Handling the size selection
  const handleSelect = (event) => {
    const value = event.target.value
    setSizeSelected(value)
  }
  // Adding the selected size to the cart 
  const handleAddToCart = () => {
    if (sizeSelected) {
      const existingCartItem = cartItems.find(item => item.size === sizeSelected);
      if (existingCartItem) {
        // If the size is already in the cart, update the quantity
        const updatedCartItems = cartItems.map(item =>
          item.size === sizeSelected ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedCartItems);
      } else {
        // If the size is not in the cart, add it with quantity 1
        setCartItems(prevCartItems => [...prevCartItems, { size: sizeSelected, quantity: 1 }]);
      }

      // Reset the selected size after adding to the cart
      setSizeSelected('');
    }
  };

  return (
    <Box display="flex" flexDir="column" mx="10em">
      <Flex justifyContent="center" flexDir="column" pt="1em">
        <NavBar cartItems={cartItems} productInfo={productInfo} />
        <ProductInfo productInfo={productInfo} handleSelect={handleSelect} sizeSelected={sizeSelected} handleAddToCart={handleAddToCart} />
      </Flex>
    </Box>
  )
}

export default Home
