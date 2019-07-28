import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FKPI-SPA';

  constructor(public authService: AuthService) { }

  loggedIn() {
    return this.authService.loggedIn();
  }
}
