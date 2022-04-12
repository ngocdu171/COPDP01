import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IWrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: IWrapperProps) => {
  return (
    <Box maxW="400px" w="100%" mt={10} mx="auto" padding='30px'>
      {children}
    </Box>
  );
};

export default Wrapper;
