/**
 * (description)
 * 
 * @author yourname
 */

export default class modelshowshopcarController {
	constructor($scope,modelshowshopcar) {
		'ngInject'
		this.name = "我的购物车"
		this.scope = $scope;
		this.modelshowshopcar=modelshowshopcar;
		this.showaddlist=window.showlist;
		this.allprice=window.allprice;
	}
	paymoney(){
		let self=this;
		$.ajax({
    		type:"post",
    		url:"http://localhost:8080/updataMoney",
    		async:false,
    		data:{
    			name:window.userinfo.name,
    			money:window.userinfo.money-window.allprice
    		},
    		success:function(data){
    			alert('支付成功');
    			window.userinfo.money=window.userinfo.money-window.allprice;
    			window.postMessage('',['http://192.168.12.86:3000/#/toweekmost','http://192.168.12.86:3000/#/todaymost','http://192.168.12.86:3000/#/tomonthmost']);
    			self.close();
    		}
    	});
	}
    close(){
    	this.modelshowshopcar.instance.dismiss();
    }
    clearShopcar(){
    	window.showlist.length=0;
    	this.allprice=window.allprice=0;
    	let self=this;
    	$.ajax({
    		type:"post",
    		url:"http://localhost:8080/delete_week",
    		async:false,
    		success:function(data){
    			alert('清空购物车成功!');
    			window.postMessage('',['http://192.168.12.86:3000/#/toweekmost','http://192.168.12.86:3000/#/todaymost','http://192.168.12.86:3000/#/tomonthmost']);
    		}
    	});
    }
    seltcheckbox(one){
    	let temp=one.price*one.total;
    	if(!one.ischecked){
    	window.allprice=window.allprice+temp;
    	this.allprice=window.allprice;
    	one.ischecked=!one.ischecked
    	}else{
    		window.allprice=window.allprice-temp;
    		this.allprice=window.allprice;
    		one.ischecked=!one.ischecked
    	}
    }
}