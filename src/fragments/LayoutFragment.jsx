import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../components/Navbar'

const LayoutFragment = ({ children }) => {
    return (
        <Box
            w='100%'
        >
            <Navbar/>
            {children}
        </Box>
    )
}

export default LayoutFragment