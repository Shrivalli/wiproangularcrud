import { Department } from "./Department";
import { Skill } from "./Skills";

export interface Employee
{
    eid:number;
    ename:string;
    salary:number;
    doj:Date;
    Deptid:Department;
    Skills:Skill[]
}