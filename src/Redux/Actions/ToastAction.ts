// export const TOAST_INIT: any = 'TOAST_INIT';
export const TOAST_SHOW = 'TOAST_SHOW';
export const TOAST_HIDE = 'TOAST_HIDE';

export interface IToastProps {
  show: boolean,
  message: string,
  severity: string | any
}

export const ToastAction = (data: IToastProps) => {
  return { type: TOAST_SHOW, payload: data };
};
