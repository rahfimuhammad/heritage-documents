import React from 'react'
import { Box, Button, Text } from '@chakra-ui/react'

const PageController = ({ totalPages, parameter, setParameter }) => {


    const nextPage = () => {
        if (parameter?.page < totalPages) {
            setParameter({
                ...parameter, page: parameter.page + 1})
            window.scrollTo(0, 0)
        }
    }

    const prevPage = () => {
        if (parameter?.page > 1) {
            setParameter({
                ...parameter, page: parameter.page - 1
            })
            window.scrollTo(0, 0)
        }
    }


    return (
        <Box
            w='100%'
            h='60px'
            display='flex'
            alignItems='center'
            justifyContent='center'
        >
            <Box
                display='flex'
                gap='5px'
                alignItems='center'
            >
                <Button
                    onClick={() => prevPage()}
                    isDisabled={parameter?.page === 1}
                >
                    Prev
                </Button>
                <Text>{parameter?.page} of {totalPages}</Text>
                <Button
                    onClick={() => nextPage()}
                    isDisabled={parameter?.page === totalPages}
                >
                    Next
                </Button>
            </Box>
        </Box>
    )
}

export default PageController