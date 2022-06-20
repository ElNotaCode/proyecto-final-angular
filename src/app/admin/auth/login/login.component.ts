import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/s-auth/auth.service';
import { TokenStorageService } from '../../services/s-token-storage/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
  };

  isLoginFailed = false;
  isLoggedIn = false;
  errorMessage = '';
  //roles: string[] = [];

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      //this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe((data) => {
      this.tokenStorage.saveToken(data.token);
      this.tokenStorage.saveUser(data);

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      //this.roles = this.tokenStorage.getUser().roles;
      this.reloadPage();
    });
  }

  reloadPage() {
    window.location.reload();
  }
}
