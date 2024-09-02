import { Injectable } from '@angular/core';
import { Customer } from 'src/Models/Customer';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, throwError } from 'rxjs';
import { Department } from 'src/Models/Department';

@Injectable({
  providedIn: 'root'
})
export class CustService {
cust:Customer;
customers:Customer[];

constructor(private http:HttpClient) { }
c:Customer;
req:string="https://localhost:7213/api/Customers";
depreq:string="https://localhost:7213/api/Departments";
  
//Method to get the list of all players from the API.
getAllUsers():Observable<Customer[]>
{
  return this.http.get<Customer[]>(this.req);
}

getallDepts():Observable<Department[]>
{
  return this.http.get<Department[]>(this.depreq);
}

getcustomerbyid(id:number):any{
  console.log("getcustbyid method invoked");
//   this.getAllUsers().subscribe(data=>{
// this.c=data.find(x=>x.cid==id);
//   });
return this.http.get<Customer>(this.req+"/"+id);

  }

createUser(customer:Customer):Observable<Customer>
{
  console.log("CreateUser method called");
  console.log(customer);
  return this.http.post<Customer>(this.req,customer,{
    headers:new HttpHeaders({
      'Content-Type':'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Method':'*'
      
    })
  });
}

//Method to update an existing player.
updateUser(id:number,customer:Customer):Observable<any>
{
  
  return this.http.put<any>(this.req+"/"+id,customer,{
    headers:new HttpHeaders({
      'Content-Type':'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Method':'*'
    })
  });
}


//Method to delete an existing player.
deleteUser(id:number):Observable<any>
{
  return this.http.delete<any>(this.req+"/"+id,{
    headers:new HttpHeaders({
      'Content-Type':'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Method':'*'
    })
  });
}

//Method to test error handling.
register():Observable<any>
{
  //Giving incorrect URL.
  return this.http.get<any>('https://localhost:7213/api/Customers')
         .pipe(catchError(this.manageError));
}


//Method to handle errors.
private manageError(err_response:HttpErrorResponse)
{
  if(err_response.error instanceof ErrorEvent)
  console.error('Client Side Error:',err_response.error.message);
  else
  console.error('Server Side Error:',err_response);

  return throwError('There is a little problem while processing your request.Sorry for the inconvenience');
  
}


  ngOnInit(){}
}
