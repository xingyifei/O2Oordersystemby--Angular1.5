import template from './modelshowshopcar.html';
import controller from './modelshowshopcar.controller';
import './modelshowshopcar.less';

export default {
	restrict: 'E',
	bindings: {
		listobj: "<"
	},
	template,
	controller,
	controllerAs: 'vm'
};