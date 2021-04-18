import { Box, useColorModeValue } from '@chakra-ui/react';

export interface CardProps {
  backgroundColor?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ backgroundColor, children }) => {
  const defaultBg = useColorModeValue('', '');
  console.log(backgroundColor);
  return (
    <Box borderRadius="md" bg={backgroundColor} color="white" px={4} h={8}>
      {children}
    </Box>
  );
};
