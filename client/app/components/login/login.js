angular.module('myapp', [])
	.controller('todaymostCtl', todaymostComponent);

function todaymostComponent() {
	this.zhanghao = '';
	this.password = '';
	this.login = function() {
		$.ajax({
			type: "post",
			url: "http://localhost:8080/login",
			async: false,
			data: {
				password: this.password,
				zhanghao: this.zhanghao
			},
			success: function(data) {
				if(data.length === 0) {
					alert('用户名不存在或密码错误，请重新输入！')
				} else {
					alert('登录成功，欢迎您' + data[0].username + '先生');
					window.location.href = 'http://192.168.12.86:3000/#/todaymost';
				}
			}
		});
	};
	this.regist = function() {
		$('#login').animate({
			'marginRight': '-1000px'
		});
		$('#regist').animate({
			'marginLeft': '600px'
		});
	};
	this.checkuser = function() {
		let self = this;
		$.ajax({
			type: "post",
			url: "http://localhost:8080/login",
			async: false,
			data: {
				password: this.password,
				zhanghao: this.zhanghao
			},
			success: function(data) {
				if(data.length === 0) {
                    self.toregist();
				} else {
					alert('用户名或密码已存在，请重新输入！');
					self.password = '';
					self.zhanghao = '';
				}
			}
		});
	}
	this.toregist = function() {
		let self = this;
		$.ajax({
			type: "post",
			url: "http://localhost:8080/regist",
			async: false,
			data: {
				password: this.password,
				zhanghao: this.zhanghao
			},
			success: function(data) {
				if(data.affectedRows === 1) {
					alert('注册成功，请登录！');
					self.password = '';
					self.zhanghao = '';
					$('#login').animate({
						'marginRight': '0px'
					});
					$('#regist').animate({
						'marginLeft': '-1000px'
					});
				} else {
					alert('注册失败')
				}
			}
		});
	}
}