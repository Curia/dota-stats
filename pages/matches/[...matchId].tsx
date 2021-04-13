import { gql } from '@apollo/client';
import Wrapper from '@components/Layout/Wrapper';
import { MatchHeader } from '@components/Match';
import { GetServerSideProps } from 'next';

import client from '../../apolloConfig';
import { Match_match } from '../../types/Match';

interface MatchProps {
  matchId: string;
  match: Match_match;
  path: string;
}

const MatchDetails: React.FC<MatchProps> = ({ matchId, match, path }) => {
  const { didRadiantWin, players } = match;

  return (
    <>
      <MatchHeader didRadiantWin={didRadiantWin} players={players} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const matchId = context.params.matchId[0];
  const path = context.resolvedUrl;

  const { data } = await client.query({
    query: gql`
      query Match($matchId: Long!) {
        match(id: $matchId) {
          didRadiantWin
          actualRank
          durationSeconds
          endDateTime
          players {
            heroId
            isRadiant
          }
        }
      }
    `,
    variables: { matchId: matchId }
  });

  return {
    props: { matchId, match: data.match, path } // will be passed to the page component as props
  };
};

export default MatchDetails;
