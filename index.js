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


/*document.getElementById("car1").addEventListener("click", pic1reveal);

function pic1reveal(){
    document.getElementById("pricepic1").classList.toggle("reveal");
}
*/

document.getElementById("car1").addEventListener("click", pic1reveal);

function pic1reveal(){
    document.getElementById("price1").classList.toggle("reveal");

}

document.getElementById("car1").addEventListener("click", pic1isolate);

function pic1isolate(){
    document.getElementById("price2").classList.toggle("hide")
    document.getElementById("price3").classList.toggle("hide")

}

document.getElementById("car2").addEventListener("click", pic2reveal);

function pic2reveal(){
    document.getElementById("price2").classList.toggle("reveal");

}

document.getElementById("car2").addEventListener("click", pic2isolate);

function pic2isolate(){
    document.getElementById("price1").classList.toggle("hide")
    document.getElementById("price3").classList.toggle("hide")

}
document.getElementById("car3").addEventListener("click", pic3reveal);

function pic3reveal(){
    document.getElementById("price3").classList.toggle("reveal");

}

document.getElementById("car3").addEventListener("click", pic3isolate);

function pic2isolate(){
    document.getElementById("price1").classList.toggle("hide")
    document.getElementById("price2").classList.toggle("hide")

}