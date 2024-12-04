import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';

const FilterInfo = ({ parameter, setParameter }) => {

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search);
    const filtered ={
        page: searchParams.get('page') || 1,
        search: searchParams.get('search') || '',
        type: searchParams.get('type') || '',
        tag: searchParams.get('tag') || '',
        year: searchParams.get('year') || '',
        number: searchParams.get('number') || '',
        sortBy: searchParams.get('sortBy') || ''
    }

    const mapInfo = () => {
        return Object.keys(filtered)
            .filter((key) => key !== 'page' && key !== 'search')
            .map((key) => {
                if (!filtered[key]) return null;

                return (
                    <Box
                        key={key}
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        padding='5px 10px'
                        bg='#EDF2F7'
                        borderRadius='5px'
                        mt={'10px'}
                        onClick={() => {
                            setParameter({
                                ...parameter,
                                [key]: ''
                            });
                        }}
                    >
                        <Text
                            color='black'
                            fontSize='12px'
                        >
                            {key}: {filtered[key]}
                        </Text>
                    </Box>
                );
            });
    };

    return (
        <Box>
            <Box
                display='flex'
                gap='5px'
                alignItems='center'
                p='0px 10px 0px 10px'
            >
                <Box display='flex' gap='5px'>
                    {mapInfo()}
                </Box>
            </Box>
        </Box>
    );
};

export default FilterInfo;
