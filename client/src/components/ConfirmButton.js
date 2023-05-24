import React from "react";import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

/**
 * @brief A button that toggles between active and inactive states. The active state receives the .active css tag
 * @param {props} props - The props of the component.
 * @param {function} onClick - A function that is called when the button is clicked.
 * @param {string} children - The components that is displayed inside the button, default is that it's centered
 * @param {string} margin - The margin of the button, default is 0
 * @param {string} width - The width of the button, default is 10
 * @param {string} height - The height of the button, default is 10
 */
const { isOpen, onOpen, onClose } = useDisclosure()
const BookingConfirmation = () => (
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

export default ConfirmButton;