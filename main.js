//Sidebar state

let offset;
let sidebar = false;




//Check if scroll hieght if more than 200 ----- 
window.addEventListener("scroll",checkScroll,false);


function checkScroll(){
    offset = pageYOffset;
   

    if(offset > 220){
        $("#sidebar").addClass("show");
    } else {
        $("#sidebar").removeClass("show");
    }
}

checkScroll();



// Control Sidebar ----------------------------------------

$(".nav-btn").click(function(){

    if(!sidebar){
        $(".nav-btn").addClass("show");
        $("#overlay").addClass("show");
        sidebar = true;
    } 
    else {
        $(".nav-btn").removeClass("show");
        $("#overlay").removeClass("show");
        sidebar = false;
    }
})



$(".nav-btn2").click(function(){
    
    if(sidebar){
        $("#overlay").removeClass("show");
        $(".nav-btn").removeClass("show");
        sidebar = false;
    } else {
        $("#overlay").addClass("show");
        $(".nav-btn").addClass("show");
        sidebar = true;
    }
})


$(".sidebar-link").click(function(){
    $("#overlay").removeClass("show");
    $(".nav-btn").removeClass("show");
    sidebar = false
})




// Create iamge slideshow ( interval 3s)

const nextSlide = () => {
   
    let images = document.querySelectorAll(".stock");
    let current = document.querySelector(".current");
    
    if(current.nextElementSibling){
        current.classList.remove("current");
        current.nextElementSibling.classList.add("current");
    } else {
        images[0].classList.add("current");
        current.classList.remove("current");
    }
}


setInterval(nextSlide,3000);