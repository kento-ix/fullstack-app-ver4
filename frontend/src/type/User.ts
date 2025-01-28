export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

export interface UserRef {
    uid: string;
    user: User;
}