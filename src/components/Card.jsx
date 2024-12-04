import React from 'react'
import { Box } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Card = ({ data }) => {

    const navigate = useNavigate()
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

    return (
        <Box
            onClick={() => navigate(`/document/detail/${data.id}`)}
            w='100%'
            h='175px'
            p='10px'
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
            _hover={{boxShadow: '0 0 10px #ccc'}}
            transition={'.3s ease-in-out'}
            bg='#fff'
            border='1px solid #ccc'
            borderRadius='5px'
            cursor='pointer'
        >
            <Box>
                <h3 
                    style={{ 
                        fontWeight: 'bold',
                        }}
                >
                    {data.title.length > 60 ? data.title.substring(0, 60) + '...' : data.title}
                </h3>
                <p>
                    {data.about.length > 80 ? data.about.substring(0, 80) + '...' : data.about}
                </p>
            </Box>
            <Box
                display='flex'
                gap='5px'
            >
                <Box
                    w='fit-content'
                    color='#595354'
                    borderRadius='5px'
                    fontWeight='bold'
                    fontSize='12px'
                    p='5px 10px'
                    bg={colorScheme(data.type)}
                >
                    {data.type}
                </Box>
                {data.tag &&
                    <Box
                    w='fit-content'
                    color='#595354'
                    borderRadius='5px'
                    fontWeight='bold'
                    fontSize='12px'
                    p='5px 10px'
                    bg='#EDF2F7'
                >
                    {`#${data.tag.toLowerCase()}`}
                </Box>
                }
            </Box>
        </Box>
    )
}

export default Card