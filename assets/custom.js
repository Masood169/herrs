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
        $(this).attr('title', ariaLabelText);
    });
});
}, 2000);




// $(".product-single__swatch__item input:eq(0)").attr("aria-selected", "true");
$(document).ready(function() {
    // $('.product-single__swatch input[type="radio"]').click(function() {
    //   // Set aria-select="false" for all inputs
    //   $('.product-single__swatch input[type="radio"]').attr('aria-select', 'false');

    //   // Set aria-select="true" for the clicked input
    //   $(this).attr('aria-select', 'true');
    // });

    $('li.secondary-nav__item.primary-nav__item--sub').click(function() {
      $('#sub-1').toggleClass('active-menu');
      
  $('li.secondary-nav__item.primary-nav__item--sub a.secondary-nav__link.nav__link--sub').attr('aria-expanded', function (i, attr) {
    return attr == 'true' ? 'false' : 'true'
});
    });
  
  });
$(document).ready(function() {
    // Function to remove the role attribute with the value "toolbar"
    function removeRoleToolbar() {
        $(".home-carousel.home-carousel--image.js-home-carousel.home-carousel--full.slick-initialized.slick-slider.slick-dotted").removeAttr("role" , "toolbar");
    }

    // Set a timeout to execute the function after 2 seconds
    setTimeout(removeRoleToolbar, 2000);
});

$('img src="https://t.co/i/adsct?bci=3&eci=2&event_id=70decac1-65ac-4340-9342-5fcc57a36254&events=%5B%5B%22pageview%22%2C%7B%7D%5D%5D&integration=advertiser&p_id=Twitter&p_user_id=0&pl_id=cb47a77c-bb55-471c-8a53-1a37fe54ed22&tw_document_href=https%3A%2F%2Fkwcxov7nfypcilf5-51520471229.shopifypreview.com%2F&tw_iframe_status=0&tw_order_quantity=0&tw_sale_amount=0&txn_id=o5qni&type=javascript&version=2.3.29"').attr('alt','123')