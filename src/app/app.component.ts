import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { TokenStorageService } from './admin/services/s-token-storage/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'entrevistaFinal';

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService) {}

  //TODO: Preguntar si no se importa el onInit
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      //this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ADMIN');
      this.showModeratorBoard = this.roles.includes('HRUSER');

      this.username = user.username;
    }
  }

  //TEST

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
