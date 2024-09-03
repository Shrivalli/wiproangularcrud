import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/Models/Customer';
import { Department } from 'src/Models/Department';
import { CustService } from 'src/Services/cust.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  customers:Customer[]=[];
  depts:Department[]=[];
  d:Department;
  saltext:number;
  did:number;
  f:boolean
  
  flag=true;
    constructor(private custservice:CustService)
    {
     
    }
    
    fetchdeptdetails(depid:number)
    {
        this.custservice.getallDepts().subscribe(data=>{
          this.depts=data;
          this.d= this.depts.find(x=>x.did==depid);
          this.f=true;
        })
    }
    //page load event
    ngOnInit()
    {
      
     this.getcustomers(); 
    }

    getcustomers():void{
    this.custservice.getAllUsers().subscribe(data=>{
      this.customers=data;
      console.log(this.customers);
    });
  }

}
