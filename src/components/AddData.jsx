import React, { useState } from 'react'
import Form from './Form';
import { Button, useDisclosure } from '@chakra-ui/react'
import DrawerFragment from '../fragments/DrawerFragment';
import PlusOutlined from '@ant-design/icons/PlusOutlined';
import { GetAttachments } from '../libs/getAttachments';
import { useDocuments } from '../context/DocumentsProvider';

const AddData = () => {

    const [selectedAttachment, setSelectedAttachment] = useState({
        attachmentId: '',
    });
    const [document, setDocument] = useState({
      title: '',
      about: '',
      type: '',
      year: '',
      number: '',
      createdAt: '',
      file: '',
      status: '',
  })
  const { isOpen, onOpen, onClose } = useDisclosure()
  const attachments = GetAttachments()
  const { createDocument } = useDocuments()

  const handleChange = (e) => {
      setDocument({
          ...document,
          [e.target.name]: e.target.value
      })
  }

  const onAttachmentChange = (selectedOption) => {
    console.log("Selected Option:", selectedOption); // Log selectedOption untuk melihat strukturnya
    setSelectedAttachment({
        attachmentId: selectedOption?.value || '',
    });
};


  const handleSubmit = async (e) => {
      await createDocument(document, selectedAttachment?.attachmentId)
      onClose()
      setDocument({
          title: '',
          about: '',
          type: '',
          year: '',
          number: '',
          createdAt: '',
          file: '',
          status: '',
      })
  }

  return (
    <>
      <Button onClick={onOpen} size={'sm'}>
          <PlusOutlined/>
      </Button>
      <DrawerFragment 
        isOpen={isOpen} 
        onClose={onClose} 
        action={() => handleSubmit()}
        title={'Add Data'}
        actionButton={'Add Data'}
      >
        <Form
          document={document}
          handleChange={handleChange}
          selectedAttachment={selectedAttachment}
          onAttachmentChange={onAttachmentChange}
          options={attachments}
          onSubmit={handleSubmit}
        />
    </DrawerFragment>
    </>
  )
}

export default AddData