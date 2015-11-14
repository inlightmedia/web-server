	var middleware = {
		requireAuthentication: function (request, response, next) {
			console.log('Private route hit.');
			next();
		},
		logger: function (request, response, next) {
			
			console.log('Request: ' + request.method + ' ' + request.originalUrl + ' Date: ' + new Date().toString());
			next();
		}
	};

module.exports = middleware;