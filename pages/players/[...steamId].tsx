import { gql } from '@apollo/client';
import { Select } from '@chakra-ui/react';
import Wrapper from '@components/Layout/Wrapper';
import { PlayersHeader } from '@components/Players';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';

import client from '../../apolloConfig';
import { Player_player } from '../../types/Player';

interface PlayerProps {
  steamId: string;
  player: Player_player;
  path: string;
}

const PlayerProfileRoutes = ({ routes }) => {
  const [appRoutes, setAppRoutes] = useState(routes);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const newState = [...appRoutes];
    newState.map((item) => {
      item.isActive = false;
    });
    newState[value].isActive = true;

    setAppRoutes([...newState]);
    router.push(appRoutes[value].path);
  };
  return (
    <div>
      <Select
        placeholder="Select option"
        onChange={handleChange}
        defaultValue={appRoutes.findIndex((item) => item.isActive)}>
        {appRoutes.map((route, index) => (
          <option value={index} key={index}>
            {route.name}
          </option>
        ))}
      </Select>
    </div>
  );
};

const PlayerProfile: React.FC<PlayerProps> = ({ steamId, player, path }) => {
  const routes = [
    {
      path: `/players/${steamId}`,
      name: 'Overview',
      isActive: false
    },
    {
      path: `/players/${steamId}/matches`,
      name: 'Matches',
      isActive: false
    },
    {
      path: `/players/${steamId}/heroes`,
      name: 'Heroes',
      isActive: false
    }
  ];
  routes.map((route) => {
    if (route.path === path) {
      route.isActive = true;
    }
  });

  return (
    <Wrapper>
      <PlayersHeader player={player} steamId={steamId} />
      <PlayerProfileRoutes routes={routes} />
    </Wrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const steamId = context.params.steamId[0];
  const path = context.resolvedUrl;

  const { data } = await client.query({
    query: gql`
      query Player($steamId: Long!) {
        player(steamAccountId: $steamId) {
          steamAccount {
            avatar
            name
            profileUri
          }
        }
      }
    `,
    variables: { steamId: steamId }
  });

  return {
    props: { steamId, player: data.player, path } // will be passed to the page component as props
  };
};

export default PlayerProfile;
