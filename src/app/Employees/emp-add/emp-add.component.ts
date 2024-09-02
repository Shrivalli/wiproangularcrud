import { Component, OnInit } from '@angular/core';
import { Department } from 'src/Models/Department';
import {Skill} from 'src/Models/Skills';
import { Employee } from 'src/Models/Emp';
import { EmpService } from 'src/Services/emp.service';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.css']
})
export class EmpAddComponent implements OnInit {
  
e:Employee={eid:0,ename:"",salary:0,doj:new Date(""),Deptid:{did:0,dname:"",city:""},Skills:[]};
  constructor(private employeeservice:EmpService) { }
depts:Department[];
skills:Skill[];
skill:Skill;
  register()
  {
    
    console.log(this.e);
    console.log("register method called");
    this.employeeservice.AddEmp(this.e);
  }

  ngOnInit(): void {
    this.depts=this.employeeservice.depts;
    this.skills=this.employeeservice.skills;
  }

}
