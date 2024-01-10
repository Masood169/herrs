/*-----------------------------------------------------------------------------/
/ Custom Theme JS
/-----------------------------------------------------------------------------*/

// Insert any custom theme js here...
$('ul.slick-dots li').removeAttr('role', 'presentation');
$('#slick-slide00, #slick-slide01').click(function() {
    var clickedLi = $(this);

    // Set a timeout to run the effect after 3 seconds
    setTimeout(function() {
        // Remove 'role' attribute from both li elements
        $('#slick-slide00, #slick-slide01').removeAttr('role', 'presentation');

        // Add your other code here if needed
    }, 3000);
});

