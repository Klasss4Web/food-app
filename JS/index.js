    
let hamburger = document.querySelector(".menu-bar");
let middleBar = document.querySelector(".menu-bar_middle")

 hamburger.addEventListener("click", 
 function(e) {

    let navBox = document.querySelector(".nav-box");
    

    if(navBox.style.display === "block"){
        navBox.style.display = "none";
        middleBar.style.display = "block";
        hamburger.classList.remove("menu-bar-close");
        
    }else{
        navBox.style.display = "block";
        hamburger.classList.add("menu-bar-close");
        middleBar.style.display = "none";
    }
    
    e.preventDefault()

 })
