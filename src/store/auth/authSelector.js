import {createSelector} from 'reselect';

const auth = (state) => state.auth;

export const mainAuthBeginMine = createSelector(
  [auth],
  (state) => state.mainAuthBegin
);