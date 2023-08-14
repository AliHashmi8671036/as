// $("h1").css("color","blue");

$("h1").addClass("big-title margin-50");

// $("h1").text("BYE");
// $("button").html("<em>Don't Click Me</em>");
$("a").attr("href","https://www.facebook.com");

// $("h1").click(function() {
//     $("h1").css("color","purple");
// });
// $("button").click(function() {
//     $("h1").css("color","purple");
// });

// $("input").keypress(function(event) {
//     console.log(event.key);
// })

// $(document).keypress(function(event) {
//     $("h1").text(event.key);
// });
// $("h1").on("click", function() {
//     $("h1").css("color","purple");
// });
// $("h1").on("mouseover", function() {
//     $("h1").css("color","purple");
// });

// $("h1").on("click", function() {
//     $("h1").css("color","purple");
// })

// $("h1").before("<button>New</button>");
// $("h1").after("<button>New</button>");
// $("h1").prepend("<button>New</button>");
// $("h1").append("<button>New</button>");

// $("button").on("click",function() {
//     // $("h1").hide();
//     // $("h1").show();
//     $("h1").toggle();
// });
// $("button").on("click",function() {
//     // $("h1").fadeIn();
//     // $("h1").fadeOut();
//     $("h1").fadeToggle();
// });
// $("button").on("click",function() {
//     // $("h1").slideUp();
//     // $("h1").slideDown();
//     $("h1").slideToggle();
// });
$("button").on("click",function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.25});
});