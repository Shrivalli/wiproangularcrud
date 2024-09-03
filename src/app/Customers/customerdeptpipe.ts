import {Pipe,PipeTransform} from '@angular/core';
import { Customer } from 'src/Models/Customer';

@Pipe({
  name:'SalPipe'
})
export class SalPipe implements PipeTransform{
  transform(customers:Customer[],salary:number)
  {
    if(!customers|| !salary)
    {
        return customers;
    }
    return customers.filter((x=>x.sal<salary));
  }
}

@Pipe({
    name:'DeptPipe'
  })
  export class DeptPipe implements PipeTransform{
    transform(customers:Customer[],did:number)
    {
        if(!customers|| !did)
        {
            return customers;
        }

      return customers.filter((x=>x.deptid==did));
      
      
    }
  }