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

    $scope.name = "Ohmaly";
  });