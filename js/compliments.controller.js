`use strict`;

(function(){
  var app = angular.module("angularComp");
  app.controller("complimentsController", complimentsController);

  function complimentsController() {
    var vm = this;
    var randomIndex = Math.floor(Math.random() * data.length);
    vm.data = data[randomIndex];
  }
}());
