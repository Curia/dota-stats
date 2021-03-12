import { Box, Container } from '@chakra-ui/react';
interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC = ({ children }: WrapperProps) => (
  <Container maxW="8xl">
    <Box py={4}>{children}</Box>
  </Container>
);

export default Wrapper;
