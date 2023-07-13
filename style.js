

var targetFname = document.querySelector("#fname");
targetFname.addEventListener('cut', function() {
  console.clear();
  console.log("You cut text");
  targetFname.style.background = "red";
});

var targetUsn = document.querySelector("#usn");
targetUsn.addEventListener('copy', function() {
  console.clear();
  console.log("You copied text");
  targetUsn.style.background = "red";
});

var targetAge = document.querySelector("#age");
targetAge.addEventListener('paste', function() {
  console.clear();
  console.log("You pasted text");
  targetAge.style.background = "red";
});

var targetAddress = document.querySelector("#address");
targetAddress.addEventListener('cut', function() {
  console.clear();
  console.log("You cut text");
  targetAddress.style.background = "red";
});

