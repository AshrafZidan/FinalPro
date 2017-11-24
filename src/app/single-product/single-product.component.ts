import { Component, OnInit} from '@angular/core';
declare var $;
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
single_item ={
name:'',
id:''
}
user={

username:'',
Email:'',
comment:''
}
finalresult ;
  constructor() {
  // to zoom in single product
  this.single_item = {
    name:"preview",
    id : "zoom"
  }

  this.finalresult = 1;
  this.user={

username:'',
Email:'',
comment:''
}


}

  ngOnInit() {
    // to navigate between tabs
    var $tabs =  $('.tabs');
    var panels = $('.tab-content');
      $tabs.on('click','a',function(){

        var id = $(this).attr('id');
        //detect current tab and turn it to selected off
      $tabs.find('[aria-selected="true"]').attr('aria-selected',false);
      $(this).attr('aria-selected',true);
      panels.filter('[aria-hidden="false"]').attr('aria-hidden',true);
         $(this).attr('aria-hidden',true);
        // console.log(id);
        $(id).attr('aria-hidden',false);
    });

  var clikComment = $('#showForm');
  var userform = $('#usercommentform');

  clikComment.on('click', 'a' , function(){
    userform.toggleClass('active');
  });
  }


zooming() {
  console.log('zoom');
   $("zoom").elevateZoom({tint:true, tintColour:'#F90', tintOpacity:0.5});
  }

  plus(){

    if (! isNaN(this.finalresult)) {
      this.finalresult++ ;

    }
  return this.finalresult;
  }
  minus(){

    if (! isNaN(this.finalresult) && this.finalresult > 1 ) {
      this.finalresult-- ;

    }

    return this.finalresult;
  }

}
