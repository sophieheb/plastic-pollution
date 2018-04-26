$(document).ready(function() {
  var actions = ["Buy a reusable water bottle and refil it, rather than buying plastic bottles each time",
  "Take your own bags to the supermarket.",
  "Say no to plastic straws in your drinks",
  "Recycle where you can. That goes for in public and at home!",
  "Talk to your friends and family about reducing their plastic use",
  "Buy a reusuable coffee mug, and ask your coffee shop to serve you your morning pick me up in it."
]

  $('img').click(function(){
    // Get action item
    number = Math.round(Math.random()*actions.length)
    text = actions[number];

    //populate empty p tag from list of tips
    $('#action').html(text);

    //hide down arrow
    $('#down-arrow').addClass("hidden");

    //show refresh arrow
    $('#refresh-arrow').removeClass("hidden");
  });
})
