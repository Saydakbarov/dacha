export const HIDE_DRAWER = "HIDE_DRAWER";
export const SHOW_DRAWER = "SHOW_DRAWER";

export const handleClose = () => {
  return {
    type: HIDE_DRAWER,
  };
};

export const handleShow = () => {
  return {
    type: SHOW_DRAWER,
  };
};
