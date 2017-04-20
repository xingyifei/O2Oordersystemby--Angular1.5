'use strict';

export default class commonHeaderController {
	constructor($scope, $document,$uibModal,modelshowshopcar) {
		"ngInject";
		this.$scope = $scope;
		this.$document = $document;
		this.uibModal=$uibModal;
		this.modelshowshopcar=modelshowshopcar;
		this.foodname='';
		this.money=window.userinfo.money;
		this.username='';
		this.getuserinfo();
		this.postMessage();
	}
	postMessage(){
		let self=this;
		window.addEventListener('message',function(event) {
			self.getuserinfo();
		});
	}
	getunlogin(){
		$.ajax({
			type: "post",
			url: "http://localhost:8080/deleteUserinfo",
			async: false,
			success: function(data) {
				alert('退出登录成功!');
				window.location.href='http://127.0.0.1:8020/xingyifei/client/app/components/login/login.html'
			}
		});
	}
	getuserinfo(){
		let self=this;
		$.ajax({
			type: "post",
			url: "http://localhost:8080/getUserinfo",
			async: false,
			success: function(data) {
				window.userinfo.name=self.username=data[0].name;
				window.userinfo.money=self.money=data[0].money;
			}
		});
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
