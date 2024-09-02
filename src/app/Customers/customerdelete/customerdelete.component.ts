import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/Models/Customer';
import { CustService } from 'src/Services/cust.service';

@Component({
  selector: 'app-customerdelete',
  templateUrl: './customerdelete.component.html',
  styleUrls: ['./customerdelete.component.css']
})
export class CustomerdeleteComponent implements OnInit {
c:Customer;
d_msg;
customers:Customer[]=[];
custid:number;
  constructor(private custservice:CustService) { }

  ngOnInit(): void {
  }

  DeleteCustomer()
  {
   this.custservice.getAllUsers().subscribe(data=>{
    this.customers=data;})
    this.c=this.customers.find(x=>x.cid==this.custid);
    this.custservice.deleteUser(this.custid).subscribe(data=>{
      console.log(this.c.cname+" 's Record Deleted Successfully");
      this.d_msg="Record Deleted";
    })
  }

}
