import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-hr-user',
  templateUrl: './form-hr-user.component.html',
  styleUrls: ['./form-hr-user.component.css'],
})
export class FormHrUserComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  username: string = '';

  validarUsername: boolean = true;
}
