import React from "react";
import NextImage from 'next/image';
import { FaCartShopping } from react-icons/fa
import {
  Box,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Heading,
  Container,
} from "@chakra-ui/react";

const Navbar = ({ cartItems, productInfo }) => {
  const { title, price } = productInfo
  return (
    <Flex bgColor="#F6F6F7" justifyContent="flex-end" h="2em">
      <Container maxW="container.lg" display="flex" justifyContent="flex-end">
        <Menu>
          <MenuButton fontSize="xs">My Cart</MenuButton>
          <MenuList>
            {!cartItems.length ?
              <Text textAlign="center">Your cart is empty.</Text>
              : cartItems.map((item, i) => {
                <MenuItem key={i}>
                  <Flex>
                    <Box px="5em">
                      <NextImage
                        src="/classic-tee.jpg"
                        width={50}
                        height={50}
                      />
                    </Box>
                    <Heading>{title}</Heading>
                    <Text>{item.quantity}x {price}</Text>
                    <Text>{item.size}</Text>
                  </Flex>
                </MenuItem>
              })
            }
          </MenuList>
        </Menu>
      </Container>
    </Flex>
  )
}

export default Navbar