import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public data : {username : string;password: string;} = {username:'', password: ''}
  // public data : { username: string;password: string;} = {username:'', password: ''}
  constructor(private service : LoginService) {
     
   }
  ngOnInit(): void {
  }
  async getUser() {
    let result = await this.service.userLogged(this.data);
    console.log(result);
   }
}
