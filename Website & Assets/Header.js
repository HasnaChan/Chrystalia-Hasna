function myFunction() {
    var header = document.getElementById("myLinks2");
    if (header.style.display === "block") {
      header.style.display = "none";
    }
    else{
      header.style.display = "block";
    }
  }

// const myLinks = document.querySelector(".myLinks");
// const menuItems = document.querySelectorAll(".menuItem");
// const hamburger= document.querySelector(".hamburger");
// const menuIcon = document.querySelector(".menuIcon");


// function toggleMenu() {
//   if (menu.classList.contains("showMenu")) {
//     menu.classList.remove("showMenu");
//     // closeIcon.style.display = "none";
//     menuIcon.style.display = "block";
//   } else {
//     menu.classList.add("showMenu");
//     // closeIcon.style.display = "block";
//     menuIcon.style.display = "none";
//   }
// }

// menuItems.forEach( 
//   function(menuItem) { 
//     menuItem.addEventListener("click", toggleMenu);
//   }
// )