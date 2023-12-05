import {createSelector} from "reselect";

const cons = state => state.cons;

export const getConDataMine = createSelector(
    [cons],
    state => state.getConData
);

export const getConBeginMine = createSelector(
    [cons], 
    state => state.getConBegin
)