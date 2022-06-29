import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    validarPassword: null,
  };

  isLoginFailed = false;
  isLoggedIn = false;
  errorMessage = '';
  //roles: string[] = [];

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    public router: Router
  ) {}

  ngOnInit(): void {
    const sign_in_btn: any = document.querySelector('#sign-in-btn');
    const sign_up_btn: any = document.querySelector('#sign-up-btn');
    const container: any = document.querySelector('.co');

    sign_up_btn.addEventListener('click', () => {
      container.classList.add('sign-up-mode');
    });

    sign_in_btn.addEventListener('click', () => {
      container.classList.remove('sign-up-mode');
    });

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      //this.roles = this.tokenStorage.getUser().roles;
    }
  }

  signinTest() {
    //mockup mpv
    if (
      this.form.username != '' &&
      this.form.password != '' &&
      this.form.validarPassword == this.form.password
    ) {
      this.tempData.username = this.form.username;
      this.tempData.password = this.form.password;
      alert('Usuario creado correctamente.');
      this.form.username = '';
      this.form.password = '';
      this.form.validarPassword = '';
    } else {
      alert('Las contraseñas no coinciden!');
    }
  }

  tempData: any = {
    username: null,
    password: null,
  };

  loginTest() {
    //mockup mpv
    if (
      (this.form.username == this.tempData.username &&
        this.form.password == this.tempData.password) ||
      (this.form.username == 'emartorell' && this.form.password == 'password')
    ) {
      this.router.navigate(['/admin/positions']);
    } else {
      alert('Introduce un usuario y contraseña correctos.');
    }
  }

  login(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe((data) => {
      //this.tokenStorage.saveToken(data.token);
      window.sessionStorage.setItem('authtoken', data.token);
      console.log(`getItem ${window.sessionStorage.getItem('authtoken')}`);
      console.log(data.token);
      this.tokenStorage.saveUser(data);

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      //this.roles = this.tokenStorage.getUser().roles;
      //this.reloadPage();
    });
  }

  signin(): void {
    const { username, password, validarPassword } = this.form;

    if (password != validarPassword) {
      alert('Las contraseñas tienen que coincidir.');
      return;
    }
    this.authService
      .register(username, password, 'HRUSER')
      .subscribe((data) => {});
    alert('Tu cuenta se ha creado.');
  }

  reloadPage() {
    window.location.reload();
  }
}
