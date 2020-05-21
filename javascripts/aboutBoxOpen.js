
$('.about-box').hide();
let isAboutBoxOpen = true;
$('button').on('click', function(){
$('.about-box').slideToggle();
if(!isAboutBoxOpen){
    $('button').text('OPEN');
    isAboutBoxOpen = true;
}else{
    $('button').text('CLOSE');
    isAboutBoxOpen = false;
    }
});