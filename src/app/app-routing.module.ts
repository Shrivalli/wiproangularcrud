import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmpListComponent } from './Employees/emp-list/emp-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EmpAddComponent } from './Employees/emp-add/emp-add.component';
import { CustomerlistComponent } from './Customers/customerlist/customerlist.component';
import { CustomeraddComponent } from './Customers/customeradd/customeradd.component';
import { CustomerdeleteComponent } from './Customers/customerdelete/customerdelete.component';
import { CustomerupdateComponent } from './Customers/customerupdate/customerupdate.component';


const routes: Routes = [
  {path:'home',component:HomePageComponent},
  {path:'emplist', component:EmpListComponent},
  {path:'register',component:EmpAddComponent},
  {path:'customerlist',component:CustomerlistComponent},
  {path:'customeradd',component:CustomeraddComponent},
  {path:'customerdelete', component:CustomerdeleteComponent},
  {path:'customerupdate/:id', component:CustomerupdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
