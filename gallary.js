
var card = document.querySelectorAll('.card');

function show(n){
 var chld = card[n].children[2];
 chld.style.display = 'block';

}

function hide(n){
 var chld = card[n].children[2];
 chld.style.display = 'none';
 
}
