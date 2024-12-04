import { Box } from '@chakra-ui/react'
import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <Box
            w='100%'
            h='60px'
            bg='#212121'
            p='0 10px'
            display='flex'
            alignItems='center'
            justifyContent='space-between'
        >
            <Link to='/'>
                <img src={Logo} alt="logo" style={{ width: '40px', height: '40px' }} />
            </Link>
            <Box
                display='flex'
                gap='10px'
                alignItems='center'
            >
            </Box>
        </Box>
    )
}

export default Navbar