
// I couldn't get this code to work the way I wanted, so I used an email form for now.
// var suggestion = [];
// function checkSuggestionBox() {
//     if (document.getElementById("suggestion").value === "") {
//     alert("Help us help you, leave a suggestion in the box!");
//  } else {
//    suggestion.push(document.getElementById("suggestion").value);
//    console.log(suggestion);
//   }
// }
//
//


// // next, I need to make a way for the "moods" to play a random song from a play-list.
// I origionally coded this as a single function that accepts a mood as a paramater, but I was having trouble getting
// it to work properly, so I decided to use multiple functions for now.
// var randomPlay = function(mood) {
//   var max = mood.length;
//   var rand = Math.floor(Math.random() * max);
//   var youtubeLink = mood[rand];
//   window.open("https://www.youtube.com/watch?v=" + youtubeLink);
// };

var pumped = ["btPJPFnesV4", "04854XqcfCY"];
var chill = ["oFRbZJXjWIA", "zmwue6Jq4KA"];
var raging = ["zSHtniUl8V4", "bWXazVhlyxQ", "yndfqN1VKhY"];
var bummed = ["S2N_uvnvGbI", "4zLfCnGVeL4"];

var randomPlayPumped =function() {
  var max = pumped.length;
  var rand = Math.floor(Math.random() * max);
  var youtubeLink = pumped[rand];
  window.open("https://www.youtube.com/watch?v=" + youtubeLink);
};

var randomPlayChill =function() {
  var max = chill.length;
  var rand = Math.floor(Math.random() * max);
  var youtubeLink = chill[rand];
  window.open("https://www.youtube.com/watch?v=" + youtubeLink);
};

var randomPlayRaging =function() {
  var max = raging.length;
  var rand = Math.floor(Math.random() * max);
  var youtubeLink = raging[rand];
  window.open("https://www.youtube.com/watch?v=" + youtubeLink);
};

var randomPlayBummed =function() {
  var max = bummed.length;
  var rand = Math.floor(Math.random() * max);
  var youtubeLink = bummed[rand];
  window.open("https://www.youtube.com/watch?v=" + youtubeLink);
};
