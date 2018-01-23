$(window).scroll(function(){


var scroled=$(this).scrollTop();
console.log(scroled)


  if(scroled<689)
  {
    $('.logo').css({
      'transform':'translate(0px,'+ scroled/1.5 +'%)'
    })
  }

  



  if(scroled > $('.galerie').offset().top-($(window).height()/1.2))
  {
    
    $('.galerie .pic').each(function(i){
      setTimeout(function(){
        $('.galerie .pic').eq(i).addClass('is-showing');
      },250*(i+1));
    })
  }
});