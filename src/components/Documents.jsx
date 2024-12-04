import React from 'react'
import Card from './Card'
import { Box } from '@chakra-ui/react'
import { IsSmallScreen } from '../libs/detectScreen'

const Documents = ({ documents }) => {

    const isSmall = IsSmallScreen()

    return (
        <Box
            w='100%'
            h='fit-content'
            p='10px'
            overflow='auto'
            display='grid'
            gridTemplateColumns={isSmall? 'repeat(auto-fill, minmax(300px, 1fr))' : 'repeat(auto-fill, minmax(300px, 1fr))'}
            gap={3}
        >
            {documents?.map((item, index) => {
                return (
                    <Card key={index} data={item}/>
                )
            })}
        </Box>
    )
}

export default Documents