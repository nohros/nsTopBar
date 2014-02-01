(function (window, angular, undefined) {
  'use strict';

  var module = angular.module('nsTopBar', []);
  var $el = angular.element;
  var isDef = angular.isDefined;
  var forEach = angular.forEach;

  module.directive('nsTopbarMenu',
    function () {
      return {
        restrict: 'A',
        link: function (scope, elm, attrs) {
          scope.$watch(elm.children(), function() {
            var list = elm.find('a');
            var active = null;

            /**
             * Remove the 'ns-active' lass from the active item and add it
             * to the clicked item.
             *
             * @param e
             */
            var activate = function(e) {
              e.preventDefault();
              if (active) {
                active.removeClass('ns-active');
              }
              active = $el(this);
              active.addClass('ns-active');
            };

            for (var i= 0, j = list.length; i < j; ++i) {
              var link = $el(list[i]);
              if (!active && link.hasClass('ns-active')) {
                active = link;
              }

              // Bind our custom function to the links's 'click' event, if it
              // was not already done.
              if (!link.hasClass('ns-topbar-link')) {
                link
                  .on('click', activate)
                  .addClass('ns-topbar-link');
              }
            }

            // If there is no active link, mark the first one as active.
            if (!active) {
              active = $el(list[0]).addClass("ns-active");
            }
          });
        }
      };
    })

    .directive('nsTopbar',
      function() {
        var template =
          '<div class="ns-topbar ns-topbar-default-theme">' +
          '<nav class="ns-topbar-nav">' +
          '<a class="logo"></a>' +
          '<ul class="ns-topbar-menu" ns-topbar-menu>' +
          '<li ng-repeat="item in menu">' +
          '<a href="{{item.href}}">{{item.text}}</a>' +
          '</li>' +
          '</ul>' +
          '<div ng-transclude class="ns-transcluded"></div>' +
          '</nav>' +
          '</div>';
        return {
          restrict: 'E',
          replace: true,
          transclude: true,
          template: template,
          link: function(scope, elm, attrs) {
            attrs.$observe('nsTopBarTheme', function(newTheme, oldTheme) {
              if (isDef(newTheme)) {
                elm
                  .removeClasss('ns-topbar-default-theme')
                  .removeClass(oldTheme)
                  .addClass(newTheme);
              }
            });
          }
        };
    });

})(window, window.angular);