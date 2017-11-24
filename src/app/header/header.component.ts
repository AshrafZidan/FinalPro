import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currency = [];
  languages = [];
  links=[];
constructor() {
    this.currency = ['USD','Egp'];
    this.languages= [
      'Arabic',
      'English'
    ];
    this.links=['SignUp','Profile','Settings','SignIn'];

  }

  ngOnInit() {
  }

}
