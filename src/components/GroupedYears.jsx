import React from 'react'
import { Box } from '@chakra-ui/react'
import { IsSmallScreen } from '../libs/detectScreen'
import CardYear from './CardYear'

const GroupedYears = ({ group, type }) => {

    const isSmall = IsSmallScreen()    

    return (
        <Box
            w='100%'
            h='fit-content'
            p='10px'
            overflow='auto'
            display='grid'
            onClick={() => console.log(type)}
            gridTemplateColumns={isSmall? 'repeat(auto-fill, minmax(150px, 1fr))' : 'repeat(auto-fill, minmax(250px, 1fr))'}
            gap={3}
        >
            {group?.map((item, index) => {
                return (
                    <CardYear 
                        key={index} 
                        item={item}
                        type={type}
                    />
                )
            })}
        </Box>
    )
}

export default GroupedYears