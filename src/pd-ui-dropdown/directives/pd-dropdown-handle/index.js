'use strict';

/**
 * Directive: uiDropdownHandle
 */
module.exports = [function() {
	return {
		restrict: 'E',
		template: require('./template.jade'),
		replace: true,
		transclude: true,
		require: '^pdDropdown',

		link: function(scope, el, attrs, dropdownCtrl) {
			scope.$dropdown = dropdownCtrl;
		},
		controller: ['$scope', function($scope) {

		}]
	}
}];
