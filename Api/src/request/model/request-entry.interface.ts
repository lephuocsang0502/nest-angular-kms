import { User } from "src/user/models/user.interface";

export interface RequestEntry{
    id?:number;
    spokeCo:string;
    slug:string;
    link: string;
    status:number;
    description: string;
    createdAt:Date;
    updatedAt:Date;
    publishedDate:Date;
    isPublished:boolean;
    author:User
}