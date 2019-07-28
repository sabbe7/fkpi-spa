import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AlertifyService } from './services/alertify.service';

@Component({
    selector: 'app-header',
    template: `
    
  <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="/">Financial KPI</a>
    <div class="navbar-expand mr-auto">
    </div>    

    <div class="dropdown">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Welcome {{user | titlecase}}
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="#" (click)="logout()"><i class="fa fa-sign-out"></i> Logout</a>
        </div>
    </div>

  </nav>


  `
})
export class HeaderComponent implements OnInit {    

    user

    constructor(public authService: AuthService,
        private alertify: AlertifyService) { }

    ngOnInit() {
        this.user = this.authService.getLoggedInUser().unique_name;
     }        

    logout() {
        localStorage.removeItem('token');
        this.alertify.message('logged out');
    }
}
