import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  constructor(private _router : Router) { 
    
   }
   ngOnInit(): void {
  }
loginadmin(){
  console.log("response received");
      this._router.navigate(['/admin'])
}

}

