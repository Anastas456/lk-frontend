import { Data } from "@angular/router";

export interface Vacancy{
    id?:number,
    name: string,
    desc:string,
    payment:string,
    created_at: Data
}