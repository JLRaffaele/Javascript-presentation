// this will be called onload 
jQuery(document).ready(function($) {
jQuery(function($) {
    // changed .hover to .each
    $('.photo').each(function() {
        var rotation = Math.random() * 41 - 10;
        var depth = Math.floor(Math.random() * 256);
        $(this).css({
          'transform' : 'rotateZ(' + rotation + 'deg)',
          'z-index' : depth
        });        
    });
});
    // Clock script here
});