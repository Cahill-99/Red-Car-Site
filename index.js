console.log("it is working");

let scrollingButton = document.getElementById("scrollBtn");
scrollingButton.addEventListener("click", function(){
    window.scrollTo(0, 623) 


});

window.scroll({
    behavior:"smooth"
});
                            
               
/*into.addEventListener('click', (ev)=>{
    by.scrollIntoView(true);
}*/
