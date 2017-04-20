/**
 * (description)
 * 
 * @author yourname
 */

export default class TomonthmostController {
	constructor($scope, $q, modelshowdetalcont, $uibModal) {
		'ngInject'
		this.$q = $q;
		this.modelshowdetalcont = modelshowdetalcont;
		this.scope = $scope;
		this.showlist = [];
		this.uibModal = $uibModal;
		this.getList();
		this.postMessage();
	}
	postMessage() {
		let self = this;
		window.addEventListener('message', function(event) {
			self.getList();
		},false);
	}
	getList() {
		let self = this;
		$.ajax({
			type: "get",
			url: "http://localhost:8080/getList_month",
			async: false,
			success: function(data) {
				self.showlist = data;
			}
		});
	}
	addShopcar(one) {
		let temp = false;
		one.total = one.total + 1;
		window.showlist.forEach((obj) => {
			if(obj.id === one.id) {
				obj.total = one.total;
				temp = true;
			}
		})
		if(!temp) {
			window.showlist.push(one)
		}
		alert('添加成功!')
		this.refreshdata(one.id, one.num - 1, one.total);
	}
	refreshdata(id, total, totalcar) {
		let self = this;
		$.ajax({
			type: "post",
			url: "http://localhost:8080/updataList_month",
			data: {
				id: id,
				total: total,
				totalcar: totalcar
			},
			async: false,
			success: function(data) {
				self.getList();
			}
		});
	}
	reloadList() {
		let obj = window.info.foodname;
		let num = 0;
		let self = this;
		if(obj) {
			this.showlist.forEach((one) => {
				if(one.name === obj) {
					this.showlist.length = 0;
					this.showlist.push(one);
					num = num + 1;
					return;
				}
			})
			if(num === 0) {
				alert("没有匹配结果，请重新查询！");
				this.showlist.length = 0;
				self.getList();
			}
		} else {
			this.showlist.length = 0;
			self.getList();
		}
	}
	showopen(one) {
		let self = this;
		let returnobj = this.modelshowdetalcont.instance = this.uibModal.open({
			template: '<model-show-detal listobj="vm.listobj"></model-show-detal>',
			controller: 'modelshowdetalmodelController',
			controllerAs: 'vm',
			resolve: {
				listobj: () => {
					return one
				}
			}
		});
		returnobj.result.then((data) => {
			console.log(data)
		})
	}
}