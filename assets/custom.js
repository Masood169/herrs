/*-----------------------------------------------------------------------------/
/ Custom Theme JS
/-----------------------------------------------------------------------------*/

// Insert any custom theme js here...
$('ul.slick-dots li').removeAttr('role', 'presentation');
$('ul.slick-dots li').click(function() {
    var clickedLi = $(this);
    // Set a timeout to run the script after 3 seconds
    setTimeout(function() {
        clickedLi.removeAttr('role', 'presentation');
        // Add your other code here to be executed after 3 seconds
    }, 3000);
});

