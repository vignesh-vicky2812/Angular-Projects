import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminComponent } from './admin/admin.component';
const routes: Routes = [
  { path:'',component:AdminComponent },
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'main/employees', component: EmployeeListComponent },
  { path: 'main/add', component: CreateEmployeeComponent },
  { path: 'main/update/:id', component: UpdateEmployeeComponent },
  { path: 'main/details/:id', component: EmployeeDetailsComponent },
  { path:'main',component: AdminloginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }