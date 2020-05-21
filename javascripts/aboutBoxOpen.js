
$('.about-box').hide();
let isAboutBoxOpen = false;
$('button').on('click', function(){
$('.about-box').slideToggle();
if(isAboutBoxOpen === false){
    $('button').text('CLOSE');
    isAboutBoxOpen = true;
}else{
    $('button').text('OPEN');
    isAboutBoxOpen = false;
    }
});