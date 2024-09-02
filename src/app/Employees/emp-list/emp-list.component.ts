import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/Models/Emp';
import { EmpService } from 'src/Services/emp.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
emps:Employee[]=[];
flag=true;
  constructor(private employeeservice:EmpService){}
  
  //page load event
  ngOnInit()
  {
    this.emps=this.employeeservice.getAllEmps();
  }
  
 }

  


