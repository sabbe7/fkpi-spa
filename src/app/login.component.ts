import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AlertifyService } from './services/alertify.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    template: `
    
    <form #loginForm="ngForm" class="text-center" (ngSubmit)="login()">
      <div class="form-group">
        <input class="form-control" type="text" name="username" placeholder="Username" required [(ngModel)]="model.username">
      </div>      
      <div class="form-group">
        <input class="form-control" type="password" name="password" placeholder="Password" required [(ngModel)]="model.password">
      </div>
      <button [disabled]="!loginForm.valid" class="btn btn-primary btn-block" type="submit">Login</button>
    </form>

  `
})
export class LoginComponent {

    model: any = {};

    constructor(public authService: AuthService,
        private alertify: AlertifyService,
        private router: Router) { }

    loggedIn() {
        return this.authService.loggedIn();
    }

    login() {
        this.authService.login(this.model).subscribe(
            next => {
                this.alertify.success('Logged in successfully');
                this.router.navigate(['/']);
            },
            error => {
                this.alertify.error('Invalid username/password!');
            }
        );
    }
}
