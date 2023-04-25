import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//This is the file where we have the details regarding to login.
export class AuthenticationService {

  constructor() { }
   authenticate(username : any, password : any){
    if(username=="keerthika" && password=="kiki123"){
      sessionStorage.setItem('username',username)
      return true;
    }else{
      return false;
    }
   }
    isUserLoggedIn(){
      let user =sessionStorage.getItem('username')
      console.log(!(user === null))
      return !(user === null)
    }
    logOut() {
      sessionStorage.removeItem('username')
    }
  }