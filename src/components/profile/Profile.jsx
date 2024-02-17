"use client";
import React, { useEffect, useRef, useState } from "react";
import { Modal, ModalContent, Divider, Input, Avatar, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Tabss from "../tabs/Tabss";

export default function Profile({ fun, dark }) {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [backdrop, setBackdrop] = React.useState('opaque')






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
                            <ModalHeader className={`${dark ? 'text-white' : ""} flex flex-col gap-1`}>Phonebook</ModalHeader>

                            <ModalBody className={`${dark ? "text-white" : ''} items-center`}>
                                <div className="flex items-center justify-start w-full gap-8">
                                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" size="lg" />
                                    <p className="font-bold">Mittal kumar gupta</p>
                                </div>
                                <Divider />
                                <p className="font-semibold w-full">About us</p>
                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sit architecto rerum cum suscipit, dicta, error porro eos ratione quas quia. Blanditiis nihil optio repellat architecto sunt omnis voluptatum reiciendis.</p>

                                <Divider />
                                <p className="font-semibold w-full">Role</p>
                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sit architecto rerum cum suscipit, dicta, error porro eos ratione quas quia. Blanditiis nihil optio repellat architecto sunt omnis voluptatum reiciendis.</p>
                            </ModalBody>
                            <ModalFooter className=" justify-center">

                                <Button color="primary" onPress={()=>{fun(false);onClose()}}>
                                    Connect
                                </Button>
                            </ModalFooter>

                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
