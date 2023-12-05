import {createSelector} from 'reselect';

const district = state => state.district;

export const getDistrictByLangDataMine = createSelector(
    [district],
    state => state.getDistrictByLangData
);

export const getDistrictByIdDataMine = createSelector(
    [district],
    state => state.getDistrictByIdData
);

export const districtDataMine = createSelector(
    [district],
    state => state.districtData
);

export const beginGetDistrictMine = createSelector(
    [district],
    state => state.beginGetDistrict
);

export const beginDeleteDistrictMine = createSelector(
    [district],
    state => state.beginDeleteDistrict
);

export const beginEditDistrictMine = createSelector(
    [district],
    state => state.beginEditDistrict
);


export const getDistrictDataByIdMine = createSelector(
    [district],
    state => state.getDistrictDataById
);