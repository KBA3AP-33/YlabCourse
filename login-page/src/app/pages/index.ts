export enum Role {
    Admin = 'Admin',
    Guest = 'Guest',
}

export const authPages = {
    '/admin': [Role.Admin],
    '/guest': [Role.Guest],
}
