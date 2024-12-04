import React from 'react'
import { Tooltip, Tr, Td, Tbody, Box } from '@chakra-ui/react'
import EditData from './EditData';
import { useDocuments } from '../context/DocumentsProvider';
import DeleteData from './DeleteData';

const TableData = () => {

    const { documents } = useDocuments();

    const mapTableData = () => {
        return documents?.documents?.map((data) => (
            <Tr key={data.id}>
                <Td 
                    display='flex' 
                    alignItems='center'
                    justifyContent='center' 
                >
                    <Box
                        display='flex'
                        alignItems='center'
                        gap='5px'
                    >
                        <EditData 
                            data={data} 
                        />
                        <DeleteData 
                            data={data}
                            message={'are you sure you want to delete this document?'}
                        />
                    </Box>
                </Td>
                <Td
                    whiteSpace='nowrap' 
                    overflow='hidden' 
                    textOverflow='ellipsis' 
                    maxW="200px" 
                    bg='white'
                    textAlign='center'
                >
                    <Tooltip label={data.title} fontSize='xs'>
                        {data.title.length > 25 ? `${data.title.substring(0, 25)}...` : data.title}
                    </Tooltip>
                </Td>
                <Td whiteSpace='nowrap' overflow='auto' textAlign='center'>
                    <Tooltip label={data.about} fontSize='xs'>
                        {data.about.length > 25 ? `${data.about.substring(0, 25)}...` : data.about}
                    </Tooltip>
                </Td>
                <Td whiteSpace='nowrap' overflow='auto' textAlign='center'>
                    {data.type}
                </Td>
                <Td whiteSpace='nowrap' overflow='auto' textAlign='center'>
                    {data.year}
                </Td>
                <Td whiteSpace='nowrap' overflow='auto' textAlign='center'>
                    {data.number}
                </Td>
                <Td whiteSpace='nowrap' overflow='auto' textAlign='center'>
                    {data.status}
                </Td>
            </Tr>
        ));
    };

    return (
        <Tbody>
            {mapTableData()}
        </Tbody>
    )
}

export default TableData