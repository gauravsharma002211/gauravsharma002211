import { TOAST_HIDE, TOAST_SHOW } from '../Actions/ToastAction';

const ToastInintialState = {
  show: false,
  message: '',
  severity: '',
};

export const ToastReducer = (state = ToastInintialState, action: any) => {
  const { payload } = action;
  switch (action.type) {
    case TOAST_SHOW:
      return {
        show: payload.show,
        message: payload.message,
        severity: payload.severity,
      };

    case TOAST_HIDE:
      return { ...ToastInintialState };

    default:
      return state;
  }
};
