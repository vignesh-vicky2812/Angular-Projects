import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _router : Router) { 
    
  }
  ngOnInit(): void {
 }
loginadmin(){
 console.log("response received");
     this._router.navigate(['/home'])
}

}
