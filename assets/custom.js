/*-----------------------------------------------------------------------------/
/ Custom Theme JS
/-----------------------------------------------------------------------------*/

// Insert any custom theme js here...
$('ul.slick-dots li').removeAttr('role', 'presentation');
$('ul.slick-dots li').removeAttr('aria-controls');
$('#slick-slide00, #slick-slide01').click(function() {

    // Set a timeout to run the effect after 3 seconds
    setTimeout(function() {
        // Remove 'role' attribute from both li elements
        $('#slick-slide00, #slick-slide01').removeAttr('role', 'presentation');
        $('#slick-slide00, #slick-slide01').removeAttr('aria-controls');
        // Add your other code here if needed
    }, 3000);
});

