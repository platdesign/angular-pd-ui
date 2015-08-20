#angular-pd-ui

platdeisgn angular ui suite


#Install

`npm install --save-dev angular-pd-ui`


# Use with browserify

```javascript

// The whole suite
var pdUi = require('angular-pd-ui');

angular.module('app', [
	pdUi.name
]);

// Only parts
var pdUiDropdown = require('angular-pd-ui/src/pd-ui-dropdown');

angular.module('app', [
	pdUiDropdown.name
]);

```



#Author

Christian Blaschke <mail@platdesign.de>
