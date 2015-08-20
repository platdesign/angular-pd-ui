(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';


var pdUi = require('../../../');


var app = module.exports = angular.module('app', [pdUi.name]);


app.run(function($rootScope) {

	$rootScope.test = 123;

})



},{"../../../":2}],2:[function(require,module,exports){
'use strict';


module.exports = require('./src/pd-ui/pd-ui.js');

},{"./src/pd-ui/pd-ui.js":10}],3:[function(require,module,exports){
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

},{"./template.jade":4}],4:[function(require,module,exports){
function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div ng-show=\"$dropdown.isOpen\" ng-click=\"$event.stopPropagation()\" class=\"pd-dropdown-content\"><div ng-transclude=\"ng-transclude\" class=\"content\"></div></div>");;return buf.join("");
};;
module.exports = template();
},{}],5:[function(require,module,exports){
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

},{"./template.jade":6}],6:[function(require,module,exports){
function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div ng-click=\"$dropdown.toggle()\" class=\"pd-dropdown-handle\"><div ng-transclude=\"ng-transclude\" class=\"handle\"></div></div>");;return buf.join("");
};;
module.exports = template();
},{}],7:[function(require,module,exports){
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

},{"./template.jade":8}],8:[function(require,module,exports){
function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div ng-mouseleave=\"$dropdown.triggerDeferredClose()\" ng-mouseenter=\"$dropdown.cancelDeferredClose()\" class=\"pd-dropdown\"><div ng-transclude=\"ng-transclude\" class=\"wrappter\"></div></div>");;return buf.join("");
};;
module.exports = template();
},{}],9:[function(require,module,exports){
'use strict';


/**
 * Angular-Module: pd-ui-dropdown
 * [Description]
 */
var mod = module.exports = angular.module('pd.ui.dropdown', []);

// Configs


// Runners


// Providers


// Factories


// Services


// Directives
mod.directive('pdDropdown', require('./directives/pd-dropdown'));
mod.directive('pdDropdownContent', require('./directives/pd-dropdown-content'));
mod.directive('pdDropdownHandle', require('./directives/pd-dropdown-handle'));



// Filters

},{"./directives/pd-dropdown":7,"./directives/pd-dropdown-content":3,"./directives/pd-dropdown-handle":5}],10:[function(require,module,exports){
'use strict';


var dropdown = require('../pd-ui-dropdown');


/**
 * Angular-Module: pd-ui
 * [Description]
 */
var mod = module.exports = angular.module('pd.ui', [

	dropdown.name

]);

// Configs


// Runners


// Providers


// Factories


// Services


// Directives


// Filters

},{"../pd-ui-dropdown":9}]},{},[1]);
