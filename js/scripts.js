/**
 * @file
 * Example javascript file.
 */

(function ($, Drupal, window, document) {

  'use strict';

  /**
   * Example click function.
   */
  /**
   Drupal.behaviors.stickyNavDrop = {
  //  attach: function (context, settings) {
  //    $(context).find('.title-toggle').once('toggle-links').each(function () {
  //      $('.title-toggle', context).click(function () {
  //        $(this).toggleClass('open');
  //        $('.scrollspy .nav-tabs').slideToggle('fast');
  //      });
  //    });
  //  }
  //};
   */
  /**
   * Example actions on window resize.
   */
  /**
   Drupal.behaviors.footermove = {
    attach: function (context, settings) {
      function windowwidth() {
        if ($(window).width() < 768) {
          $('#block-newsletter', context).insertAfter('#block-footersearchblock');
        }
        else {
          $('#block-newsletter', context).insertAfter('#block-socialmenu');
        }
      }

      windowwidth();
      $(window).resize(function () {
        windowwidth();
      });
    }
  };
   */
  /**
   * Add stackable plugin on tables.
   */
  /**
   Drupal.behaviors.stackTable = {
    attach: function (context, settings) {
      $(context).find('table.product').once('stackTable').each(function () {
        $('table.product').stacktable();
      });
    }
  };
   */

})(jQuery, Drupal, this);
