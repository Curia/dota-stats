/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PlayerOverview
// ====================================================

export interface PlayerOverview_player_matches_players {
  __typename: "MatchPlayerType";
  imp: stratzShort | null;
  isRadiant: boolean | null;
}

export interface PlayerOverview_player_matches {
  __typename: "MatchType";
  id: stratzLong | null;
  didRadiantWin: boolean | null;
  players: (PlayerOverview_player_matches_players | null)[] | null;
}

export interface PlayerOverview_player {
  __typename: "PlayerType";
  steamAccountId: stratzLong | null;
  winCount: number | null;
  matchCount: number | null;
  /**
   * Find match details by steam account id. steamAccountId is a required input field.
   */
  matches: (PlayerOverview_player_matches | null)[] | null;
}

export interface PlayerOverview {
  /**
   * Find player details by steam account id. id is a required input field.
   */
  player: PlayerOverview_player | null;
}

export interface PlayerOverviewVariables {
  steamId: stratzLong;
}
