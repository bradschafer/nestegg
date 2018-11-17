export class User {
    id: number;
    username: string;
    password: string;
    passwordConfirm?: string;
    firstName?: string;
    lastName?: string;
    fullName?: string;
    displayName?: string;
    acceptedTerms?: boolean;
    acceptedTermsAt?: string;
}
