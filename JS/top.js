//learned from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

Top = document.getElementById("top");

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        Top.style.display = "block";
    }else{
        Top.style.display = "none";
    }
}

function to_top(){
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; //For Chrome, Firefox, IE and Opera
}
