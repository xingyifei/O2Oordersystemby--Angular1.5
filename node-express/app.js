var express = require('express');
var bodyparser = require('body-parser');
var app = express();
var router = express.Router();
var mysql = require('mysql');
var port = process.env.PORT || 8080;
app.use(bodyparser.urlencoded({
	extended: true
}));
//设置本地跨域问题
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});
//连接数据库
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '123456',
	port: '3306',
	database: 'O2Oinfo',
});
connection.connect();
//应用级中间件
app.use(function(req, res, next) {
	console.log('服务器接收到一条请求时间为' + new Date().toLocaleTimeString());
	next();
});
/*----------------------------------以下是食品列表查询接口---------------------------------------*/
//应用级路由
app.route('/getList')
	//查询所有食品接口--每日精选
	.get(function(req, res) {
		let getList = 'SELECT * FROM allfoodlist';
		connection.query(getList, function(err, rows, fields) {
			if(err) throw err;
			res.send(rows)
		});
	});
//应用级路由
app.route('/getList_week')
	//查询所有食品接口--每周精选
	.get(function(req, res) {
		let getList_week = 'SELECT * FROM allfoodlist_week';
		connection.query(getList_week, function(err, rows, fields) {
			if(err) throw err;
		    res.send(rows)
		});
	});
/*----------------------------------以下是修改删除接口---------------------------------------*/
//应用级路由
app.route('/updataList_week')
	//修改食品接口--每周精选
	.post(function(req, res) {
		let id = req.body.id;
		let total = req.body.total;
		let totalcar = req.body.totalcar;
		let userModSql_wk = 'UPDATE allfoodlist_week SET num = ? ,total = ? WHERE id = ?';
		let userModSql_Params_wk = [total, totalcar, id];
		connection.query(userModSql_wk, userModSql_Params_wk, function(err, rows, fields) {
			if(err) throw err;
		    res.send(rows)
		});
	});

//应用级路由
app.route('/updataList')
	//修改食品接口--每日精选
	.post(function(req, res) {
		let id = req.body.id;
		let total = req.body.total;
		let totalcar = req.body.totalcar;
		let userModSql = 'UPDATE allfoodlist SET num = ?,total=? WHERE id = ?';
		let userModSql_Params = [total, totalcar, id];
		connection.query(userModSql, userModSql_Params, function(err, rows, fields) {
			if(err) throw err;
		    res.send(rows)
		});
	});

//应用级路由
app.route('/delete_week')
	//清空数据库中的购物车数量--每周精选
	.post(function(req, res) {
		let userModSql = 'UPDATE allfoodlist SET total=?, num=?';
		let userModSql_Params = [0, 99];
		connection.query(userModSql, userModSql_Params, function(err, rows, fields) {
			if(err) throw err;
     //此处要防止重复调用
		});
		let userModSql_wk = 'UPDATE allfoodlist_week SET total=? ,num=?';
		let userModSql_Params_wk = [0, 99];
		connection.query(userModSql_wk, userModSql_Params_wk, function(err, rows, fields) {
			if(err) throw err;
			res.send(rows)
		});
	});
/*----------------------------------以下是登录注册接口---------------------------------------*/
//应用级路由
app.route('/login')
	//登录接口
	.post(function(req, res) {
		let zhanghao = req.body.zhanghao;
		let password = req.body.password;
		let userModSql = 'SELECT username,password FROM yonghu WHERE username=? AND password=?';
		let userModSql_Params = [zhanghao, password];
		connection.query(userModSql, userModSql_Params, function(err, rows, fields) {
			if(err) throw err;
		    res.send(rows)
		});
	});

//应用级路由
app.route('/regist')
	//注册接口
	.post(function(req, res) {
		let zhanghao = req.body.zhanghao;
		let password = req.body.password;
		let userModSql = 'INSERT INTO yonghu (username,password) VALUES (?,?)';
		let userModSql_Params = [zhanghao, password];
		connection.query(userModSql, userModSql_Params, function(err, rows, fields) {
			if(err) throw err;
		    res.send(rows)
		});
	});


//端口监听
app.listen(port);