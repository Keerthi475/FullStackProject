
 import { Component, OnInit } from '@angular/core';
 import { AuthenticationService } from '../authentication.service';
 import { Router } from '@angular/router';
 
 @Component({
  selector: 'app-logout',
   templateUrl: './logout.component.html',
   styleUrls: ['./logout.component.css']
 })

 //When we click logout it will come to this page and perfomr this functions
 export class LogoutComponent implements OnInit {

   constructor(
     private authentocationService: AuthenticationService,
     private router: Router) {
     }

   ngOnInit() {
    this.authentocationService.logOut();
     var status=confirm("Are you sure you want to logout?");
     if(status==true){
      this.router.navigate(['/logout']);
     }
     else{
      this.router.navigate(['/airlines']);
     }
    
   }
  
 }

         
