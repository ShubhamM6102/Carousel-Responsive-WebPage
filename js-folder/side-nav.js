   // side-nav
   function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "0px";
    document.getElementById("main").style.zIndex = "3";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }