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

setTimeout(function() {
$(document).ready(function() {
    $('.slick-dots li button').each(function(index) {
        // Fetching alt text from corresponding image
        var altText = $('img.home-carousel--image_img').eq(index).attr('alt');
        
        // Prepending "Slider Button for" to the alt text
        var ariaLabelText = 'Slider Button for ' + altText;
        
        // Setting aria-label for the button
        $(this).attr('aria-label', ariaLabelText);
    });
});
}, 2000);




$(".product-single__swatch__item input:eq(0)").attr("aria-selected", "true");
$(document).ready(function() {
    $('.product-single__swatch input[type="radio"]').click(function() {
      // Set aria-select="false" for all inputs
      $('.product-single__swatch input[type="radio"]').attr('aria-select', 'false');

      // Set aria-select="true" for the clicked input
      $(this).attr('aria-select', 'true');
    });

    $('li.secondary-nav__item.primary-nav__item--sub').click(function() {
      $('#sub-1').toggleClass('active-menu');
      
  $('li.secondary-nav__item.primary-nav__item--sub a.secondary-nav__link.nav__link--sub').attr('aria-expanded', function (i, attr) {
    return attr == 'true' ? 'false' : 'true'
});
    });
  
  });


