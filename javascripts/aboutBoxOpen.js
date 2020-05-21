
$('.about-box').hide();
let isAboutBoxOpen;
$('button').on('click', function(){
$('.about-box').slideToggle();
if(isAboutBoxOpen){
    $('button').text('OPEN');
    isAboutBoxOpen = false;
}else{
    $('button').text('CLOSE');
    isAboutBoxOpen = true;
    }
});