export interface LoginResponse {
    token: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    roles: string[];
    expiresAt: string;
}