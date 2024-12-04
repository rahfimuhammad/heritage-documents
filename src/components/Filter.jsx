import React from 'react'
import ModalFragment from '../fragments/ModalFragment'
import { useNavigate } from 'react-router-dom';
import { Button, FormControl, FormLabel, Input, Select, useDisclosure, Box, InputGroup, InputRightElement, CloseButton } from '@chakra-ui/react'
import FilterFilled from '@ant-design/icons/FilterFilled';

const Filter = ({ url, parameter, setParameter, updateURL }) => {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(parameter)

        await setParameter({...parameter, page: 1})

        navigate(`/${url}?${new URLSearchParams(parameter).toString()}`);
        onClose()
    }

    return (
        <>
            <Button 
                onClick={onOpen} 
                size={'sm'}
                colorScheme={parameter?.type? 'red' : 'gray'}
            >
                <FilterFilled />
            </Button>
            <ModalFragment 
                        isOpen={isOpen} 
                        onClose={onClose} 
                        action={handleSubmit}
                        title={'Filter'}
                        actionButton={'Filter'}
            > 
                    <form action="submit">
                        <FormControl>
                            <FormLabel>Search</FormLabel>
                            <Box
                                display='flex'
                                gap='5px'
                                alignItems='center'
                            >
                                <InputGroup>
                                    <Input 
                                        type='text'
                                        name='search'
                                        value={parameter?.search}
                                        onChange={(e) => setParameter({ ...parameter, search: e.target.value })}
                                    />
                                    {parameter?.search && (
                                        <InputRightElement>
                                            <CloseButton onClick={() => setParameter({ ...parameter, search: '' })} />
                                        </InputRightElement>
                                    )}
                                </InputGroup>
                            </Box>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Document Type</FormLabel>
                            <Select 
                                value={parameter?.type} 
                                name='type' 
                                onChange={(e) => setParameter({ ...parameter, type: e.target.value })}
                            >
                                <option value="">All</option>
                                <option value="Undang-undang">Undang-undang</option>
                                <option value="Peraturan Pemerintah">Peraturan Pemerintah</option>
                                <option value="Peraturan Menteri">Peraturan Menteri</option>
                                <option value="Keputusan Menteri">Keputusan Menteri</option>
                                <option value="Peraturan Daerah">Peraturan Daerah</option>
                                <option value="Peraturan Gubernur">Peraturan Gubernur</option>
                                <option value="Keputusan Gubernur">Keputusan Gubernur</option>
                                <option value="Instruksi Gubernur">Instruksi Gubernur</option>
                                <option value="Kajian TACB">Kajian TACB</option>
                                <option value="Rekomendasi TAP">Rekomendasi TAP</option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Tag</FormLabel>
                            <Select 
                                value={parameter?.tag} 
                                name='type' 
                                onChange={(e) => setParameter({ ...parameter, tag: e.target.value })}
                            >
                                <option value="">All</option>
                                <option value="Penetapan">Penetapan</option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Number</FormLabel>
                            <InputGroup>
                                <Input 
                                    value={parameter?.number} 
                                    name='number' 
                                    onChange={(e) => setParameter({ ...parameter, number: e.target.value })} 
                                />
                                {parameter?.number && (
                                    <InputRightElement>
                                        <CloseButton 
                                            onClick={() => setParameter({ ...parameter, number: '' })} 
                                        />
                                    </InputRightElement>
                                )}
                            </InputGroup>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Year</FormLabel>
                            <InputGroup>
                                <Input 
                                    value={parameter?.year} 
                                    name='year' 
                                    onChange={(e) => setParameter({ ...parameter, year: e.target.value })}
                                />
                                {parameter?.year && (
                                    <InputRightElement>
                                        <CloseButton 
                                            onClick={() => setParameter({ ...parameter, year: '' })} 
                                        />
                                    </InputRightElement>
                                )}
                            </InputGroup>
                        </FormControl>
                    </form>
            </ModalFragment>
        </>
    )
}

export default Filter