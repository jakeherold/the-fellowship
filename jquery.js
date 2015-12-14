$(function() {

  //Gather player's info from idex.html
  
  //holds address for each death picture, to be added dynamically
  var deathPicArray = ["img/game/drunkdeath.gif",
    "img/game/waterfalldeath.gif",
    "img/game/boromirdeath.gif",
    "img/game/deadmarshes.gif",
    "img/game/cliffdeath.gif",
    "img/game/shelob.gif",
    "img/game/samcrying.gif",
    "img/game/death.jpg",
    "img/game/bilboscary.jpg",
    "img/game/deathqb3.gif",
    "img/game/boromirdeathfunny.jpg",
    "img/game/death.jpg"
  ]

  //inserts death gifs dynamically
  function insertDeathPic(array) {
    var counter = 1;
    array.forEach(function(string) {
      // $("<img src ="+string+"/>").before("#deathbtn"+counter)
      $gameText = $('#deathbtn' + counter).siblings('.gameText');
      $gameText.after('<img class="deathPic" src =' + string + ' hidden>');
      counter++;
    })
  }
  insertDeathPic(deathPicArray);

  //Properly moves html from sam/frodo track to fellowship track
  $('#b6b').on('click', function() {
    $(this).parent().children('.gameOptionButton').hide();
    $('#q4b').show();
    $('#q4b').children('.gameOptionButton').not('.death').show();
  });
  ////shows play again button and disallows fellowship track
  $('#b16').on('click', function() {
      $(this).parent().next().children('.gameOptionButton').not('.death').show();
      $(this).parent().children('.gameOptionButton').hide();
      $('#reply1').show();
      $('#finish').show();
    })
    //shows play again button and disallows frodo track
  $('#b14b').on('click', function() {
      $(this).parent().next().children('.gameOptionButton').not('.death').show();
      $(this).parent().children('.gameOptionButton').hide();
      $('#reply2').show();
      $('#finish2').show();
    })
    //on selection of the right response hides all prior buttons, and shows next section
  $('.right').not('#b6b').not('#b16').not('#b14b').on('click', function() {
    $(this).parent().next().show();
    $(this).parent().next().children('.gameOptionButton').not('.death').show();
    $(this).parent().children('.gameOptionButton').hide();
  });
  //on wrong answer shows death gif and hides all buttons (except for the one to reset the section)
  $('.wrong').on('click', function() {
    $('.gameOptionButton').hide();
    $(this).siblings('.death').show();
    $(this).hide();
    $(this).parent().children('.deathPic').show();
  });
  //resets current section with option buttons
  $('.death').on('click', function() {
    $(this).hide();
    $(this).siblings('.gameOptionButton').show();
    $(this).siblings('.deathPic').hide();
  });
});
