import {createSelector} from 'reselect';

const region = state => state.region

export const getRegionByLangDataMine = createSelector(
    [region],
    state => state.getRegionByLangData
);

export const beginAddRegionMine = createSelector(
    [region],
    state => state.beginAddRegion
);

export const regionsDataMine = createSelector(
    [region],
    state => state.regionsData
);


export const beginGetRegions = createSelector(
    [region],
    state => state.beginGetRegion
);

export const beginDeleteRegionMine = createSelector(
    [region],
    state => state.beginDeleteRegion
);

export const beginEditRegionMine = createSelector(
    [region],
    state => state.beginEditRegion
);