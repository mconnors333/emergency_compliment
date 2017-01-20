`use strict`;

(function(){
  var app = angular.module("angularComp");
  app.controller("mainController", mainController);

  function mainController() {
    var vm = this;
    var randomIndex = Math.floor(Math.random() * data.length);
    vm.data = data[randomIndex];
  }
}());
