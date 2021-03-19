import { Box, Center, Flex, Heading, Image } from '@chakra-ui/react';
import heroesConst from '@constants/heroes.json';
import { filterProps } from 'recharts/types/util/types';

import { Match_match_players } from '../../types/Match';

interface PlayersHeaderProps {
  didRadiantWin: boolean;
  players: Array<Match_match_players>;
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

const MatchHeader: React.FC<PlayersHeaderProps> = ({ didRadiantWin, players }) => {
  //const avatarPath: string = process.env.NEXT_PUBLIC_AVATAR_PATH + steamAccount.avatar;
  // https://steamcdn-a.akamaihd.net/apps/dota2/images/heroes/antimage_icon.png
  const blurPath = didRadiantWin
    ? 'https://cdn.stratz.com/images/dota2/heroes/viper_vert.png'
    : 'https://cdn.stratz.com/images/dota2/heroes/axe_vert.png';

  const direHeroes = players.filter((player) => !player.isRadiant);
  const radiantHeroes = players.filter((player) => player.isRadiant);

  return (
    <>
      <Center
        sx={{
          _before: {
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
          <Box p={4}>
            <Flex>
              {radiantHeroes.map((player, i) => {
                const { heroId } = player;
                const iconPath = `https://steamcdn-a.akamaihd.net/${heroesConst[heroId].icon}`;
                return <Image mx={2} key={i} src={iconPath} />;
              })}
            </Flex>
            <Flex>
              {direHeroes.map((player, i) => {
                const { heroId } = player;
                const iconPath = `https://steamcdn-a.akamaihd.net/${heroesConst[heroId].icon}`;
                return <Image mx={2} key={i} src={iconPath} />;
              })}
            </Flex>
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default MatchHeader;
