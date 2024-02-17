"use client";
import React, { useEffect, useRef, useState } from "react";
import { Modal, ModalContent, Input, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";

export default function Login({ fun, dark }) {
    const [valied, setvalied] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [backdrop, setBackdrop] = React.useState('opaque')

    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const input1 = useRef();
    const input2 = useRef();



    const handleOpen = (backdrop) => {
        setBackdrop(backdrop)
        onOpen();
    }

    useEffect(() => {
        handleOpen("blur")
    }, [])



    return (
        <>
            <Modal className={`${dark ? 'dark' : ""}`} backdrop={backdrop} isOpen={isOpen} onClose={() => { onClose(); fun(false) }}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className={`${dark ? 'text-white' : ""} flex flex-col gap-1`}>User login</ModalHeader>
                            <ModalBody className=" items-center">
                                <Input isInvalid={valied ? (input1.current.value !== '' ? false : true) : valied} errorMessage={`${valied ? (input1.current.value !== '' ? "" : 'Enter correct email') : ''}`} ref={input1} className={`${dark ? 'text-white' : ""} max-w-xs`} type="email" variant='bordered' label="Email" placeholder="Enter your email" />
                                <Input
                                    isInvalid={valied ? (input2.current.value !== '' ? false : true) : valied} errorMessage={`${valied ? (input2.current.value !== '' ? "" : 'Enter correct Password must be 6 digit') : ''}`}
                                    ref={input2}
                                    label="Password"
                                    variant="bordered"
                                    placeholder="Enter your password"
                                    endContent={
                                        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                            {isVisible ? (
                                                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                            ) : (
                                                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                            )}
                                        </button>
                                    }
                                    type={isVisible ? "text" : "password"}
                                    className={`${dark ? 'text-white' : ""} max-w-xs`}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button onPress={() => { fun(false); onClose() }} color="danger" variant="light" >
                                    Close
                                </Button>
                                <Button onPress={() => {
                                    if (input1.current.value !== '' && input2.current.value !== '') {
                                        fun(false); onClose();

                                    }
                                    else {
                                        setvalied(true);
                                    }

                                }} color="primary" >
                                    Login
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
