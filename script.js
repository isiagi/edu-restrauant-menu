let mySidenav = document.querySelectorAll("#mySidenav")

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  mySidenav.forEach((link) =>{
    link.onclick = closeNav;
  })

