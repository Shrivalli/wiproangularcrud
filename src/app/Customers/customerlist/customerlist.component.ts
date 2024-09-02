import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/Models/Customer';
import { CustService } from 'src/Services/cust.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  customers:Customer[]=[];
  
  flag=true;
    constructor(private custservice:CustService)
    {
     
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
