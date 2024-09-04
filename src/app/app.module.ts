import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { EmpListComponent } from './Employees/emp-list/emp-list.component';
import { EmpAddComponent } from './Employees/emp-add/emp-add.component';
import { CustomerlistComponent } from './Customers/customerlist/customerlist.component';
import { CustomeraddComponent } from './Customers/customeradd/customeradd.component';
import { CustomerdeleteComponent } from './Customers/customerdelete/customerdelete.component';
import { CustomerupdateComponent } from './Customers/customerupdate/customerupdate.component';
import { DeptPipe, SalPipe } from './Customers/customerdeptpipe';
import { LoginComponent } from './Customers/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EmpListComponent,
    EmpAddComponent,
    CustomerlistComponent,
    CustomeraddComponent,
    CustomerdeleteComponent,
    CustomerupdateComponent,
    SalPipe,
    DeptPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
