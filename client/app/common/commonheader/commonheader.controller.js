'use strict';

export default class commonHeaderController {
	constructor($scope, $document,$uibModal,modelshowshopcar) {
		"ngInject";
		this.$scope = $scope;
		this.$document = $document;
		this.uibModal=$uibModal;
		this.modelshowshopcar=modelshowshopcar;
		this.foodname='';
	}
    searchfood(){
    	window.info={};
    	window.info.foodname=this.foodname;
    	this.reloaddata();
    }
	toggleMenu() {
		this.$document.find('body').toggleClass('menu-close');
	}
	showListCar(){
		let returnobj=this.modelshowshopcar.instance=this.uibModal.open({
			template: '<modelshowshopcar listobj="vm.listobj"></modelshowshopcar>',
			controller: 'modelshowshopcarmodelcontroller',
			controllerAs: 'vm',
			resolve: {
				listobj: () => {
					return 
				}
			}
		})
		returnobj.result.then((data)=>{
			
		})
	}
}
