import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/Models/Customer';
import { Department } from 'src/Models/Department';
import { CustService } from 'src/Services/cust.service';

@Component({
  selector: 'app-customeradd',
  templateUrl: './customeradd.component.html',
  styleUrls: ['./customeradd.component.css']
})
export class CustomeraddComponent implements OnInit {
  c:Customer={cid:0,cname:"",sal:0,doj:new Date(""),city:"",deptid:{did:0,dname:"",city:""}};
  depts:Department[];
  msg="";
  constructor(private custservice:CustService) { }

  register()
  {
    console.log(this.c);
    this.custservice.createUser(this.c).subscribe(data=>{
      this.msg="Successfully created "+data.cname;
      //Logging the response received from web api.
      console.log(data);
  });
}

  ngOnInit()
  {
    //this.depts=this.custservice.getallDepts();
    this.custservice.getallDepts().subscribe(data=>{
      this.depts=data;
      console.log(this.depts);
    })
    
  }


}
