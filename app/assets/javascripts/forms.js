window.onload = init;

function init() {

  document.getElementById("sub_btn").style.display = "none";
  var prev_btn = document.getElementById("prev_btn");
  var next_btn = document.getElementById("next_btn");
  prev_btn.addEventListener('click', function(){
    prev_next(-1);
  });
  next_btn.addEventListener('click', function(){
    prev_next(1);
  });
}


var cur_tab = 0;

show_tab(cur_tab);

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
    var tabs = document.getElementsByClassName("tab");
    tabs[cur_tab].style.display = "none";
    cur_tab = cur_tab + n;
    show_tab(cur_tab);
}
