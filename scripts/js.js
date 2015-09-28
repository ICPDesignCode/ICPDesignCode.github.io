$('.lesson-plan li > p a').click(function(e){
  e.preventDefault();
  // console.log(this);
  // $('.notes').addClass('.hidden');
  var $whichItem = $(this).parent().next();
  console.log($whichItem);
  $whichItem.slideToggle();
});
