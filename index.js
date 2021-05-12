console.log("it is working");

let scrollingButton = document.getElementById("scrollBtn");
scrollingButton.addEventListener("click", function(){
    window.scrollTo(0, 623) 


});

window.scroll({
    behavior:"smooth"
});
                            
               
/* DROPDOWN MENU */

document.getElementById("dropbtn").addEventListener("click", openMenu);

function openMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}



/*PRICEPIC REVEAL*/

let f12 = document.getElementById("car1");
f12.addEventListener("click", function(f12){
f12.target.classList.toggle("pricepic1.reveal")
})




