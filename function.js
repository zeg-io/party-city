// Code By Webdevtrick ( https://webdevtrick.com )
$('.button').click(function(){
  var $maxSteps = 5,
      $btn = $(this),
      $step = $btn.parents('.modal-body'),
      stepIndex = $step.index(),
      $pag = $('.header span').eq(stepIndex);
  if(stepIndex < $maxSteps) { step($step, $pag); }
  else { lastStep($step, $pag); }
  
});

$('.oops').click(function(){
  var $btn = $(this),
      $step = $btn.parents('.modal-body'),
      stepIndex = $step.index(),
      $pag = $('.header span').eq(stepIndex);

  help($step);
});


function step($step, $pag){
  // animate the step out
  $step.addClass('animate-out');
  
  // animate the step in
  setTimeout(function(){
    $step.removeClass('animate-out is-showing')
         .next().addClass('animate-in');
    $pag.removeClass('active')
          .next().addClass('active');
  }, 600);
  
  // after the animation, adjust the classes
  setTimeout(function(){
    $step.next().removeClass('animate-in')
          .addClass('is-showing');
    
  }, 1200);
}


function lastStep($step, $pag){
  // animate the step out
  $step.parents('.container').addClass('animate-up');

  setTimeout(function(){
    $('.reStart').css('display', 'inline-block');
  }, 300);
}

function help($step) {
  // animate the step out
  $step.addClass('animate-out');
  
  // animate the step in
  setTimeout(function(){
    $('.help').removeClass('animate-out is-showing')
         .addClass('animate-in');
         $('.help').removeClass('active')
          .next().addClass('active');
  }, 600);
  
  // after the animation, adjust the classes
  setTimeout(function(){
    $('.help').removeClass('animate-in')
          .addClass('is-showing');
    
  }, 1200);
}
$('.reStart').click(function(){
 $('.container').removeClass('animate-up')
                  .find('.modal-body')
                  .first().addClass('is-showing')
                  .siblings().removeClass('is-showing');

  $('.header span').first().addClass('active')
                          .siblings().removeClass('active');
 $(this).hide();
});
