import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
} from '@chakra-ui/react'
import { IsSmallScreen } from '../libs/detectScreen'

const ModalFragment = ({ isOpen, onClose, action, children, title, actionButton }) => {

    const isSmall = IsSmallScreen()

    return (
        <Modal
            isOpen={isOpen} 
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent
                w={isSmall ? '95%' : '90%'}
            >
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {children}
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='red' mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button colorScheme='gray' onClick={action}>
                        {actionButton}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ModalFragment