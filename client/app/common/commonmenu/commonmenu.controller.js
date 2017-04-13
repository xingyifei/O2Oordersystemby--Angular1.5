import logoImg from './images/1487208315_127960.png';

'use strict';

export default class commonMenuController {
	constructor($scope,) {
		"ngInject";
		this.$scope = $scope;
		this.logoImg = logoImg;
		this.showSub = false;
	}

	collapse(e) {
		$(e.target).parent().find('.sub-menu').toggle();
	}

}
