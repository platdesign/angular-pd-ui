'use strict';

/**
 * Directive: uiDropdown
 */
module.exports = ['$timeout', function($timeout) {
	return {
		restrict: 'E',
		template: require('./template.jade'),
		replace: true,
		transclude: true,
		require: 'pdDropdown',
		scope: true,
		controller: ['$scope', function($scope) {
			$scope.$dropdown = this;

			this.isOpen = false;

			this.toggle = function() {
				this.isOpen = !this.isOpen;
			};

			var closeTimer;
			this.triggerDeferredClose = function() {
				if(this.isOpen) {
					this.cancelDeferredClose();
					closeTimer = $timeout(function() {
						this.isOpen = false;
					}.bind(this), 200);
				}
			};

			this.cancelDeferredClose = function() {
				$timeout.cancel(closeTimer);
			};

		}]
	}
}];
