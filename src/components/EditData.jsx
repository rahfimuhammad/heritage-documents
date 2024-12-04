import React, { useState, useEffect } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import EditFilled from '@ant-design/icons/EditFilled';
import { Button } from '@chakra-ui/react';
import { GetAttachments } from '../libs/getAttachments';
import { useDocuments } from '../context/DocumentsProvider';
import DrawerFragment from '../fragments/DrawerFragment';
import Form from './Form';

const EditData = ({ data }) => {
    const [document, setDocument] = useState({
        id: data?.id,
        title: data?.title,
        about: data?.about,
        type: data?.type,
        year: data?.year,
        number: data?.number,
        createdAt: data?.createdAt,
        file: data?.file,
        status: data?.status,
    });

    const [selectedAttachment, setSelectedAttachment] = useState({
        attachmentId: data?.linked[0]?.attachmentId || '',
    });

    const { isOpen, onOpen, onClose } = useDisclosure();
    const attachments = GetAttachments();
    const { editDocument } = useDocuments();

    const handleChange = (e) => {
        setDocument({
            ...document,
            [e.target.name]: e.target.value,
        });
    };

    const onAttachmentChange = (selectedOption) => {
        setSelectedAttachment({
            attachmentId: selectedOption?.value || '',
        });
    };

    const handleSubmit = async (e) => {
        await editDocument(document, selectedAttachment?.attachmentId);
        console.log(selectedAttachment)
        onClose();
    };

    // Update selectedAttachment based on `data` prop if `data.attachmentId` changes
    useEffect(() => {
        if (data?.attachmentId) {
            setSelectedAttachment({
                attachmentId: data.attachmentId,
            });
        }
    }, [data]);

    return (
        <>
            <Button 
                onClick={onOpen} 
                colorScheme='gray'
                size='sm'
            >
                <EditFilled />
            </Button>
            <DrawerFragment 
                isOpen={isOpen} 
                onClose={onClose} 
                action={handleSubmit}
                title={'Edit Data'}
                actionButton={'Save Changes'}
            >
                <Form
                    document={document}
                    handleChange={handleChange}
                    selectedAttachment={selectedAttachment}
                    onAttachmentChange={onAttachmentChange}
                    options={attachments}
                    onSubmit={handleSubmit}
                    setSelectedAttachment={setSelectedAttachment}
                    placeholder={data}
                />
            </DrawerFragment>
        </>
    );
};

export default EditData;
