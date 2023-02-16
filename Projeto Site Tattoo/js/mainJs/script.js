window.onscroll = function() {scrollFunction()}

function scrollFunction() {

    var itens = document.getElementsByClassName("item-menu");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        for (var item = 0; item < itens.length; item++ ){
            itens[item].style.padding = '10px';
        }
    }else{
        for (var item = 0; item < itens.length; item++ ){
            itens[item].style.padding = '40px';
        }
    }
}