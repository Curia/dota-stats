/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Match
// ====================================================

export interface Match_match_players {
  __typename: "MatchPlayerType";
  heroId: stratzShort | null;
  isRadiant: boolean | null;
}

export interface Match_match {
  __typename: "MatchType";
  didRadiantWin: boolean | null;
  actualRank: stratzShort | null;
  durationSeconds: number | null;
  endDateTime: stratzLong | null;
  players: (Match_match_players | null)[] | null;
}

export interface Match {
  /**
   * Find match details by the match id. id is a required input field.
   */
  match: Match_match | null;
}

export interface MatchVariables {
  matchId: stratzLong;
}
