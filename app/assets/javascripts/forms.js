var cur_tab = 0;
var jump = 1;
var array = new Array(); //history of the page traversal
document.getElementById("sub_btn").style.display = "none";
var tabs = document.getElementsByClassName("tab");
for (i = 0; i < tabs.length; i++) {
  tabs[i].style.display = "none";
}
show_tab(0);

window.onload = init;
function init() {
  var prev_btn = document.getElementById("prev_btn");
  var next_btn = document.getElementById("next_btn");
  prev_btn.addEventListener('click', function(){
    prev();
  });
  next_btn.addEventListener('click', function(){
    next();
  });

  var jump_group0 = document.getElementById("jump-group0");
  var radios0 = jump_group0.getElementsByTagName('input');
  for (var i = 0; i < radios0.length; i++) {
    radios0[i].onclick = function() {
      if (this.value == "Yes") {
        jump = 1;
      } else {
        jump = 2;
      }
    }
  }
}

function show_tab(n) {
  jump = 1;
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

function prev() {
  var tabs = document.getElementsByClassName("tab");
  tabs[cur_tab].style.display = "none";
  cur_tab = array.pop();
  show_tab(cur_tab);
}
function next() {
  if (!validate_form()) {
    return false;
  }
  var tabs = document.getElementsByClassName("tab");
  tabs[cur_tab].style.display = "none";
  array.push(cur_tab);
  cur_tab = cur_tab + jump;
  show_tab(cur_tab);
}

function validate_form() {
  return true //remove this when deploying
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
      inputs[i].className = "form-control";
    }
  }
  return valid; // return the valid status
}
