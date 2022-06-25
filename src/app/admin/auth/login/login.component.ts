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

    const sign_in_btn: any = document.querySelector("#sign-in-btn");
    const sign_up_btn: any = document.querySelector("#sign-up-btn");
    const container: any = document.querySelector(".co");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });

    if (this.tokenStorage.getToken()) {

      this.isLoggedIn = true;
      //this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    this.form.username = "emartorell";
    this.form.password = "password";
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe((data) => {
      //this.tokenStorage.saveToken(data.token);
      window.sessionStorage.setItem("authtoken", data.token);
      console.log(`getItem ${window.sessionStorage.getItem("authtoken")}`);
      console.log(data.token);
      this.tokenStorage.saveUser(data);

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      //this.roles = this.tokenStorage.getUser().roles;
      //this.reloadPage();
    });
  }

  reloadPage() {
    window.location.reload();
  }
}
