import template from './modelshowdetal.html';
import controller from './modelshowdetal.controller';
import './modelshowdetal.less';

export default {
	restrict: 'E',
	bindings: {
		listobj: "<"
	},
	template,
	controller,
	controllerAs: 'vm'
};