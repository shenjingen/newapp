var request = require('request');
module.exports = function(app) {
	app.get('/', function (req, res) {
		request('http://xiaodian.alovestory.cn/Api/index/', function (error, response, body) {
			if (!error && response.statusCode == 200) {
				res.render('index', { 
					title: '永定商城',
					data:body
				});
			}
		})
	});
	app.get('/goods', function (req, res) {
		request('http://xiaodian.alovestory.cn/Api/goods/?id='+req.query.id, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				res.render('goods', { 
					title: '产品详情',
					data:body
				});
			}
		})
	});
};