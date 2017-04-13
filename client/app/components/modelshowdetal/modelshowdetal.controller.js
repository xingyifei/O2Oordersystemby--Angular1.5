/**
 * (description)
 * 
 * @author yourname
 */

export default class modelshowdetalController {
	constructor($scope,modelshowdetalcont) {
		'ngInject'
		this.name = "商品详情"
		this.scope = $scope;
		this.modelshowdetalcont=modelshowdetalcont;
	}
    close(){
    	this.modelshowdetalcont.instance.dismiss();
    }
}