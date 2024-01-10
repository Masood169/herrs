/*-----------------------------------------------------------------------------/
/ Custom Theme JS
/-----------------------------------------------------------------------------*/

// Insert any custom theme js here...

// Wait for the iframe to load
$('div#WebPixelsManagerSandboxContainer + script + iframe').on('load', function() {
    // Set a timeout to run your script after 2 seconds
    setTimeout(function() {
        $('div#WebPixelsManagerSandboxContainer + script + iframe').attr('title', 'test');
        // Add your other code here if needed
    }, 2000);
});
