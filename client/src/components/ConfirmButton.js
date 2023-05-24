import React from "react";import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'

// if parentheses don't work, try curly braces and a return instead
const ConfirmButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return (
    <>
      <Button onClick={onOpen}>Bekræft</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            Vi har sendt en bekræftelse til
              
          </ModalBody>
  
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Luk
            </Button>
            <Button variant='ghost'>Send igen</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default ConfirmButton;