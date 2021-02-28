/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Player
// ====================================================

export interface Player_player_steamAccount {
  __typename: "SteamAccountType";
  avatar: string | null;
  name: string | null;
  profileUri: string;
}

export interface Player_player {
  __typename: "PlayerType";
  steamAccount: Player_player_steamAccount | null;
}

export interface Player {
  /**
   * Find player details by steam account id. id is a required input field.
   */
  player: Player_player | null;
}

export interface PlayerVariables {
  steamId: stratzLong;
}
