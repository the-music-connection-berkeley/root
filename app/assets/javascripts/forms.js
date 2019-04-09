var tabs = document.getElementsByClassName("tab");
var cur_tab = 0;
document.getElementById("sub_btn").style.display = "none";
for (i = 0; i < tabs.length; i++) {
  tabs[i].style.display = "none";
}
show_tab(0);
window.onload = init;
function init() {
  var prev_btn = document.getElementById("prev_btn");
  var next_btn = document.getElementById("next_btn");
  prev_btn.addEventListener('click', function(){
    prev_next(-1);
  });
  next_btn.addEventListener('click', function(){
    prev_next(1);
  });
}




function show_tab(n) {
  var tabs = document.getElementsByClassName("tab");
  tabs[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prev_btn").style.display = "none";
  } else {
    document.getElementById("prev_btn").style.display = "inline";
  }
  if (n == (tabs.length - 1)) {
    document.getElementById("sub_btn").style.display = "inline";
    document.getElementById("next_btn").style.display = "none";
  } else {
    document.getElementById("sub_btn").style.display = "none";
    document.getElementById("next_btn").style.display = "inline";
  }
}

function prev_next(n) {
    if (n == 1 && !validate_form()) {
      return false;
    }
    var tabs = document.getElementsByClassName("tab");
    tabs[cur_tab].style.display = "none";
    cur_tab = cur_tab + n;
    show_tab(cur_tab);
}

function validate_form() {
  var tab = document.getElementsByClassName("tab")[cur_tab];
  var inputs = tab.getElementsByTagName("input");
  var valid = true;
  // A loop that checks every input field in the current tab:
  for (i = 0; i < inputs.length; i++) {
    // If a field is empty...
    if (inputs[i].value == "") {
      // add an "invalid" class to the field:
      inputs[i].className += " invalid";
      inputs[i].placeholder = "Please fill out this field.";
      // and set the current valid status to false:
      valid = false;
    } else {
      inputs[i].className -= " invalid";
    }
  }
  return valid; // return the valid status
}
