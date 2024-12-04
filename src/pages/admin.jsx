import React, { useEffect, useState } from 'react';
import { useDocuments } from '../context/DocumentsProvider';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Table, TableContainer, Th, Tr,Thead } from '@chakra-ui/react';
import Layout from '../fragments/LayoutFragment';
import TableData from '../components/TableData';
import Filter from '../components/Filter';
import Search from '../components/Search';
import PageController from '../components/PageController';
import AddData from '../components/AddData';
import Loading from '../components/Loading';
import Sort from '../components/Sort';
import FilterInfo from '../components/FilterInfo';

const Admin = () => {

    const { documents, loading, getDocuments } = useDocuments();
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const [parameter, setParameter] = useState({
        page: 1,
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
            page: parameter.page,
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
    }, [
        location.search, 
        parameter.sortBy, 
        parameter.page
    ]);

    return (
        <Layout>
            <Box 
                display='flex' 
                flexDirection='column'
            >
                <Box 
                    display='flex' 
                    gap='5px' 
                    p='10px' 
                    bg='#212121'
                >
                    <Search 
                        url={'admin'}
                        parameter={parameter}
                        setParameter={setParameter} 
                    />
                    <AddData/>
                    <Filter 
                        url={'admin'}
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
                <Box w='100%' h='fit-content' overflow='auto'>
                    {
                    loading && 
                    <Loading 
                        height='calc(100vh - 120px)' 
                    />
                    }
                    <TableContainer 
                        borderWidth="1px" 
                        w="100%" 
                        overflowX="auto" 
                        whiteSpace='collapse' 
                        borderRadius='5px' 
                        position='relative'
                    >
                        <Table 
                            w='100%' 
                            size='sm'
                        >
                            <Thead>
                                <Tr>
                                    <Th textAlign='center'>Action</Th>
                                    <Th textAlign='center' p={3}>Judul</Th>
                                    <Th textAlign='center'>Tentang</Th>
                                    <Th textAlign='center'>Jenis</Th>
                                    <Th textAlign='center'>Tahun</Th>
                                    <Th textAlign='center'>Nomor</Th>
                                    <Th textAlign='center'>Status</Th>
                                </Tr>
                            </Thead>
                                <TableData/>
                        </Table>
                    </TableContainer>
                </Box>
                <PageController 
                    totalPages={documents?.totalPages} 
                    parameter={parameter}
                    setParameter={setParameter}
                />
            </Box>
        </Layout>
    );
};

export default Admin;
