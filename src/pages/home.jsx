import React, { useEffect, useState } from 'react'
import { useDocuments } from '../context/DocumentsProvider'
import { Box } from '@chakra-ui/react'
import Layout from '../fragments/LayoutFragment'
import Search from '../components/Search'
import Filter from '../components/Filter'
import PageController from '../components/PageController'
import Documents from '../components/Documents'
import NumberOfDocs from '../components/NumberOfDocs'
import Loading from '../components/Loading'
import Footer from '../components/Footer'

const Home = () => {

    const { setFilter, documents, loading, getDocuments } = useDocuments()
    const [parameter, setParameter] = useState({
        page: null,
        search:  '',
        type: '',
        tag: '',
        year: '',
        number:'',
        sortBy: ''
    })

    useEffect(() => {
        setFilter({ 
            title: '', 
            about: '', 
            type: '', 
            tag: '',
            year: '', 
            number: '',
        })
        setParameter({
            ...parameter, page: 1
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        getDocuments(parameter)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        parameter.page, 
        parameter.sortBy
    ])

    return (
        <Layout>
            <Box
                display='flex'
                gap='5px'
                p='10px'
                bg='#212121'
            >
                <Search
                    url={'results'}
                    parameter={parameter}
                    setParameter={setParameter}
                />
                <Filter
                    url={'results'}
                    parameter={parameter}
                    setParameter={setParameter}
                />
            </Box>
            <Box
                w='100%'
                minH='calc(100vh - 170px)'
                h='fit-content'
                position='relative'
            >
                {
                loading && 
                <Loading 
                    height='calc(100vh - 120px)' 
                />
                }
                <Documents 
                    documents={documents?.documents} 
                />
            </Box>
            <PageController 
                totalPages={documents?.totalPages} 
                parameter={parameter}
                setParameter={setParameter}
            />
            <NumberOfDocs/>
            <Footer/>
        </Layout>
    )
}

export default Home