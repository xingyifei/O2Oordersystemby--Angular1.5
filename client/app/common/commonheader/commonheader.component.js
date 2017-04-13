import template from './commonheader.html';
import controller from './commonheader.controller';
import './commonheader.less';

export default {
	restrict: 'E',
	bindings: {
		reloaddata:'&'
	},
	template,
	controller,
	controllerAs: 'vm'
};
