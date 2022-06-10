import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent  implements OnInit {

  constructor() { }
  ngOnInit(): void {

    const body:any = document.querySelector("body"),
          sidebar = body.querySelector(".sidebar"),
          toggle = body.querySelector(".toggle"),
          searchBtn = body.querySelector(".search-box");


          toggle.addEventListener("click",() =>{
            sidebar?.classList.toggle("close");

          });






  }

}
