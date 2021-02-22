import { gql } from '@apollo/client';
import Wrapper from '@components/Layout/Wrapper';
import { PlayersHeader } from '@components/Players';
import { GetServerSideProps } from 'next';

import client from '../../../apolloConfig';
import { Player_player } from '../../../types/Player';

interface PlayerProps {
  steamId: string;
  player: Player_player;
}

const PlayerProfile: React.FC<PlayerProps> = ({ steamId, player }) => {
  return (
    <Wrapper>
      <PlayersHeader player={player} steamId={steamId} />
    </Wrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const steamId = context.query.steamId;
  const path = context.params.steamId;

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
