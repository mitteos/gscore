export interface PatternState {
    value: RegExp;
    message: string;
}

export const emailPattern: PatternState = {
    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
    message: "Invalid Email"
}