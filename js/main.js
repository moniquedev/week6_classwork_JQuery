


// #4 Make the image element appear and disappear when you click the corresponding button.
  $(document).ready(function() {
    $("#button1").click(function() {
        $("img").hide();
  })

    $("#button2").click(function() {
        $("img").show();
  })

    $("#button3").click(function() {
        $("img").fadeToggle();
  })

  // #6 Make the appearance of h1 element switch between two style sets when it is Double Clicked.
    $("#newDiv h1").dblclick(function() {
        $("#newDiv h1").toggleClass("styleSwitch");
  });

  // #8 Add li elements with content to the end of a list when the button is clicked.
    $("#button5").click(function() {
      $("ul").append('<li>item1</li>');
  })

    $("#button6").click(function() {
      $("ul").prepend('<li>item2</li>');

    })

    // #10 Change the appearance of a div when you (the user) hovers over it.
  $('#exercise9').hover(function() {
    $(this).animate({
        height:'500px',
        width:'700px',
        opacity:'0.7'
      })
    })


    // #12 Make the h2 element slide up when your mouse leaves the element.
     $("#exercise11").mouseleave(function() {
       $("#exercise11").slideUp();
     });

     // #14 Have this div fade away when you hover over it, and then make it come back when you click a button.
  $('#newNewNewDiv').hover(function() {
      $(this).fadeOut();
  })
  $('#button7').click(function() {
      $('#newNewNewDiv').fadeIn();
  })

})


$('#divSnow').websnowjq({
  snowFlakes:150
});
