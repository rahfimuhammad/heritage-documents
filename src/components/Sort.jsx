import React from 'react'
import { Select, Box } from '@chakra-ui/react'

const Sort = ({ parameter, setParameter }) => {

    return (
        <Box>
            <Select 
                size='sm'
                cursor='pointer' 
                value={parameter?.sortBy} 
                _placeholder={{ color: 'gray.100' }} 
                color='white'
                onChange={(e) => setParameter({ ...parameter, sortBy: e.target.value })}
                sx={{
                    'option': {
                        color: 'black',
                        backgroundColor: 'white',
                    }
                }}
            >
                <option color='black' value="default">Default Sort</option>
                <option value="title-a-z">Judul A-Z</option>
                <option value="title-z-a">Judul Z-A</option>
                <option value="type-a-z">Jenis A-Z</option>
                <option value="type-z-a">Jenis Z-A</option>
                <option value="year-a-z">Tahun A-Z</option>
                <option value="year-z-a">Tahun Z-A</option>
            </Select>
        </Box>
    )
}

export default Sort