import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
  })

export class LoginService{
    constructor(private http: HttpClient){}

    userLogged(data : any){
      return this.http.post("https://localhost:44346/api/auth/login",data).toPromise();      
  }
    
}