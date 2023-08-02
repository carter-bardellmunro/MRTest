import React, { useState, useEffect } from "react";
import NextImage from 'next/image';
import { Box, Button, Container, Flex, Text } from "@chakra-ui/react"

const ProductInfo = ({ handleSelect, sizeSelected, handleAddToCart, productInfo }) => {
  const { title, price, description, sizeOptions } = productInfo
  return (
    <Box display="flex" flexDir={{ base: 'column', sm: 'row'}} justifyContent="center" py={{ base: '1em', md: '3em'}} px={{ base: '1em', md: '0em'}}>
      <Box px={{ base: '0em', lg: '5em'}} pb={{ base: '1em', md: '0em'}}>
        <NextImage
          src="/classic-tee.jpg"
          width={400}
          height={300}
        />
      </Box>

      <Box display="flex" flexDir="column">
        <Text fontSize="xl" color="#222222">{title}</Text>
        <Text color="#222222" py="1em" as="b">${price}</Text>
        <Container maxW="lg" px="0" pb="1em">
          <Text fontSize="xs" color="#888888">{description}</Text>
        </Container>
        <Flex>
          <Text fontSize="xs" as="b" color="#888888">SIZE*</Text>
          <Text fontSize="xs" as="b" pl=".5em" color="#222222">{sizeSelected}</Text>
        </Flex>
        <Flex flexDir="row" py="1em">
          {sizeOptions?.map((option) => {
            return (
              <Button
                onClick={handleSelect}
                value={option.label}
                id={option.id}
                key={option.id}
                size="md"
                bg="white"
                border=" solid #888888 1px"
                mr=".5em"
                fontSize="xs"
                borderRadius="0"
                _hover={{
                  bg: 'none'
                }}
                _active={{
                  border: 'solid black 2px'
                }}
              >
                {option.label}
              </Button>
            )
          })}
        </Flex>
        <Box>
          <Button
          onClick={handleAddToCart}
            size="md"
            border="solid black 1px"
            borderRadius="0"
            bgColor="white"
            _hover={{
              color: 'white',
              bgColor: "black"
            }}
          >
            ADD TO CART
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default ProductInfo