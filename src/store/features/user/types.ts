export interface UserState {
	id: number;
	email: string;
	username: string;
	token?: string;
}

export interface UserSignInState {
	token: string;
	user: UserState;
}