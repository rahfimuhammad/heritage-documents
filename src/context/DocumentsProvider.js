import React, { useContext, useState } from "react";
import { useToast } from '@chakra-ui/react'
import axios from "axios";

const DocumentsContext = React.createContext()

export const useDocuments = () => {
    return useContext(DocumentsContext)
}

export const DocumentsProvider = ({children}) => {

    const [filter, setFilter] = useState({
        search: '',
        type: '',
        tag: '',
        year: '',
        number: '',
    })
    const toast = useToast()
    const [loading, setLoading] = useState(false)
    const [documents, setDocuments] = useState([])
    const apiUrl = process.env.REACT_APP_API_URL

    const getDocuments = async (query) => {
        try {
            setLoading(true)
            if(filter || filter.search || filter.type || filter.tag || filter.year || filter.number) {
                const response = await axios.get(
                    // `http://localhost:2000/document?page=${1}&search=${query.search}&type=${query.type}&year=${query.year}&number=${query.number}`
                    `${apiUrl}/document?page=${query.page}&search=${query.search}&type=${query.type}&tag=${query.tag}&year=${query.year}&number=${query.number}&sortBy=${query.sortBy}`
                )
                setDocuments(response?.data)
            } else {
                const response = await axios.get(
                    `${apiUrl}/document?page=${query.page}`
                )
                setDocuments(response?.data)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const createDocument = async (data, attachmentId) => {

        try {
    
            const response = await axios.post(
                `${apiUrl}/document`, {
                ...data
            });
    
            const documentId = response.data?.data?.id
    
            try {
                if(attachmentId && documentId) {
                    const responseAttachement = await axios.post(
                        `${apiUrl}/attachment`, 
                    {
                        documentId,
                        attachmentId
                    });
                        return responseAttachement.data;
                }
            } catch (error) {
                console.error(error);
            }
            toast({
                position: 'top',
                title: response?.data?.message,
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
    
        } catch (error) {
            toast({
                position: 'top',
                title: error?.response?.data?.message,
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        } finally {
            console.log("Berhasil")
        }
    };

    const editDocument = async (data, attachmentId) => {
        try {
            const response = await axios.patch(
                `${apiUrl}/document/${data.id}`, 
            {
                ...data,
                attachmentId: attachmentId
            });

            toast({
                position: 'top',
                title: response?.data?.message,
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
        } catch (error) {
            toast({
                position: 'top',
                title: error?.response?.data?.message,
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        } finally {
            console.log("Berhasil")
        }
    };       
    
    const deleteDocument = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:2000/document/${id}`);
            toast({
                position: 'top',
                title: response?.data?.message,
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
        } catch (error) {
            toast({
                position: 'top',
                title: error?.response?.data?.message,
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        } finally {
            console.log("Berhasil")
        }
    };

    const value = {
        setFilter,
        filter,
        loading,
        documents,
        setDocuments,
        getDocuments,
        createDocument,
        editDocument,
        deleteDocument
    }

return (
        <DocumentsContext.Provider value={value}>
            {children}
        </DocumentsContext.Provider>
    )
}

