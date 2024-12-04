import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const CardYear = ({ item }) => {

    const navigate = useNavigate()

    return (
        <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            padding='15px 10px'
            bg='#EDF2F7'
            border='1px solid #ccc'
            borderRadius='5px'
            cursor='pointer'
            _hover={{boxShadow: '0 0 10px #ccc'}}
            transition={'.3s ease-in-out'}
            onClick={() => navigate(`/results?year=${item?.year}&type=${item?.type}`)}
        >
            <Text
                color='#212121'
                fontSize='16px'
                fontWeight='bold'
            >
                {item?.year}
            </Text>
        </Box>
    )
}

export default CardYear