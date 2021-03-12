import { Center, Flex, Heading, Image } from '@chakra-ui/react';
import Wrapper from '@components/Layout/Wrapper';
import LinkButton from '@components/LinkButton';
import { SiSteam } from 'react-icons/si';

import { Player_player } from '../../types/Player';

interface PlayersHeaderProps {
  steamId: string;
  player: Player_player;
}

const PlayersHeader: React.FC<PlayersHeaderProps> = ({ steamId, player }) => {
  const { steamAccount } = player;
  const avatarPath: string = process.env.NEXT_PUBLIC_AVATAR_PATH + steamAccount.avatar;

  return (
    <>
      <Flex direction="column">
        <Flex justifyContent="flex-end">
          <LinkButton href={steamAccount.profileUri} text="Steam profile" icon={SiSteam} />
        </Flex>
        <Center my="4">
          <Image
            borderRadius="md"
            src={avatarPath}
            alt={`${steamAccount.name}'s avatar`}
            boxSize="100px"
          />
        </Center>
        <Center>
          <Heading as="h2" size="xl">
            {steamAccount.name}
          </Heading>
        </Center>
      </Flex>
    </>
  );
};

export default PlayersHeader;
