import { Component, OnInit } from '@angular/core';
import {TabMenuModule,MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {label: 'Raids', icon: 'fa-superpowers', routerLink: ["/raids"]},
      {label: 'Coliseum', icon: 'fa-bank', routerLink: ["/coliseum"]},
      {label: 'Ambush', icon: 'fa-ship',  routerLink: ["/ambush"]},
      {label: 'About', icon: 'fa-info-circle', routerLink: ["/about"]}
    ];
  }

}
