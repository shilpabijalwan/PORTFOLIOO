import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Box,
} from "@chakra-ui/react";
import { useRef } from "react";

export function DrawerColor() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
        position={"fixed"}
        right={2}>
        Open
      </Button>

      <Drawer onClose={onClose} isOpen={isOpen} size={"md"} >
        <DrawerContent
          height="130px"
        
          w={"30px"}
          bgColor={"pink.300"}
          color={"white"}
         >
          <DrawerCloseButton />
          <DrawerHeader>drawer contents</DrawerHeader>
        </DrawerContent>
      </Drawer>
    </>
  );
}
