import React from 'react'
import { Box, FormControl, FormLabel, Input, Textarea, Select as ChakraSelect } from '@chakra-ui/react'
import Select from 'react-select';

const Form = ({ 
                document, 
                handleChange, 
                handleSubmit, 
                onAttachmentChange, 
                options, 
                selectedAttachment, 
                placeholder 
            }) => {

    const test = () => {
        return options?.map((option) => ({
            value: option?.id,
            label: option?.title
        }))
    }

    return (
        <> 
            <form 
                    action="submit" 
                    style={{ 
                            width: '100%', 
                            display: 'flex', 
                            flexDirection: 'column', 
                            gap: '10px'
                    }}
                    onSubmit={handleSubmit}
                    onClick={() => console.log(selectedAttachment)}

            >
                <FormControl>
                    <FormLabel>Judul</FormLabel>
                    <Input 
                        name='title' 
                        onChange={handleChange} 
                        value={document?.title}
                        placeholder={placeholder?.title}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Tentang</FormLabel>
                    <Textarea 
                        name='about' 
                        onChange={handleChange} 
                        value={document?.about}
                        placeholder={placeholder?.about}
                    />
                </FormControl>
                <Box
                    display='flex'
                    gap='10px'
                >
                    <FormControl>
                        <FormLabel>Jenis Dokumen</FormLabel>
                        <Input 
                            type='text' 
                            name='type' 
                            onChange={handleChange} 
                                value={document?.type}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Tahun</FormLabel>
                        <Input 
                            name='year' 
                            onChange={handleChange} 
                            value={document?.year}
                        />
                    </FormControl>
                </Box>
                <Box
                    display='flex'
                    gap='10px'
                >
                    <FormControl>
                        <FormLabel>Nomor</FormLabel>
                        <Input 
                            name='number' 
                            onChange={handleChange} 
                            value={document?.number}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Tanggal Dibuat</FormLabel>
                            <Input 
                                type='date' 
                                name='createdAt'
                                onChange={handleChange} 
                                value={document?.createdAt ? new Date(document.createdAt).toISOString().slice(0, 10) : ""}
                            />
                    </FormControl>
                </Box>
                    <FormControl>
                        <FormLabel>File</FormLabel>
                        <Input 
                            name='file'
                            onChange={handleChange} 
                            value={document?.file}
                        />
                    </FormControl>
                <Box
                    display='flex'
                    gap='10px'
                >
                    <FormControl>
                        <FormLabel>Status</FormLabel>
                        <ChakraSelect 
                            name='status' 
                            onChange={handleChange} 
                            value={document?.status}
                        >
                            <option key="default" value="-">-</option>
                            <option value="Berlaku">Berlaku</option>
                            <option value="Tidak Berlaku">Tidak Berlaku</option>
                        </ChakraSelect>
                    </FormControl>
                </Box>
                <FormControl>
                    <FormLabel>Dokumen Digantikan</FormLabel>
                    <Select
                        name='attachmentId'
                        options={test()}
                        value={test().find(option => option.value === selectedAttachment.attachmentId) || null}
                        onChange={(option) => onAttachmentChange(option)}
                        placeholder="Select a doc"
                        isClearable
                        isSearchable
                        styles={{
                            control: (base) => ({
                                ...base,
                                borderColor: 'gray.400',
                                borderRadius: '8px'
                                }),
                            }}
                    />
                </FormControl>
            </form>
        </>
    )
}

export default Form