import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import { ChakraProvider, Box, Flex, Spacer, Heading, Button } from "@chakra-ui/react";
import backgroundImage from "./bici.jpeg"
import "./App.css"

function App() {

    const headerStyle = {backgroundImage:  `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`, color: 'white', p:4, alignItems:'center', justifyContent: 'center'};
    const customHeadingStyle = {fontFamily: "Roboto, sans-serif",};
    const customButtonStyle = {fontFamily: "Roboto, sans-serif", width: "150px", height: "50px", fontSize:"18px"};

  return (
  <Flex height="100vh" alignItems="center">

    <Flex as="header" style={headerStyle} width="1200vw" height="200px" alignItems="center">

          <Flex as="div" alignItems="center" direction="column" background="transparent">

            <Heading as="titulo" size="lg" style={customHeadingStyle}><h1>DOMINA EL TERRENO</h1></Heading>

            <Flex>

            <Button
            size="lg"
            style={customButtonStyle}
            mr={4}
            bg="transparent"
            borderColor="white"
            borderWidth="1px"
            color="white"
            _hover={{ bg: "white", color: "black" }} >VER DETALLES</Button>

            <Button
            size="lg"
            style={customButtonStyle}
            bg="transparent"
            borderColor="white"
            borderWidth="1px"
            color="white"
            _hover={{ bg: "white", color: "black" }}>VER VIDEO</Button>

            </Flex>

          </Flex>
        </Flex>
    </Flex>
  )
}

export default App
