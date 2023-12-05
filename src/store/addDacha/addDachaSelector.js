import { createSelector } from "reselect";

const dacha = (state) => state.dacha;

export const beginAddDachaMine = createSelector(
  [dacha],
  (dachaMine) => dachaMine.beginAddDacha
);

export const radioListCardsMine = createSelector(
  [dacha],
  (dachaMine) => dachaMine.radioListCards
);

export const maxDayBookMine = createSelector(
  [dacha],
  (dachaMine) => dachaMine.maxDayBook
);

export const formHandleDachaMine = createSelector(
  [dacha],
  (dachaMine) => dachaMine.formValue
);

export const allDachaDataMine = createSelector(
  [dacha],
  (state) => state.allDachaData
);

export const deleteDahchaBeginMine = createSelector(
  [dacha],
  (state) => state.deleteDahchaBegin
);

export const selectedDachaMine = createSelector(
  [dacha],
  (state) => state.selectedDacha
);

export const beginGetUniqueDachaMine = createSelector(
  [dacha],
  (state) => state.beginGetUniqueDacha
);

export const uniqueDachaDataMine = createSelector(
  [dacha],
  (state) => state.uniqueDachaData
);
