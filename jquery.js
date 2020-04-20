
$('.about-box').hide();
var flg = "close";
$('button').on('click', function(){
    $('.about-box').slideToggle();
        if(flg === "close"){
            $('button').text('CLOSE');
                flg = "open";
        }else{
            $('button').text('OPEN');
                flg = "close";
            }
});
                                                