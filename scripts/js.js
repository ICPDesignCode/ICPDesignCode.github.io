$('.lesson-plan li > p a').click(function(e){
  e.preventDefault();
  var $whichItem = $(this).parent().next();
  // console.log($whichItem);
  $whichItem.slideToggle();
});
