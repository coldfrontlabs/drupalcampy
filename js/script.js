/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {
 

// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {
    countdown(2015,6,16,0,0);
      // Add Close Button
    $('.header__mobile-secondary-menu').once('added-close-button', function(){
      $(this).before('<a class="btn-close">' + '<i class="i-cancel"></i><span>' + Drupal.t('Close') + '</span></a>');
    });

    //Close Toggle
    $('.slide-menu .btn-close').click(function(e){
      if ($('#page').attr('data-state') == 'slide-open') {
        $('#page').attr('data-state', 'slide-closed');
      }
      else {
        $('#page').attr('data-state', 'slide-open');
      }
      e.preventDefault();
    });

    // Menu Toggle
    $('.menu-toggle').click(function(e){
      if ($('#page').attr('data-state') == 'slide-open') {
        $('#page').attr('data-state', 'slide-closed');
      }
      else {
        $('#page').attr('data-state', 'slide-open');
      }
      e.preventDefault();
    });


  }
};


})(jQuery, Drupal, this, this.document);
