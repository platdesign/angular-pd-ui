'use strict';


var pdUi = require('../../../');


var app = module.exports = angular.module('app', [pdUi.name]);


app.run(function($rootScope) {

	$rootScope.test = 123;

})


