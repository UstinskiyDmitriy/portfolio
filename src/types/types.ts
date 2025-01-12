export interface ProfileProject {
    id: number | string;
    image: string;
    title: string;
    shortDescription?: string;
    stack?: string;
    date: string;
    website?: string;
}

export interface Social {
    id:number;
    image: string;
    ref: string;
}

export interface User {
    phone: string;
    email: string;
    adress: string;
    social: Social[];
}