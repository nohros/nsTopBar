# nsTopBar

The topbar that is used in the nohros site and other applications developed by nohros (http://nohros.com/nsTopBar).

nsTopBar is simple topbar inspired on the bar used by [TheNextWeb](thenextweb.com) at the yer of 2014. It has only
angularjs as dependency.

### [Example](http://nohros.com/nsTopBar)

## Install

You can download all necessary nsTopbar files manually or install it with bower:

```bash
bower install nsTopBar
npm install
grunt compile
```

## Usage

You need only to include ``nsTopbar.js`` and ``nsTopBar.css`` (as minimal setup) to your project and then you can
start using the ``nsTopBar`` widget and directives.

### Widget

```javascript
angular
  .module('nsTopBarExample', [
    'nsTopBar'
  ])

  .controller('MainCtrl', function MainCtrl($scope) {
    $scope.menu = [{
      text: "home",
      href: "#/home"
    }, {
      text: "Themes",
      href: "#/themes"
    }];
  });
```

```html
<ns-topbar></ns-topbar>
```

### nsTopBar Menu

The ``nsTopBar`` defines a directive called ``nsTopBarMenu`` that apply a CSS class to the currently
active menu item. The ``ns-active`` CSS class is applied to a menu item when it is clicked to make it
active and removed from it when other item becomes active.

## Customize with SASS

Customizing the ``nsTopBar`` is easy with the Sass variables provided in ``_topbar.scss`` files.

```scss
// Controle the topbar padding.
$ns-topbar-padding:0 0.75em;
// Controle the topbar and nav bottom border.
$ns-topbar-border-size: 0.125em;
// Control the topbar and nav bottom border collor.
$ns-topbar-border-color: #d9e0e2;

// Control the default color of the menu items.
$nav-link-color : #879096 !default;
// Control the color of the active menu item
$nav-link-active-color : #ff3c1f !default;
// Control the default opacity of the menu items.
$nav-link-opacity: 0.6 !default;
// Control the line-height of the menu items.
$nav-link-line-height: 3em !default;
```

### Themes

You can customize the ``nsTopBar`` through themes. You can use the ``ns-topbar``, ``ns-topbar-nav`` and
``ns-topbar-list`` to create your own theme with semantic markup, like so.

```scss
.custom-topbar-theme {
  &.ns-topbar {
    @include ns-topbar;

    .ns-topbar-nav {
      @include ns-topbar-nav;
    }

    ul {
      @include ns-topbar-list;
    }
  }
}
```

```html
<ns-topbar ns-topbar-theme="custom-topbar-theme">
</ns-topbar>
```

## License

MIT Licensed

Copyright (c) 2013, nohros.com contact@nohros.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
