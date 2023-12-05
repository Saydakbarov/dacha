import {createSelector} from 'reselect';

const map = (state) => state.map.viewport;

export const latitudeMine = createSelector([map], (state) => state.latitude);
export const longitudeMine = createSelector([map], (state) => state.longitude);