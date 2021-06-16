import { User } from "./user.interface";

export  interface RequestEntry{
    id?:number;
    spokeCo:string;
    slug:string;
    link: string;
    status:number;
    description: string;
    body: string;
    headerImage:string;
    createdAt:Date;
    updatedAt:Date;
    publishedDate:Date;
    isPublished:boolean;
    author:User
}
export interface Meta {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
}

export interface Links {
    first: string;
    previous: string;
    next: string;
    last: string;
}

export interface RequestEntriesPageable {
    items: RequestEntry[];
    meta: Meta;
    links: Links;
}
