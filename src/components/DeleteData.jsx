import { Box, Button, useDisclosure } from '@chakra-ui/react'
import { useDocuments } from '../context/DocumentsProvider'
import DeleteFilled from '@ant-design/icons/DeleteFilled'
import React from 'react'
import DialogueBox from '../fragments/DialogueBoxFragment'

const DeleteData = ({ data, message }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { deleteDocument } = useDocuments();
    const cancelRef = React.useRef();

    const deleteDocumentHandler = async (id) => {
        try {
            await deleteDocument(id);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Box>
            <Button
                colorScheme='red'
                size='sm'
                onClick={onOpen}
            >
                <DeleteFilled />
            </Button>
            <DialogueBox 
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
                cancelRef={cancelRef}
                onSubmit={() => deleteDocumentHandler(data?.id)}
                title={'Delete Document'}
                message={message}
            />
        </Box>
    )
}

export default DeleteData