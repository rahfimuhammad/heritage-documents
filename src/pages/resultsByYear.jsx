import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Box, Text } from '@chakra-ui/react'
import axios from 'axios'
import Layout from '../fragments/LayoutFragment'
import GroupedYears from '../components/GroupedYears'

const ResultsByYear = () => {

    const location = useLocation()
    const [data, setData] = useState([])
    const searchParams = new URLSearchParams(location.search)
    const type = searchParams.get('type')
    const apiUrl = process.env.REACT_APP_API_URL

    const getData = async () => {
        try {
            const response = await axios.get(
                `${apiUrl}/document/count/year?type=${type}`
            ) 
            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Layout>
            <Box
                w='100%'
                p='5px 10px 0 10px'
                color='#212121'
            >
                <Text
                    fontSize='16px'
                    fontWeight='bold'
                >
                    {type}:
                </Text>
            </Box>
            <Box
                w='100%'
                minH='calc(100vh - 220px)'
                h='fit-content'
            >
                <GroupedYears 
                    group={data} 
                    type={type} 
                />
            </Box>
        </Layout>
    )
}

export default ResultsByYear