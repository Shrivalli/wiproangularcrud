import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { EmpListComponent } from './Employees/emp-list/emp-list.component';
import { EmpAddComponent } from './Employees/emp-add/emp-add.component';
import { CustomerlistComponent } from './Customers/customerlist/customerlist.component';
import { CustomeraddComponent } from './Customers/customeradd/customeradd.component';
import { CustomerdeleteComponent } from './Customers/customerdelete/customerdelete.component';
import { CustomerupdateComponent } from './Customers/customerupdate/customerupdate.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EmpListComponent,
    EmpAddComponent,
    CustomerlistComponent,
    CustomeraddComponent,
    CustomerdeleteComponent,
    CustomerupdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
