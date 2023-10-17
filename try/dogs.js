function myFunction (){
    var element = document.body;
    element.classList.toggle("dark-mode");
    
   
    
} 

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})


function testFunction (){
    var x = document.getElementById("diveDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}