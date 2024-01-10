/*-----------------------------------------------------------------------------/
/ Custom Theme JS
/-----------------------------------------------------------------------------*/

// Insert any custom theme js here...

$(document).ready(function() {
    // Check if .slick-dots class is present on the page
    if ($('#slick-slide00, #slick-slide01').length > 0) {
        setTimeout(function() {
            $('#slick-slide00, #slick-slide01').removeAttr('role', 'presentation');
            $('#slick-slide00, #slick-slide01').removeAttr('aria-controls');
                        // Add your other code here if needed
        }, 1000);
    }
});

$('#slick-slide00, #slick-slide01').click(function() {

    // Set a timeout to run the effect after 3 seconds
    setTimeout(function() {
        // Remove 'role' attribute from both li elements
        $('#slick-slide00, #slick-slide01').removeAttr('role', 'presentation');
        $('#slick-slide00, #slick-slide01').removeAttr('aria-controls');
        // Add your other code here if needed
    }, 3000);
});

