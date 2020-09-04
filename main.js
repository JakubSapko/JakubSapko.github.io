function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("napis").style.visibility ="hidden";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  setTimeout(function(){
    document.getElementById("napis").style.visibility ="visible";
  }, 250);
}
