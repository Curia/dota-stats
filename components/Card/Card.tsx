import { Box } from '@chakra-ui/react';

export interface CardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <Box borderRadius="md" bg="tomato" color="white" px={4} h={8}>
      {children}
    </Box>
  );
};
