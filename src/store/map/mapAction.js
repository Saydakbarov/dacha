export const CHANGE_MAP = "CHANGE_MAP";

export const changeMap = (e) => {
  return {
    type: CHANGE_MAP,
    payload: e,
  };
};
