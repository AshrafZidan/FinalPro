import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  sub_Category = [];
    Main_Category=[];
  constructor() {

    this.Main_Category = [
    {
      "Title":'clothes',
      "submenu":['men Clothes','women Clothes','shoes'],
        "status":'Sale',

      "color":'status green'
    },
    {

      "Title":'clothes',
       "submenu":['men Clothes','women Clothes','shoes'],
        "status":''
    },
    {
      "Title":'clothes',
      "submenu":['men Clothes','women Clothes','shoes'],
        "status":'Sale',

      "color":'status green'

    },
    {
      "Title":'clothes',
      "submenu":['men Clothes','women Clothes','shoes']


    },{
      "Title":'clothes',
      "submenu":['men Clothes','women Clothes','shoes'],
      "status":'Hot',

      "color":'status red'



    },
    {
      "Title":'clothes',
      "submenu":['men Clothes','women Clothes','shoes'],
        "status":'Sale',

      "color":'status green'
    },

    {
      "Title":'clothes',
      "submenu":['men Clothes','women Clothes','shoes'],
        "status":'Sale',

      "color":'status green'
    },

    {
      "Title":'clothes',
      "submenu":['men Clothes','women Clothes','shoes'],
        "status":'Sale',

      "color":'status green'
    },
{
      "Title":'clothes',
      "submenu":['men Clothes','women Clothes','shoes'],
        "status":'Sale',

      "color":'status green'
    },

    ];

    }

  ngOnInit() {
    // function to handel click to open category sidebar in mobileview
    $(document).on('click','.category-sidebar-btn',function(){
      $('.category-sidebar').addClass('active').parents('body').addClass('sidebar-oppend');
    });
}



}
