import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  modoDarkOrLight : boolean = false;

  ngOnInit(): void {
  }

  public toogle(){
    document.body.classList.toggle('dark-theme');
    this.modoDarkOrLight = !this.modoDarkOrLight
  }

}
