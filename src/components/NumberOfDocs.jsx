import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Box } from '@chakra-ui/react'
import { IsSmallScreen } from '../libs/detectScreen'
import { useNavigate } from 'react-router-dom'

const NumberOfDocs = () => {

    const [numberOfDocs, setNumberOfDocs] = useState([])
    const isSmall = IsSmallScreen()
    const navigate = useNavigate()
    const apiUrl = process.env.REACT_APP_API_URL

    const colorScheme = (data) => {
        switch (data) {
            case 'Undang-undang':
                return '#f9d9a4'
            case 'Peraturan Pemerintah':
                return '#95C8D8'
            case 'Peraturan Menteri':
                return '#FEECEB'
            case 'Peraturan Daerah':
                return '#fdf2ca'
            case 'Peraturan Gubernur':
                return '#d7fcc6'
            case 'Keputusan Gubernur':
                return '#F3F3E0'
            case 'Keputusan Menteri':
                return '#74adaa'
            case 'Rekomendasi TAP':
                return '#c8e1fc'
            default:
                return '#DD868C'
        }
    }

    const getData = async () => {

        try {
            const response = await axios.get(
                `${apiUrl}/document/count/type`
            )
            setNumberOfDocs(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Box
            w='100%'
            h='fit-content'
            p={isSmall? '10px' : '10px'}
            overflow='auto'
            display='grid'
            gridTemplateColumns={isSmall? 'repeat(auto-fill, minmax(145px, 1fr))' : 'repeat(auto-fill, minmax(200px, 1fr))'}
            gap={3}
        >
            {numberOfDocs.map((item, index) => {
                return (
                    <Box key={index}
                        onClick={() => navigate(`/resultsByYear?type=${item.type}`)}
                        w='100%'
                        h='120px'
                        cursor='pointer'
                        _hover={{boxShadow: '0 0 10px #ccc'}}
                        transition={'.3s ease-in-out'}
                        border='1px solid #ccc'
                        borderRadius='5px'
                        color='#595354'
                        bg={colorScheme(item.type)}
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                    >
                        <Box
                            display='flex'
                            flexDirection='column'
                            alignItems='center'
                            gap='5px'
                        >
                            <h2 style={{ fontWeight: 'bold', fontSize: '25px' }}>{item._count.type}</h2>
                            <h3 style={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'center' }}>{item.type}</h3>
                        </Box>
                    </Box>
                )
            })}
        </Box>
    )
}

export default NumberOfDocs