import { Reducer } from 'redux';
import { isType } from 'utils/redux';
import { IAppState } from 'renderer/reducers';
import { ILobbyData, SessionKey } from 'renderer/platform/types';
import { setSessionData } from 'renderer/lobby/middleware/session';

export type ISessionState = ILobbyData;

const initialState: ISessionState = {};

export const session: Reducer<ISessionState> = (
  state: ISessionState = initialState,
  action: any
) => {
  if (isType(action, setSessionData)) {
    return action.payload;
  }

  return state;
};

export const getSessionName = (state: IAppState): string | undefined => {
  return state.session[SessionKey.Name];
};
