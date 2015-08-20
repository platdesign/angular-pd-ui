'use strict';

/**
 * Directive: uiDropdownContent
 */
module.exports = [function() {
	return {
		restrict: 'E',

		template: require('./template.jade'),
		replace: true,
		transclude: true,


		require: '^pdDropdown',

		scope: {},


		link: function(scope, el, attr, ctrl) {
			scope.$dropdown = ctrl;
		},

		controller: ['$scope', function($scope) {

		}]
	}
}];
