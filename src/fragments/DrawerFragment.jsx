import React from 'react'
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton
} from '@chakra-ui/react'

const DrawerFragment = ({ isOpen, onClose, action, children, title, actionButton }) => {
    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            size={'lg'}
        >
            <DrawerOverlay/>
            <DrawerContent>
                <DrawerCloseButton/>
                <DrawerHeader 
                    borderBottomWidth='1px'
                >
                    {title}
                </DrawerHeader>
                <DrawerBody>
                    {children}
                </DrawerBody>
                <DrawerFooter borderTopWidth='1px'>
                    <Button 
                        variant='outline' 
                        mr={3} 
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                    <Button 
                        colorScheme='blue'
                        onClick={() => action()}    
                    >
                        {actionButton}
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default DrawerFragment