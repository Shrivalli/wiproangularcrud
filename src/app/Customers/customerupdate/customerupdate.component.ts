import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/Models/Customer';
import { Department } from 'src/Models/Department';
import { CustService } from 'src/Services/cust.service';

@Component({
  selector: 'app-customerupdate',
  templateUrl: './customerupdate.component.html',
  styleUrls: ['./customerupdate.component.css']
})
export class CustomerupdateComponent implements OnInit {
c:Customer;
depts:Department[];
custid:number;
msg:string;
flag:boolean;
  constructor(private custserivce:CustService,private route:ActivatedRoute) 
  { 
    this.custid=Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    
    console.log(this.custid);
     this.custserivce.getcustomerbyid(this.custid).subscribe(data=>{
      this.c=data;
     });
    this.custserivce.getallDepts().subscribe(data=>
    {
      this.depts=data;
    });
  }

  Save()
  {
   this.custserivce.updateUser(this.custid,this.c).subscribe(data=>
  {
  console.log(this.c);
  this.flag=true;
    console.log("Record Modified successfully");
    this.msg="data modified";
  });
  }

}
