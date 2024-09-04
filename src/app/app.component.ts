import { Component } from '@angular/core';
import { AuthService } from 'src/Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title="App component";
  
  local:any;
  constructor(public authservice:AuthService)
  {
  }

  ngOnInit(): void {
    this.local=localStorage;
  }

  logout():void{
    this.authservice.Logout();
  }
 }
