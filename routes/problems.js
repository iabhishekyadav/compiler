"use strict";

var problems_model = require('./model/problem');

var problem = {

	// if req.query.id is valid return that problem statement ; else return all statements
	fetchAll: function(req, res, next) {

		var id = req.query.id;
		problems_model.get({
			"id": id
		}, function(err, result) {
			if (err || !res) {
				util.log('Some error has occurred while fetching this id');
				return next(err);
			}
			return res.status(200).end(result);
		});
	},

	create: function(req, res, next) {
		
	}
}