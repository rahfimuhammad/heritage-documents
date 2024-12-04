import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDocuments } from '../context/DocumentsProvider'
import { Box } from '@chakra-ui/react'
import Layout from '../fragments/LayoutFragment'
import Search from '../components/Search'
import Filter from '../components/Filter'
import Documents from '../components/Documents'
import PageController from '../components/PageController'
import FilterInfo from '../components/FilterInfo'
import Loading from '../components/Loading'
import NoData from '../components/NoData'
import Sort from '../components/Sort'
import Footer from '../components/Footer'

const Results = () => {

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search);
    const { getDocuments, documents, loading } = useDocuments()
    const navigate = useNavigate()
    const [parameter, setParameter] = useState({
        page: null,
        search: searchParams.get('search') || '',
        type: searchParams.get('type') || '',
        tag: searchParams.get('tag') || '',
        year: searchParams.get('year') || '',
        number: searchParams.get('number') || '',
        sortBy: searchParams.get('sortBy') || ''
    })

    const updateURL = (parameter) => {
        
        const params = new URLSearchParams();
        Object.keys(parameter).forEach(key => {
            if (parameter[key]) {
                params.append(key, parameter[key]);
            }
        });
        navigate(`?${params.toString()}`, { replace: true });
    };

    useEffect(() => {

        const searchParams = new URLSearchParams(location.search);
        const updatedParameter = {
            page: parameter.page || parseInt(searchParams.get('page')) || 1,
            search: searchParams.get('search') || '',
            type: searchParams.get('type') || '',
            tag: searchParams.get('tag') || '',
            year: searchParams.get('year') || '',
            number: searchParams.get('number') || '',
            sortBy: parameter.sortBy
        };
            setParameter(updatedParameter);
            getDocuments(updatedParameter);
            updateURL(updatedParameter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.search, parameter.sortBy, parameter.page]);
    

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
                    <Sort
                        parameter={parameter}
                        setParameter={setParameter}
                    />
            </Box>
            <FilterInfo 
                parameter={parameter}
                setParameter={setParameter}
            />
            <Box
                w='100%'
                minH='calc(100vh - 210px)'
                h='fit-content'
                position='relative'
            >
                {
                !loading 
                && 
                !documents?.documents?.length 
                && 
                <NoData 
                    height="calc(100vh - 130px)"
                />
                }
                {
                loading 
                && 
                <Loading 
                    height="calc(100vh - 120px)" 
                />
                }
                <Documents 
                    documents={documents?.documents} 
                />
            </Box>
            {documents?.documents?.length?
            <PageController 
                totalPages={documents?.totalPages} 
                parameter={parameter}
                setParameter={setParameter}
            />
            :
            null
            }
            <Footer />
        </Layout>
    )
}

export default Results