import React, { useContext } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Box,
    Button,
    Image,
    Text
} from '@chakra-ui/react'
import { CounterContext } from '../Context/Context'

function Modals({ isOpen, onClose }) {

    const {countRecieve} = useContext(CounterContext)
    const multiple = countRecieve * 125
    return (
        <Box>

            <Modal isOpen={isOpen}
                onClose={onClose}
                motionPreset='slideInBottom'
            >
                <ModalOverlay />
                <ModalContent
                    position={['absolute', 'absolute', 'absolute']}
                    right={['auto', 'auto', '170px']}
                >
                    <ModalHeader p='20px'>
                        Cart
                    </ModalHeader>
                    <Box borderBottom='1px solid rgb(230, 225, 225)'
                        width='100%'
                        mb='20px'
                    ></Box>
                    <ModalCloseButton />
                    <ModalBody>
                        {countRecieve ? <Box display='flex'
                            alignItems='center'
                            gap='25px'
                        >
                            <Image src='./images/p2.jpg'
                                alt='product'
                                boxSize='50px'
                                borderRadius='md'
                            />
                            <Text fontWeight='700'
                                color='#000'
                            >
                              Fall Limited Edition Sneakers<br />
                                <span className='disc'>$125.00 <span className='multiple'>x </span>{countRecieve}</span>
                                ${multiple}
                            </Text>
                        </Box> : <Text textAlign='center'>Your cart is empty.</Text>}
                    </ModalBody>

                    <ModalFooter>
                        {countRecieve ? <Button backgroundColor='orange.500'
                            mr={3} onClick={onClose}
                            color='#fff'
                            width='100%'
                            _hover={{}}
                        >
                            Checkout
                        </Button> : null}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box >
    )
}

export default Modals