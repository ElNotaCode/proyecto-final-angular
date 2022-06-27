import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/s-token-storage/token-storage.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent  implements OnInit {

  constructor(private tokenStorageService: TokenStorageService) { }
  ngOnInit(): void {

    const body:any = document.querySelector("body"),
          sidebar = body.querySelector(".sidebar"),
          toggle = body.querySelector(".toggle"),
          searchBtn = body.querySelector(".search-box");


          toggle.addEventListener("click",() =>{
            sidebar?.classList.toggle("close");
          });
  }

  logout(): void {
    this.tokenStorageService.signOut();
  }

}
