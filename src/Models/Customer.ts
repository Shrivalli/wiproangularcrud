import { Department } from "./Department";

export interface Customer
{
    cid:number;
    cname:string;
    sal:number;
    doj:Date;
    city:string;
    deptid:Department;
}