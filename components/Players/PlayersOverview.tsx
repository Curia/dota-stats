import { gql, useQuery } from '@apollo/client';
import { Box, Heading } from '@chakra-ui/react';
import { Skeleton, Stack } from '@chakra-ui/react';

interface PlayersOverviewProps {
  steamId: string;
}

const OverviewSkeleton = () => {
  return (
    <Stack mt="4">
      {[...Array(10)].map((x, i) => (
        <Skeleton height="40px" key={i} />
      ))}
    </Stack>
  );
};

const GET_PLAYER_OVERIVEW = gql`
  query PlayerOverview($steamId: Long!) {
    player(steamAccountId: $steamId) {
      steamAccountId
      winCount
      matchCount
      matches(request: { take: 10 }) {
        id
        didRadiantWin
        players {
          imp
          isRadiant
        }
      }
    }
  }
`;

const PlayersOverview: React.FC<PlayersOverviewProps> = ({ steamId }) => {
  const { loading, error, data } = useQuery(GET_PLAYER_OVERIVEW, { variables: { steamId } });

  if (loading) return <OverviewSkeleton />;
  if (error) return <p>Error! ${error.message}</p>;

  return (
    <Box mt="4">
      <Heading as="h2">Recent Matches</Heading>
    </Box>
  );
};

export default PlayersOverview;
