var cur_tab = 0;
var jump = 1;
var array = new Array(); //history of the page traversal
document.getElementById("sub_btn").style.display = "none";
var tabs = document.getElementsByClassName("tab");
for (i = 0; i < tabs.length; i++) {
  tabs[i].style.display = "none";
}
show_tab(cur_tab);

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
  var tab = document.getElementsByClassName("tab")[cur_tab];
  var inputs = tab.getElementsByTagName("input");
  var valid = true;

  // Radio Groups Validation
  var radio_groups = tab.getElementsByClassName("radio-group");
  for (var i = 0; i < radio_groups.length; i++) {
    var cnt = 0;
    var radios = radio_groups[i].getElementsByTagName("input");
    for (var j = 0; j < radios.length; j++) {
      if (radios[j].checked) {
        cnt = cnt + 1;
      }
    }
    if (cnt == 0) {
      radio_groups[i].className += " invalid";
      radio_groups[i].getElementsByClassName("form-text")[0].innerHTML = "Please fill out this field.";
      return false;
    } else {
      radio_groups[i].className += "form-control";
    }
  }

  // Checkbox Group Validation
  var checkbox_groups = tab.getElementsByClassName("checkbox-group");
  for (var i = 0; i < checkbox_groups.length; i++) {
    var cnt = 0;
    var checkboxes = checkbox_groups[i].getElementsByTagName("input");
    for (var j = 0; j < radios.length; j++) {
      if (checkboxes[j].checked) {
        cnt = cnt + 1;
      }
    }
    if (cnt == 0) {
      checkbox_groups[i].className += " invalid";
      checkbox_groups[i].getElementsByClassName("form-text")[0].innerHTML = "Please fill out this field.";
      return false;
    } else {
      checkbox_groups[i].className += "form-control";
    }
  }
  // A loop that checks every input field in the current tab:
  for (i = 0; i < inputs.length; i++) {
    // If a field is empty...
    if (inputs[i].type == "radio" || inputs[i].type == "checkbox") {
      continue;
    }
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
