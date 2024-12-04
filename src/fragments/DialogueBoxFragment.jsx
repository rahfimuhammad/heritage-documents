import React from 'react'
import { IsSmallScreen } from '../libs/detectScreen'
import {
        AlertDialog,
        AlertDialogBody,
        AlertDialogFooter,
        AlertDialogHeader,
        AlertDialogContent,
        AlertDialogOverlay,
        Button,
    } from '@chakra-ui/react'

const DialogueBox = ({ isOpen, onClose, cancelRef, onSubmit, message, title }) => {

    const isSmall = IsSmallScreen()

    return (
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                <AlertDialogContent
                    w={isSmall ? '95%' : '90%'}
                >
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                        {title}
                    </AlertDialogHeader>

                    <AlertDialogBody>
                        {message}
                    </AlertDialogBody>

                    <AlertDialogFooter>
                    <Button 
                        ref={cancelRef} 
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                    <Button 
                        colorScheme='red' 
                        onClick={onSubmit} ml={3}
                    >
                        Continue
                    </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
    )
}

export default DialogueBox