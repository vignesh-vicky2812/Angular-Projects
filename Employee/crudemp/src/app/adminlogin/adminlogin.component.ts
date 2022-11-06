import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/admin';
import { EmployeeService } from 'src/app/employee.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import {NgForm} from '@angular/forms';

import { FormControl } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  title = 'crudemployee';
  
}





