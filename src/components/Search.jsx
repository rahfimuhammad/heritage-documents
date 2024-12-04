import React from 'react'
import SearchOutlined from '@ant-design/icons/SearchOutlined'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Input, InputGroup, InputRightElement, IconButton, CloseButton } from '@chakra-ui/react'

const Search = ({ url, parameter, setParameter }) => {

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await setParameter({...parameter, page: 1})

        const query = new URLSearchParams(parameter).toString();
        navigate(`/${url}?${query}`);
    }

    return (
        <Box
            display='flex'
            width='200px'
        >
            <InputGroup
                display={'flex'}
                alignItems={'center'}
            >
                <Input 
                    type='text'
                    name='search'
                    value={parameter?.search}
                    onChange={(e) => setParameter({ ...parameter, search: e.target.value })}
                    placeholder='Search' 
                    _placeholder={{ color: 'gray.100' }} 
                    color='white' 
                    borderRadius='5px 0 0 5px'
                    size={'sm'}
                />
                {parameter?.search && (
                    <InputRightElement
                        size="sm"
                        boxSize="32px"
                        bg='transparent'
                    >
                    <IconButton
                        size="sm"
                        aria-label="Clear input"
                        icon={<CloseButton size="sm" />}
                        onClick={() => setParameter({ ...parameter, search: '' })}
                        variant="ghost"
                    />
                    </InputRightElement>
                )}
            </InputGroup>
            <Button borderRadius='0 5px 5px 0' size={'sm'}
                onClick={(e) => handleSubmit(e)}
            >
                <SearchOutlined/>
            </Button>
        </Box>
    )
}

export default Search