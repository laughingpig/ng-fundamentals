import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
    templateUrl: './login.component.html',
    styles: [`
        em{float:right; color: red; padding-left:10px;}
    `]
})
export class LoginComponent {
    username
    password
    mouseoverLogin

    constructor(private authservice:AuthService, private router:Router){

    }

    login(formValues){
        this.authservice.loginUser(formValues.userName,formValues.password)
        this.router.navigate(['events'])
    }

    cancel(){
        this.router.navigate(['events'])
    }
}