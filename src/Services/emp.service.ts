import { Injectable } from '@angular/core';
import { Department } from 'src/Models/Department';
import { Employee } from 'src/Models/Emp';
import { Skill } from 'src/Models/Skills';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  constructor() { }

  skills:Skill[]=[{SkillId:201,SkillName:"Java",SkillDesc:"Beginner"},
    {SkillId:202,SkillName:".NET",SkillDesc:"Intermediate"},{SkillId:203,SkillName:".SQL",SkillDesc:"Intermediate"}]
  Dept:Department={did:0,dname:"",city:""}
  depts:Department[]=[{"did":1,"dname":"admin","city":"Chennai"},{"did":2,"dname":"IT","city":"Bangalore"}];
  emp:Employee={eid:0,ename:"",salary:0,doj:new Date(),
    Deptid:{did:0,dname:"",city:""},
  Skills:[]};
  // emps: { eid: number; ename: string; }[]=[];
  emps:Employee[]=[];

  getAllEmps():any{
     return this.emps;
  }

  PopulateEmps():any{
    // this.emp={eid:101,ename:"Ram",salary:23000,doj:new Date("3/2/2020")};
    // this.emps.push(this.emp);

     this.emps=[{"eid":101,"ename":"Ram",salary:24000,doj:new Date("3/4/2020"),
      Deptid:{did:1,dname:"Admin",city:"Chennai"},
    Skills:[{SkillId:201,SkillName:"Java",SkillDesc:"Beginner"},
      {SkillId:202,SkillName:".NET",SkillDesc:"Intermediate"}
    ]},
    {"eid":102,"ename":"Ramesh",salary:56000,doj:new Date("3/7/2021"),
      Deptid:{did:2,dname:"IT",city:"Pune"},
    Skills:[{SkillId:201,SkillName:"Java",SkillDesc:"Beginner"},
      {SkillId:203,SkillName:".SQL",SkillDesc:"Intermediate"}]
    }];
  
  }

  AddEmp(emp:Employee)
  {
    //this.PopulateEmps();
    console.log("Count:"+this.emps.length);
    this.emps.push(emp);
    console.log("Count:"+this.emps.length);
    console.log("Record Added successfully");
  }
}
