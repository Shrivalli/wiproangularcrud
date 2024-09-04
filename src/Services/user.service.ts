import { Injectable } from '@angular/core';
import { User } from 'src/Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:User;
  users:User[];
    constructor() {
      
      this.users=[
        {username:'Ram',password:'abcd',role:'admin'},
        {username:'Seetha',password:'abcd',role:'admin'},
        {username:'Vani',password:'welcome',role:'teller'},
        {username:'Raghu',password:'welcome',role:'teller'},
      ]
     }
  
    getAllUsers():any{
      return this.users;
    }
}