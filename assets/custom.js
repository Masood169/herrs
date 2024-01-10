/*-----------------------------------------------------------------------------/
/ Custom Theme JS
/-----------------------------------------------------------------------------*/

// Insert any custom theme js here...
$('ul.slick-dots li').removeAttr('role', 'presentation');
$('ul.slick-dots li').click(function(){
    $(this).removeAttr('role', 'presentation');
});

