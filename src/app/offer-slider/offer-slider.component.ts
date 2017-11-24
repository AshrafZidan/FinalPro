import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-slider',
  templateUrl: './offer-slider.component.html',
  styleUrls: ['./offer-slider.component.scss']
})
export class OfferSliderComponent implements OnInit {
user_Email = '';
  constructor() { }

  ngOnInit() {
  }
    createRange(number){
  var items: number[] = [];
  for(var i = 1; i <= number; i++){
     items.push(i);
  }
  return items;
}

setSubmit(value:string)
{
    console.log(value);
}
}
