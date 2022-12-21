
export interface IReduxState {
    Auth: IAuthReducer;
    Toast: IToastReducer;
}

export interface IAuthReducer {
    user: any;
    loading: boolean;
    token: string;
}

export interface IToastReducer {
    show: boolean;
    severity: string | any;
    message: string;
}