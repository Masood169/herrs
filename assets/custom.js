/*-----------------------------------------------------------------------------/
/ Custom Theme JS
/-----------------------------------------------------------------------------*/

// Insert any custom theme js here...

// Wait for the iframe to load
setTimeout(function() {
$('div#WebPixelsManagerSandboxContainer + script + iframe').on('load', function() {
    // Set a timeout to run your script after 2 seconds
    setTimeout(function() {
        $('div#WebPixelsManagerSandboxContainer + script + iframe').attr('title', 'test');
        // Add your other code here if needed
    }, 1000);
});
}, 1000);

$(".product-single__swatch__item input:eq(0)").attr("aria-selected", "true");
$(document).ready(function() {
    $('.product-single__swatch input[type="radio"]').click(function() {
      // Set aria-select="false" for all inputs
      $('.product-single__swatch input[type="radio"]').attr('aria-select', 'false');

      // Set aria-select="true" for the clicked input
      $(this).attr('aria-select', 'true');
    });

    $('li.secondary-nav__item.primary-nav__item--sub').click(function() {
      $('#sub-1').addClass('active-menu');
    });
  
  });


