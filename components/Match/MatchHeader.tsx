import { Box, Center, Heading, Image } from '@chakra-ui/react';

import { Player_player } from '../../types/Player';

interface PlayersHeaderProps {
  didRadiantWin: boolean;
}

const backgroundBlur = {
  position: 'absolute',
  objectFit: 'cover',
  zIndex: '-1',
  filter: 'blur(184px)',
  height: 'calc(100% + 368px)',
  width: 'calc(100% + 368px)',
  opacity: '0.8'
};

const MatchHeader: React.FC<PlayersHeaderProps> = ({ didRadiantWin }) => {
  //const avatarPath: string = process.env.NEXT_PUBLIC_AVATAR_PATH + steamAccount.avatar;
  const blurPath = didRadiantWin
    ? 'https://cdn.stratz.com/images/dota2/heroes/viper_vert.png'
    : 'https://cdn.stratz.com/images/dota2/heroes/axe_vert.png';

  return (
    <>
      <Center
        sx={{
          _before: {
            background: 'rgb(23, 23, 23)',
            content: '""',
            position: 'absolute',
            inset: '0px',
            zIndex: ' -1'
          }
        }}
        position="relative"
        overflow="hidden">
        <Image src={blurPath} sx={backgroundBlur} />
        <Box py="4">
          <Heading as="h2">{didRadiantWin ? 'Radiant Victory' : 'Dire Victory'}</Heading>
        </Box>
      </Center>
    </>
  );
};

export default MatchHeader;
